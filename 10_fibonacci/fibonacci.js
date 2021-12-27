const fibonacci = function (num) {
    if (num < 0) return 'OOPS'
    let first = 0;
    let second = 1;
    let tempStorage;
    const fibonacci = [0, 1];
    for (let index = 0; index < num; index++) {
        tempStorage = first + second;
        fibonacci.push(tempStorage);
        first = second;
        second = tempStorage;
    }
    return fibonacci[num];
};

// Do not edit below this line
module.exports = fibonacci;
