import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuthModule } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AlertController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */



@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
	email:any="";
	username:any="";
	password:any="";
	name:any="";

  constructor(public firedata:AngularFireDatabase, public alertCtrl:AlertController,public navCtrl: NavController, public navParams: NavParams,public afAuth: AngularFireAuthModule) {
  }

  presentAlert() {
  let alert = this.alertCtrl.create({
    title: 'Success',
    subTitle: 'Account Created.',
    buttons: [{
        text: 'Dismiss',
        role: 'cancel',
        handler: () => {
          this.navCtrl.pop();
        }
      }]
  });
  alert.present();
}

  ionViewDidLoad() {
    // console.log('ionViewDidLoad SignupPage');
  }

  async create(){
  	const database=this.firedata.database;
   	await database.ref("chat/").child(this.email).child("name").set(this.name);
   	this.username=this.email+"@emochat.com"
 return new Promise<any>((resolve, reject) => {
   firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
   .then(res => {
     resolve(res);
   }, err => reject(err)).then(()=>{
   	
   	this.presentAlert();
   })
 })
}

}
