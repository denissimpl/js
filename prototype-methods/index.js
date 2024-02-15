// let dictionary = Object.create(null);

// // ваш код, который добавляет метод dictionary.toString

// // добавляем немного данных
// dictionary.apple = "Apple";
// dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ

// // только apple и __proto__ выведены в цикле
// for(let key in dictionary) {
//   alert(key); // "apple", затем "__proto__"
// }

// dictionary.toString = function () {
//     return Object.keys(this).join()
// }

// // ваш метод toString в действии
// alert(dictionary); // "apple,__proto__"


function Rabbit(name) {
    this.name = name;
  }
Rabbit.prototype.sayHi = function() {
    alert(this.name);
  };
  
let rabbit = new Rabbit("Rabbit");

rabbit.sayHi(); //+
Rabbit.prototype.sayHi(); //undefined
Object.getPrototypeOf(rabbit).sayHi(); //undefined
rabbit.__proto__.sayHi(); //undefined