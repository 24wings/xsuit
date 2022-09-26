import {
    error,
    success,
    warning,
    errorLog,
    successLog,
    warningLog,
  } from 'https://deno.land/x/colorlog/mod.ts';
  
  console.log(error('Error!'));
  console.log(success('Success!'));
  console.log(warning('Warning!'));
  Deno.test('color',()=>{
    errorLog('Error');
    successLog('Success');
    warningLog('Warning');
  })
