import { readFile, writeFile } from "fs/promises";
import { parse } from "jsonc-parser";
import path from "path";
import glob from "fast-glob";

const inputDir = "src/locales";
const files = await glob(`${inputDir}/*.jsonc`);

await Promise.all(
  files.map(async (file) => {
    const content = await readFile(file, "utf-8");
    const parsed = parse(content);
    const jsonOutPath = file.replace(/\.jsonc$/, ".json");
    await writeFile(jsonOutPath, JSON.stringify(parsed, null, 2), "utf-8");
    console.log(`✅ Converted: ${file} → ${jsonOutPath}`);
  })
);
