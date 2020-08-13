import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Logger {
  public logs: string[] = []; // capture logs for testing

  public log(message: string) {
    this.logs.push(message + ' => by Logger.log()');
    console.log(message);
  }
}
