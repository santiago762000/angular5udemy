import { Component, OnInit, ViewChild } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Repository } from '../../interfaces/repository';
import { UtcPipe } from '../../pipes/utc.pipe';
import { LocalstorageService } from '../../services/localstorage.service';
import {CommonDialogComponent} from '../../dialogs/common-dialog/common-dialog.component';
import {MatDialogRef,MatDialog} from '@angular/material';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [GithubService, LocalstorageService]
})
export class SearchComponent implements OnInit {

  username: string;
  showSearchBox: Boolean;
  repositoryData: Repository[] = [];
  dataSource = new MatTableDataSource(this.repositoryData);
  displayedColumns = ['name', 'pushed_at', 'actionsColum'];

  constructor(private myService: GithubService, private _localstorageService: LocalstorageService,
    private dialog:MatDialog) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  ngOnInit() {
    this.resetAll();
  }

  resetAll() {
    this.username = "";
    this.showSearchBox = true;
  }

  showContents() {
    this.myService.getRepositories(this.username).subscribe(
      data => {
        this.dataSource = new MatTableDataSource<Repository>(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.showSearchBox = false;
      },
      err => {
        this.showSearchBox = true;
      }
    )
  }

  myFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filterPredicate = (data: Repository, filter: string) => {
      return (data.name.indexOf(filter) != -1 || data.pushed_at.toString().indexOf(filter) != -1)
    }
    this.dataSource.filter = filterValue;

  }

  addToFavorites(repo) {
    this._localstorageService.addObjectToFavorites({ name: repo.name, fullName: repo.full_name, url: repo.html_url });
  }

  showDialogData(repo) {
    let dialogRef: MatDialogRef<CommonDialogComponent>;
    dialogRef = this.dialog.open(CommonDialogComponent, {
      height: '400px',
      width: '600px',
    });
    dialogRef.componentInstance.repo = repo;

  }

}
