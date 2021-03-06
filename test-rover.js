var assert = require('./assert');
var Grid = require('./grid');
var Rover = require('./rover');

var grid = new Grid(5,5,[{x: 0, y: 1}]);

// Test movement with collision is detected.
var rover = new Rover(0,0,'S',grid);
assert(rover._move('f'), true);


// Test movement across edges succeeds.
// X, eastbound
var rover = new Rover(4,0,'E',grid);
rover._move('f');
assert(rover.x, 0);
// X, westbound
var rover = new Rover(0,0,'W',grid);
rover._move('f');
assert(rover.x, 4);
// Y, northbound
var rover = new Rover(0,0,'N',grid);
rover._move('f');
assert(rover.y, 4);
// Y, southbound
var rover = new Rover(0,4,'S',grid);
rover._move('f');
assert(rover.y, 0);

// Test multiple commands.
// Success, no obstacles
var rover = new Rover(0,0,'W',grid);
assert(rover.takeCommands(['f','f','r','b']), false);
assert(rover.x, 3);
assert(rover.y, 4);
var rover = new Rover(0,0,'E',grid);
assert(rover.takeCommands(['f','r','f','r','f']), true);
assert(rover.x, 1);
assert(rover.y, 1);
