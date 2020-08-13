
/**
 * khai báo typeScript Object  => là anonymous class.
 * khai báo giống Json
 * SilentLogger phải có cấu trúc giống với Logger
 */
export const SilentLogger = {
  logs: ['log => by SilentLogger object'],  // array

  log: ()=>{// function
    console.log('silentLoggerFn');
  }
};
