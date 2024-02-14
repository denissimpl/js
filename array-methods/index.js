// function camelize(str) {
//     let arrStr = str.split("-").map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
//     return arrStr.join("")
// }
// alert(camelize("-webkit-f"))

// function filterRange(arr, a, b) {
//     return arr.filter((el) => {
//         return (el >= a && el <= b)
//     })
// }

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// alert( filtered ); // 3,1 (совпадающие значения)

// alert( arr ); // 5,3,8,1 (без изменений)

// function filterRangeInPlace(arr, a, b) {
//     for (let el in arr) {
//         if (arr[el] < a || arr[el] > b) {
//             arr.splice(el,1)
//         }
//     }
// }

// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

// alert( arr ); // [3, 1]

// let arr = [5, 2, 1, -10, 8];


// arr.sort((a,b)=> b-a)

// alert( arr ); // 8, 5, 2, 1, -10

// function copySorted (arr) {
//     return arr.slice().sort()
// }

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (без изменений)

// function Calculator() {
//     this.methods = {
//         "-": (a, b) => a - b,
//         "+": (a, b) => a + b
//     }

//     this.calculate = (str) => {
//         try {
//             const ops = str.split(" ");
//             first = +ops[0]
//             second = +ops[2]
//             return this.methods[ops[1]](first,second)
//         } catch (e) {
//             console.log(e)
//         }
        
//     }

//     this.addMethod = (name, func) => {
//         this.methods[name] = func
//     } 
// }


// let calc = new Calculator;

// alert( calc.calculate("3 + 7") ); // 10

// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// let result = powerCalc.calculate("2 ** 3");
// alert( result ); // 8

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];

// let names = users.map((user) => user.name)

// alert( names ); // Вася, Петя, Маша

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];

// let usersMapped = users.map((user) => {
//     return {
//         id: user.id,
//         fullName: user.name + " " + user.surname,
//     }
// })

// /*
// usersMapped = [
//   { fullName: "Вася Пупкин", id: 1 },
//   { fullName: "Петя Иванов", id: 2 },
//   { fullName: "Маша Петрова", id: 3 }
// ]
// */

// alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // Вася Пупкин

// function sortByAge (arr) {
//     arr.sort((user1, user2) => 
//         user1.age - user2.age
//     )
// }

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let arr = [ vasya, petya, masha ];

// sortByAge(arr);

// // теперь: [vasya, masha, petya]
// alert(arr[0].name); // Вася
// alert(arr[1].name); // Маша
// alert(arr[2].name); // Петя


// function shuffle(array) {
//     array.sort(() => Math.random() - 0.5);
// }


// let arr = [1, 2, 3];

// shuffle(arr);
// // arr = [3, 2, 1]

// shuffle(arr);
// // arr = [2, 1, 3]

// shuffle(arr);
// // arr = [3, 1, 2]

// function getAverageAge(arr) {
//     return (arr.reduce((acc, user) => {
//         return acc+=user.age
//     }, 0)/arr.length)
// }

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };

// let arr = [ vasya, petya, masha ];

// alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

// function unique(arr) {
//     return [...new Set(arr)]
//   }
  
//   let strings = ["кришна", "кришна", "харе", "харе",
//     "харе", "харе", "кришна", "кришна", ":-O"
//   ];
  
//   alert( unique(strings) ); // кришна, харе, :-O

function groupById(users) {
    return users.reduce((acc, val) => {
        acc[val.id] = val
        return acc
    }, {})
}

let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
  ];
  
  let usersById = groupById(users);
  
  console.log(usersById)
  /*
  // после вызова у нас должно получиться:
  
  usersById = {
    john: {id: 'john', name: "John Smith", age: 20},
    ann: {id: 'ann', name: "Ann Smith", age: 24},
    pete: {id: 'pete', name: "Pete Peterson", age: 31},
  }
  */

