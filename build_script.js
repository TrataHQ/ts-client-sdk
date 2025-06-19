// Write a js script that will read package.json and print the version

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const packageJsonPath = path.join(__dirname, 'package.json');
const buildVersionPath = path.join(__dirname, 'build_version.txt');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

console.log('Current version:', packageJson.version);

// Increment the version
const versionParts = packageJson.version.split('.');
versionParts[2] = (parseInt(versionParts[2]) + 1).toString();
packageJson.version = versionParts.join('.');

console.log(`Version will be incremented to ${packageJson.version}`);

// Copy the generated ts-client files from core-backend
const sourcePath = process.argv[2];
if (!sourcePath) {
    console.error('Error: Source path argument is required');
    process.exit(1);
}

console.log(`Copying files from ${sourcePath}...`);
exec(`cp -r ${sourcePath}/* .`, (error, stdout, stderr) => {
    if (error) {
        console.error(`Error copying files: ${error.message}`);
        process.exit(1);
    }
    if (stderr) {
        console.error(`Copy stderr: ${stderr}`);
    }
    
    console.log('Files copied successfully');
    
    // Update package.json version
    try {
        fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
        console.log(`Successfully updated package.json version to ${packageJson.version}`);
        
        // Replace RawAxiosRequestConfig with AxiosRequestConfig in a platform-agnostic way
        try {
            let content = fs.readFileSync('api.ts', 'utf8');
            content = content.replace(/RawAxiosRequestConfig/g, 'AxiosRequestConfig');
            fs.writeFileSync('api.ts', content, 'utf8');
            console.log('Successfully replaced RawAxiosRequestConfig with AxiosRequestConfig');
            
            // Then proceed with build and publish
            exec('npm run build && git add . && git commit -m "updating latest schema" && git push && npm publish --access=public', (error, stdout, stderr) => {
                if (error) {
                    console.error(`Error publishing package: ${error.message}`);
                    process.exit(1);
                }
                console.log('Package published successfully');
            });
        } catch (error) {
            console.error(`Error replacing RawAxiosRequestConfig: ${error.message}`);
            process.exit(1);
        }
    } catch (err) {
        console.error(`Error writing package.json: ${err.message}`);
        process.exit(1);
    }
});

