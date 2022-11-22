import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] },                  
                ]
            },
            {
                label: 'Video surveliance',
                items: [{label: 'Cameras', icon: 'pi pi-fw pi-video',
                items:[
                    {label: 'Outdoor', icon: 'pi pi-fw pi-video'},
                    {label: 'Indoor', icon: 'pi pi-fw pi-video'},
                    {label: 'Parking', icon: 'pi pi-fw pi-video'},
                    {label: 'Garage', icon: 'pi pi-fw pi-video'}
                ]}

                    
                ]
            },
            {
                label: 'Lights',
                items: [
                    {label: 'First floor', icon: 'pi pi-fw pi-sun', 
                    items:[
                     {label: 'Kitchen', },
                     {label: 'Bathroom', },
                     {label: 'Bedroom', },
                     {label: 'Front', }
                    ]},
                    {label: 'Second floor', icon: 'pi pi-fw pi-sun', 
                    items:[
                        {label: 'Kitchen', },
                        {label: 'Bathroom', },
                        {label: 'Bedroom', },
                        {label: 'Steps', },
                    ]},
                    {label: 'Outdoor', icon: 'pi pi-fw pi-sun',
                    items:[
                        {label: 'Front', },
                        {label: 'Back', },
                    ]}
                ]
            }    
        ];
    }
}
