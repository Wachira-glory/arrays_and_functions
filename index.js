// //Given an array of strings, use a function to reverse all the elements in the string in ascending order and the specific elements in descending order
// let arr = ["Glory", "Joy", "Wachira", "Wairimu"];

 function reverseString(str){
    let strReversed = [...str].reverse().join('');
        console.log(strReversed);
}
reverseString(["Glory"," ",  "Joy", " ", "Wachira"," ",  "Wairimu"]); 

//Using JS functions and an array of numbers, return positive if an element within the array is positive, negative if an element is negative, else zero
function checkElement(array, index) {
  const number = array[index];
  if (number > 0) {
     return number + " is positive";
  } else if (number < 0) {
     return number + " is negative";
  } else {
     return number + " is zero";
  }
}
 const numbers = [6, -9, -1, 7, -2];
 console.log(checkElement(numbers, 4));
   
//Write a function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2.
function arrayNums() {
    const myArray = [1, 2, 3, 4, 5]; myArray. forEach((element) => { console. log(element * 2); });

}
arrayNums()
// Given an array of objects, where each object represents an employee with an id, name, and salary property, write a function that returns a new array of employee objects sorted by their salary in ascending order.
 let people = [
  { id: 1, name: 'Glory', salary: 15000 },
  { id: 2, name: 'Joy', salary: 100000 },
  { id: 3, name: 'Wachira', salary: 350000 }
 ];
 function sortBySalary(employees) {
     return employees.sort((a, b) => a.salary - b.salary);
  };
   
  people.forEach((person) => console.log(person.salary));
 console.log(people);

//Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 and the last two added by 5. Console the array with the new values
function transformArray2(arr) {
  const firstFour = arr.slice(0, 4).map(item => item * 8);
  const lastTwo = arr.slice(-2).map(item => item + 5);
  const newArr = firstFour.concat(lastTwo);
  console.log(newArr);
 }
 transformArray2([11, 21, 31, 41, 51, 61]);