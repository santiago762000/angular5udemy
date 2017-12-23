import { Component, OnInit } from '@angular/core';
import {GithubService} from '../../services/github.service';
import {MatTableDataSource} from '@angular/material';
import {Repository} from '../../interfaces/repository';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers:[GithubService]
})
export class SearchComponent implements OnInit {

  username:string;
  showSearchBox:Boolean;
  repositoryData:Repository[]=[];
  dataSource= new MatTableDataSource(this.repositoryData);
  displayedColumns=['name','pushed_at'];

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
    data=>{
      this.dataSource=new MatTableDataSource<Repository>(data);
      this.showSearchBox=false;
    },
    err=>{
      this.showSearchBox=true;
    }
  )
  }

}
