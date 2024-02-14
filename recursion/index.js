// function sumTo(n) {
//     // if (n==1){
//     //     return 1
//     // }
//     // return n+sumTo(n-1)

//     // let sum = 0;
//     // for (let i = n; i>0;i--){
//     //     sum+=i
//     // }
//     // return sum

//     return (1+n)/2*n
// }

// console.log(sumTo(4))

// function factorial(n) {
//     return n==1?1:n*factorial(n-1)
// }

// alert(factorial(10))

// function fib(n){
//     return n<=1?n:fib(n-1)+fib(n-2)
// }

// console.log(fib(7));

let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };
// function printList(list) {
//     console.log(list.value); // выводим текущий элемент

//     if (list.next) {
//       printList(list.next); // делаем то же самое для остальной части списка
//     }
// }

// printList(list)

function printList(list) {

    if (list.next) {
      printList(list.next); // делаем то же самое для остальной части списка
    }
    
    console.log(list.value); // выводим текущий элемент
}


printList(list)