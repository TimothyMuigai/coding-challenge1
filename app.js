const paragraph = document.querySelector("p");
const showTxt = document.querySelector(".showtxt");
const hideTxt = document.querySelector(".hidetxt");

let originaltxt = paragraph.textContent;
const byeTxt = () => {
    
    paragraph.textContent = originaltxt;
    paragraph.style.textAlign ="justify";
    paragraph.style.color ="black";
}

hideTxt.addEventListener("click", byeTxt);

const greetTxt = () =>{
    paragraph.textContent = "Hello world";
    paragraph.style.textAlign ="center";
    paragraph.style.color ="tomato";
}
showTxt.addEventListener("click",greetTxt);

