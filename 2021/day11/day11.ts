import { runInNewContext } from "vm";
import { getInput, getTextFile } from "../util/getInput";
export const partOne = (octopiGrid: number[][]): number => {
  const octopi = octopiGrid.map((row, r) =>
    row.map((octopus, c) => new Octopus({ x: r, y: c }, octopiGrid[r][c]))
  );
  octopi.forEach((octopiRow, r) =>
    octopiRow.forEach((octopus) => octopus.setNeighbouringOctopi(octopi))
  );
  for (let step = 0; step < 100; step++) {
    incrementOctopiPowerLevels(octopi);
    triggerEnergyFlash(octopi);
    resetOctopiPowerLevels(octopi);
  }
  // console.log(
  //   octopi
  //     .map((row) => row.map((octopus) => octopus.powerLevel).join(""))
  //     .join("\n")
  // );
  return octopi.reduce(
    (sum, row) => sum + row.reduce((sum, octopus) => sum + octopus.flashes, 0),
    0
  );
};
const triggerEnergyFlash = (octopi: Octopus[][]): void => {
  for (let i = 0; i < octopi.length; i++) {
    for (let j = 0; j < octopi[0].length; j++) {
      octopi[i][j].flash();
    }
  }
  // return octopi;
};
const incrementOctopiPowerLevels = (octopi: Octopus[][]): void => {
  for (let i = 0; i < octopi.length; i++) {
    for (let j = 0; j < octopi[0].length; j++) {
      octopi[i][j].powerUp();
    }
  }
};
const resetOctopiPowerLevels = (octopi: Octopus[][]): void => {
  for (let i = 0; i < octopi.length; i++) {
    for (let j = 0; j < octopi[0].length; j++) {
      octopi[i][j].resetPowerLevel();
    }
  }
};
class Octopus {
  public flashes: number = 0;
  public recentlyFlashed: boolean = false;
  public powerLevel: number = 0;
  neighbouringOctopi: Octopus[] = [];
  constructor(public position: { x: number; y: number }, powerLevel: number) {
    this.setPowerLevel(powerLevel);
  }
  setNeighbouringOctopi(octopi: Octopus[][]): void {
    for (let r = -1; r < 2; r++) {
      for (let c = -1; c < 2; c++) {
        if (
          (r === 0 && c === 0) ||
          this.position.x + r < 0 ||
          this.position.x + r >= octopi.length ||
          this.position.y + c < 0 ||
          this.position.y + c >= octopi.length
        )
          continue;
        this.neighbouringOctopi.push(
          octopi[this.position.x + r][this.position.y + c]
        );
      }
    }
  }
  public receiveFlash() {
    this.powerUp();
    if (this.powerLevel > 9) this.flash();
  }
  public flash(): void {
    if (this.powerLevel > 9 && !this.recentlyFlashed) {
      this.recentlyFlashed = true;

      this.flashes++;
      this.neighbouringOctopi.forEach((octopus) => {
        octopus.receiveFlash();
      });
    }
  }
  public resetPowerLevel(): void {
    if (this.recentlyFlashed) {
      this.setPowerLevel(0);
      this.recentlyFlashed = false;
    }
  }
  powerUp(): void {
    this.powerLevel++;
  }
  setPowerLevel(powerLevel: number): void {
    this.powerLevel = powerLevel;
  }
}
export const partTwo = (lines: string[][]): number => {
  return 0;
};

export const getData = (filename: string) =>
  getTextFile(__dirname, filename)
    .split("\n")
    .map((e) => e.split("").map((e) => Number(e)));
