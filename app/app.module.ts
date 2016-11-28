import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { RouterModule }         from '@angular/router';

import { AppComponent }         from './app.component';
import { appLocalRoutes }       from './app.routing';
import { MainComponent } from './components/main-component';

@NgModule({
    bootstrap:    [ AppComponent ],
    declarations: [
        AppComponent,
        MainComponent
    ],
    imports:      [
        BrowserModule
    ],
    providers: [

    ]
})
export class AppModule {}
