var workshopper = require('workshopper'),
  path = require('path'),
  credits = require('./credits'),
  menu = require('./exercises/menu'),
  name = 'learnyougit',
  title = 'LEARN YOU GIT',
  subtitle = '\x1b[23mPilih salah satu latihan dan tekan \x1b[3mEnter\x1b[23m untuk memulai';

function fpath(f) {
  return path.join(__dirname, f);
}

workshopper({
  name: name,
  title: title,
  subtitle: subtitle,
  excerciseDir: fpath('./exercises/'),
  appDir: __dirname,
  helpFile: fpath('help.txt'),
  menuItems: [{
    name: 'credits',
    handler: credits
  }]
});