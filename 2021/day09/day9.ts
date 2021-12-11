import { getInput, getTextFile } from "../util/getInput";
export const partOne = (pos: number[][]): number => {
  console.log(pos);
  const points = pos.map((row, ri) => row.map((p, ci) => new Point(p, ri, ci)));
  points.forEach((row, ri) =>
    row.forEach((p, ci) => {
      p.addLowestNeighbours(points);
    })
  );
  return points
    .flat()
    .reduce((p, c) => (c.lowestNeighbour === null ? p + c.height + 1 : p), 0);
};
export const partTwo = (pos: number[][]): number => {
  const points = pos.map((row, ri) => row.map((p, ci) => new Point(p, ri, ci)));
  points.forEach((row, ri) =>
    row.forEach((p, ci) => {
      p.addLowestNeighbours(points);
      // console.log(p);
    })
  );
  points
    .flat()
    .filter((p) => p.lowestNeighbour === null)
    .forEach((p) => {
      new Basin().addToBasin(p, points);
    });
  return points
    .flat()
    .filter((p) => p.lowestNeighbour === null)
    .sort((a, b) =>
      a.basin && b.basin ? b.basin?.points.length - a.basin?.points.length : 1
    )
    .slice(0, 3)
    .reduce((p, c) => (c.basin ? c.basin.points.length * p : 1), 1);
};
class Basin {
  public points: Point[] = [];
  public size = (): number => this.points.length;
  constructor() {}
  public addToBasin(point: Point, grid: Point[][]) {
    this.points.push(point);
    point.setBasin(this);
    if (
      point.x - 1 > -1 &&
      grid[point.y][point.x - 1].height < 9 &&
      grid[point.y][point.x - 1].basin === null
    ) {
      //console.log("left", grid[this.y][this.x - 1]);
      this.addToBasin(grid[point.y][point.x - 1], grid);
    }
    if (
      point.x + 1 < grid[0].length &&
      grid[point.y][point.x + 1].height < 9 &&
      grid[point.y][point.x + 1].basin === null
    ) {
      // console.log("point", grid[this.y][this.x]);
      // console.log("right", grid[this.y][this.x + 1]);
      this.addToBasin(grid[point.y][point.x + 1], grid);
    }
    if (
      point.y - 1 > -1 &&
      grid[point.y - 1][point.x].height < 9 &&
      grid[point.y - 1][point.x].basin === null
    ) {
      // console.log("up", grid[this.y - 1][this.x]);
      this.addToBasin(grid[point.y - 1][point.x], grid);
    }
    if (
      point.y + 1 < grid.length &&
      grid[point.y + 1][point.x].height < 9 &&
      grid[point.y + 1][point.x].basin === null
    ) {
      // console.log("down", grid[this.y + 1][this.x]);
      this.addToBasin(grid[point.y + 1][point.x], grid);
    }
  }
}
class Point {
  public basin: Basin | null = null;
  public setBasin = (basin: Basin) => {
    this.basin = basin;
  };
  public lowestNeighbour: Point | null = null;
  constructor(
    public height: number,
    public y: number,
    public x: number //private grid: number[][]
  ) {}
  addLowestNeighbours(grid: Point[][]) {
    let lowestNeighbour: Point = this;
    //Check left
    if (
      this.x - 1 > -1 &&
      grid[this.y][this.x - 1].height <= lowestNeighbour.height
    ) {
      //console.log("left", grid[this.y][this.x - 1]);
      lowestNeighbour = grid[this.y][this.x - 1];
    }
    if (
      this.x + 1 < grid[0].length &&
      grid[this.y][this.x + 1].height <= lowestNeighbour.height
    ) {
      // console.log("point", grid[this.y][this.x]);
      // console.log("right", grid[this.y][this.x + 1]);
      lowestNeighbour = grid[this.y][this.x + 1];
    }
    if (
      this.y - 1 > -1 &&
      grid[this.y - 1][this.x].height <= lowestNeighbour.height
    ) {
      // console.log("up", grid[this.y - 1][this.x]);
      lowestNeighbour = grid[this.y - 1][this.x];
    }
    if (
      this.y + 1 < grid.length &&
      grid[this.y + 1][this.x].height <= lowestNeighbour.height
    ) {
      // console.log("down", grid[this.y + 1][this.x]);
      lowestNeighbour = grid[this.y + 1][this.x];
    }
    if (this === lowestNeighbour) {
      this.lowestNeighbour = null;
    } else {
      this.lowestNeighbour = lowestNeighbour;
    }
  }
}

export const getData = (filename: string): number[][] =>
  getTextFile(__dirname, filename)
    .split("\n")
    .map((e) => e.split("").map((elem) => Number(elem)));

// export const partOne = () =>;
// export const partTwo = () =>;
export const all = () => {
  // partOne();
  // partTwo();
};
