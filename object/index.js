const user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

function isEmpty(obj) {
    for (let prop in obj){
        return false;
    }
    return true;
}


let schedule = {};

alert(isEmpty(schedule)); // true

schedule["8:30"] = "get up";

alert(isEmpty(schedule)); // false

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

const sumSalaries = (obj) => {
    let sum = 0;
    for (prop in obj){
        sum += obj[prop]
    }
    return sum;
}

sumSalaries(salaries)

const multiplyNumeric = (obj) => {
    for (let prop in obj){
        if (typeof obj[prop] == "number"){
            obj[prop] *= 2
        }
    }
}

// до вызова функции
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
multiplyNumeric(menu);
console.log(menu)