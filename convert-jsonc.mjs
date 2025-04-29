// scripts/convert-jsonc.mjs
import fs from 'fs';
import path from 'path';
import stripJsonComments from 'strip-json-comments';

const localesDir = './src/locales';

for (const file of fs.readdirSync(localesDir)) {
  if (file.endsWith('.jsonc')) {
    const jsoncPath = path.join(localesDir, file);
    const jsonPath = path.join(localesDir, file.replace('.jsonc', '.json'));

    const jsoncContent = fs.readFileSync(jsoncPath, 'utf8');
    const stripped = stripJsonComments(jsoncContent);

    fs.writeFileSync(jsonPath, stripped);
    console.log(`✅ Converted ${file} -> ${path.basename(jsonPath)}`);
  }
}
