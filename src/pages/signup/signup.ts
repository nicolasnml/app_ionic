import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { LoginPage } from '../login/login';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  responseData : any;
  userData = {"username": "","password": "", "name": "","email": ""};
  constructor(public navCtrl: NavController, public navParams: NavParams, public authServiceProvider: AuthServiceProvider) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
//aqui puse doble comilla en signup y quite un punto y coma linea 30
  signup(){
    this.authServiceProvider.postData(this.userData,'signup').then((result)=>{
      this.responseData = result;
      if(this.responseData.userData){
        console.log(this.responseData);
        localStorage.setItem('userData', JSON.stringify(this.responseData.user));
        this.navCtrl.push(TabsPage);
      }
      else {console.log("Usuario existente");}
    }, (err) =>{

    });
  }
  login(){
    this.navCtrl.push(LoginPage);
  }

}
