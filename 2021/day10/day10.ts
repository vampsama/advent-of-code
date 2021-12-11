import { getInput, getTextFile } from "../util/getInput";
export const partOne = (lines: string[][]): number => {
  const openingChars = "[({<";
  const closingChars = "])}>";
  const erroneousCharacters = lines.map((v) => {
    const p: string[] = [];
    for (let i = 0; i < v.length; i++) {
      if (closingChars.includes(v[i])) {
        const latestOpening = p.pop();
        // console.log(latestOpening, v[i]);
        if (
          (latestOpening === "[" && v[i] !== "]") ||
          (latestOpening === "(" && v[i] !== ")") ||
          (latestOpening === "{" && v[i] !== "}") ||
          (latestOpening === "<" && v[i] !== ">")
        ) {
          // console.log("erroneus closing ", v[i], latestOpening);
          return v[i];
        }
      }
      if (openingChars.includes(v[i])) {
        // console.log(v[i]);
        p.push(v[i]);
      }
    }
    return null;
  });
  //   v
  //     .reduce(
  //       (p, c, i, a) => {
  //         // if (closingChars.includes(p[0])) {
  //         //   console.log(p);
  //         //   return p;
  //         // }
  //         if (closingChars.includes(c)) {
  //           const latestOpening = p.pop();
  //           // console.log(latestOpening, c);
  //           if (
  //             (latestOpening === "[" && c !== "]") ||
  //             (latestOpening === "(" && c !== ")") ||
  //             (latestOpening === "{" && c !== "}") ||
  //             (latestOpening === "<" && c !== ">")
  //           ) {
  //             p = [c];
  //             console.log("erroneus closing ", c, latestOpening, p, a);
  //           }
  //           return p;
  //         }
  //         if (openingChars.includes(c)) {
  //           // console.log(c);
  //           p.push(c);
  //         }
  //         return p;
  //       },
  //       [""]
  //     )
  //     .filter((v) => closingChars.includes(v))
  // );

  return erroneousCharacters
    .filter((v) => v !== null)
    .reduce((p, c) => {
      if (c === ")") return p + 3;
      if (c === "}") return p + 1197;
      if (c === "]") return p + 57;
      if (c === ">") return p + 25137;
      return p;
    }, 0);
};
export const partTwo = (lines: string[][]): number => {
  const openingChars = "[({<";
  const closingChars = "])}>";
  const erroneousCharacters = lines
    .map((v) => {
      const p: string[] = [];
      for (let i = 0; i < v.length; i++) {
        if (closingChars.includes(v[i])) {
          const latestOpening = p.pop();
          // console.log(latestOpening, v[i]);
          if (
            (latestOpening === "[" && v[i] !== "]") ||
            (latestOpening === "(" && v[i] !== ")") ||
            (latestOpening === "{" && v[i] !== "}") ||
            (latestOpening === "<" && v[i] !== ">")
          ) {
            // console.log("erroneus closing ", v[i], latestOpening);
            return null;
          }
        }
        if (openingChars.includes(v[i])) {
          // console.log(v[i]);
          p.push(v[i]);
        }
      }
      return p;
    })
    .filter((v) => v !== null);
  const scores = erroneousCharacters
    .map((v) => {
      if (v === null) return 0;
      let p = 0;
      while (v.length > 0) {
        // console.log("v", v);
        let c = v.pop();
        // console.log("p", p);
        if (c === "(") p = p * 5 + 1;
        if (c === "[") p = p * 5 + 2;
        if (c === "{") p = p * 5 + 3;
        if (c === "<") p = p * 5 + 4;
        // console.log("c", c);
        // console.log("p", p);
        // console.log("v", v);
      }
      return p;
    })
    .sort((a, b) => a - b);

  return scores[Math.floor(scores.length / 2)];
};

export const getData = (filename: string): string[][] =>
  getTextFile(__dirname, filename)
    .split("\n")
    .map((e) => e.split(""));
