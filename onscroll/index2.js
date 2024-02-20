document.addEventListener("DOMContentLoaded", () => {
    // function createTemplate() {
    //     let div = document.createElement("div")
    //     div.textContent = `${new Date(0)}`
    //     document.body.append(div)
    // }
    // console.log(scrollY, window.innerHeight);
    
    // // if (scrollY < window.innerHeight) {
    // //     createTemplate()
    // // }
    // while (document.body.lastChild.getBoundingClientRect().top < window.innerHeight) {
    //     // createTemplate()
    //     console.log(1)
    // }
    
    function populate() {
        while(true) {
          let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;
          if (windowRelativeBottom < document.documentElement.clientHeight + 100) {
            document.body.insertAdjacentHTML("beforeend", `<p>Дата: ${new Date()}</p>`);
          }
        }
      }
    populate()
})