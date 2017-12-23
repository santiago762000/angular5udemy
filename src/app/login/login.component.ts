import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;
  constructor(private _router:Router) { }

  ngOnInit() {
  }

  checkUserNamePassword(){
    if(this.username=="chucknorris@myproject.com" && this.password=="idontneedapassword"){
      this._router.navigate(['./home']);
    }else{
      alert("Incorrect credentials");
    }

  }

  checkKey(event){
    if(event.keyCode==13){
      this.checkUserNamePassword();
    }
  }

}
