let input = document.querySelector("input[type='text']");
let ul = document.querySelector("ul");
let plusIcon = document.querySelector(".fa-plus");

// function to make my listener activated on newly written todos from the input tag
function attachListeners() {
  let lis = document.querySelectorAll("li");
  let removeLis = document.querySelectorAll("span.delete");
  // Check off specific todos by clicking
  for (i = 0; i < lis.length; i++) {
    lis[i].addEventListener("click", function () {
      this.classList.toggle("done");
    });
  }

  for (i = 0; i < removeLis.length; i++) {
    removeLis[i].addEventListener("click", function (event) {
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
    newLi.innerHTML =
      '<span class="delete">' +
      '<i class="fa-regular fa-trash-can"></i>' +
      "</span>" +
      " " +
      todoText +
      " " +
      "<span>" +
      '<i class="fa-regular fa-pen-to-square"></i>' +
      "</span>";

    // Append the new li element to the ul
    ul.appendChild(newLi);

    // Attaching event listeners to  the new todo
    attachListeners();
  }
});

// function that will fade out my input tag when I click the plusIcon
function fadeOut(element) {
  var opacity = 1;
  var interval = 50;
  var duration = 50;

  var fadeOutInterval = setInterval(function () {
    if (opacity > 0) {
      opacity -= interval / duration;
      element.style.opacity = opacity;
    } else {
      clearInterval(fadeOutInterval);
      element.style.display = "none";
    }
  }, interval);
}

// function that will cause my input tag to re-emerge when I hit the input tag.
function fadeIn(element) {
  var opacity = 0;
  var interval = 50;
  var duration = 50;

  element.style.opacity = opacity;
  element.style.display = "block";

  var fadeInInterval = setInterval(function () {
    if (opacity < 1) {
      opacity += interval / duration;
      element.style.opacity = opacity;
    } else {
      clearInterval(fadeInInterval);
    }
  }, interval);
}

// Adding the listener onCalling the respective functions on my input tag.

plusIcon.addEventListener("click", function () {
  if (input.style.display === "none") {
    // If the input is currently hidden, fade it in
    input.style.display = "block";
    fadeIn(input);
  } else {
    // If the input is currently visible, fade it out
    fadeOut(input, function () {
      input.style.display = "none";
    });
  }
});

/* Adding functionality to my edit icon: I am using the UL container instead of a Nodelist of icons,
because after one edit, my icon stops functioning, using UL (Event delegation) will make this functionality happen dynamically
PS: I can do the same for my delete Icon, but I will leave it like that for future reference of diverse functionalities */

ul.addEventListener("click", function (event) {
  let editIcon = event.target.closest(".fa-pen-to-square");
  event.stopPropagation();
  if (editIcon) {
    let parentLi = editIcon.closest("li");
    if (parentLi) {
      // remove the li, that has the clicked span
      let editText = prompt("Edit your text here:");

      if (editText !== null) {
        parentLi.innerHTML =
          '<span class="delete">' +
          '<i class="fa-regular fa-trash-can"></i>' +
          "</span>" +
          " " +
          editText +
          " " +
          "<span>" +
          '<i class="fa-regular fa-pen-to-square"></i>' +
          "</span>";
      }
      parentLi.classList.add("editClass");
    }
  }
  /*attach the listeners, so that after you edit a todo, the delete icon will still work.
  PS: If i used event delegation, I presume, I would not have to do this*/
  attachListeners();
});