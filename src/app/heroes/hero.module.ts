import { NgModule } from '@angular/core';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroesTspComponent } from './heroes-tsp/heroes-tsp.component';
import { BrowserModule } from '@angular/platform-browser';


/**
 * ko khai báo Providers[] ở Module mà khai báo ở component
 */
@NgModule({
  imports:[
    BrowserModule
  ],
  declarations: [
    HeroesComponent,
    HeroesTspComponent,
    HeroListComponent
  ],

  /**
   * chỉ export parent component thôi
   */
  exports: [ HeroesComponent, HeroesTspComponent ]
})
export class HeroModule {
}
