let lis = document.querySelectorAll("li");
let span = document.querySelector("span");
let input = document.querySelector("input[type='text']");
let ul = document.querySelector("ul")

// Check off specific todos by clicking
for(i = 0; i < lis.length; i++){
    lis[i].addEventListener("click", function(){
        this.classList.toggle("done");
    })
}

span.addEventListener("click", function(){
this.parent().remove();
}
)

input.addEventListener("keypress", function(event){
    if(event.which === 13){
        // grab new todo text from input
        let todoText = this.value; 
        // clear the text box after user hits enter
        this.value = ""
        // Create a new li element
        let newLi = document.createElement("li");

        // Set the text content of the li element
        newLi.textContent = todoText;

        // Append the new li element to the ul
        ul.appendChild(newLi);
    }
})