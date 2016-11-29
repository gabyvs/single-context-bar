import { Component }    from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { River }        from '../../../domain/river';
import { StateService } from '../../../domain/services/state-service';
import { State }        from '../../../domain/state';

declare var require: any;
const template: string = require('./rivers-list.html');

@Component({
    selector: 'river-list',
    styles: [ `
        .container { padding: 20px 0px; }
        .row { padding: 10px 0px; }
        `],
    template: template
})
export class RiverList {
    public rivers: Array<River>;

    private routingSubscription: Subscription;

    private state: State;

    constructor(private service: StateService, private route: ActivatedRoute) {}

    private subscribeToRoutingChanges() {
        this.routingSubscription = this.route.params.subscribe(params => {
            this.state = this.service.state(params['state']);
            this.rivers = this.service.rivers(this.state);
        });
    }

    public ngOnInit() {
        this.subscribeToRoutingChanges();
    }

    public ngOnDestroy() {
        this.routingSubscription.unsubscribe();
    }
}
