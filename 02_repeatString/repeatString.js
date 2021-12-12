const repeatString = function(string, num) {
    if (num < 0) return "ERROR"
    let stringStorage = ''
    for (let index = 0; index < num; index++) {
        stringStorage += string
    }
    return stringStorage
};

// Do not edit below this line
module.exports = repeatString;