import { Component } from '@angular/core'
import { Element } from './load/element'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {

    public elements: Element[] = []

    public addElement(): void {
        this.elements.push({
            material: {
                name: 'Pikachu',
                specificWeight: {
                    value: 19,
                    unit: 'kN/m'
                }
            },
            thickness: {
                value: 0.18,
                unit: 'm'
            }
        })
    }
}
