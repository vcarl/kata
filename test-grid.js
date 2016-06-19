var assert = require('./assert');
var Grid = require('./grid');

var grid = new Grid(5,5,[{x: 1, y: 1}]);

assert(grid.canMove(1,1), false);
assert(grid.canMove(1,2), true);
assert(grid.canMove(5,1), false);
assert(grid.canMove(1,5), false);
