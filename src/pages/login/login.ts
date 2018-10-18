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
    this.form = this.formBuilder.group({
      semester: ['', Validators.required],
      branch: ['', Validators.required],
      college: ['', Validators.required],
      email: ['', Validators.email],
      password: ['', Validators.required],
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

    const { email, password, semester, branch, college } = this.form.value;

    if (!this.form.valid) {
      return this.common.getToastInstance('Please fill all fields correctly first!').present();
    }

    const loading = this.common.getLoadingInstance('Please wait...');
    loading.present();
    this.auth.register(email, password).then(res => {
      this.auth.setDetailsInDb(res.user.uid, semester, branch, college).then(_ => {
        loading.dismiss();
        this.auth.setToken(res.user.uid);

        // registered and logged in successfully
        this.navCtrl.setRoot('MenuPage');

      })
    }).catch(error => {
      if (error.code == 'auth/email-already-in-use') {
        this.auth.login(email, password).then(res => {
          this.auth.setDetailsInDb(res.user.uid, semester, branch, college).then(_ => {
            loading.dismiss();
            this.auth.setToken(res.user.uid);

            // logged in successfully
            this.navCtrl.setRoot('MenuPage');
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