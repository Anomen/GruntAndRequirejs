/*global module*/ 
module.exports = function(grunt) {
  'use strict';

  var _      = grunt.util._                // we load lodash
    , config = require('./public/js/config') // we load the r.js config

  config.shim = { app: [] };
  for (var i in config.config.app.widgets)
    config.shim.app.push(config.config.app.widgets[i]);

  grunt.initConfig({
    requirejs: {
      app: {
        options: _.merge(config, {
          findNestedDependencies: true,
          baseUrl       : 'public/js',
          name          : 'app',
          out           : 'build.js',
          optimize      : 'none'
        })
      }
    }
  });

  // Load tasks from "grunt-sample" grunt plugin installed via Npm.
  grunt.loadNpmTasks('grunt-contrib-requirejs');

  // Default task.
  grunt.registerTask('default', ["requirejs"]);

};
