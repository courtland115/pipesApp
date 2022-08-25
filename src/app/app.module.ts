import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

//modulo personalizado
import { AppRouterModule } from './app-router.module';

import { VentasModule } from './ventas/ventas.module';
import { SharedModule } from './shared/shared.module';

//cambiar el local de la app
import localEsp from '@angular/common/locales/es-EC'
import { registerLocaleData } from '@angular/common';
registerLocaleData(localEsp);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule,
    VentasModule,
    SharedModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-EC' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
