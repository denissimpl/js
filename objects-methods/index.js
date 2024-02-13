// function makeUser() {
//     return {
//       name: "John",
//       ref: this
//     };
//   }
  
//   let user = makeUser();
  
//   alert( user.ref.name );//ref = window

//   function makeUser() {
//     return {
//       name: "John",
//       ref() {
//         return this;
//       }
//     };
//   }
  
//   let user = makeUser();
  
//   alert( user.ref().name ); // John

const calculator = {
    a: undefined,
    b: undefined,
    read (a,b) {
        this.a = +prompt("Введите а")
        this.b = +prompt("Введите b")
    },
    sum () {
        if (this.a && this.b){
            return this.a+this.b
        }
    },
    mul () {
        if (this.a && this.b){
            return this.a*this.b
        }
    }
}
calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

let ladder = {
    step: 0,
    up() {
      this.step++;
      return this
    },
    down() {
      this.step--;
      return this
    },
    showStep: function() { // показывает текущую ступеньку
      alert( this.step );
      return this
    }
  };

ladder.up().up().down().showStep().down().showStep();