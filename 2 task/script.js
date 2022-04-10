const arr = [-4, -3, -2, -1, 0, 1, 2, 3, 4];

Array.prototype.mapUsingReduce = function (callback) {
  return this.reduce(
    (accumulator, currentValue) =>
      (accumulator = [...accumulator, callback(currentValue)]),
    []
  );
};

Array.prototype.filterUsingReduce = function (callback) {
  return this.reduce((accumulator, currentValue) => {
    if (callback(currentValue)) {
      return [...accumulator, currentValue];
    } else {
      return accumulator;
    }
  }, []);
};

Array.prototype.everyUsingReduce = function (callback) {
  return this.reduce((accumulator, currentValue) => {
    if (!callback(currentValue)) {
      return (accumulator = false);
    } else {
      return accumulator;
    }
  }, true);
};

Array.prototype.someUsingReduce = function (callback) {
  return this.reduce((accumulator, currentValue) => {
    if (callback(currentValue)) {
      return (accumulator = true);
    } else {
      return accumulator;
    }
  }, false);
};

Array.prototype.findUsingReduce = function (callback) {
  return this.reduce((accumulator, currentValue) => {
    if (accumulator === undefined && callback(currentValue)) {
      return currentValue;
    }
    return accumulator;
  }, undefined);
};

Array.prototype.indexOfUsingReduce = function (callback, fromIndex) {
  return this.reduce((accumulator, currentValue, index) => {
    if (fromIndex === -1) {
      return -1;
    } 
    else if (
      accumulator === -1 &&
      callback(currentValue) &&
      index >= fromIndex
    ) {
      return index;
    }
    return accumulator;
  }, -1);
};

//comparison of map
console.log(arr.mapUsingReduce(num => Math.pow(num, 2)));
console.log(arr.map(num => Math.pow(num, 2)));

//comparison of filter
console.log(arr.filterUsingReduce(num => num < 0));
console.log(arr.filter(num => num < 0));

//comparison of every
console.log(arr.everyUsingReduce(num => num === 0));
console.log(arr.every(num => num === 0));

//comparison of some
console.log(arr.someUsingReduce(num => num === 0));
console.log(arr.some(num => num === 0));

//comparison of find
console.log(arr.findUsingReduce(num => num > 0));
console.log(arr.find(num => num > 0));

//comparison of indexOf
//indexOf is a method that does not accept a callback, so the call is slightly different

let indexOfReducer = num => num === numIndexOf;
let numIndexOf = 0;
let fromIndexOf = 4;

console.log(arr.indexOfUsingReduce(indexOfReducer, fromIndexOf));
console.log(arr.indexOf(numIndexOf, fromIndexOf));
