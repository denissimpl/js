document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("mousedown", (e) => {
        if (e.toElement.classList.contains("draggable")) {
            let box = e.toElement
            let shiftX = e.clientX - box.getBoundingClientRect().left;
            let shiftY = e.clientY - box.getBoundingClientRect().top;
            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
            console.log(e);
            function onMouseMove(event) {
                
                let newLeft = event.clientX - shiftX;
                let newTop = event.clientY - shiftY;
                console.log(window.innerWidth, newLeft, window.innerHeight, newTop);
                if (newLeft > 0 && newTop > 0
                    &&newLeft < window.innerWidth && newTop < window.innerHeight){
                        box.style.left = newLeft + 'px';
                        box.style.top = newTop + 'px';
                }
                
            }
    
            function onMouseUp() {
                document.removeEventListener('mouseup', onMouseUp);
                document.removeEventListener('mousemove', onMouseMove);
            }
            box.ondragstart = function() {
                return false;
            };
        }
    })
})