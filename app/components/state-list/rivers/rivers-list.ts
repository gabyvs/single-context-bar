import { Component } from '@angular/core';

import { River } from '../../../domain/river';

declare var require: any;
const template: string = require('./river-list.html');

@Component({
    selector: 'river-list',
    styles: [ `
        .container { padding: 20px 0px; }
        .row { padding: 10px 0px; }
        `],
    template: template
})
export class RiverList {
    public rivers: Array<River>;
}
