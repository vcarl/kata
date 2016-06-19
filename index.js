var Grid = require('./grid');
var Rover = require('./rover');

/**
 * gridSize: {x, y}
 * obstacles: [{x, y}]
 * roverStart: {x, y, orientation: ('N','E','S','W')}
 * commands: [('f','b','l','r')]
 */
module.exports = function commandRover(gridSize, obstacles, roverStart, commands) {
  var grid = new Grid(gridSize.x, gridSize.y, obstacles);
  var rover = new Rover(
    roverStart.x,
    roverStart.y,
    roverStart.orientation,
    grid
  );

  rover.takeCommands(commands);
}
