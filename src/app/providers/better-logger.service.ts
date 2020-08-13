import { Logger } from '../logger.service';
import { Injectable } from '@angular/core';

@Injectable()
export class BetterLogger extends Logger {
  public log(message: string) {
    // dùng super chỗ này sẽ gặp lỗi
    this.logs.push(message +'=>by BetterLogger.log()');
    console.log('BetterLogger');
  }
}
