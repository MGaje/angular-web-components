import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsComponent } from './components.component';
import { QuickHttpTestComponent } from './quick-http-test/quick-http-test.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
    declarations: [
        ComponentsComponent,
        QuickHttpTestComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        HttpClientModule
    ],
    exports: [
        ComponentsComponent,
        QuickHttpTestComponent
    ]
})
export class ComponentsModule { }
