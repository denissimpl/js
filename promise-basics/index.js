let promise = new Promise(function(resolve, reject) {
    resolve(1);
  
    setTimeout(() => resolve(2), 1000);
  });
  
  promise.then(alert); //вернет первый промис

  function delay(ms) {
    // ваш код
  }
  
  function delay(ms) {
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, ms);
    })
  }

  delay(3000).then(() => alert('выполнилось через 3 секунды'));  

  function showCircle(val1,val2,val3) {
    return new Promise(function (resolve, reject) {
        //что-то с значениями
        
    })
  }

  showCircle(150, 150, 100).then(div => {
    div.classList.add('message-ball');
    div.append("Hello, world!");
  });