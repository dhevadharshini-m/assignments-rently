//Explain difference b/w callback, promise and async await with example code.

//Callback:
//Callbacks are those functions which are passed as arguments to another function and are executed when a particular task is completed.


function sum(value1,value2,callback){
    let result=value1+value2;
    console.log("The sum is ",result);
    callback(result,2*result);
}

function product(value1,value2){
    let result=value1*value2;
    console.log("the product is",result);
}

sum(4,5,product);


//promise
// represent the completion or failure of any asynchronous operation. 
// It allows chaining of multiple asynchronous operations. 
// There are basically 3 states in promises i.e., resolve, pending and reject.

function add(value1,value2){
    return new Promise((res,rej)=>{
        try{
            let result=value1+value2;
            console.log("The sum is ",result);
            res([result,result*2]);
        }
        catch(e){
            rej(e);
        }
    })
    
    
}

function multiply(value1,value2){
    let result=value1*value2;
    console.log("the product is",result);
}

add(3,2).then(([val1,val2])=>{
    multiply(val1,val2);
}).catch((err)=>{
    console.log(err);
})

//async and await
//async is used to declare an asynchronous function, which always returns a promise. 
//await is used within an async function to pause execution until a promise is settled (either resolved or rejected)

function getValues() {
    return new Promise((resolve) => {
        const a = 10, b = 20;
        resolve([a, b]);
    });
}

async function oddeven(value) {
    const [num1,num2]= await getValues();
    if(value%2==0){
        setTimeout(()=>{
            console.log("even")
        },1000)      
    }
    else{
        setTimeout(()=>{
            console.log("even")
        },1000)   
    }
    console.log("Computing whether the value is even or odd");
    await printvalue(num1,num2);
}

function printvalue(num1, num2) {
    return new Promise((resolve) => {
        console.log(`num1 is ${num1} and num2 is ${num2}`);
        resolve();
    });
}

oddeven(20);


//Async/await provides the most readable and maintainable code and followed by promises but callbacks leads to callback hell.
// Error handling is done better in async await followed by promises and callbacks