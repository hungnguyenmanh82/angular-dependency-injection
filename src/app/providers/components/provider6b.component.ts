import { Component } from '@angular/core';
import { NewLogger } from '../new-logger.service';
import { OldLogger } from '../old-logger.service';

@Component({
  selector: 'provider-6b',
  template: `
  <h3>Provider6b.component:</h3>
  <p>{{ explaination }}</p>
  <p>{{ log }}</p>
  <p style="color: red">
    provide: interface cho DI
    <br />
    useExisting: class implement thực tế, nhưng lấy instance đã tồn tại rồi (ko tạo mới instance)
    <br />
    sẽ tạo ra 1 instance của NewLogger => vì useExisting  (khác với provider6b.component)
  </p>
`,
  providers:
    [ NewLogger,
      // Alias OldLogger w/ reference to NewLogger
      { provide: OldLogger, useExisting: NewLogger}]
})
export class Provider6bComponent {
  log: string;
  explaination: string =
  'providers: [ NewLogger,{ provide: OldLogger, useExisting: NewLogger}]';

  constructor(newLogger: NewLogger, oldLogger: OldLogger) {
    if (newLogger !== oldLogger) {
      throw new Error('expected the two loggers to be the same instance');
    }
    oldLogger.log('log');
    this.log = newLogger.logs[0];
  }
}
