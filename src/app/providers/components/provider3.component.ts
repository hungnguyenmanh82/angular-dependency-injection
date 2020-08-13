import { Component } from '@angular/core';
import { Logger } from '../../logger.service';

@Component({
  selector: 'provider-3',
  template: `
    <h3>Provider3.component:</h3>
    <p> {{ explaination }} </p>
    <p> {{ log }} </p>
    <p style="color: red">
      provide: interface cho DI
      <br>
      userClass: class implement thực tế
    </p>
  `,
  providers: [{ provide: Logger, useClass: Logger }],
})
export class Provider3Component {
  log: string;
  explaination: string = 'providers:    [{ provide: Logger, useClass: Logger }]';

  constructor(logger: Logger) {
    logger.log('log');
    this.log = logger.logs[0];
  }
}
