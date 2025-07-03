//callback
function sum(value1,value2,callback){
    let result=value1+value2;
    console.log("The sum is ",result);
    callback(result,10);
}

function product(value1,value2){
    let result=value1*value2;
    console.log("the product is",result);
}

sum(4,5,product);


//promise
function add(value1, value2) {
    return new Promise((resolve, reject) => {
        const result = value1 + value2;
        console.log("The sum is", result);
        resolve(result);
    });
}

function multiply(value1, value2) {
    let result = value1 * value2;
    console.log("The product is", result);
}

add(4, 5).then((res) => {
    multiply(res, 10);
});

//async and await

function addvalues(val1,val2){
    return new Promise((resolve,rej)=>{
        let res=val1+val2;
        console.log("The sum of 2 values is ",res);
        resolve(res)
    })
}

function productOfvalues(val1,val2){
    let result=val1*val2;
    console.log("the product of values are ",result);
}

async function main(){
    const res= await addvalues(4,5);
    productOfvalues(res,10);
}

main();

//promisify
const util= require('util')

function sumvalues(val1,val2,callback){
    let res=val1+val2;
    console.log("SUM OF 2 NUMBERS: ",res);
    callback(null,res);
}

function productvalues(value1, value2) {
    const result = value1 * value2;
    console.log("The product is", result);
}

const sumPromise = util.promisify(sumvalues);
sumPromise(4, 5).then((res) => {
    productvalues(res, 10);
}).catch((err) => {
    console.error("Error:", err);
});


