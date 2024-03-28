// //Given an array of strings, use a function to reverse all the elements in the string in ascending order and the specific elements in descending order
// let arr = ["Glory", "Joy", "Wachira", "Wairimu"];

 function reverseString(str){
    let strReversed = [...str].reverse().join('');
        console.log(strReversed);
}
reverseString(["Glory"," ",  "Joy", " ", "Wachira"," ",  "Wairimu"]); 

//Using JS functions and an array of numbers, return positive if an element within the array is positive, negative if an element is negative, else zero
function checkElements() {
    let arr =arr.forEach(element => {
       if (element > 0) {
         console.log("positive");
       } else if (element < 0) {
         console.log("negative");
       } else {
         console.log("zero");
       }
    });
   }
   
//Write a function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2.
function arrayNums() {
    const myArray = [1, 2, 3, 4, 5]; myArray. forEach((element) => { console. log(element * 2); });

}
arrayNums()
// Given an array of objects, where each object represents an employee with an id, name, and salary property, write a function that returns a new array of employee objects sorted by their salary in ascending order.
let people = [
    { id: 1 },
    { name: "Glory" },
    { salary: [9000, 6700, 8500, 2000] },
  ];
  function sortBySalary(employees) {
    return employees.sort((a, b) => a.salary - b.salary);
   };
   
  people.forEach((person) => console.log(person.salary));
 console.log(people);

 function reverseStringsInArray(arr) {
  // Map over the array to reverse each string
  const reversedStrings = arr.map(str => [...str].reverse().join(''));
  console.log(reversedStrings);
}
reverseString(""); 


//Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 and the last two added by 5. Console the array with the new values
function MultiplyNumbers(numbers) {
  numbers.forEach(function(number) {
     console.log(number * 2);
  });
 }
 const numbersArray = [1, 2, 3, 4, 5];
 MultiplyNumbers(numbersArray);
