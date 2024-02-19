document.addEventListener("DOMContentLoaded", () => {
    let hh = document.getElementById("hh")
    let mm = document.getElementById("mm")
    let ss = document.getElementById("ss")
    let start = document.getElementById("start")
    let stop = document.getElementById("stop")
    var timer;
    start.addEventListener("click", () => {
        timer = setInterval(() => {
            let date = new Date()
            hh.innerHTML = date.getHours()
            mm.innerHTML = date.getMinutes()
            ss.innerHTML = date.getSeconds()
        }, 1000);
    })
    stop.addEventListener("click", () => {
        clearInterval(timer)
        console.log(timer);
    })
    
        
        
})

