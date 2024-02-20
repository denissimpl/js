document.addEventListener("DOMContentLoaded", () => {
    let slider = document.querySelector("#slider")
    let thumb = document.querySelector(".thumb")
    slider.onmousedown = function(e) {
        e.preventDefault()
        let shiftX = e.clientX - thumb.getBoundingClientRect().left;
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
        function onMouseMove(event) {
            let newLeft = event.clientX - shiftX - slider.getBoundingClientRect().left;

            if (newLeft < 0) {
              newLeft = 0;
            }
            let rightEdge = slider.offsetWidth - thumb.offsetWidth;
            if (newLeft > rightEdge) {
              newLeft = rightEdge;
            }
    
            thumb.style.left = newLeft + 'px';
          }
    
          function onMouseUp() {
            document.removeEventListener('mouseup', onMouseUp);
            document.removeEventListener('mousemove', onMouseMove);
          }
        thumb.ondragstart = function() {
            return false;
          };
    }
})