const alphabet = ["A", "B", "C", "D", "E", "F"];
const numbers = ["1", "2", "3", "4", "5", "6"];

// const a = alphabet[0]
// const b = numbers[1]

const [a, , c, ...restofwords] = alphabet;
console.log(a);

console.log(c);
console.log(restofwords);

function sumAndMultiply(a, b) {
  return [a + b, a * b, a / b];
}

const [sum, multuply, division = "no division"] = sumAndMultiply(2, 3);
console.log(sum);
console.log(multuply);
console.log(division);

const personOne = {
  name: "omar",
  favoriteFood: "beans",
  age: 31,
  address: {
    city: "somewhere",
    state: "one of them",
  },
};

const personTwo = {
  name: "hesham",
  age: 62,
  address: {
    city: "somewhere else",
    state: "Another one of them",
  },
};

const { name: firstname, age, favoriteFood = "rice", ...rest } = personTwo;

console.log(firstname);
console.log(age);

const {
  name,
  address: { city },
} = personOne;
console.log(name);
console.log(city);

const personThree = {
  name: "shehab",
  age: 75,
  address: {
    city: "somewhere else",
    state: "Another one of them",
  },
};

const personFour = {
  favoriteFood: "beans",
  age: 90,
};

const personFive = { ...personThree, ...personFour };
// data in personfour will overide data in person three

console.log(personFive);

function printUser({ name, age, favoriteFood = "rice" }) {
  console.log(
    `Name is : ${name} , Age is : ${age} & Favorite Food is : ${favoriteFood}`
  );
}
printUser(personOne);
