import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Product } from '../../api/product';
import { ProductService } from '../../service/product.service';
import { Subscription } from 'rxjs';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@Component({
    selector: 'main',
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit, OnDestroy {

    constructor(private productService: ProductService, public layoutService: LayoutService) {
    }

    ngOnInit() {    
    }

    ngOnDestroy() {
    }

    getOutdoorTemperature(){

    }
}
