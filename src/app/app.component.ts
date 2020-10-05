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

  /**
   * Chỗ này khó hiểu => cái gì đơn giản thì dùng.
   * Phức tạp ko nên dùng vì chi phí maintain sẽ lớn
   */
  constructor(@Inject(APP_CONFIG) config: AppConfig) {
    this.title = config.title;
  }
}
