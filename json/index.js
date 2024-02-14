// let user = {
//     name: "Василий Иванович",
//     age: 35
//   };

// user = JSON.stringify(user)

// let newUser = JSON.parse(user)

// console.log(newUser)

let room = {
    number: 23
  };
  
  let meetup = {
    title: "Совещание",
    occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
    place: room
  };
  
  // цикличные ссылки
  room.occupiedBy = meetup;
  meetup.self = meetup;
  
  alert( JSON.stringify(meetup, function replacer(key, value) {
    if (key != "" && value == meetup){
        return undefined
    } else {
        return value
    }
  }));