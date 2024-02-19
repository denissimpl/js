document.addEventListener("DOMContentLoaded", () => {
    let btn = document.getElementById("btn")
    let txt = document.getElementById("txt")
    let btn2 = document.getElementById("btn2")
    btn.addEventListener("click", () => {
        txt.hidden = true
    }) 
    btn2.addEventListener("click", () => {
        btn2.hidden = true
    }) 
})