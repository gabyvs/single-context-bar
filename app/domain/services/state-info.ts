import { State } from '../state';
import { River } from '../river';
import { Mountain } from '../mountain';
import { City } from '../city';

export class StateInfo {
    public states: Array<State> = [
        new State('California', 'CA'),
        new State('Colorado', 'CO'),
        new State('Oregon', 'OR')
    ];

    public riversByState = {
        CA: [
            new River('Klamath'),
            new River('Smith'),
            new River('Santa Clara')
        ],
        CO: [
            new River('Arkansas'),
            new River('Canadian'),
            new River('Dolores')
        ],
        OR: [
            new River('Columbia'),
            new River('Klaskanine'),
            new River('Youngs')
        ]
    };

    public mountainsByState = {
        CA: [
            new Mountain('Mount Whitney'),
            new Mountain('Mount Williamson'),
            new Mountain('White Mountain Peak')
        ],
        CO: [
            new Mountain('Mount Elbert'),
            new Mountain('Mount Massive'),
            new Mountain('Mount Harvard')
        ],
        OR: [
            new Mountain('Mount Hood'),
            new Mountain('Mount Jefferson'),
            new Mountain('South Sister')
        ]
    };

    public citiesByState = {
        CA: [
            new City('San Francisco'),
            new City('San Jose'),
            new City('San Diego')
        ],
        CO: [
            new City('Denver'),
            new City('Boulder'),
            new City('Fort Collins')
        ],
        OR: [
            new City('Eugene'),
            new City('Portland'),
            new City('Salem')
        ]
    };
}
