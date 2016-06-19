var assert = require('./assert');
var Grid = require('./grid');

var grid = new Grid(5,5,[{x: 1, y: 1}]);

assert(grid.canMoveTo(1,1), false);
assert(grid.canMoveTo(1,2), true);
assert(grid.canMoveTo(5,1), false);
assert(grid.canMoveTo(1,5), false);
