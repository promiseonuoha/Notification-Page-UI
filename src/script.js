"use strict";
const markButton = document.getElementById("mark");
const unread = document.getElementById("unread1");
const unread2 = document.getElementById("unread2");
const unread3 = document.getElementById("unread3");
const number = document.getElementById("number");
const container = document.getElementById("box");
const ball = document.getElementsByClassName('ball');
markButton.addEventListener('click', () => {
    unread.style.backgroundColor = "hsl(0, 0%, 100%)";
    unread2.style.backgroundColor = "hsl(0, 0%, 100%)";
    unread3.style.backgroundColor = "hsl(0, 0%, 100%)";
    number.innerHTML = '0';
    for (let i = 0; i < ball.length; i++) {
        ball[i].classList.add('disappear');
    }
});
window.onload = function () {
    container.style.transform = "translateY(0px)";
};
