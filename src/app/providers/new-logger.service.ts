import { Logger } from '../logger.service';

export class NewLogger extends Logger {
  public log(message: string) {
    // dùng super chỗ này sẽ gặp lỗi
    this.logs.push(message +'=>by NewLogger.log()');
    console.log('NewLogger');
  }
}
