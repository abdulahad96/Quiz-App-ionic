import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ScorePage } from '../score/score'

/**
 * Generated class for the QuizPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quiz',
  templateUrl: 'quiz.html',
  
})
export class QuizPage {
  timer : Array<any>=[];
  min:number = 2;
  sec:number = 59;
  millisec:number = 100;
  
  obj : Array<any> = [];
hr : boolean = false;
  score : number = 0;
load : number = 0;
marks : number = 0;
choice: string;
// timer : string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  call() {
    this.millisec--;
    if (this.millisec > 0) {
        if (this.millisec === 1) {
            this.millisec = 100;
            this.sec--;
            if (this.sec === 0) {
                this.min--;
                if (this.min < 0) {
                   this.hr = true;
                    // if (this.hr === true) {
                    //     // document.getElementById("timer").style.display = "none";
                    //     // document.getElementById("non").style.display = "none";
                    //     // document.getElementById("finish").style.display = "block";
                    //     // question.innerHTML = "Quiz End";
                    //     // marks = (right / questions.length) * 100;
                    //     if (this.marks > 55) {
                    //         // document.getElementById("fo").innerHTML = "Congratulation you are passed <br> your marks is " + marks.toFixed(2) + "%";
                    //     }
                    //     else {
                    //         // document.getElementById("fo").innerHTML = "Sorry you are Failed <br>your marks is " + marks.toFixed(2) + "%";
                    //     }
                    // }
                }
                else {
                    this.sec = 59;
                }
            }




        }

    }
    else {
        this.millisec = 0;
    }
    // this.timer = [this.pad(this.min) + ":" + this.pad(this.sec)];
    this.timer = [this.min + ":" + this.sec];
    // alert(this.pad(this.min) + ":" + this.pad(this.sec));
}
pad(num) {
  return (num < 10 ? "0" : "") + num;
}
start() {
setInterval(this.call,10)
}
  ionViewDidLoad() {
    this.start();
    this.call();
    console.log('ionViewDidLoad QuizPage');
    this.obj = [this.navParams.data.Quiz.que[this.load]];


console.log(this.choice);

  }
  mcqAnswer(value)
  {  this.choice = value;
     console.log(value);
  }
  next(){
    if(this.choice == this.navParams.data.Quiz.que[this.load].correct){
      this.score = this.score+1;
      console.log(this.score)

    }
    else{

      this.score = this.score;
      console.log(this.score)

    }
    this.load =this.load + 1;
    console.log("length" + this.navParams.data.Quiz.que.length);
    if(this.load >= this.navParams.data.Quiz.que.length)
    {
      console.log("Quiz khatam hogaya");
      this.marks = (this.score/this.navParams.data.Quiz.que.length)*100;
      alert("you have scored "+ this.marks +" %");
    }
    else{
      this.ionViewDidLoad();
    }

    console.log(this.choice);
  }
}
