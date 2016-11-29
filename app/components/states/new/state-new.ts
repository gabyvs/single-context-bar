import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'state-new',
    styles: [`
        .container-new {
            z-index: 5;
            position: absolute;
            right: 0;
            height: 100px;
            width: 200px;
            background: white;
            border: 1px solid lightgray;
        }
        host {
            display: block;
            position: relative;
        }
    `],
    template: `
        <div class="container-new">
            <div class="title">New State</div>
            <div class="content">Please style me!</div>
            <button class="btn btn-info" (click)="cancel()">Cancel</button>
            <button class="btn btn-success" (click)="save()">Save</button>
        </div>
    `
})
export class StateNew {

    // TODO: this should emit a typed class!
    @Output() public emitterNew = new EventEmitter<any>();

    public cancel() {
        this.emitterNew.emit({});
    }

    public save() {
        this.emitterNew.emit({ name: 'hardcodedState' });
    }

}
