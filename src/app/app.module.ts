import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { APP_CONFIG, HERO_DI_CONFIG } from './app.config';
import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { HeroesComponent } from './heroes/heroes/heroes.component';


import { Logger } from './logger.service';
import { UserService } from './user.service';


import { InjectorComponent } from './injector/injector.component';
import { Injector2Component } from './injector2/injector2.component';
import { ProvidersModule } from './providers/providers.module';
import { HeroModule } from './heroes/hero.module';
import { HeroesTspComponent } from './heroes/heroes-tsp/heroes-tsp.component';

/*
    HeroesComponent,
    HeroesTspComponent,
    HeroListComponent,
*/
@NgModule({
  imports: [
    BrowserModule,
    HeroModule,
    ProvidersModule

  ],
  declarations: [
    AppComponent,
    CarComponent,
    InjectorComponent,
    Injector2Component
   ],

  providers: [
    Logger,
    UserService,
    { provide: APP_CONFIG, useValue: HERO_DI_CONFIG }
  ],
  exports: [ CarComponent, HeroesComponent, HeroesTspComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
