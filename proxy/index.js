// let user = {
//     name: "John"
//   };
  
//   function wrap(target) {
//     return new Proxy(target, {
//         get (target, prop,reciever) {
//             if (!(prop in target)) {
//                 throw new Error("no such property")
//             } else {
//                 return Reflect.get(target, prop,reciever)
//             }
//         }
//     });
//   }
  
//   user = wrap(user);
  
//   alert(user.name); // John
//   alert(user.age); // Ошибка: такого свойства не существует


//   let array = [1, 2, 3];

// array = new Proxy(array, {
//   get (target, prop, reciever) {
//     if (prop < 0) {
//         prop = +prop + target.length
//     } 
//     return Reflect.get(target,prop,reciever)
//   }
// });

// alert( array[-1] ); // 3
// alert( array[-2] ); // 2


function makeObservable(target) {

    target[handlers] = [];

    target.observe = function(handler) {
      this[handlers].push(handler);
    };

    return new Proxy(target, {
        set (target, property, value ,reciever) {
            let success = Reflect.set(...arguments); 
            if (success) {
                target[handlers].forEach(handler => handler(property, value));
            }
            return success;
        }
    })
  }
  
  let user = {};
  user = makeObservable(user);
  
  user.observe((key, value) => {
    alert(`SET ${key}=${value}`);
  });
  
  user.name = "John"; // выводит: SET name=John