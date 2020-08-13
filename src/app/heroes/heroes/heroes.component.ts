import { Component } from '@angular/core';
import { heroServiceProvider } from '../hero.service.provider';


@Component({
  selector: 'app-heroes',
  templateUrl:'./heroes.component.html',
  styleUrls:['./heroes.component.scss'],
  //
  providers: [ heroServiceProvider ]
})
export class HeroesComponent { }
