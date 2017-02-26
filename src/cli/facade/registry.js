'use strict';

var colors = require('colors/safe');
var format = require('stringformat');
var _ = require('underscore');

var strings = require('../../resources/index');
var wrapCliCallback = require('../wrap-cli-callback');

module.exports = function(dependencies){
  
  var registry = dependencies.registry,
      logger = dependencies.logger;

  return function(opts, callback){
    
    callback = wrapCliCallback(callback);
    
    if(!_.contains(['add', 'ls', 'remove'], opts.command)){
      throw new Error(format(strings.messages.cli.NOT_VALID_REGISTRY_COMMAND, opts.command));
    }

    callback(null, 'ok');
  };
};