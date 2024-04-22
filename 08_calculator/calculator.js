const add = function(arg1, arg2) {
	return arg1 + arg2
};

const subtract = function(arg1, arg2) {
  return arg1 - arg2
};

const sum = function(arr) {
  return arr.reduce((sum, current) => {
    return sum + current
  },0);
};

const multiply = function(arr) {
  return arr.reduce((multiple, current) => {
    return multiple * current
  })
};

const power = function(arg1, arg2) {
  return Math.pow(arg1, arg2)
};

const factorial = function(arg) {  
  if (arg === 0) {
    return 1;
  } else {
    return arg*factorial(arg-1)
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
