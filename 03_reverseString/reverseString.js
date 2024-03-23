const reverseString = function(inputString) {
    
    let newString = "";
    for(i = inputString.length; i >= 0; i--){
        newString += inputString.charAt(i)
    }
    return newString
};

// Do not edit below this line
module.exports = reverseString;
