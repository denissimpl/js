function showNotification (top, right, html, className) {
    let notif = document.createElement("div")
    notif.style.cssText = `
        top: ${top},
        rigth: ${right},
    `
    notif.classList.add(className)
    notif.innerHTML = html
    document.body.append(notif)
    setTimeout(notif.remove, 1500)
}

showNotification({
    top: 10, // 10px от верхней границы окна (по умолчанию 0px)
    right: 10, // 10px от правого края окна (по умолчанию 0px)
    html: "Hello!", // HTML-уведомление
    className: "welcome" // дополнительный класс для div (необязательно)
  });