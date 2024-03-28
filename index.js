// //Given an array of strings, use a function to reverse all the elements in the string in ascending order and the specific elements in descending order
// let arr = ["Glory", "Joy", "Wachira", "Wairimu"];

 function reverseString(str){
    let strReversed = [...str].reverse().join('');
        console.log(strReversed);
}
reverseString(["Glory"," ",  "Joy", " ", "Wachira"," ",  "Wairimu"]); 
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
    people.sort(function(a, b) {
    return a.salary - (b.salary);
  });
  people.forEach((person) => console.log(person.salary));
 console.log(people);


