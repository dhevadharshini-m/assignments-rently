const {execFile} = require('child_process');

const path = require('path');
const filePath = path.join(__dirname, '../question3/command.sh');

execFile(filePath,(err,stdout,stderr)=>{
    if (err) {
        console.error(`Error: ${err.message}`);
        return;
    }
    if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
    }
    console.log(`Output:\n${stdout}`);
})