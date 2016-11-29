import {Injectable} from '@angular/core';

export class PageOption {
    private _selectLabel: string;
    private _route: string;
    private _addCaption: string;

    constructor (private singular: string, private plural?: string) {
        if (!plural) {
            this.plural = this.singular + 's';
        }
        this._selectLabel = this.plural;
        this._route = this.plural;
        this._addCaption = this.singular;
    }

    public get selectLabel(): string {
        return this._selectLabel;
    }

    public get addCaption(): string {
        return this._addCaption;
    }

    public get route(): string {
        return this._route;
    }

    public set selectLabel(label: string) {
        this._selectLabel = label;
    }

    public set addCaption(caption: string) {
        this._addCaption = caption;
    }

    public set route(route: string) {
        this._route = route;
    }
}

const OPTIONS: Array<PageOption> = [
    new PageOption('state'),
    new PageOption('city', 'cities'),
    new PageOption('river'),
    new PageOption('mountain'),
];

@Injectable()
export class OptionService {
    public allOptions(): Array<PageOption> {
        return OPTIONS;
    }

    public findOption(route?: string): PageOption {
        const routeOrDefault = (route || 'states').replace('-new', '');
        return OPTIONS.find(o => {
            return o.route === routeOrDefault;
        });
    }
}
