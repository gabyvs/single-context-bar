import { Component }    from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Mountain } from '../../../domain/mountain';
import { StateService } from '../../../domain/services/state-service';
import { State }        from '../../../domain/state';

declare var require: any;
const template: string = require('./mountain-list.html');

@Component({
    selector: 'mountain-list',
    styles: [ `
        .container { padding: 20px 0px; }
        .row { padding: 10px 0px; }
        `],
    template: template
})
export class MountainList {
    public mountains: Array<Mountain>;

    private routingSubscription: Subscription;

    private state: State;

    constructor(private service: StateService, private route: ActivatedRoute) {}

    private subscribeToRoutingChanges() {
        this.route.params.subscribe(params => {
            this.state = this.service.state(params['state']);
            this.mountains = this.service.mountains(this.state);
        });
    }

    public ngOnInit() {
        this.subscribeToRoutingChanges();
    }

    public ngOnDestroy() {
        this.routingSubscription.unsubscribe();
    }
}
