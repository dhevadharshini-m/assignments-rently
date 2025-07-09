// process.on('message',(data)=>{
//     console.log('Received from parent:',data);
//     process.send({message : "hello from child"});
// })
const fs = require('fs');
const path = require('path')

process.on('message',({file,search})=>{
    const filePath = path.join(__dirname, file);

    fs.readFile(filePath,'utf8',(err,data)=>{
        if (err) {
      process.send({ result: `Error reading file: ${err.message}` });
      return;
    }

    const isPresent = data.includes(search);
    console.log(data);
    console.log(typeof(search))
    const message = isPresent
      ? `The statement "${search}" is present in ${file}`
      : `The statement "${search}" is NOT present in ${file}`;

    process.send({ result: message });
    }) 
})
