import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { AuthProvider } from './../../providers/auth/auth';
import { ComponentsModule } from './../../components/components.module';

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
    ComponentsModule
  ],
  providers: [AuthProvider]
})
export class LoginPageModule {}
