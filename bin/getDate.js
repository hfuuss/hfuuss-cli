var fs      = require('fs');
var path    = require('path');

var animals = fs.readFileSync(path.join(__dirname, '../data/animals.txt')).toString()
               .split('===============++++SEPERATOR++++====================\n');

var jokes  = fs.readFileSync(path.join(__dirname, '../data/jokes.txt')).toString().split('%\n');
var quotes  = fs.readFileSync(path.join(__dirname, '../data/quotes.txt')).toString().split('%\n');
var tang300 = fs.readFileSync(path.join(__dirname, '../data/tang300.txt')).toString().split('%\n');
var song100 = fs.readFileSync(path.join(__dirname, '../data/song100.txt')).toString().split('%\n');


// 返回一个随机的动物ascii
function randomAnimal() {
  return animals[Math.floor(Math.random() * animals.length)];
}

// 根据类型返回名言或段子
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