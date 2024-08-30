// Template literals

let a = "Omar";
let b = "Hesham";

console.log(`${a} ${b}`);

// Ternary Operations

let food1 = "pizza";
let food2 = "burger";

const foodStatus = false;

function getFood1(foodName) {
  console.log(food1);
}
function getFood2(foodName) {
  console.log(food2);
}

foodStatus ? getFood1() : getFood2();

// Object Destructuring

const id = 1;
const productName = "Apple watch";
const rating = 5;

const product = {
  id,
  productName,
  rating,
};

console.log(product);

const product2 = {
  productDescription: "smart watch for Apple",
  id,
  productName,
  rating,
};

const { productDescription } = product2;
console.log(productDescription);

// Array Destructuring
const arr = ["A1", " B2", "C3", "D4", "E5", "F6", "G7", "H8", "I9"];
const [firtElement, secondElement, thirdElement, ...remainingElements] = arr;

console.log(...remainingElements);

//default parameters, rest & spread operators

function multiply(num1 = 1, num2 = 1) {
  return num1 * num2;
}

console.log(multiply(4, 4));
console.log(multiply());

const array1 = [1, 2, 3, 4];
console.log([...array1]);
console.log(...array1);

const array2 = [5, 6, 7, 8];

const array3 = ["added new", ...array2, ...array1];

console.log(array3);

function getInfo(a, b, ...c) {
  console.log(a, b, c);
}

getInfo(1, 2, 3, 4, 5, 6, 78);

// ES6 array methods
// 1- map
const personsArray = [
  {
    name: "Person 01",
    age: 45,
    country: "USA",
  },
  {
    name: "Person 02",
    age: 30,
    country: "France",
  },
  {
    name: "Person 03",
    age: 40,
    country: "RUSSIA",
  },
  {
    name: "Person 04",
    age: 50,
    country: "Egypt",
  },
  {
    name: "Person 05",
    age: 59,
    country: "USA",
  },
];

let getAllNames = personsArray.map((personObj, index) => {
  console.log(personObj.country, index);
  return `index is ${index} the name is ${personObj.name} age is ${personObj.age} and is located in ${personObj.country}`;
});
console.log(getAllNames);

// 2- find will return first element found

let getAllCountries = personsArray.find((personobj2, index) => {
  return personobj2.country === "USA";
});

console.log(getAllCountries);
// 3- filter

// 4- some

// 5- every

// 6- includes

// 7- indexOf

// 8- findIndex
