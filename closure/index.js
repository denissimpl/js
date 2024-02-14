// let name = "John";

// function sayHi() {
//   alert("Hi, " + name);
// }

// name = "Pete"; //этот

// sayHi(); // что будет показано: "John" или "Pete"?


// function makeWorker() {
//     let name = "Pete";
  
//     return function() {
//       alert(name);
//     };
//   }
  
//   let name = "John";
  
//   // создаём функцию
//   let work = makeWorker();
  
//   // вызываем её
//   work(); // что будет показано? Pete

// function makeCounter() {
//     let count = 0;
  
//     return function() {
//       return count++;
//     };
//   }
  
//   let counter = makeCounter();
//   let counter2 = makeCounter();
  
//   alert( counter() ); // 0
//   alert( counter() ); // 1
  
//   alert( counter2() ); // 0
//   alert( counter2() ); // 1

// function Counter() {
//     let count = 0;
  
//     this.up = function() {
//       return ++count;
//     };
//     this.down = function() {
//       return --count;
//     };
//   }
  
//   let counter = new Counter();
  
//   alert( counter.up() ); // 1
//   alert( counter.up() ); // 2
//   alert( counter.down() ); // 1

// let phrase = "Hello";

// if (true) {
//   let user = "John";

//   function sayHi() {
//     alert(`${phrase}, ${user}`);
//   }
// }

// sayHi();

// function sum(a){
//     return function(b){
//         return a+b
//     }
// }

// console.log(sum(1)(2));

// let x = 1;

// function func() {
//   console.log(x); // ?

//   let x = 2;
// }

// func();

// function inBetween(a, b) {
//     return function(c) {
//         return c >= a && c <= b;
//     };
// }

// function inArray(arr) {
//     return function(x) {
//         return arr.includes(x);
//     };
// }

// let arr = [1, 2, 3, 4, 5, 6, 7];

// alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

// alert( arr.filter(inArray([1, 2, 10])) ); // 1,2

// let users = [
//     { name: "John", age: 20, surname: "Johnson" },
//     { name: "Pete", age: 18, surname: "Peterson" },
//     { name: "Ann", age: 19, surname: "Hathaway" }
//   ];

// function byField(fieldName){
//     return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
// }

// users.sort(byField('name'));
// users.sort(byField('age'));
  

function makeArmy() {
    let shooters = [];

    let i = 0;
    while (i < 10) {
        let j = i;
        let shooter = function() { // функция shooter
            alert( j ); // должна выводить порядковый номер
        };
        shooters.push(shooter); // и добавлять стрелка в массив
        i++;
    }

    // ...а в конце вернуть массив из всех стрелков
    return shooters;
    }

    let army = makeArmy();

    // все стрелки выводят 10 вместо их порядковых номеров (0, 1, 2, 3...)
    army[0](); // 10 от стрелка с порядковым номером 0
    army[1](); // 10 от стрелка с порядковым номером 1
    army[2](); // 10 ...и т.д.