/*global require, module*/

const fs = require('fs'),
  path = require('path'),
  colorsTmpl = require('colors-tmpl');

function credits() {
  fs.readFile(path.join(__dirname, './credits.js'), 'utf8', function(err, data) {
    if (err) throw err;

    console.log(colorsTmpl(data));
  });
}

module.exports = credits;