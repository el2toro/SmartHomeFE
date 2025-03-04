import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '', 
        loadChildren: () => 
          import('./features/home-feature/home-feature.module').then((m) => m.HomeFeatureModule)
    }
];
