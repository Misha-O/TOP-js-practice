const palindromes = function (string) {
    var original = string.replace(/[\s"'.,-\/#!$%\^&*;:{}=\-_`~()\\\[\]@+|?><]/g,"").toLowerCase();
    let reversed = original.toLowerCase().split("").reverse().join("");
    if (original.toLowerCase() === reversed) {
        return true
    }
    return false
};

// Do not edit below this line
module.exports = palindromes;
