//Firstly, the reading file statements gets executed and the data reading is put into libuv api
//nexttick() is not executed as it executes only if any phase of eventloop completes its execution
//after sync operations performed, the promise is given hugh priority so it gets executed and  line 37 executes
//since one phase gts completed, the next micro task, nextTick() gets executed
//then data is read and reading file is completed
//setImmediate got executed as it is the check phase
//after 5 sec, the setTimeout executes

console.log("Reading file")

const fs= require('fs')
fs.readFile("data.txt",'utf-8',(err,data)=>{
    if(err){
        console.log("Error in reading file : ",err);
    }
    else{
        console.log(data);
    }
    console.log("reading file is completed");
})

process.nextTick((val1,val2)=>{
    console.log(`first value is ${val1} and second value is ${val2}`);
},32,64)

setImmediate(()=>{
    console.log("I am the setImmediate");
})

let value=90
let p= new Promise((res,rej)=>{
    setTimeout(()=>{
        console.log("value is ",value);
    },5000)
    if(value%2==0){
        console.log("Entered number is even");
    }
    else{
        console.log("Entered number is odd");
    }
    console.log("Number is checked");
})

//OUTPUT
// Reading file 
// Entered number is even
// Number is checked
// first value is 32 and second value is 64
// I am the setImmediate
// I am an intern at Rently
// reading file is completed
// value is  90