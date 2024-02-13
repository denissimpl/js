let interval = prompt("Введите число до которого вывести простые?")

for (let i = 2; i <= interval; i++){
    let flag = true;
    for (let j = 2; j <= i; j++){
        if (j!=i && i%j == 0){
            flag = false
            break;
        }
    }
    if (flag){
        console.log(i)
    }
}