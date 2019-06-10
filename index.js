#!/usr/bin/env node

var replacer = require('./function/replacevalue.js');
var fs = require('fs');
const path = require('path');
var fileinput =  process.argv[2];
var filepath = path.resolve(fileinput);

var file = require(filepath);

var status = replacer.replacevalue(file, process.argv[3], process.argv[4]);

fs.writeFile(filepath, JSON.stringify(file), function (err) {
  if (err) return console.log(err);
  else {
    console.log(status);
  }
});

module.export = replacer;