const { execFile } = require('child_process');

function runScript(callback) {
    execFile('./command.sh', (err, stdout, stderr) => {
        if (err) {
            callback(`Error: ${err.message}`);
            return;
        }
        if (stderr) {
            callback(`stderr: ${stderr}`);
            return;
        }
        callback(null, `Output:\n${stdout}`);
    });
}

module.exports = runScript;
