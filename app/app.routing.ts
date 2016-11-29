import { Routes }       from '@angular/router';

import { StatesMain }   from './components/states/states-main';
import {CitiesMain} from './components/cities/cities-main';

export const appLocalRoutes: Routes = [
    { component: CitiesMain, path: 'states/:state/cities' },
    { component: StatesMain, path: 'states' },
    { path: '', pathMatch: 'full', redirectTo: '/states' }
];
