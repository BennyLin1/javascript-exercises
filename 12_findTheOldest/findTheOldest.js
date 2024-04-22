const findTheOldest = function(list) {

    const oldest = list.reduce((oldest, next) => {
        const oldestAge = getAge(oldest.yearOfDeath,oldest.yearOfBirth);
        const nextAge = getAge(next.yearOfDeath,next.yearOfBirth);
        return oldestAge > nextAge ? oldest : next;
    }) 

    return oldest

};

const getAge = function(death, birth){
    if(!death){
        death = new Date().getFullYear();
    }
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
