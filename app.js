#!/usr/bin/nodejs

var configfile = process.env.VOICER_CONFIGFILE || './config';
var fileExists = require('file-exists');
var conf = configfile + '.js';

if (fileExists(conf)) {
  var config = require(configfile);
  var Voicer = require('./index');

  var voicer = new Voicer(config);
  voicer.start();
} else {
  console.log('no configfile:', conf);
}