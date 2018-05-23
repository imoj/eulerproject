/**
  * Find the number of paths through a 20x20 grid, starting from the left
  * upper corner, while only going right or down.
  */

class Grid {
  constructor(size) {
    this.size = size;
    this.grid = Array(...Array(size));
    this.grid = this.grid.map(() => Array(...Array(size)));
    this.stack = [];
  }

  countPaths() {
    this.grid[0][0] = 2;

    for (let y = 0; y < this.size; y += 1) {
      for (let x = 0; x < this.size; x += 1) {
        if (this.grid[y][x] != null) {
          continue;
        }
        let up = 1;
        if (y > 0) {
          up = this.grid[y - 1][x];
        }
        let left = 1;
        if (x > 0) {
          left = this.grid[y][x - 1];
        }
        this.grid[y][x] = left + up;
      }
    }
    return this.grid[this.size - 1][this.size - 1];
  }
}


const grid = new Grid(20);

console.log(grid.countPaths());
