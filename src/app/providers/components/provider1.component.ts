import { Component } from '@angular/core';
import { Logger } from '../../logger.service';

@Component({
  selector: 'provider-1',
  template: `
    <h3>Provider1.component:</h3>
    <p>{{ explaination }}</p>
    <p>{{ log }}</p>
    <p style="color: red">
      Class khai báo chính vừa là interface, vừa là implement class luôn
    </p>
  `,
  providers: [Logger],
})
export class Provider1Component {
  log: string;
  explaination: string = 'providers: [Logger]';
  constructor(logger: Logger) {
    logger.log('log');
    this.log = logger.logs[0];
  }
}
