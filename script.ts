const markButton = document.getElementById("mark") as HTMLParagraphElement;
const unread = document.getElementById("unread1") as HTMLDivElement;
const unread2 = document.getElementById("unread2") as HTMLDivElement;
const unread3 = document.getElementById("unread3") as HTMLDivElement;
const number = document.getElementById("number") as HTMLParagraphElement;
const container = document.getElementById("box") as HTMLDivElement;
const ball = document.getElementsByClassName('ball');
markButton.addEventListener('click', () => {
    unread.style.backgroundColor = "hsl(0, 0%, 100%)";
    unread2.style.backgroundColor = "hsl(0, 0%, 100%)";
    unread3.style.backgroundColor = "hsl(0, 0%, 100%)";
    number.innerHTML = '0';
    for(let i = 0; i < ball.length; i++){
    ball[i].classList.add('disappear')
    }
})
window.onload = function(){
    container.style.transform = "translateY(0px)"
}