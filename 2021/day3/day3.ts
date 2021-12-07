import { getInput, getTextFile } from "../util/getInput";

export const getGamma = (codes: string[]): number => {
  return parseInt(getGammaBits(codes).join(""), 2);
};
export const getGammaBits = (codes: string[]): string[] => {
  return codes
    .reduce((previousValue, currentValue) => {
      return previousValue.map(
        (value, index) => value + Number(currentValue[index])
      );
    }, Array(codes[0].length).fill(0))
    .map((elem) => (elem >= codes.length / 2 ? "1" : "0"));
};
export const getEpsilon = (codes: string[]): number => {
  return parseInt(getEpsilonBits(codes).join(""), 2);
};
export const getEpsilonBits = (codes: string[]): string[] => {
  return codes
    .reduce((previousValue, currentValue) => {
      return previousValue.map(
        (value, index) => value + Number(currentValue[index])
      );
    }, Array(codes[0].length).fill(0))
    .map((elem) => (elem <= codes.length / 2 ? "1" : "0"));
};
export const getOxygenBits = (codes: string[]): string[] => {
  let gamma = getGammaBits(codes);
  for (let i = 0; i < gamma.length; i++) {
    codes = codes.filter((code) => code[i] === gamma[i]);
    if (codes.length > 0) gamma = getGammaBits(codes);
    //console.log(codes, gamma);
  }
  return gamma;
};
export const getCo2Bits = (codes: string[]): string[] => {
  let gamma = getGammaBits(codes);
  for (let i = 0; i < gamma.length; i++) {
    codes = codes.filter((code) => code[i] !== gamma[i]);
    if (codes.length > 0) gamma = getGammaBits(codes);
    //console.log(codes, gamma);
  }
  return gamma;
};
export const getOxygen = (codes: string[]): number => {
  return parseInt(getOxygenBits(codes).join(""), 2);
};
export const getCo2 = (codes: string[]): number => {
  return parseInt(getCo2Bits(codes).join(""), 2);
};
export const getData = (filename: string): string[] =>
  getTextFile(__dirname, filename).split("\n");
// export const partOne = () =>;
// export const partTwo = () =>;
export const all = () => {
  // partOne();
  // partTwo();
};
