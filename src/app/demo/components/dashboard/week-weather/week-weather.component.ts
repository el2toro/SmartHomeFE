import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { WeatherService } from 'src/app/demo/service/weather/weather.service';
import { WeekWeatherModel } from 'src/app/models/weather/week-weather.model';

@Component({
  selector: 'app-week-weather',
  templateUrl: './week-weather.component.html',
  styleUrls: ['./week-weather.component.scss']
})
export class WeekWeatherComponent {

  date: Date = new Date();
  weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  day = this.weekday[this.date.getDay()];
  expanded = false;
  weekWeather: WeekWeatherModel[];
  weekdays: WeekWeatherModel[];


  constructor(private weatherService: WeatherService) { 
    this.getWeeklyWeaterReport()
    this.weekdays  =  this.weekWeather
  }

  getWeeklyWeaterReport(){
    this.weatherService.getWeeklyWeatherReport().subscribe(result =>{
       this.weekWeather = result.value
       this.weekdays = this.weekWeather.slice(0, 3)
    })
  }

  onClick(){
    if(!this.expanded){
      this.expanded = true
      this.weekdays = this.weekWeather
    }
    else{
      this.expanded = false
       this.weekdays = this.weekWeather.slice(0, 3)
    }
  }
}
