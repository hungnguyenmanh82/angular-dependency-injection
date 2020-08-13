import { Injectable } from '@angular/core';
import { Logger } from '../logger.service';
import { UserService } from '../user.service';

@Injectable()
export class EvenBetterLogger extends Logger {
  constructor(private userService: UserService) { super(); }

  log(message: string) {
    const name = this.userService.user.name;
    // dùng super chỗ này sẽ gặp lỗi
    this.logs.push(message + '=>by EvenBetterLogger');
    console.log('EvenBetterLogger');
  }
}
