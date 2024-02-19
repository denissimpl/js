document.addEventListener("DOMContentLoaded", () => {
    let btn = document.getElementById("zag")
    let ul = document.getElementById("ul")
    btn.addEventListener("click",() => {
        ul.hidden = !ul.hidden
    })
})