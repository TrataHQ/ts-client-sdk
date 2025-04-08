// Write a js script that will read package.json and print the version

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const packageJsonPath = path.join(__dirname, 'package.json');
const buildVersionPath = path.join(__dirname, 'build_version.txt');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

console.log(packageJson.version);

// Increment the version
const versionParts = packageJson.version.split('.');
versionParts[2] = (parseInt(versionParts[2]) + 1).toString();
packageJson.version = versionParts.join('.');

console.log(`Version incremented to ${packageJson.version}`);

// Copy the generated ts-client files from core-backend
// Run this command to copy all the files from core-backend/generated/typescript-axios-client/* .
// cp -r ../core-backend/generated/typescript-axios-client/* .

const sourcePath = process.argv[2];

exec(`cp -r ${sourcePath}/* .`);

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

exec('npm run build && git add . && git commit -m "updating latest schema" && git push && npm publish --access=public');
