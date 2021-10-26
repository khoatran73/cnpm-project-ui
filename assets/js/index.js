window.onload = function() {
    const header = document.querySelector("#header");
    const html = document.querySelector("html");
    // const navIcon = document.querySelector("#nav-icon");
    // const navBar = document.querySelector("#nav")

    document.addEventListener("scroll", function () {
        header.classList.add("header-fixed");
        let scrollY = html.scrollTop;
        if (scrollY === 0) {
            if (header.classList.contains("header-fixed")) {
                header.classList.remove("header-fixed");
            }   
        }
    })

    // navIcon.addEventListener("click", function () {
    //     if (navIcon.classList.contains("fa-bars")) {
    //         navBar.style.top = 0;
    //         navIcon.classList.remove("fa-bars");
    //         navIcon.classList.add("fa-times");
    //     } else {
    //         navBar.style.top = -100 + "vh";
    //         navIcon.classList.remove("fa-times");
    //         navIcon.classList.add("fa-bars");
    //     }
    // })

    

}