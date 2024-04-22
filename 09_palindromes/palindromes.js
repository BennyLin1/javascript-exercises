const palindromes = function (string) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    // Javascript allows you to solve this with inbuilt functions
    mainString = 
    string.toLowerCase() // for comparison
    .split('') // to create array
    .filter((character) => alphanumerical.includes(character)) // filter alphanumeric
    .join('') // rejoin the characters.

    // Creates 
    reverseString = mainString.split("").reverse().join("")

    return reverseString == mainString 

};

// Do not edit below this line
module.exports = palindromes;
