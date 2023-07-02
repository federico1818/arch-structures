import { Injectable } from '@angular/core'
import { Material } from 'src/app/shared/models/material';

@Injectable({
    providedIn: 'root'
})

export class Cirsoc101Service {
    public get materials(): Material[] {
        return [
            {
                name: 'Ladrillo de yeso',
                specificWeight: {
                    value: 12,
                    unit: 'kN/m3'
                }
            },
            {
                name: 'Ladrillos cerámico macizo común',
                specificWeight: {
                    value: 17,
                    unit: 'kN/m3'
                }
            }
        ]
    }
}
