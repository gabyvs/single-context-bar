import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { RouterModule }     from '@angular/router';

import { AppComponent }     from './app.component';
import { appLocalRoutes }   from './app.routing';
import { CitiesMain }       from './components/cities/cities-main';
import { CityList }         from './components/cities/list/city-list';
import { ContextBar }       from './components/common/context-bar/context-bar';
import { OptionService }    from './components/common/context-bar/page-option';
import { MountainList }     from './components/mountains/list/mountain-list';
import { MountainsMain }    from './components/mountains/mountains-main';
import { RiverList }        from './components/rivers/list/rivers-list';
import { RiversMain }       from './components/rivers/rivers-main';
import { StateList }        from './components/states/list/state-list';
import { StateNew }         from './components/states/new/state-new';
import { StatesMain }       from './components/states/states-main';
import { StateService }     from './domain/services/state-service';

@NgModule({
    bootstrap:    [ AppComponent ],
    declarations: [
        AppComponent,
        CitiesMain,
        CityList,
        ContextBar,
        MountainList,
        MountainsMain,
        RiverList,
        RiversMain,
        StateList,
        StatesMain,
        StateNew
    ],
    imports:      [
        BrowserModule,
        RouterModule.forRoot(appLocalRoutes)
    ],
    providers: [
        OptionService,
        StateService
    ]
})
export class AppModule {}
