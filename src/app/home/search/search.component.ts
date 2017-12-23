import { Component, OnInit } from '@angular/core';
import {GithubService} from '../../services/github.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers:[GithubService]
})
export class SearchComponent implements OnInit {

  username:string;
  showSearchBox:Boolean;
  constructor(private myService:GithubService) { }

  ngOnInit() {
    this.resetAll();
  }

  resetAll(){
    this.username="";
    this.showSearchBox=true;
  }

  showContents(){
  this.myService.getRepositories(this.username).subscribe(
    data=>{console.log(data)
      this.showSearchBox=false;
    },
    err=>{
      this.showSearchBox=true;
    }
  )
  }

}
