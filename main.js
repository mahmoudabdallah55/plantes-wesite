let body = document.body;
let toogle = document.getElementById("toogle");
let header = document.getElementById("head");
console.log(header);


toogle.addEventListener("click",function(){

body.classList.toggle("dark-mode");
header.style.color="white"

})