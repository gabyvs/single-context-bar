import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';
import { Subscription } from 'rxjs';

@Component({
    selector: 'states-main',
    template: `
        <context-bar (addEvent)="showAdd()"></context-bar>
        <state-new *ngIf="adding" (emitterNew)="add($event)"></state-new>
        <state-list></state-list>
    `
})
export class StatesMain implements OnDestroy, OnInit {

    private routingSubscription: Subscription;

    private adding: boolean = false;

    constructor(private router: Router, private route: ActivatedRoute) {}

    public showAdd() {
        this.router.navigate([`/states`, { adding: true }]);
    }

    public add(result) {
        if (!_.isEmpty(result)) {
            console.log('it should add state ', result.name);
        }
        this.router.navigate([`/states`]);
    }

    public ngOnInit () {
        this.routingSubscription = this.route.params.subscribe(params => {
            this.adding = params['adding'];
        });
    }

    public ngOnDestroy() {
        this.routingSubscription.unsubscribe();
    }
}
