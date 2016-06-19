var _ = require('lodash');

function Grid(width, height, obstacles) {
  this.width = width;
  this.height = height;
  this.obstacles = obstacles;
}

Grid.prototype.canMoveTo = function(x, y) {
  if (x >= this.width || x < 0) {
    return false
  }
  if (y >= this.height || y < 0) {
    return false
  }

  return !_.some(this.obstacles, function(obstacle) {
    return obstacle.x === x && obstacle.y === y;
  });
}

module.exports = Grid;
