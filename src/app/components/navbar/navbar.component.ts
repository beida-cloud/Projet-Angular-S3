import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isAuth: boolean;
    constructor(private authservice: AuthService) {
      
    }

    ngOnInit(){
      firebase.auth().onAuthStateChanged(
        (user) => {
          if(user){
            this.isAuth = true;
          }else{
            this.isAuth = false;
          }
        }
      );
    }

    logout(){
      this.authservice.signOutUser();
    }
    

}
