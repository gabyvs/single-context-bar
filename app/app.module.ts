import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { RouterModule }     from '@angular/router';

import { AppComponent }     from './app.component';
import { appLocalRoutes }   from './app.routing';
import { CitiesMain }       from './components/cities/cities-main';
import { CityList }         from './components/cities/list/city-list';
import { ContextBar }       from './components/common/context-bar/context-bar';
import { OptionService }    from './components/common/context-bar/page-option';
import { StateList }        from './components/states/list/state-list';
import { StatesMain }       from './components/states/states-main';
import { StateService }     from './domain/services/state-service';

@NgModule({
    bootstrap:    [ AppComponent ],
    declarations: [
        AppComponent,
        CitiesMain,
        CityList,
        ContextBar,
        StateList,
        StatesMain
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
