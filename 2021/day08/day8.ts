import { getInput, getTextFile } from "../util/getInput";
export const partOne = (data: string[]): number => {
  return data
    .map((e) => e.split("|")[1])
    .map((e) => e.split(" "))
    .flat()
    .filter((e) => [2, 4, 3, 7].includes(e.length)).length;
};
export const partTwo = (data: string[]): number => {
  const orderedData = data
    .map((e) => e.split("|").map((e) => e.split(" ")))
    .map((e) => {
      const input = e[0]
        .filter((e) => e !== "")
        .sort((a, b) => a.length - b.length)
        .map((e) => e.split("").sort().join(""));
      const output = e[1]
        .filter((e) => e !== "")
        .map((e) => e.split("").sort().join(""));
      return [input, output];
    });
  const keys = orderedData.map((e) =>
    e[0].reduce((p, c) => {
      if (c.length === 2) p[1] = c;
      if (c.length === 3) p[7] = c;
      if (c.length === 7) p[8] = c;
      if (c.length === 4) p[4] = c;
      if (c.length === 5) {
        if (c.includes(p[1][0]) && c.includes(p[1][1])) p[3] = c;
        // if (c.includes(p[1][0]) && c.includes(p[1][1])) p[3] = c;
        //if (c.includes(p[1][0]) && c.includes(p[1][1])) p[3] = c;
      }
      if (c.length === 6) {
        if (
          c.includes(p[4][0]) &&
          c.includes(p[4][1]) &&
          c.includes(p[4][2]) &&
          c.includes(p[4][3])
        ) {
          p[9] = c;
        } else if (c.includes(p[1][0]) && c.includes(p[1][1])) p[6] = c;
        else p[0] = c;

        //if (c.includes(p[1][0]) && c.includes(p[1][1])) p[3] = c;
      }

      return p;
    }, new Array(10).fill(0))
  );
  console.log(orderedData);
  console.log(keys);
  return 0;
};
class Key {
  constructor() {}
}
export const getData = (filename: string): string[] =>
  getTextFile(__dirname, filename).split("\n");

// export const partOne = () =>;
// export const partTwo = () =>;
export const all = () => {
  // partOne();
  // partTwo();
};
