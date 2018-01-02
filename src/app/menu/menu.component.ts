import { Component, OnInit,Input } from '@angular/core';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers:[AuthService]
})
export class MenuComponent implements OnInit {

  @Input() drawer:any;

  constructor(private auth:AuthService) { }

  ngOnInit() {
  }

}
