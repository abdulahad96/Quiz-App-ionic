import { Component,ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {DashboardPage} from '../dashboard/dashboard';
import { RegisterPage } from '../register/register'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('username') uname;
  @ViewChild('password') password;
  constructor(public navCtrl: NavController,public alertCtrl: AlertController,public navParams: NavParams) {

  }
  Register(){
    this.navCtrl.push(RegisterPage);
  }
  signIn(){

if(this.uname.value=="Abdul" && this.password.value=="admin"){
  console.log(this.uname.value)
  console.log(this.password.value)
  let alert = this.alertCtrl.create({
    title: 'LOgin Successful',
    subTitle: 'click Ok',
    buttons: ['OK']
  });
  
  alert.present();
this.navCtrl.push(DashboardPage);
}

}
  }


