let user = {
    name: "John",
    go: function() { alert(this.name) }
  }
  
(user.go)() //ошибка


let obj, method;

obj = {
  go: function() { alert(this); }
};

obj.go();               // (1) [object Object]

(obj.go)();             // (2) [object Object]

(method = obj.go)();    // (3) undefined  потеря конекста

(obj.go || obj.stop)(); // (4) undefined  потеря конекста