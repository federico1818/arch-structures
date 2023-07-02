import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input'
import { MatAutocompleteModule } from '@angular/material/autocomplete'



@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MatButtonModule,
        MatInputModule,
        MatAutocompleteModule
    ],
    exports: [
        MatButtonModule,
        MatInputModule,
        MatAutocompleteModule
    ]
})

export class MaterialModule { }
