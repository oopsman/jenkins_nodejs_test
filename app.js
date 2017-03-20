/**
 * Copyright (c) 2015 Meizu bigertech, All rights reserved.
 * http://www.bigertech.com/
 * @author wuyanxin
 * @date  15/10/14
 * @description
 *
 */

var arguments = process.argv.splice(2);

if (arguments[0] === 'error') {

  throw new Error('run in error mode');

} else {

  console.log('add test000');
  console.log('app start success');
  console.log('haha ');
  console.log('aaaaa');
  console.log('bbbb');

}
