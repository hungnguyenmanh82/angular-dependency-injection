import { Component } from '@angular/core';
import { Logger } from '../../logger.service';
import { BetterLogger } from '../better-logger.service';

@Component({
  selector: 'provider-4',
  template: `
    <h3>Provider4.component:</h3>
    <p>{{ explaination }}</p>
    <p>{{ log }}</p>
    <p style="color: red">
      provide: interface cho DI
      <br />
      userClass: class implement thực tế
    </p>
  `,
  providers: [{ provide: Logger, useClass: BetterLogger }],
})
export class Provider4Component {
  log: string;
  explaination: string =
    'providers: [{ provide: Logger, useClass: BetterLogger }]';

  constructor(logger: Logger) {
    // logger là interface => thực tế là BetterLogger implementation
    logger.log('log');
    this.log = logger.logs[0];
  }
}
