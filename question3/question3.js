const {execFile} = require('child_process');

execFile('./command.sh',(err,stdout,stderr)=>{
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