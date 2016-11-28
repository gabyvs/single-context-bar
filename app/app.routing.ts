import { Routes }    from '@angular/router';

import { StateList } from './components/state-list/state-list';
import { CityList } from './components/state-list/cities/city-list';

export const appLocalRoutes: Routes = [
    { component: CityList, path: 'states/:state/cities' },
    { path: 'states/:state', redirectTo: '/states/:state/cities' },
    { component: StateList, path: 'states' },
    { path: '', pathMatch: 'full', redirectTo: '/states' }
];
