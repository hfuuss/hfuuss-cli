#!/usr/bin/env node

let cmd = require('commander');
let appInfo = require('../package.json');
let fs = require('fs');
let path = require('path');

let isLs = false;

let animals = fs
  .readFileSync(path.join(__dirname, '../data/animals.txt'))
  .toString()
  .split('===============++++SEPERATOR++++====================');
let jokes = fs
  .readFileSync(path.join(__dirname, '../data/jokes.txt'))
  .toString()
  .split('%');
let quotes = fs
  .readFileSync(path.join(__dirname, '../data/quotes.txt'))
  .toString()
  .split('%');
let tang300 = fs
  .readFileSync(path.join(__dirname, '../data/tang300.txt'))
  .toString()
  .split('%');
let song100 = fs
  .readFileSync(path.join(__dirname, '../data/song100.txt'))
  .toString()
  .split('%');

/**
 * 返回一个随机的动物ascii
 *
 * @returns {*}
 */
function randomAnimal() {
  return animals[Math.floor(Math.random() * animals.length)];
}
/**
 * 根据类型返回名言或段子
 *
 * @param type
 * @returns {string}
 */
function prefix(type) {
  switch (type) {
    case 'quotes':
      return quotes[Math.floor(Math.random() * quotes.length)];
    case 'jokes':
      return jokes[Math.floor(Math.random() * jokes.length)];
    case 'tang':
      return tang300[Math.floor(Math.random() * tang300.length)];
    case 'song':
      return song100[Math.floor(Math.random() * song100.length)];
    default:
      return tang300[Math.floor(Math.random() * tang300.length)];
  }
}

cmd
  .version(appInfo.version)
  .option('-i, --index <n>', 'ascii art index, default is random', -1, parseInt)
  .option('-t, --type <value>', '[quotes|jokes|tang|song]', 'quotes', /^(quotes|jokes|tang|song)$/i)
  .on('--help', function () {
    console.log('\tcreated by jiuyue(https://i.getshell.cn)');
  })

//hfuuss ls
cmd
  .command("ls")
  .action(function (ls) {
    animals.forEach((item, index) => {
      console.log("==".repeat(50));
      console.log("第" + index + "只动物");
      console.log(item);
    });
    isLs = !isLs;
  })

//解析参数
cmd.parse(process.argv)

let animal = cmd.index === -1
  ? randomAnimal()
  : animals[cmd.index];

isLs
  ? console.log("create by jiuyue")
  : console.log(animal,prefix(cmd.type));
