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
  const keys = orderedData.map((row) => {
    const p = new Array(10).fill("");
    const e = row[0];
    p[1] = e[0];
    p[7] = e[1];
    p[8] = e[9];
    p[4] = e[2];
    for (let i = 6; i <= 8; i++) {
      if (
        e[i].includes(p[4][0]) &&
        e[i].includes(p[4][1]) &&
        e[i].includes(p[4][2]) &&
        e[i].includes(p[4][3])
      ) {
        p[9] = e[i];
      } else if (e[i].includes(p[1][0]) && e[i].includes(p[1][1])) {
        p[0] = e[i];
      } else {
        p[6] = e[i];
      }
    }

    for (let i = 3; i <= 5; i++) {
      if (e[i].includes(p[1][0]) && e[i].includes(p[1][1])) {
        p[3] = e[i];
        continue;
      }
    }
    for (let i = 3; i <= 5; i++) {
      if (e[i] === p[3]) continue;
      if (allLettersPresent(p[6], e[i])) {
        p[5] = e[i];
        continue;
      }
      p[2] = e[i];
    }
    return p;
  });
  return orderedData
    .map((d, i) => {
      return Number(
        d[1]
          .map((output) => {
            return keys[i].indexOf(output);
          })
          .join("")
      );
    })
    .reduce((p, c) => p + c, 0);
};
const allLettersPresent = (key: string, input: string): boolean => {
  for (let i = 0; i < input.length; i++) {
    if (!key.includes(input[i])) {
      return false;
    }
  }
  return true;
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
