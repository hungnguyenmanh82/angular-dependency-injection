import { Component } from '@angular/core';
import { Logger } from '../../logger.service';
import { UserService } from '../../user.service';
import { EvenBetterLogger } from '../even-better-logger.service';

@Component({
  selector: 'provider-5',
  template: `
    <h3>Provider5.component:</h3>
    <p>{{ explaination }}</p>
    <p>{{ log }}</p>
    <p style="color: red">
      provide: interface cho DI
      <br>
      userClass: class implement thực tế
      <br>
      EvenBetterLogger có DI ở constructor nữa (khác Provider4.componenent)
    </p>
  `,
  providers: [UserService, { provide: Logger, useClass: EvenBetterLogger }],
})
export class Provider5Component {
  log: string;
  explaination: string =
    'providers: [{ provide: Logger, useClass: EvenBetterLogger }]';
  constructor(logger: Logger) {
    logger.log('log');
    this.log = logger.logs[0];
  }
}
