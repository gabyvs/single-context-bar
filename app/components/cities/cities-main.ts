import { Component } from '@angular/core';

@Component({
    selector: 'cities-main',
    template: `
        <context-bar></context-bar>
        <city-list></city-list>
    `
})
export class CitiesMain {

    constructor(private router: Router, private route: ActivatedRoute) {}
    public showAdd() {
        this.router.navigate([`/states`, this.state, `/cities`, { adding: true }]); // /states;adding=true
    }

    public ngOnInit () {
        this.route.params.url(params => {
            this.state = params['state']
        })
    }
}
