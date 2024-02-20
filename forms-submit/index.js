document.addEventListener("DOMContentLoaded", () => {
    
    
    function showPrompt(val) {
        inpsubm.onclick = function () {
            modal.style.display = "flex"
        }
        smtext.value = val
        sub.onclick = alert(inpval.value)
    }
    showPrompt("text")
})