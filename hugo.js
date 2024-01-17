// invokes the hugo binary

const path = require('path');
const {execSync, spawn, spawnSync} = require('child_process');

// copy env and add `node_modules/.bin' to PATH:
const env = process.env;

// does not seem necessary as there is no dependency on sass by using the extended version of Hugo:
const binDir = path.resolve(process.cwd(), 'node_modules', '.bin');
env.PATH = binDir + path.delimiter + env.PATH;

// invoke Hugo
const args = process.argv.slice(2);
spawnSync(path.resolve(process.cwd(), 'bin', 'hugo', 'hugo'), args, {
    cwd: process.cwd(),
    env: {
        PATH: process.env.PATH
    },
    stdio: 'inherit',
});
