//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/

let dog_string = "Hello Max, my name is Dog, and I have purple eyes!";
let dog_names = ["Max", "HAS", "PuRple", "dog"];

// Solution 1: case sensitive
function findWordsCase() {
  for (let i = 0; i < dog_names.length; i++)
    if (dog_string.search(dog_names[i]) != -1) {
      console.log(`matched ${dog_names[i]}`);
    } else {
      console.log(`No matches for ${dog_names[i]}`);
    }
}

findWordsCase();

// Solution 2: case insensitive
function findWords() {
  for (let i = 0; i < dog_names.length; i++)
    if (dog_string.toUpperCase().search(dog_names[i].toUpperCase()) != -1) {
      console.log(`matched ${dog_names[i]}`);
    } else {
      console.log(`No matches for ${dog_names[i]}`);
    }
}

findWords();

//Call method here with parameters

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

// Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

function replaceEvenNames(replacement, array) {
  // For loop to get all names
  // replace even indices.
  for (let i = 0; i < array.length; i++) {
    i % 2 == 0 ? array.splice(i, 1, replacement) : array[i];
  }
  return array;
}

arr = ["Max", "Baseball", "Reboot", "Goku", "Trucks", "Rodger"];

console.log(replaceEvenNames("even index", arr));

//===CODE WARS SOLUTIONS IN JAVASCRIPT===//

// 1. Opposite number
// https://www.codewars.com/kata/56dec885c54a926dcd001095/train/javascript

function opposite(number) {
  return -number;
}

// 2. Even or Odd
// https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/javascript
function even_or_odd(number) {
  return number % 2 == 0 ? "Even" : "Odd";
}

// Also:
function even_or_odd(number) {
  return number % 2 ? "Odd" : "Even";
}
