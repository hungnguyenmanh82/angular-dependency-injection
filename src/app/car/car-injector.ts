import { Injector } from '@angular/core';

import { Car, Engine, Tires } from './car';
import { Logger } from '../logger.service';

/**
 * vd về dùng Injector bằng tay
 */
export function useInjector() {
  let injector: Injector;

  /**
   * add các Class muốn khởi tạo Singlton vào Injector
   */
  injector = Injector.create({
    providers: [
      { provide: Car, deps: [Engine, Tires] },
      { provide: Engine, deps: [] },
      { provide: Tires, deps: [] },
    ],
  });

  // lấy singleton object từ Injector ra
  const car = injector.get(Car);
  car.description = 'Injector';

    /**
   * add các Class muốn khởi tạo Singlton vào Injector
   */
  injector = Injector.create({
    providers: [{ provide: Logger, deps: [] }],
  });

  // lấy singleton object từ Injector ra
  const logger = injector.get(Logger);
  logger.log('Injector car.drive() said: ' + car.drive());

  return car;
}
