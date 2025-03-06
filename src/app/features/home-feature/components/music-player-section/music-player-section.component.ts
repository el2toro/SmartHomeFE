import { Component, OnInit } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-music-player-section',
  templateUrl: './music-player-section.component.html',
  styleUrls: ['./music-player-section.component.scss'],
  imports: [MatMenuModule]
})
export class MusicPlayerSectionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
