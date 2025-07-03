//promisify helps in converting a function that uses the traditional Node.js callback-style asynchronous pattern into one that returns a Promise

function greet(value) {
    console.log("Hello I am", value);
    return 45;
}

function promisify(fn) {
    return function (...args) {
        return new Promise((resolve, reject) => {
            try {
                const result = fn(...args);
                resolve(result);
            } catch (err) {
                reject(err);
            }
        });
    };
}

const greetPromise = promisify(greet);

greetPromise("dhevadharshini")
    .then((val) => {
        console.log("Received value", val);
    })
    .catch((err) => {
        console.error("Error:", err);
    });
