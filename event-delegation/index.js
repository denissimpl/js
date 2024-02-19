document.addEventListener("DOMContentLoaded", () => {
    let cont = document.getElementById("container")
    cont.addEventListener("click", (event) => {
        if (event.target.className != 'remove-button') {
            return
        }
        let pane = event.target.closest('.pane');
        pane.remove();
    })
})