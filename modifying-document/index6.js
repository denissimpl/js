{/* <ul id="ul">
  <li id="one">1</li>
  <li id="two">4</li>
</ul> */}

let ul = document.getElementById("ul")
ul.children[0].insertAdjacentHTML('afterend', '<li>2</li><li>3</li>');