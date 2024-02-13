// let obj = {};

// function A() { return obj; }
// function B() { return obj; }

// alert( new A() == new B() ); 

function Calculator () {
    this.read = () => {
        this.a = +prompt("Введите а")
        this.b = +prompt("Введите b")
    }
    this.sum = () => {
        return this.a + this.b
    }
    this.mul = () => {
        return this.a * this.b
    }
    
}
let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );


function Accumulator(startingValue) {
    this.value = startingValue
    this.read = () => {
        this.value += +prompt("Введите число")
    }
}

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

alert(accumulator.value); // выведет сумму этих значений