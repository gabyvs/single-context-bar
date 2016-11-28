import { Component } from '@angular/core';

import { State } from '../../domain/state';
import {StateService} from '../../domain/services/state-service';

declare var require: any;
const template: string = require('./state-list.html');

@Component({
    selector: 'state-list',
    styles: [ `
        .container { padding: 20px 0px; }
        .row { padding: 10px 0px; }
        `],
    template: template
})
export class StateList {

    public states: Array<State>;

    constructor(private service: StateService) {
        this.states = this.service.states();
    }

    public select(selected: State) {
        console.log('selecting', selected.name);
    }
}
