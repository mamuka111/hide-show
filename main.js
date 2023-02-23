let button = document.querySelector("button")
let input = document.querySelector(".input")
button.addEventListener("click" , function(){
if(input.style.width === "0px"){
    input.style.width = "400px"
}else{
    input.style.width = "0px"
}
})