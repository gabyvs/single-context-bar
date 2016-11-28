import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { State } from '../../domain/state';
import { StateService } from '../../domain/services/state-service';

declare var require: any;
const template: string = require('./context-bar.html');

@Component({
    selector: 'context-bar',
    styles: [`
        .context-bar-left-actions { display: inline-block } 
    `],
    template: template
})
export class ContextBar implements OnDestroy, OnInit {
    public state: State;

    private selected: string;

    public options = [
        { label: 'Cities', name: 'cities' },
        { label: 'Rivers', name: 'rivers' },
        { label: 'Mountains', name: 'mountains' },
    ];

    private navigationSubscription: Subscription;

    constructor(private route: ActivatedRoute, private router: Router, private service: StateService) {}

    private subscribeToRouteEvents() {
        // TODO: there should be a better way
        this.navigationSubscription = this.router.events.filter(e => e['state']).subscribe((events) => {
            const tree = this.router.parseUrl(events.url);
            const primaryRoot = tree.root.children['primary'];
            if (primaryRoot && primaryRoot.segments) {
                switch(primaryRoot.segments.length) {
                    case 2:
                        this.state = this.service.state(primaryRoot.segments[1].path);
                        this.selected = undefined;
                        break;
                    case 3:
                        this.state = this.service.state(primaryRoot.segments[1].path);
                        this.selected = primaryRoot.segments[2].path;
                        break;
                    default:
                        this.state = undefined;
                        this.selected = undefined;
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
