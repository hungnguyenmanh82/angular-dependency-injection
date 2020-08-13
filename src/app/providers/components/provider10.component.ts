import { Component, OnInit, Optional } from '@angular/core';
import { Logger } from '../../logger.service';

@Component({
  selector: 'provider-10',
  template: `
    <h3>Provider10.component:</h3>
    <p>{{ explaination }}</p>
    <p>{{ log }}</p>
    <p style="color: red">
      vd về service = null => giải pháp là dùng: constructor(@Optional() private
      logger?: Logger)
      <br />
      provide: vai trò như interface
      <br />
      useValue: là 1 typeScript object (hay constant object) => là implement
      Object (ko phải class)
    </p>
    <p style="color:blue">
      // dùng dấu "?" thì khi gặp null sẽ ko báo lỗi
      <br />
      logger?.log('log');
    </p>
  `,
  providers: [{ provide: Logger, useValue: null }],
})
export class Provider10Component implements OnInit {
  log: string;
  explaination: string = 'providers: [{ provide: Logger, useValue: null }]';

  constructor(@Optional() private logger?: Logger) {
    if (this.logger) {
      this.logger.log('log');
    } else {
      this.log = 'logger = null';
    }

    // dùng dấu "?" thì khi gặp null sẽ ko báo lỗi
    logger?.log('log');
  }
  ngOnInit() {}
}
