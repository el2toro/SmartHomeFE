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

    collapsed = false;
    

    constructor(public layoutService: LayoutService, 
                private weatherService: WeatherService) {

                    this.getOutdoorTemperature()  
                             
    }

    ngOnInit() {    
    }

    ngOnDestroy() {
    }

    getOutdoorTemperature(){

       this.weatherService.getTemperature().subscribe({
        next: (value) => {this.temperature = value.value},
        error: (error) => {console.log(error)}
       })
       console.log(this.temperature)
    }

    getDate(){
        this.date = new Date()
    }
}
