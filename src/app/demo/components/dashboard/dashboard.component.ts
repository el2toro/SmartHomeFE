import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Product } from '../../api/product';
import { ProductService } from '../../service/product.service';
import { Subscription } from 'rxjs';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { WeatherService } from '../../service/weather/weather.service';
import { ThisReceiver } from '@angular/compiler';

@Component({
    selector: 'main',
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit, OnDestroy {
 
    temperature!: string;

    constructor(private productService: ProductService, 
                public layoutService: LayoutService, 
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
}
