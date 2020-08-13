import { Component, Inject } from '@angular/core';

import { APP_CONFIG, AppConfig } from './app.config';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string;

  constructor(
    @Inject(APP_CONFIG) config: AppConfig,
  ) {
    this.title = config.title;
  }

}
