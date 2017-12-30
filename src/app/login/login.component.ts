import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ErrorService} from '../services/error.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[ErrorService]
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;
  constructor(private _router:Router,private _errorService:ErrorService) { }

  ngOnInit() {
  }

  checkUserNamePassword(){
    if(this.username=="chucknorris@myproject.com" && this.password=="idontneedapassword"){
      this._router.navigate(['./home']);
    }else{
      this._errorService.showSnackBar("Login Incorrect","Please check your credetials");
    }

  }

  checkKey(event){
    if(event.keyCode==13){
      this.checkUserNamePassword();
    }
  }

}
