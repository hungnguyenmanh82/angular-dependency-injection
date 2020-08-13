import { Component } from '@angular/core';
import { NewLogger } from '../new-logger.service';
import { OldLogger } from '../old-logger.service';

@Component({
  selector: 'provider-6a',
  template: `
    <h3>Provider6a.component:</h3>
    <p>{{ explaination }}</p>
    <p>{{ log }}</p>
    <p style="color: red">
      provide: interface cho DI
      <br />
      userClass: class implement thực tế
      <br />
      sẽ tạo ra 2 instance của NewLogger => vì useClass (khác vd Provider6a.component)
      <br>
      Nếu dùng useExisting sẽ là 1 instance
    </p>
  `,
  providers: [
    NewLogger,
    // Not aliased! Creates two instances of `NewLogger`
    { provide: OldLogger, useClass: NewLogger },
  ],
})
export class Provider6aComponent {
  log: string;
  explaination: string =
    'providers: [ NewLogger,{ provide: OldLogger, useClass: NewLogger}]';

  constructor(newLogger: NewLogger, oldLogger: OldLogger) {
    if (newLogger === oldLogger) {
      throw new Error('expected the two loggers to be different instances');
    }
    oldLogger.log('log');
    // The newLogger wasn't called so no logs[]
    // display the logs of the oldLogger.
    this.log = newLogger.logs[0] || oldLogger.logs[0];
  }
}
