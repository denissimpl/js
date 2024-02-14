// function unique(arr) {
//     return [...new Set(arr)]
//   }
  
//   let values = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
//   ];
  
//   alert( unique(values) ); // Hare,Krishna,:-O

// function aclean(arr) {
//     let map = new Map();

//     for (let word of arr) {
//       let sorted = word.toLowerCase().split("").sort().join(""); // (*)
//       map.set(sorted, word);
//     }
  
//     return [...map.values()];
// }

//   let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// console.log( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"

let map = new Map();

map.set("name", "John");

let keys = [...map.keys()];

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
keys.push("more");
console.log(keys)