import { copy, rename } from "fs-extra";

const day = (process.argv[2] || new Date().getDate())
  .toString()
  .padStart(2, "0");

const copyAndRename = async (day: string) => {
  await copy(`${__dirname}/dayX`, `${__dirname}/day${day}`);
  await rename(
    `${__dirname}/day${day}/dayX.test.ts`,
    `${__dirname}/day${day}/day${day}.test.ts`
  );
  await rename(
    `${__dirname}/day${day}/dayX.ts`,
    `${__dirname}/day${day}/day${day}.ts`
  );
};

copyAndRename(day);
