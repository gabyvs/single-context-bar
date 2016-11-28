import { Routes }    from '@angular/router';

import { StateList }    from './components/state-list/state-list';
import { CityList }     from './components/state-list/cities/city-list';
import { MountainList } from './components/state-list/mountains/mountain-list';
import { RiverList }    from './components/state-list/rivers/rivers-list';

export const appLocalRoutes: Routes = [
    { component: MountainList, path: 'states/:state/mountains' },
    { component: RiverList, path: 'states/:state/rivers' },
    { component: CityList, path: 'states/:state/cities' },
    { path: 'states/:state', redirectTo: '/states/:state/cities' },
    { component: StateList, path: 'states' },
    { path: '', pathMatch: 'full', redirectTo: '/states' }
];
