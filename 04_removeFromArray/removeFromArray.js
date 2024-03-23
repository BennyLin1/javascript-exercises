const removeFromArray = function(arr, ...argument) {
  // create a new empty array
  const newArray = [];
  // use forEach to go through the array
  arr.forEach((item) => {
    if (!argument.includes(item)) {
      newArray.push(item);
    }
  });
  // and return that array
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
