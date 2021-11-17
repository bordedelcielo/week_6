//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
  pizza: ["Deep Dish", "South Side Thin Crust"],
  tacos: "Anything not from Taco bell",
  burgers: "Portillos Burgers",
  ice_cream: ["Chocolate", "Vanilla", "Oreo"],
  shakes: [
    {
      oberwise: "Chocolate",
      dunkin: "Vanilla",
      culvers: "All of them",
      mcDonalds: "Sham-rock-shake",
      cupids_candies: "Chocolate Malt",
    },
  ],
};

let favoriteDishes = (person) => {
  console.log(
    `${person.pizza[0]}\n${person.pizza[1]}\n${person.tacos}
${person.burgers}\n${person.ice_cream[0]}\n${person.ice_cream[1]}
${person.ice_cream[2]}\n${person.shakes[0].oberwise}\n${person.shakes[0].dunkin}
${person.shakes[0].culvers}\n${person.shakes[0].mcDonalds}
${person.shakes[0].cupids_candies}`
  );
};

favoriteDishes(person3);

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype

// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age

// -- JavaScript Class --//

class Person {
  constructor(name, age) {
    this.age = age;
    this.name = name;
  }
  printInfo() {
    return `Name: ${this.name} \nAge: ${this.age}`;
  }
  incrementAge() {
    this.age++;
  }
}

let jimi = new Person("Jimi", 25);
let jimmy = new Person("Jimmy", 15);

console.log(jimi.printInfo());
console.log(jimmy.printInfo());
jimmy.incrementAge();
jimmy.incrementAge();
jimmy.incrementAge();
console.log(jimmy.printInfo());

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a 
    string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

str = "Jimmyeatworld";
// str = "Jimmy"

let p = new Promise((resolve, reject) => {
  if (str.length >= 10) {
    resolve("Success");
  } else {
    reject("Failed");
  }
});

p.then(() => {
  console.log("Big Word");
}).catch(() => {
  // For reject
  console.log("Small Number");
});

//===CODE WARS SOLUTIONS IN JAVASCRIPT===//

// 1. Sum of positive
// https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript

function sumPositive(array) {
  var total = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      total += array[i];
    }
  }
  return total;
}

console.log(sumPositive([1, -4, 7, 12]));

// 2. Return Negative
// https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript

function makeNegative(num) {
  if (num > 0) {
    return num * -1;
  } else {
    return num;
  }
}

console.log(makeNegative(-5));

console.log(makeNegative(10));
