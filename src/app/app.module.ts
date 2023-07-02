import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { MaterialModule } from 'src/app/material/material.module'

import { LoadModule } from './load/load.module'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
        LoadModule,
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }
