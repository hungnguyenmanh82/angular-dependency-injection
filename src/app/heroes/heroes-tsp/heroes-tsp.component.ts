import { Component } from '@angular/core';

/**
 * A version of `HeroesComponent` that does not provide the `HeroService` (and thus relies on its
 * `Injectable`-declared provider) in order to function.
 *
 * TSP stands for Tree-Shakeable Provider.
 */
@Component({
  selector: 'app-heroes-tsp',
  templateUrl: './heroes-tsp.component.html',
  styleUrls: ['./heroes-tsp.component.scss']
})
export class HeroesTspComponent { }
