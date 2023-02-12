import { Component, OnInit, OnDestroy } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { WeatherService } from '../../service/weather/weather.service';

@Component({
    selector: 'main',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
 
    temperature!: string;
    date: Date = new Date();

    weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    day = this.weekday[this.date.getDay()];

    expanded = false;
    week  =  this.weekday.slice(0, 3)

    constructor(public layoutService: LayoutService, 
                private weatherService: WeatherService) {

                    this.getOutdoorTemperature()  
                             
    }

    ngOnInit() { 
        this.weekday = this.weekday.slice(0, 3)   
    }

    ngOnDestroy() {
    }

    getOutdoorTemperature(){

       this.weatherService.getTemperature().subscribe({
        next: (value) => {this.temperature = value.value},
        error: (error) => {console.log(error)}
       })
    }

    getDate(){
        this.date = new Date()
    }  
    

}
