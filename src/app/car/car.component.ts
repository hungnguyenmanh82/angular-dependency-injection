import { Component } from '@angular/core';
import { Car, Engine, Tires } from './car';
import { CarFactory } from './car-factory';
import { useInjector } from './car-injector';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss'],

  /**
   * tất cả các instant đc khởi tạo ở đây đều là singleton
   * Chỉ cần là class là đc, ko cần injectable()
   */
  providers: [Car, Engine, Tires],
})
export class CarComponent {
  // khởi tạo dùng factory pattern
  factoryCar = new CarFactory().createCar();

  // khởi tạo với Injector manually
  injectorCar = useInjector();

  //đây là singleton nên car1 = car2
  constructor(
    public car1: Car,
    public car2: Car,
    public engine1: Engine,
    public engine2: Engine
  ) {
    // singleton car1 = car2 => đúng
    car1.description = 'car1';
    car2.description = 'car2';

    // engine1 = engine2 => đều là singlton khởi tạo bởi providers[] của component
    engine1.cylinders = 11111;
    engine2.cylinders = 22222;
  }
}
