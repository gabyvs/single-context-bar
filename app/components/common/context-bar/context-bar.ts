import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import * as _ from 'lodash';
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
        .add-caption, .select-label { text-transform: capitalize } 
    `],
    template: template
})
export class ContextBar implements OnDestroy, OnInit {

    public state: State;

    public options: Array<PageOption>;

    private selected: PageOption;

    private routeSubscription: Subscription;

    @Output() public addEvent = new EventEmitter<boolean>();

    constructor(private route: ActivatedRoute, private router: Router,
                private stateService: StateService, private optionService: OptionService) {
        this.options = this.optionService.allOptions();
    }

    private setViewState(state: string, segments: Array<UrlSegment>) {
        this.state = this.stateService.state(state);
        this.selected = this.optionService.findOption(_.last(segments).path);
    }

    private initRoutingHandlers() {
        this.setViewState(this.route.snapshot.params['state'], this.route.snapshot.url);
        this.routeSubscription = this.route.params.subscribe((params) => {
            this.setViewState(params['state'], this.route.snapshot.url);
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
