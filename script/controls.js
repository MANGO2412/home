//primer event 
const btn1 = document.getElementById("btn1");
const menu = document.getElementById("menu");
const btn2 = document.getElementById("btn2")

btn1.addEventListener("click", function () {
    menu.classList.toggle("show");
})

btn2.addEventListener("click", function(){
    menu.classList.toggle("show");
})



