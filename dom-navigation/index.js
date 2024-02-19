document.addEventListener("DOMContentLoaded", () => {
    let div = document.body.firstElementChild
    let ul = document.body.children[1]
    let li = document.body.children[1].children[1]
    console.log(div)
    console.log(ul);
    console.log(li);
})

// Правда, что elem.lastChild.nextSibling всегда равен null? да
// Правда, что elem.children[0].previousSibling всегда равен null ? нет