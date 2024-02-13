let login = prompt("Введите логин")
let password;
if (login == "Админ"){
    password = prompt("Введите пароль")
    if (!password){
        alert("Отменено")
    }
    else if (password == "Я главный"){
        alert("Здравствуйте!")
    } else {
        alert("Неверный пароль")
    }
} else if (!login){
    alert("Отмена")
} else {
    prompt("Я вас не знаю")
}
