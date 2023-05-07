var position = 0;
        var navbar = document.getElementById("navbar")

        document.addEventListener("scroll", doSomething)

        function doSomething(){
            position = window.scrollY
            navbar.style.transition = "0.3s"

            if(position > 0){
                navbar.style.background = "black"
        } else{
            navbar.style.background = "transparent"
        }
    }

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))
