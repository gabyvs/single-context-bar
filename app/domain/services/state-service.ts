import { Injectable } from '@angular/core';

import { StateInfo }    from './state-info';
import { State }        from '../state';
import { River }        from '../river';
import {Mountain} from '../mountain';
import {City} from '../city';

@Injectable()
export class StateService {
    private stateInfo: StateInfo;

    constructor() {
        this.stateInfo = new StateInfo();
    }

    public states(): Array<State> {
        return this.stateInfo.states;
    }

    public rivers(state: State): Array<River> {
        return this.stateInfo.riversByState[state.abv];
    }

    public mountains(state: State): Array<Mountain> {
        return this.stateInfo.mountainsByState[state.abv];
    }

    public cities(state: State): Array<City> {
        return this.stateInfo.citiesByState[state.abv];
    }
}
