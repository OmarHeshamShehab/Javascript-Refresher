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

// Object and array destructuring
