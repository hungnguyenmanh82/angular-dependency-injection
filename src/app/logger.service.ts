import { Injectable } from '@angular/core';

/**
 * có thể chỉ định Service này cho module nào:
 *   providedIn: UserModule,
 *   providedIn: 'root'
 *   providedIn: 'any',
 */
@Injectable({
  providedIn: 'root',
})
export class Logger {
  public logs: string[] = []; // capture logs for testing

  public log(message: string) {
    this.logs.push(message + ' => by Logger.log()');
    console.log(message);
  }
}
