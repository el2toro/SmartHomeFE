import { Component, OnInit } from '@angular/core';
import { MainDashboardTimeSectionComponent } from "../main-dashboard-time-section/main-dashboard-time-section.component";

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss'],
  imports: [MainDashboardTimeSectionComponent]
})
export class MainDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
