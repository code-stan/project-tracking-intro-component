const menuObj = {
    openMenu : "./images/icon-hamburger.svg",
    closeMenu : "./images/icon-close.svg"
}

const openMenu = document.querySelector(".menu-control");
const hamMenu = document.querySelector(".menu-img");
const navBar = document.querySelector(".nav");

openMenu.addEventListener("click", (e)=>{
    if(openMenu.getAttribute("data-open") === "true"){
        hamMenu.src = menuObj.closeMenu;
        openMenu.setAttribute("data-open", "false");
        navBar.classList.add("active")
    }
    else if(openMenu.getAttribute("data-open") === "false"){
        hamMenu.src = menuObj.openMenu;
        openMenu.setAttribute("data-open", "true");
        navBar.classList.remove("active")

    }

})