import { Component, Injector, OnInit } from '@angular/core';
import { Car, Engine, Tires } from '../car/car';
import { heroServiceProvider } from '../heroes/hero.service.provider';
import { Logger } from '../logger.service';
import { HeroService } from '../heroes/hero.service';
import { Hero } from '../heroes/hero';

@Component({
  selector: 'app-injectors',
  templateUrl: './injector.component.html',
  styleUrls: ['./injector.component.scss'],
  /**
   * Engine, Tires là class ko phải là Service vẫn dùng DI ok là singleton
   * ko cần phải khai báo ở *.module.test
   * các singleton đc khởi tạo khi Component khởi tạo và sẽ bị destroy cùng Component
   */
  providers: [Car, Engine, Tires, heroServiceProvider, Logger],
})
export class InjectorComponent implements OnInit {
  car: Car;

  heroService: HeroService;
  hero: Hero;

  engin: Engine;
  tires: Tires;

  /**
   * injector: là 1 Service đặc biêt của @angular/core hỗ trợ việc lấy các service đã khởi tạo ở Component với providers[]
   */
  constructor(private injector: Injector) {

  }

  ngOnInit() {
    // các services khai báo injectable()
    this.car = this.injector.get(Car);
    this.heroService = this.injector.get(HeroService);
    this.hero = this.heroService.getHeroes()[0];

    //Engin, Tires là class, ko phải là service
    this.engin = this.injector.get(Engine);
    this.tires = this.injector.get(Tires);
  }

  get rodent() {
    const rousDontExist = `R.O.U.S.'s? I don't think they exist!`;
    return this.injector.get(ROUS, rousDontExist);
  }
}

/**
 * R.O.U.S. - Rodents Of Unusual Size
 * // https://www.youtube.com/watch?v=BOv5ZjAOpC8
 */
class ROUS {}
