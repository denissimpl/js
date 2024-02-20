document.addEventListener("DOMContentLoaded", (e) => {
    document.addEventListener("scroll", (e) => {
        if (scrollY > window.innerHeight){
            scrolltop.style.display = "block"
        } else {
            scrolltop.style.display = "none"
        }
    })
    scrolltop.addEventListener("click", () => {
        scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          })
    })
})