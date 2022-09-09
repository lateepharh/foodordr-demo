let search = document.querySelector("#search");
let button = document.querySelector(".button");
let parent = document.querySelector(".parent");
button.addEventListener("click", function(){
   parent.classList.toggle("active");
   search.focus();
});