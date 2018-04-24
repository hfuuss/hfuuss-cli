var program = require('commander');

program
  .command('ls <dir>')
  .option('-r, --recursive', 'Remove recursively')
  .option('-s, --save', 'save')
  .action(function (dir, cmd) {
    console.log('remove ' + dir + (cmd.recursive ? ' recursively' : ''))
    console.log(cmd.save)
    console.log(cmd)
  })

program.parse(process.argv)