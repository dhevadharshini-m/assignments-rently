//Spawns a shell and runs a command inside that shell, buffering the output.Best fit for small output

const { exec } = require('child_process');
exec('ls', (error, stdout, stderr) => {
  console.log(`Output:\n\n${stdout}`);
});


