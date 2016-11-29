import { Routes }       from '@angular/router';

import { StatesMain }   from './components/states/states-main';

export const appLocalRoutes: Routes = [
    { component: StatesMain, path: 'states' },
    { path: '', pathMatch: 'full', redirectTo: '/states' }
];
