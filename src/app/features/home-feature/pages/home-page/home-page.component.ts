import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { LeftSideNavbarComponent } from "../../components/left-side-navbar/left-side-navbar.component";
import { MainDashboardComponent } from "../../components/main-dashboard/main-dashboard.component";
import { BottomNavbarComponent } from "../../components/bottom-navbar/bottom-navbar.component";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  imports: [MatIconModule, LeftSideNavbarComponent, MainDashboardComponent, BottomNavbarComponent]
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
