// Deliberately trivial "build": writes a dist/index.js whose size is controlled by
// SIZE.txt, so a PR can change the bundle size just by editing a number - no real
// bundler needed. This exists only to exercise size-limit-action's use_artifacts
// feature quickly and repeatably; the content itself is meaningless.
const fs = require("fs");

const size = parseInt(fs.readFileSync("SIZE.txt", "utf8").trim(), 10);

fs.mkdirSync("dist", { recursive: true });
fs.writeFileSync(
  "dist/index.js",
  `module.exports = ${JSON.stringify("x".repeat(size))};\n`
);

console.log(`Wrote dist/index.js (${size} bytes of payload).`);
