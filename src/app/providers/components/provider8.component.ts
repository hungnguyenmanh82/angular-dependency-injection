import { Component } from '@angular/core';
import { heroServiceProvider } from '../../heroes/hero.service.provider';
import { Logger } from '../../logger.service';
import { UserService } from '../../user.service';
import { HeroService } from '../../heroes/hero.service';

@Component({
  selector: 'provider-8',
  template: `
  <h3>Provider8.component:</h3>
  <p>{{ explaination }}</p>
  <p>{{ log }}</p>
  <p style="color: red">
    heroServiceProvider: cung cấp cách khởi tạo HeroService (xem code của heroServiceProvider)
    <br />

  </p>
`,
/**
 * heroServiceProvider: cung cấp cách khởi tạo HeroService
 */
  providers: [heroServiceProvider, Logger, UserService]
})
export class Provider8Component {
  // must be true else this component would have blown up at runtime
  log = 'HeroService injected successfully via heroServiceProvider';
  explaination:string = 'providers: [heroServiceProvider, Logger, UserService]';

  constructor(heroService: HeroService) { }
}

