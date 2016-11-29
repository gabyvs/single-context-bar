import { Routes }       from '@angular/router';

import { StatesMain }   from './components/states/states-main';
import { CitiesMain }   from './components/cities/cities-main';
import { RiversMain }   from './components/rivers/rivers-main';
import { MountainsMain } from './components/mountains/mountains-main';

export const appLocalRoutes: Routes = [
    { component: MountainsMain, path: 'states/:state/mountains' },
    { component: RiversMain, path: 'states/:state/rivers' },
    { component: CitiesMain, path: 'states/:state/cities' },
    { component: StatesMain, path: 'states' },
    { path: '', pathMatch: 'full', redirectTo: '/states' }
];
