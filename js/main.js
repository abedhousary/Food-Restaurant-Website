let btn = document.querySelector("#order") || document.querySelector("#orders") || document.querySelector("#orderss") ;
let alert = document.querySelector("#alerts");

$(document).ready(function (){
    $("a").click(function (){
        alert.classList.add("show");
        
    })
})