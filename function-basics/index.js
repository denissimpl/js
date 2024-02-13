// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       // ...
//       return confirm('Родители разрешили?');
//     }
//   }

function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Родители разрешили?');
    }
  }

function checkAge2(age){
    return age>18?true:confirm("Родители разрешили")
}
function checkAge3(age){
    return (age>18) || confirm("Родители разрешили")
}

function min(a,b){
    return a>b?a:a==b?a:b
}

function pow(x,n){
    return n==1?x:pow(x,n-1)*x
}

x = prompt("Введите x")

n = prompt("Введите n")

(n >= 1 && n % 1== 0 )? alert(pow(x,n)): alert("ошибка")