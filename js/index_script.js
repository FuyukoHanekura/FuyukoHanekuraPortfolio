var tablinks = document.getElementsByClassName("tab_link");
var tabcontents = document.getElementsByClassName("tab_contents");

function opentab(pTabName)
{
    for(tablink of tablinks)
    {
        tablink.classList.remove("active_link");
    }
    for(tabcontent of tabcontents)
    {
        tabcontent.classList.remove("active_tab");
    }
    event.currentTarget.classList.add("active_link");
    document.getElementById(pTabName).classList.add("active_tab");
}

window.onscroll = function() {
    // Get the navigation bar element
    var navBar = document.querySelector('nav');

    // Check if the user has scrolled beyond the header
    if (window.scrollY > document.querySelector('header').offsetHeight) {
        // If yes, add the fixed-nav class
        navBar.classList.add('fixed-nav');
    } else {
        // If no, remove the fixed-nav class
        navBar.classList.remove('fixed-nav');
    }
};