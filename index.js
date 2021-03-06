var path = require('path');
var pathfinder = require('sass-pathfinder');

var files = pathfinder(
  require('seed-breakpoints'),
  require('seed-border'),
  require('seed-button'),
  require('seed-card'),
  require('seed-control-group'),
  require('seed-dash'),
  require('seed-family'),
  require('seed-list'),
  require('seed-publish'),
  require('seed-this'),
  path.join(__dirname, 'scss')
);

module.exports = files;
