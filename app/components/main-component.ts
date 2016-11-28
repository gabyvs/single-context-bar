import { Component } from '@angular/core';

@Component({
    selector: 'main-component',
    template: `
        <context-bar></context-bar>
        <router-outlet></router-outlet>
    `
})
export class MainComponent { }
