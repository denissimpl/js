// let user = {
//     name: "John",
//     years: 30
//   };

// let {
//     name: name,
//     years: age,
//     isAdmin: isAdmin = false,

// } = user

// alert( name ); // John
// alert( age ); // 30
// alert( isAdmin ); // false

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

function topSalary(salaries) {
    let top = 0
    let topName = ''
    for (const [name, salary] of Object.entries(salaries)){
        if (salary>top) {
            [top, topName] = [salary, name]
        }
    }
    return topName
}  

console.log(topSalary(salaries))