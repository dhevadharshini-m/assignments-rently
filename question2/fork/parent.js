// parent.js
const { fork } = require('child_process');
const child = fork('child.js');
const path = require('path')

// child.send({ message: 'Hello from parent' });
// child.on('message', (data) => {
//   console.log('Received from child:', data);
// });


const files=['file1.txt','file2.txt'];
const search= "no apple"

files.forEach(file=>{
  const child = fork(path.join(__dirname, 'child.js'));
  
  child.send({file,search});

  child.on('message', (message) => {
    console.log(`Result from ${file}:`, message.result);
  });

  child.on('error', (err) => {
    console.error(`Error from ${file}:`, err);
  });
})