import { Component, OnInit, ViewChild} from '@angular/core';
import {GithubService} from '../../services/github.service';
import {MatTableDataSource, MatPaginator, MatSort} from '@angular/material';
import {Repository} from '../../interfaces/repository';
import {UtcPipe} from '../../pipes/utc.pipe';


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
  displayedColumns=['name','pushed_at','actionsColum'];

  constructor(private myService:GithubService) { }

  @ViewChild(MatPaginator) paginator:MatPaginator;
  @ViewChild(MatSort) sort:MatSort;

  ngAfterViewInit(){
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;
  }
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
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;
      this.showSearchBox=false;
    },
    err=>{
      this.showSearchBox=true;
    }
  )
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    //alert(filterValue);
    
    this.dataSource.filterPredicate =
        (data: Repository, filter: string) => {
          return (data.name.indexOf(filter) != -1 || data.pushed_at.toString().indexOf(filter) != -1)};
          this.dataSource.filter = filterValue;  
  }
}
