const { spawn } = require('child_process');
const child = spawn('ls', ['-h']);

child.stdout.on('data', (data) => {
  console.log(`Output: ${data}`);
});
