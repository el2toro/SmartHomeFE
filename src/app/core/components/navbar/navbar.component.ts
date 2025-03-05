import { Component, OnInit } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [MatMenuModule]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
