// TODO: When refreshing the page, make sure that it loads back 
// to the top of the page. Right now, browser refreshes page and 
// scrolls down to where user had scrolled before.

let scrollPosition = 0;

function openMenu() {
    console.log("OPEN MENU: ---------------");
    scrollPosition = window.scrollY;
    document.body.style.marginTop = `-${scrollPosition}px`;
    document.getElementById("menu").style.width = "250px";
    document.getElementById("overlay").style.display = "block";
}

function closeMenu() {
    console.log("CLOSE MENU: ---------------");
    document.body.style.marginTop = ``;
    window.scrollTo(0, scrollPosition);
    document.body.style.top = "";
    document.getElementById("menu").style.width = "0";
    document.getElementById("overlay").style.display = "none";
}

