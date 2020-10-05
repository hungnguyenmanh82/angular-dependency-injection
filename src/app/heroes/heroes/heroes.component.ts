import { Component } from '@angular/core';
import { heroServiceProvider } from '../hero.service.provider';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  // child component sẽ sử dụng service của Component này
  providers: [heroServiceProvider],
})
export class HeroesComponent {}
