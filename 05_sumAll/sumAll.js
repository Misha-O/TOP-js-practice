const sumAll = function (start, finish) {
	if (typeof start !== "number" || typeof finish !== "number") return "ERROR";

	let total = 0;
	if (start > 0 && finish > 0) {
		for (
			let index = start;
			parseInt(start) < parseInt(finish)
				? index <= finish
				: index >= finish;
			parseInt(start) < parseInt(finish) ? index++ : index--
		) {
			total += index;
		}
	} else return "ERROR";
	return total;
};

// Do not edit below this line
module.exports = sumAll;
