import { Component, OnDestroy, OnInit }    from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { City }         from '../../../domain/city';
import { StateService } from '../../../domain/services/state-service';
import { State }        from '../../../domain/state';

declare var require: any;
const template: string = require('./city-list.html');

@Component({
    selector: 'city-list',
    styles: [ `
        .container { padding: 20px 0px; }
        .row { padding: 10px 0px; }
        `],
    template: template
})
export class CityList implements OnDestroy, OnInit {

    private routingSubscription: Subscription;
    private state: State;

    public cities: Array<City>;

    constructor(private service: StateService, private route: ActivatedRoute) {}

    private subscribeToRoutingChanges() {
        this.route.params.subscribe(params => {
            this.state = this.service.state(params['state']);
            this.cities = this.service.cities(this.state);
        });
    }

    public ngOnInit() {
        this.subscribeToRoutingChanges();
    }

    public ngOnDestroy() {
        this.routingSubscription.unsubscribe();
    }
}
