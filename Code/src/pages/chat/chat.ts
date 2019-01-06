import { Component, ViewChild  } from '@angular/core';
import { IonicPage, NavController, NavParams, Content, AlertController} from 'ionic-angular';
import { FormControl, FormBuilder } from '@angular/forms';
import { HeaderColor } from '@ionic-native/header-color';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { asElementData } from "@angular/core/src/view";
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  @ViewChild(Content) content: Content;


  public messageForm: any;

  chatBox: any;
  doneLoading = false;

  messages:any=[
  	{
  	  _id: 1,
      date: new Date(),
      userId: '00000',
      username: 'Bot',
      text: 'This is starting of our chat!!'
  	}
  ];


  constructor(private fireauth: AngularFireAuthModule,private firedata: AngularFireDatabase,private headerColor: HeaderColor,public navCtrl: NavController,public navParams: NavParams,public formBuilder: FormBuilder,public alertCtrl:AlertController)
  {
  	this.headerColor.tint('#2ecc71');
    this.messageForm = formBuilder.group({
      message: new FormControl('')
    });
    this.chatBox = '';
  }

  
  async ionViewWillLoad()
  {
  
  }

  
  scrollToBottom()
  {
    setTimeout(() => {
      this.content.scrollToBottom();
    }, 100);
  }

  async sendMessage(msg)
  {
    const database = this.firedata.database;
    var temp = {email:"h"};
    var temp_email = temp.email;
    var date=new Date();
    var dd=date.toString();
    var d=date.getDate()+"-"+(date.getMonth()+1)+"-"+(date.getFullYear());
    var timestamp = date.getTime();
    var time=date.getHours()+":"+date.getMinutes();
    
    await database.ref("chat/").child("Pratik").child('A').child(timestamp.toString()).set("Hello Pratik");
    this.scrollToBottom();
  }

  async getMessage()
  {
    
    this.scrollToBottom();
  }

}