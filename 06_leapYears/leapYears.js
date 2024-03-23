const leapYears = function(year) {

    if (year % 4 == 0){ // check leap year
        if(year % 100 == 0){ // check if century
            if(year % 400 == 0){ // check if 400
                return true;
            }
            return false;
        }
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;
