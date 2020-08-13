import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Provider1Component } from './components/provider1.component';
import { Provider3Component } from './components/provider3.component';
import { Provider4Component } from './components/provider4.component';
import { Provider5Component } from './components/provider5.component';
import { Provider6aComponent } from './components/provider6a.component';
import { Provider6bComponent } from './components/provider6b.component';
import { Provider7Component } from './components/provider7.component';
import { Provider8Component } from './components/provider8.component';
import { Provider9Component } from './components/provider9.component';
import { Provider10Component } from './components/provider10.component';
import { ProvidersComponent } from './providers.component';


@NgModule({
  imports:[
    BrowserModule
  ],
  declarations: [
    Provider1Component,
    Provider3Component,
    Provider4Component,
    Provider5Component,
    Provider6aComponent,
    Provider6bComponent,
    Provider7Component,
    Provider8Component,
    Provider9Component,
    Provider10Component,
    ProvidersComponent,
  ],

  /**
   * chỉ export parent component thôi
   */
  exports: [ ProvidersComponent ]
 })
 export class ProvidersModule {}
