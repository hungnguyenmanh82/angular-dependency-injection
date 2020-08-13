import { Component, OnInit } from '@angular/core';
import { Car, Engine, Tires } from '../car/car';
import { heroServiceProvider } from '../heroes/hero.service.provider';
import { Logger } from '../logger.service';
import { HeroService } from '../heroes/hero.service';
import { Hero } from '../heroes/hero';
import { Customer } from './customer';

@Component({
  selector: 'app-injector2',
  templateUrl: './injector2.component.html',
  styleUrls: ['./injector2.component.scss'],
  /**
   * Customer, Engine, Tires là class ko phải là Service => lại là DI của Car nên phải thêm vào.
   * Service, class khởi tạo cùng Component. Ko cần khai báo ở *.module.ts
   */
  providers: [Customer, Car, Engine, Tires, heroServiceProvider, Logger],
})
export class Injector2Component implements OnInit {
  hero: Hero;
  /**
   * Ko dùng Injector
   * dùng Dependency Injection constructor là đủ
   * Phải khai báo là public/private mới đc => nếu ko compile sẽ báo lỗi ở *.html
   */
  constructor(
    public customer: Customer,
    public car: Car,
    public engin: Engine,
    public tires: Tires,
    public heroService: HeroService
  ) {}

  ngOnInit(): void {
    this.hero = this.heroService.getHeroes()[0];
  }
}
