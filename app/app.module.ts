import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { RouterModule }         from '@angular/router';

import { AppComponent }         from './app.component';
import { appLocalRoutes }       from './app.routing';
import { MainComponent }        from './components/main-component';
import { StateList }            from './components/state-list/state-list';
import { ContextBar }           from './components/context-bar/context-bar';
import { StateService }         from './domain/services/state-service';
import { CityList }             from './components/state-list/cities/city-list';
import { RiverList }            from './components/state-list/rivers/rivers-list';
import { MountainList }         from './components/state-list/mountains/mountain-list';

@NgModule({
    bootstrap:    [ AppComponent ],
    declarations: [
        AppComponent,
        CityList,
        ContextBar,
        MainComponent,
        MountainList,
        RiverList,
        StateList
    ],
    imports:      [
        BrowserModule,
        RouterModule.forRoot(appLocalRoutes)
    ],
    providers: [
        StateService
    ]
})
export class AppModule {}
