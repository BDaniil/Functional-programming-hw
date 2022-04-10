const interns = [
  { name: "Daniil", age: 20 },
  { name: "Elena", age: 22 },
  { name: "Constantin", age: 21 },
  { name: "Vasilii", age: 25 },
  { name: "Alexandru", age: 23 },
  { name: "Denis", age: 24 },
  { name: "Vasile", age: 19 },
  { name: "Vladislav", age: 20 },
];

const getSortedArray = () => {
  // trim and toLowerCase methods are needed so that the program
  // does not cause an error, with capital letters and with spaces
  let inputValue = document
    .getElementById("domValueElement")
    .value.trim()
    .toLowerCase();
  let inputOrder = document
    .getElementById("domOrderElement")
    .value.trim()
    .toLowerCase();

  if (
    (inputValue === "name" || inputValue === "age") &&
    (inputOrder === "dsc" || inputOrder === "asc")
  ) {
    //Succesful input arguments
    console.log(interns.sortInterns(inputValue, inputOrder));

    //Original array is not modified
    console.log(interns);
  } else if (
    (inputValue != "name" || inputValue != "age") &&
    (inputOrder == "dsc" || inputOrder == "asc")
  ) {
    console.log("Enter valid value");
  } else if (
    (inputValue == "name" || inputValue == "age") &&
    (inputOrder != "dsc" || inputOrder != "asc")
  ) {
    console.log("Enter valid order");
  } else {
    console.log("Enter valid value and order");
  }
};

//Main function in which is solving way of sorting
Array.prototype.sortInterns = function (property, order) {
  if (property === "name" && order === "asc") {
    return this.ascSort(property);
  } else if (property === "name" && order === "dsc") {
    return this.dscSort(property);
  } else if (property === "age" && order === "asc") {
    return this.ascSort(property);
  } else if (property === "age" && order === "dsc") {
    return this.dscSort(property);
  } else {
    console.log("Something went wrong");
  }
};

//Function template to sort by ascending order
Array.prototype.ascSort = function (property) {
  return this.slice(0).sort(function (a, b) {
    if (a[property] > b[property]) {
      return 1;
    } else if (a[property] < b[property]) {
      return -1;
    } else {
      return 0;
    }
  });
};

//Function template to sort by descending order
Array.prototype.dscSort = function (property) {
  return this.slice(0).sort(function (a, b) {
    if (a[property] < b[property]) {
      return 1;
    } else if (a[property] > b[property]) {
      return -1;
    } else {
      return 0;
    }
  });
};

// I noticed that the code was duplicated, and came to the conclusion that it would be the best solution to pass methods 
// dscSort and ascSort to the sortInterns method, regardless of the property. If this is wrong, comment please

// //Function in which Sorting is by name and ascending order
// Array.prototype.sortInternsByNameAsc = function (property) {
//   return this.ascSort(property);
// };

// //Function in which Sorting is by name and descending order
// Array.prototype.sortInternsByNameDsc = function (property) {
//   return this.dscSort(property);
// };

// //Function in which Sorting is by age and ascending order
// Array.prototype.sortInternsByAgeAsc = function (property) {
//   return this.ascSort(property);
// };

// //Function in which Sorting is by age and descending order
// Array.prototype.sortInternsByAgeDsc = function (property) {
//   return this.dscSort(property);
// };
