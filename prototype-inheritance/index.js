// let animal = {
//     jumps: null
//   };
//   let rabbit = {
//     __proto__: animal,
//     jumps: true
//   };
  
//   alert( rabbit.jumps ); // true
  
//   delete rabbit.jumps;
  
//   alert( rabbit.jumps ); // null
  
//   delete animal.jumps;
  
//   alert( rabbit.jumps ); // undefined   


//   let head = {
//     glasses: 1
//   };
  
//   let table = {
//     pen: 3,
//     __proto__: head
//   };
  
//   let bed = {
//     sheet: 1,
//     pillow: 2,
//     __proto__: table
//   };
  
//   let pockets = {
//     __proto__: bed,
//     money: 2000
//   };  


//   let animal = {
//     eat() {
//       this.full = true;
//     }
//   };
  
//   let rabbit = {
//     __proto__: animal
//   };
  
//   rabbit.eat(); //rabbit

let hamster = {
    stomach: [],
  
    eat(food) {
      this.stomach = [food]
    }
  };
  
  let speedy = {
    __proto__: hamster
  };
  
  let lazy = {
    __proto__: hamster
  };
  
  // Этот хомяк нашёл еду
  speedy.eat("apple");
  alert( speedy.stomach ); // apple
  
  // У этого хомяка тоже есть еда. Почему? Исправьте
  alert( lazy.stomach ); // apple