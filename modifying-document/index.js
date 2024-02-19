// elem.append(document.createTextNode(text))
// elem.innerHTML = text
// elem.textContent = text 1 и 3

let ul = document.createElement("ul")
document.body.append(ul)
while (true) {
    let text = prompt("Введите элемент списка")
    if (!text) break;
    let li = document.createElement("li")
    li.innerHTML = text
    ul.append(li)
}

