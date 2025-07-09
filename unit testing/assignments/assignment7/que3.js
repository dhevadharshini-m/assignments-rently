const util = require('util');

// callback
function sum(value1, value2, callback) {
    const result = value1 + value2;
    console.log("The sum is", result);
    callback(result, 10);
}

function product(value1, value2) {
    const result = value1 * value2;
    console.log("The product is", result);
    return result;
}

// promise
function add(value1, value2) {
    return new Promise((resolve) => {
        const result = value1 + value2;
        console.log("The sum is", result);
        resolve(result);
    });
}

function multiply(value1, value2) {
    const result = value1 * value2;
    console.log("The product is", result);
    return result;
}

// async/await
function addvalues(val1, val2) {
    return new Promise((resolve) => {
        const res = val1 + val2;
        console.log("The sum of 2 values is", res);
        resolve(res);
    });
}

function productOfvalues(val1, val2) {
    const result = val1 * val2;
    console.log("The product of values are", result);
    return result;
}

async function main() {
    const res = await addvalues(4, 5);
    return productOfvalues(res, 10);
}

// promisify
function sumvalues(val1, val2, callback) {
    const res = val1 + val2;
    console.log("SUM OF 2 NUMBERS:", res);
    callback(null, res);
}

const sumPromise = util.promisify(sumvalues);

module.exports = {
    sum,
    product,
    add,
    multiply,
    addvalues,
    productOfvalues,
    main,
    sumPromise
};
