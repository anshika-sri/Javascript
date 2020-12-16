//THIS

var errObj;

      var msg = err.message != undefined ? err.message : 'unknown';
      var stack = err.stack != undefined ? err.stack : 'unknown';

      dbInternalInfo.exception3 = err.exception;

      if (msg.indexOf('Invalid URI') > -1) {
        stack = 'Invalid URI'; //This will not say 'unknown' as you know the exact error
        errObj = new Errors.DBInvalidURI(404, 'DBInvalidURI', msg, stack, dbInternalInfo);
      } else if (msg.indexOf('ETIMEDOUT') > -1) {
        stack = 'ETIMEDOUT'; //This will not say 'unknown' as you know the exact error
        errObj = new Errors.DBTimeout(408, 'DBTimeout', msg, stack, dbInternalInfo);
      } else {
        errObj = new Errors.DBUnknown(500, 'DBUnknown', msg, stack, dbInternalInfo);
      }
      
      
      
  //THAT
  var errObj;

      var msg = err.message != undefined ? err.message : 'unknown';
      var stack = err.stack != undefined ? err.stack : 'unknown';

      dbInternalInfo.exception3 = err.exception;

      if (msg.indexOf('Invalid URI') > -1) {
        errObj = new Errors.DBInvalidURI(404, 'DBInvalidURI', msg, stack, dbInternalInfo);
      } else if (msg.indexOf('ETIMEDOUT') > -1) {
        errObj = new Errors.DBTimeout(408, 'DBTimeout', msg, stack, dbInternalInfo);
      } else {
        errObj = new Errors.DBUnknown(500, 'DBUnknown', msg, stack, dbInternalInfo);
      }
