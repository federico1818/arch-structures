import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { MaterialModule } from '../material/material.module'
import { ElementFormComponent } from './components/element-form/element-form.component'


@NgModule({
    declarations: [
        ElementFormComponent
    ],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        MaterialModule,
    ],
    exports: [
        ElementFormComponent
    ]
})

export class LoadModule { }
