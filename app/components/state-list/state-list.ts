import { Component }    from '@angular/core';
import { Router }       from '@angular/router';

import { State }        from '../../domain/state';
import { StateService } from '../../domain/services/state-service';

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

    constructor(private service: StateService, private router: Router) {
        this.states = this.service.states();
    }

    public select(selected: State) {
        this.router.navigate(['/states', selected.abv]);
    }
}
