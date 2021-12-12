const add = function (numOne, numTwo) {
	return numOne + numTwo;
};

const subtract = function (numOne, numTwo) {
	return numOne - numTwo;
};

const sum = function (array) {
	let total = 0;
	if (!array.length) return total;
	for (let index = 0; index < array.length; index++) {
		const element = array[index];
		total += element;
	}
	return total
};

const multiply = function (array) {
	let total = array.reduce((acc, item) => {
		acc *= item
		return acc
	}, 1)
	return total
};

const power = function () {};

const factorial = function () {};

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
