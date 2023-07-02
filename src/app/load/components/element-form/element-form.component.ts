import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Material } from 'src/app/shared/models/material'
import { Cirsoc101Service } from 'src/app/shared/services/cirsoc101.service'

@Component({
    selector: 'app-element-form',
    templateUrl: './element-form.component.html',
    styleUrls: ['./element-form.component.scss']
})

export class ElementFormComponent implements OnInit{

    public materials!: Material[]

    public form: FormGroup = this._fb.group({
        material: ['', Validators.required],
    })

    constructor(
        private _fb: FormBuilder,
        private _cirsoc101Service: Cirsoc101Service
    ) {}

    public ngOnInit(): void {
        this.materials = this._cirsoc101Service.materials
    }

    public displayWith(material: Material): string {
        if(!material) {
            return ''
        }

        return material.name
    }

    public onSubmit(): void {
        if(this.form.valid) {
            this.send()
        }
    }

    private send(): void {
        console.log(this.form.value)
        this.reset()
    }

    private reset(): void {
        this.form.reset()
    }
}
