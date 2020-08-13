import { Component, Inject, OnInit } from '@angular/core';
import { APP_CONFIG, HERO_DI_CONFIG } from '../../app.config';
import { AppConfig } from '../../app-config';

@Component({
  selector: 'provider-9',
  template: `
    <h3>Provider9.component:</h3>
    <p>{{ explaination }}</p>
    <p>{{ log }}</p>
    <p style="color: red">
      provide: là 1 interface thay vì class => cách này khá phức tạp
      <br />
      useValue: là 1 typeScript object (hay constant object) => là implement Object (ko phải class)
    </p>
  `,
  /*
   // FAIL! Can't use interface as provider token
   [{ provide: AppConfig, useValue: HERO_DI_CONFIG })]
   */
  providers: [{ provide: APP_CONFIG, useValue: HERO_DI_CONFIG }],
})
export class Provider9Component implements OnInit {
  log: string;
  explaination: string =
    'providers: [{ provide: APP_CONFIG, useValue: HERO_DI_CONFIG }]';

  /*
   // FAIL! Can't inject using the interface as the parameter type
   constructor(private config: AppConfig){ }
   */
  constructor(@Inject(APP_CONFIG) private config: AppConfig) {}

  ngOnInit() {
    this.log = 'APP_CONFIG Application title is ' + this.config.title;
  }
}
