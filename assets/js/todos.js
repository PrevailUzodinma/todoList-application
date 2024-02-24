let input = document.querySelector("input[type='text']");
let ul = document.querySelector("ul");

function attachListeners() {
  let lis = document.querySelectorAll("li");
  let spans = document.querySelectorAll("span");
  // Check off specific todos by clicking
  for (i = 0; i < lis.length; i++) {
    lis[i].addEventListener("click", function () {
      this.classList.toggle("done");
    });
  }

  for (i = 0; i < spans.length; i++) {
    spans[i].addEventListener("click", function (event) {
      // target the li closest/parent to the clicked span
      let parentLi = event.target.closest("li");
      if (parentLi) {
        // remove the li, that has the clicked span
        parentLi.remove();
      }
      event.stopPropagation();
    });
  }
}

attachListeners();

input.addEventListener("keypress", function (event) {
  if (event.which === 13) {
    // grab new todo text from input
    let todoText = this.value;
    // clear the text box after user hits enter
    this.value = "";
    // Create a new li element
    let newLi = document.createElement("li");

    // Set the text content of the li element
    newLi.innerHTML = "<span>" + "X" + "</span>" + " " + todoText;

    // Append the new li element to the ul
    ul.appendChild(newLi);

    // Attaching event listeners to  the new todo
    attachListeners();
  }
});
