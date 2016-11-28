import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { RouterModule }         from '@angular/router';

import { AppComponent }         from './app.component';
import { appLocalRoutes }       from './app.routing';
import { MainComponent }        from './components/main-component';
import { StateList }            from './components/state-list/state-list';
import { ContextBar }           from './components/context-bar/context-bar';
import { StateService }         from './domain/services/state-service';

@NgModule({
    bootstrap:    [ AppComponent ],
    declarations: [
        AppComponent,
        ContextBar,
        MainComponent,
        StateList
    ],
    imports:      [
        BrowserModule
    ],
    providers: [
        StateService
    ]
})
export class AppModule {}
