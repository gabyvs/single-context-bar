import { Component } from '@angular/core';

import { City } from '../../../domain/city';

declare var require: any;
const template: string = require('./city-list.html');

@Component({
    selector: 'city-list',
    styles: [ `
        .container { padding: 20px 0px; }
        .row { padding: 10px 0px; }
        `],
    template: template
})
export class CityList {
    public cities: Array<City>;
}
