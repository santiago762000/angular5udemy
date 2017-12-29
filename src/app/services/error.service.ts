import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Injectable()
export class ErrorService {

  constructor(private snackBar:MatSnackBar) { }

  showSnackBar(message:string, action:string){
    this.snackBar.open(message,action,{duration:2000});
  }

}
