import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { State } from '../../domain/state';
import { StateService } from '../../domain/services/state-service';

declare var require: any;
const template: string = require('./context-bar.html');

@Component({
    selector: 'context-bar',
    template: template
})
export class ContextBar implements OnDestroy, OnInit {
    public state: State;
    private navigationSubscription: Subscription;

    constructor(private route: ActivatedRoute, private router: Router, private service: StateService) {}

    private subscribeToRouteEvents() {
        this.navigationSubscription = this.router.events.filter(e => e['state']).subscribe((events) => {
            const tree = this.router.parseUrl(events.url);
            const primaryRoot = tree.root.children['primary'];
            if (primaryRoot && primaryRoot.segments) {
                switch(primaryRoot.segments.length) {
                    case 2:
                    case 3:
                        this.state = this.service.state(primaryRoot.segments[1].path);
                        break;
                    default:
                        this.state = undefined;
                }
            }

        });
    }

    public states() {
        this.router.navigate(['/states']);
    }

    public ngOnInit() {
        this.subscribeToRouteEvents();
    }

    public ngOnDestroy() {
        this.navigationSubscription.unsubscribe();
    }

}
