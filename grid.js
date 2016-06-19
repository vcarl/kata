var _ = require('lodash');

function Grid(width, height, obstacles) {
  this.grid = {
    width: width,
    height: height
  };
  this.obstacles = obstacles;
}

Grid.prototype.canMove = function(x, y) {
  if (x >= this.grid.width || x < 0) {
    return false
  }
  if (y >= this.grid.height || y < 0) {
    return false
  }

  return !_.some(this.obstacles, function(obstacle) {
    return obstacle.x === x && obstacle.y === y;
  });
}

module.exports = Grid;
