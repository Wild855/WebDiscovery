// Example: Printing numbers from 1 to 5 using a for loop
// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }
console.log("This is a simple program to test to see if I can do fizzbuzz" +
    "Please enter a number that bigger then lets say... 10")

// Your solution goes here
console.log("Cats can be the greatest of Warriors especially since they can" +
    "play FizzBuzz")
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let userInput1

rl.question('Enter something to play FizzBuzz: ', (userInput1) => {
    console.log('You entered:', userInput1);

    // Close the interface to end the program
    rl.close();

    userInputRunner(userInput1)

});

function userInputRunner(userInput1) {
    for (let t = userInput1; t <= 1000; t++) {
        // if ()
        console.log(t)
    }
}
Sprite = [1, "cat"]
console.log(Sprite)
let Animal;
Person = {
    Animal =

}




/*
Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.


Example 1:

Input: n = 3
Output: ["1","2","Fizz"]
Example 2:

Input: n = 5
Output: ["1","2","Fizz","4","Buzz"]
Example 3:

Input: n = 15
Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]


Constraints:

1 <= n <= 104
 */