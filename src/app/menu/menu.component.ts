import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers:[AuthService]
})
export class MenuComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit() {
  }

}
