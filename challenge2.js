const btnOne = document.querySelector("#btn-1");
const btnTwo = document.querySelector("#btn-2");
const btnThree = document.querySelector("#btn-3");
const btnFour = document.querySelector("#btn-4");
const btnFive = document.querySelector("#btn-5");
const btnSix = document.querySelector("#btn-6");
const unDo = document.querySelector("#btn-7");
let originalColor = "rgb(245, 248, 247)";


document.body.addEventListener('click', function() {
        document.body.style.backgroundColor = originalColor;
        document.documentElement.style.backgroundColor = originalColor;
});

document.documentElement.addEventListener("click",function(){
    document.body.style.backgroundColor = originalColor;
    document.documentElement.style.backgroundColor = originalColor;
})

btnOne.addEventListener("click", function (event) {
    document.documentElement.style.backgroundColor = "black";
    document.body.style.backgroundColor = "black";
    event.stopPropagation();
})
btnTwo.addEventListener("click", function (event) {
    document.documentElement.style.backgroundColor = "brown";
    document.body.style.backgroundColor = "brown";
   event.stopPropagation();
})
btnThree.addEventListener("click", function (event) {
    document.documentElement.style.backgroundColor = "blue";
    document.body.style.backgroundColor = "blue";
    event.stopPropagation();
})
btnFour.addEventListener("click", function (event) {
    document.documentElement.style.backgroundColor = "red";
    document.body.style.backgroundColor = "red";
   event.stopPropagation();
})
btnFive.addEventListener("click", function (event) {
    document.documentElement.style.backgroundColor = "pink";
    document.body.style.backgroundColor = "pink";
    event.stopPropagation();
})
btnSix.addEventListener("click", function (event) {
    document.documentElement.style.backgroundColor = "purple";
    document.body.style.backgroundColor = "purple";
   event.stopPropagation();
})
unDo.addEventListener("click", function (event) {
    document.documentElement.style.backgroundColor = originalColor;
    document.body.style.backgroundColor = originalColor;
    event.stopPropagation();
})