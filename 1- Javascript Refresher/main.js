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

let getOneCountry = personsArray.find((personObj2, index) => {
  return personObj2.country === "USA";
});

console.log(getOneCountry);
// 3- filter

let getAllCountries = personsArray.filter((personObj3, index) => {
  return personObj3.country === "USA";
});
console.log(getAllCountries);

// 4- some Used to check if at least one element in the array meets the specified condition defined by the callback function.

let getSpecificAge = personsArray.some((personObj4) => {
  return personObj4.age > 49;
});
console.log(getSpecificAge);

// 5- every Checks if all elements in an array meet a specified condition

let getAllAgesBiggerThan35 = personsArray.every((personObj5) => {
  return personObj5.age > 35;
});
console.log(getAllAgesBiggerThan35);

// 6- includes whether element is available return true else return false

const fruitsArray = ["apple", "orange", "banana", "grapes"];

console.log(fruitsArray.includes("apple"));

// 7- indexOf

console.log(fruitsArray.indexOf("banana"));
console.log(fruitsArray.indexOf("Apple"));

// 8- findIndex

let getIndexOfPresonFromRussia = personsArray.findIndex((personObj8) => {
  return personObj8.country === "France"; // if Japan also -1
});

console.log(`this is find index of ${getIndexOfPresonFromRussia}`);

// async await API call example

let getListOfproductsElement = document.querySelector(".list-of-products");

function renderProducts(getProducts) {
  getListOfproductsElement.innerHTML = getProducts
    .map((singleProductItem) => `<p>${singleProductItem.title}</p>`)
    .join(" ");
}

async function fetchListOfProducts() {
  try {
    const apiResponse = await fetch("https://dummyjson.com/products", {
      method: "GET",
    });

    const result = await apiResponse.json();

    console.log(result);

    if (result?.products?.length > 0) renderProducts(result?.products);

    /*
    is using optional chaining (?.) and checks the following:

1- result?.products: This part checks if result is defined and has a products property. If result is null or undefined, the optional chaining operator (?.) 
   will stop the evaluation and return undefined, preventing runtime errors.
2- .length > 0: If result?.products exists (i.e., it's not undefined), it then checks if the length of the products array is greater than 0.
3- renderProducts(result?.products): If the condition is true (meaning products exists and has one or more elements), the renderProducts function is called with result?.products as the argument.
    */
  } catch (e) {
    console.log(e);
  }
}

fetchListOfProducts();
