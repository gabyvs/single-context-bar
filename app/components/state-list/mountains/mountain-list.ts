import { Component } from '@angular/core';

import { Mountain } from '../../../domain/mountain';

declare var require: any;
const template: string = require('./mountain-list.html');

@Component({
    selector: 'mountain-list',
    styles: [ `
        .container { padding: 20px 0px; }
        .row { padding: 10px 0px; }
        `],
    template: template
})
export class MountainLust {
    public mountains: Array<Mountain>;
}
