var program = require('commander');
var appInfo = require('../package.json');

//  option[参数，提示符，默认值]
//
program
//版本
  .version(appInfo.version,'-v, --version')
//默认提示
  .option('-p, --peppers [value]', 'Add peppers')//参数 [value] 值，''提示符
  .option('-P, --pineapple', 'Add pineapple')
  .option('-b, --bbq-sauce', 'Add bbq sauce')
  .option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')

//第二个参数为命令 ①
program
  .command('ls <dir>')
  .option('-r, --recursive', 'Remove recursively')
  .option('-s, --save', 'save')
  .action(function (dir, cmd) {
    console.log('ls ' + dir + (cmd.recursive ? ' recursively' : ''))
    // console.log(cmd.save)
    // console.log(cmd)
  })

//第二个参数为命令 ②
program
  .command('rm <dir> [ttt]')
  .option('-r, --recursive', 'Remove recursively')
  .option('-s, --save', 'save')
  .action(function (dir, ttt,cmd) {
    console.log('remove ' + dir + (cmd.recursive ? ' recursively' : ''))
    // console.log('ttt',ttt);
    console.log(cmd.save)
    // console.log(cmd)
  })


//最后解析
program.parse(process.argv);

// console.log(program);

console.log('you ordered a pizza with:');

if (program.peppers) console.log('  - peppers');
if (program.pineapple) console.log('  - pineapple');
if (program.bbqSauce) console.log('  - bbq');
console.log('  - %s cheese', program.cheese);
