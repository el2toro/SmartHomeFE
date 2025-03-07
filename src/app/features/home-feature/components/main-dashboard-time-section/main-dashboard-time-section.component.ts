import { Component, OnInit } from '@angular/core';
import { ToggleSwitchComponent } from "../../../../core/components/toggle-switch/toggle-switch.component";
import { CommonModule } from '@angular/common';

interface Device{
  name: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-main-dashboard-time-section',
  templateUrl: './main-dashboard-time-section.component.html',
  styleUrls: ['./main-dashboard-time-section.component.scss'],
  imports: [ToggleSwitchComponent, CommonModule]
})

export class MainDashboardTimeSectionComponent implements OnInit {
  devices: Device[] = [
    { name: 'Light', description: 'Bahlom Ltd', icon: 'assets/svg/light-bulb.svg' },
    { name: 'Air Con', description: 'Sharp 320', icon: 'assets/svg/air-cond.svg' },
    { name: 'Wifi', description: 'D-KM 345', icon: 'assets/svg/wifi.svg' }
  ]

  constructor() { }

  ngOnInit() {
  }

  switchOnOff(isOn: boolean) {
    console.log('is swiched on: ', isOn)
  }
}
