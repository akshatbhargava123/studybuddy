import { CommonProvider } from './../../providers/common/common';
import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, UrlSerializer } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  form: FormGroup;

  semesters = [
    { number: "semester 1" },
    { number: "semester 2" },
    { number: "semester 3" },
    { number: "semester 4" },
    { number: "semester 5" },
    { number: "semester 6" },
    { number: "semester 7" },
    { number: "semester 8" }
  ]

  branches = [
    { name: "CSE" },
    { name: "ECE" },
    { name: "IT" },
    { name: "EEE" },
    { name: "MAE" },
    { name: "CIVIL" },
    { name: "CHEMICAL" },
    { name: "ICE" },
    { name: "MECHATRONICS" },
    { name: "BIOCHEMICAL" },
    { name: "TOOLS" },
    { name: "ELECTRICAL" },
  ]

  colleges = [
    { name: "HMRITM" },
    { name: "MAIT" },
    { name: "BVP" },
    { name: "MSIT" },
    { name: "GTBIT" },
    { name: "BMIET" },
    { name: "BPIT" },
    { name: "DTC" },
    { name: "G.B. Pant" },
    { name: "JIMS" },
    { name: "NIEC" },
    { name: "USICT" }
  ]

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private formBuilder: FormBuilder,
    private common: CommonProvider,
    private auth: AuthProvider
  ) { }

  ionViewWillLoad() {

    if (this.auth.getToken() != null) {
      const loading = this.common.getLoadingInstance('Logging you automatically');
      loading.present();
      const subscription = this.auth.getUserDetails().subscribe(user => {
        subscription.unsubscribe();
        loading.dismiss();
        console.log(user)
        this.navCtrl.setRoot('MenuPage', { user });
      });
    }

    this.form = this.formBuilder.group({
      semester: ['', Validators.required],
      branch: ['', Validators.required],
      college: ['', Validators.required],
      email: ['', Validators.email],
      password: ['', Validators.required],
      name: ['', Validators.required]
    });
  }

  sendPasswordResetEmail() {
    if (!this.form.controls.email.valid) return this.common.getToastInstance('Please enter correct email first.').present();
    let loading = this.common.getLoadingInstance('Please wait...');
    loading.present();
    this.auth.sendPasswordResetEmail(this.form.value.email).then(r => {
      loading.dismiss();
      this.common.getToastInstance('Password reset link sent to your email.').present();
    }).catch((error) => {
      loading.dismiss();
      if (error.code == 'auth/user-not-found') {
        this.common.getToastInstance('No User found with this email.').present();
      }
    });
  }

  login() {

    const getDetailsAndNavigate = () => {
      const loading = this.common.getLoadingInstance('Loading Profile...');
      loading.present();
      const subscription = this.auth.getUserDetails().subscribe(user => {
        subscription.unsubscribe();
        loading.dismiss();
        console.log(user)
        this.navCtrl.setRoot('MenuPage', { user });
      });
    }

    const { email, password, semester, branch, college, name } = this.form.value;

    if (!this.form.valid) {
      return this.common.getToastInstance('Please fill all fields correctly first!').present();
    }

    if (this.form.value.password.length < 6) {
      return this.common.getToastInstance('Password must be length greater than 6!').present();
    }

    const loading = this.common.getLoadingInstance('Please wait...');
    loading.present();
    this.auth.register(email, password).then(res => {
      this.auth.login(email, password).then(res => {
        this.auth.setDetailsInDb(res.user.uid, semester, branch, college, name).then(_ => {
          loading.dismiss();
          
          // registered and logged in successfully
          if (!this.auth.isEmailVerified()) {
            const verificationLoading = this.common.getLoadingInstance('Sending verification email...');
            verificationLoading.present();
            this.auth.sendVerificationMail().then(_ => {
              verificationLoading.dismiss();
              this.auth.setToken(res.user.uid);
            }).catch(error => {
              verificationLoading.dismiss();
            })
          } else {
            getDetailsAndNavigate();
          }
        })
      })
    }).catch(error => {
      if (error.code == 'auth/email-already-in-use') {
        this.auth.login(email, password).then(res => {
          this.auth.setToken(res.user.uid);
          this.auth.setDetailsInDb(res.user.uid, semester, branch, college, name).then(_ => {
            loading.dismiss();

            // logged in successfully

            const vToast = this.common.getToastInstance('Verification email sent!');

            if (!this.auth.isEmailVerified()) {
              const verificationLoading = this.common.getLoadingInstance('Sending verification email...');
              verificationLoading.present();
              this.auth.sendVerificationMail().then(_ => {
                verificationLoading.dismiss();
                this.auth.setToken(res.user.uid);
                vToast.present();
              }).catch(error => {
                vToast.setMessage('Problem while sending verification email, try again later!');
                vToast.present();
                verificationLoading.dismiss();
              });
            } else {
              getDetailsAndNavigate();
            }
          });

        }).catch(err => {
          loading.dismiss();
          if (err.code == 'auth/wrong-password') {
            this.common.getToastInstance('Wrong password entered, try forget password to recover your account.').present();
          }
        })
      }
    })
  }

}