let lis = document.querySelectorAll("li");

for(i = 0; i < lis.length; i++){
    lis[i].addEventListener("click", function(){
        this.classList.toggle("done");
    })
}