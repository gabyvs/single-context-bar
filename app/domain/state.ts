export class State {

    constructor(private _name: string, private _abv: string) {}

    public get name(): string {
        return this._name;
    }

    public get abv(): string {
        return this._abv;
    }

}
