import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  responseData : any;
  userData = {"name": "","password": ""};

  constructor(public navCtrl: NavController, public authServiceProvider: AuthServiceProvider ) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  
  login(){
  
    this.authServiceProvider.postData(this.userData,'login').then((result)=>{
      this.responseData = result;
      if(this.responseData.userData){
        console.log(this.responseData);
        localStorage.setItem('userData', JSON.stringify(this.responseData.user))
        this.navCtrl.push(TabsPage);
      }
      else {console.log("Usuario existente");}
    }, (err) =>{

    });
  }

}
