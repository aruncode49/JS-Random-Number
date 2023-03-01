let num = document.querySelector(".number");
const button = document.querySelector(".button");


    button.addEventListener('click', randomNumber);

function randomNumber(){
    num.innerHTML = Math.floor((Math.random()*6)+1);   
}
