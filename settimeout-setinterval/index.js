function printNumbers(from, to) {
    let current = from

    // let timerId = setInterval(() => {
    //     console.log(current);
    //     if (current == to){
    //         clearInterval(timerId)
    //     }
    //     current++;

    // }, 1000)

    setTimeout(function printNum() {

        console.log(current);
        if (current < to){
            setTimeout(printNum, 1000)
        }
        current++;
        
    })
}
// printNumbers(1, 200)

let i = 0;

setTimeout(() => alert(i), 100); // ?

// предположим, что время выполнения этой функции >100 мс
for(let j = 0; j < 100000000; j++) {
  i++;
}