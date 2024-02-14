// function sumSalaries(salaries) {
//     return Object.values(salaries).reduce((acc,val)=>acc+=val,0)
// }

// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
//   };
  
//   alert( sumSalaries(salaries) ); // 650

function count(obj) {
    return Object.values(obj).reduce((acc,val)=>acc+=1,0)
}

let user = {
    name: 'John',
    age: 30
  };
  
alert( count(user) ); // 2
