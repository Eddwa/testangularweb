console.log("header.js is working");
let intro = document.querySelector(".intro");
let introLogo = document.querySelector(".intro-logo");

window.addEventListener("DOMContentLoaded",()=>{
    setTimeout(()=>{
        intro.style.top = '-100vh';
    },2000)
    window.scrollTo(0,0);
})
