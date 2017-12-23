import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Injectable()
export class GithubService {

  constructor(private http:HttpClient) { }

  getRepositories(username:string){
    return this.http.get('https://api.github.com/users/'+username+'/repos').catch(this.showError);
  }

  private showError(error:Response){
    return error.json();
  }

}
