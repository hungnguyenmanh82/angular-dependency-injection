/* tslint:disable:one-line */
import { Component, OnInit } from '@angular/core';

import { HeroService } from '../hero.service';
import { Hero } from '../hero';


@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss'],
})
export class HeroListComponent implements OnInit{
  heroes: Hero[];

  constructor(public heroService: HeroService) {

  }

  ngOnInit(){
    this.heroes = this.heroService.getHeroes();
    console.log(this.heroes);
  }

}
