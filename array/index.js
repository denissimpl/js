let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");

// что в fruits?
alert( fruits.length ); // 4

const styles = ['Джаз', 'Блюз', "Рок-н-Ролл"]
styles[Math.floor(styles.length-1)/2] = "Классика"
console.log(styles)
alert(styles.shift())
styles.unshift("Рэп")
styles.unshift("Рэгги")
console.log(styles)

let arr = ["a", "b"];

arr.push(function() {
  alert( this );
});

arr[2](); // ?

newarr = []

function sumInput() {

    let numbers = [];
  
    while (true) {
      let value = prompt("Введите число", 0);
      if (value === "" || value === null || !isFinite(value)) break;
      numbers.push(+value);
    }
  
    let sum = 0;
    for (let number of numbers) {
      sum += number;
    }
    return sum;
  }

alert(sumInput())

function getMaxSubSum(arr) {
    let max = 0;
    let partial = 0;
  
    for (let item of arr) { 
      partial += item; 
      max = Math.max(maxSum, partialSum); 
      if (partial < 0) partial = 0; 
    }
  
    return maxSum;
  }