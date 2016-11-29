import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { PageOption, OptionService }   from './page-option';
import { StateService } from '../../../domain/services/state-service';
import { State }        from '../../../domain/state';

declare var require: any;
const template: string = require('./context-bar.html');

@Component({
    selector: 'context-bar',
    styles: [`
        .context-bar-left-actions { display: inline-block } 
        .add-caption { text-transform: capitalize } 
    `],
    template: template
})
export class ContextBar implements OnDestroy, OnInit {

    public state: State;

    private selected: PageOption;

    private routeSubscription: Subscription;

    @Output() public addEvent = new EventEmitter<boolean>();

    constructor(private route: ActivatedRoute, private router: Router,
                private stateService: StateService, private optionService: OptionService) {}

    private setViewState(state: string) {
        this.state = this.stateService.state(state);
        // TODO: fix this
        this.selected = this.optionService.findOption();
    }

    private initRoutingHandlers() {

        this.setViewState(this.route.snapshot.params['state']);
        // TODO: implement this
        this.routeSubscription = this.route.params.subscribe((params) => {
            this.setViewState(params['state']);
        });
    }

    public states() {
        this.router.navigate(['/states']);
    }

    public page(option) {
        this.router.navigate([`/states/${this.state.abv}/${option}`]);
    }

    public add() {
        this.addEvent.emit(true);
    }

    public ngOnInit() {
        this.initRoutingHandlers();
    }

    public ngOnDestroy() {
        this.routeSubscription.unsubscribe();
    }

}
