import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { QuickHttpTestComponent, ComponentsModule } from 'projects/components/src/public-api';

@NgModule({
    imports: [
        BrowserModule,
        ComponentsModule
    ],
    providers: [],
})
export class AppModule implements DoBootstrap {
    constructor(private readonly injector: Injector) {}

    ngDoBootstrap(appRef: ApplicationRef): void {
        const quickHttpTestComp = createCustomElement(QuickHttpTestComponent, { injector: this.injector });
        customElements.define('dlc-form-quick-http-test', quickHttpTestComp);
    }
}
