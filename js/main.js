menu=document.querySelector("#menu-bar")
navbar=document.querySelector(".navbar")

menu.addEventListener("click", () =>{
    menu.classList.toggle("uil-times");
    navbar.classList.toggle("active");
})
window.onscroll =() =>{
    menu.classList.remove("uil-times");
    navbar.classList.remove("active");
}



loaderContainer =document.querySelector(".loader-container")
function loader() {
    
    loaderContainer.classList.add("fade-out")
}


function fadeOut() {
    setInterval(loader,1500)
}


window.onload =fadeOut()







