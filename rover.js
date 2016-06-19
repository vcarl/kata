var _ = require('lodash');

var Rover = function(x, y, orientation, grid) {
  this.x = x;
  this.y = y;
  this.orientation = orientation;
  this.grid = grid;
}

Rover.prototype.takeCommands = function(commands) {
  var hasHitObstacle = _.reduce(commands, this._takeCommand.bind(this), false);
  if (hasHitObstacle) console.log('HIT OBSTACLE');
  console.log('final position:', this.x, this.y);
  return hasHitObstacle;
}

Rover.prototype._takeCommand = function(hasHitObstacle, command) {
  return hasHitObstacle || this._move(command);
}

Rover.prototype._move = function(direction) {
  switch (direction) {
  case 'f':
  case 'b':
    var newX = getX(this.orientation, this.x, this.grid.width);
    var newY = getY(this.orientation, this.y, this.grid.height);

    // console.log(newX, newY);

    // If we can't move, return true indicating we've hit an obstacle.
    if (!this.grid.canMoveTo(newX, newY)) return true;

    this.x = newX;
    this.y = newY;
  break;
  case 'l':
  case 'r':
    this.orientation = getDirectionAfterTurn(this.orientation, direction);
  break;
  }

  return false;
}

function getX(orientation, currentX, gridWidth) {
  var newX;
  switch(orientation) {
  case 'E':
    newX = currentX + 1;
    break;
  case 'W':
    newX = currentX - 1;
    break;
  default:
    newX = currentX;
  }
  if (newX < 0) newX = gridWidth - 1;
  else if (newX >= gridWidth) newX = 0;

  return newX;
}

function getY(orientation, currentY, gridHeight) {
  var newY;
  switch(orientation) {
  case 'S':
    newY = currentY + 1;
    break;
  case 'N':
    newY = currentY - 1;
    break;
  default:
    newY = currentY;
  }
  if (newY < 0) newY = gridHeight - 1;
  else if (newY >= gridHeight) newY = 0;

  return newY;
}

function getDirectionAfterTurn(orientation, direction) {
  switch (orientation) {
  case 'N':
    if (direction === 'l') return 'W';
    if (direction === 'r') return 'E';
  case 'E':
    if (direction === 'l') return 'N';
    if (direction === 'r') return 'S';
  case 'S':
    if (direction === 'l') return 'E';
    if (direction === 'r') return 'W';
  case 'W':
    if (direction === 'l') return 'S';
    if (direction === 'r') return 'N';
  }
}

module.exports = Rover;
