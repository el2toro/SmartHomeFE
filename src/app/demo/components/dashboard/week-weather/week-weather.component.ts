import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-week-weather',
  templateUrl: './week-weather.component.html',
  styleUrls: ['./week-weather.component.scss']
})
export class WeekWeatherComponent implements OnInit {

  date: Date = new Date();

  weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  day = this.weekday[this.date.getDay()];

  expanded = false;
  week  =  this.weekday.slice(0, 3)

  @ViewChild('outlet', { read: ViewContainerRef }) outletRef: ViewContainerRef
  //@ViewChild('content', { read: TemplateRef }) contentRef: TemplateRef<any>;
  constructor() { }

  ngOnInit(): void {
  }

  

  rerender() {
    this.outletRef.clear();
    //this.outletRef.createEmbeddedView(this.contentRef);
  }

  onClick(){
    if(!this.expanded){

      this.expanded = true
      this.week = this.weekday
      this.rerender()
      console.log(this.outletRef)
    }
    else{
      this.expanded = false
      this.week  =  this.weekday.slice(0, 3)
      this.rerender()
    }
  }
}
