const { add } = require('./app');

if (add(2, 3) !== 5) {
    throw new Error("Test failed");
}

console.log("Test passed");
