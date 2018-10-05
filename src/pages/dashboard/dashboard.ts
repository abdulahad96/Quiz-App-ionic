import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
import { RegisterPage } from '../register/register'


@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

Quizzes: Array<any> = [{name:'React',question:'3',time:4 ,key:'qw12',que:[{quest:'React is a ______ of Javascripts.',choice1:'library',choice2:'framework',choice3:'nothing',correct:'library'},{quest:'React is a ______ App.',choice1:'MPA',choice2:'SPA',choice3:'nothing',correct:'SPA'},{quest:'in react state define in',choice1:'render',choice2:'constructor',choice3:'body',correct:'constructor'}]},
{name:'js',question:'3',time:4,key:'qw12',que:[{quest:'React is a ______ of Javascripts.',choice1:'library',choice2:'framework',choice3:'nothing',correct:'library'},{quest:'React is a ______ App.',choice1:'MPA',choice2:'SPA',choice3:'nothing',correct:'SPA'},{quest:'in react state define in',choice1:'render',choice2:'constructor',choice3:'body',correct:'constructor'}]},
{name:'React-native',question:'3',time:4, key:'qw12',que:[{quest:'ReactNative is a ______ of Javascripts.',choice1:'library',choice2:'framework',choice3:'nothing',correct:'library'},{quest:'React is a ______ App.',choice1:'MPA',choice2:'SPA',choice3:'nothing',correct:'SPA'},{quest:'in react state define in',choice1:'render',choice2:'constructor',choice3:'body',correct:'constructor'}]}]
  
constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
    this.Quizzes.map((v,i)=>{
      console.log(v.name);
      console.log(v.que)
    })

  }
  step2(q){
    console.log(q);
    console.log(q.time,q.question);
    this.navCtrl.push(DetailPage,{quiz:q});

  }

}
