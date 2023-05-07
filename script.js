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