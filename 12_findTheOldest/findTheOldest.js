const findTheOldest = function (people) {
    let today = new Date().getFullYear()
    let oldest = {};
    people.forEach((person) => {
        if (!Object.keys(oldest).length) {
            oldest = { ...person };
        } else if (Object.keys(oldest).length) {
            if (
                (oldest.yearOfDeath ?? today) - oldest.yearOfBirth >
                (person.yearOfDeath ?? today) - person.yearOfBirth
            ) return
            oldest = person;
        }
    });
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
