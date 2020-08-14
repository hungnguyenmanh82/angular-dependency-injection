import { Component } from '@angular/core';
import { Logger } from '../../logger.service';
import { SilentLogger } from '../silence-logger.service';

@Component({
  selector: 'provider-7',
  template: `
    <h3>Provider7.component:</h3>
    <p>{{ explaination }}</p>
    <p>{{ log }}</p>
    <p style="color: red">
      provide: interface cho DI
      <br />
      useValue: là 1 typeScript object (hay constant object) => là implement
      Object (ko phải class)
    </p>
  `,
  /**
   * useValue: là 1 typeScript object (hay constant object) => là implement Object (ko phải class)
   */
  providers: [{ provide: Logger, useValue: SilentLogger }],
})
export class Provider7Component {
  log: string;
  explaination: string =
    ' providers: [{ provide: Logger, useValue: SilentLogger }]';

  constructor(logger: Logger) {
    logger.log('log');
    this.log = logger.logs[0];
  }
}
