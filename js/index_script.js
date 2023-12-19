var tablinks = document.getElementsByClassName("tab_link");
var tabcontents = document.getElementsByClassName("tab_contents");

function opentab(pTabName)
{
    for(tablink of tablinks)
    {
        tablink.classList.remove("active_link_about");
    }
    for(tabcontent of tabcontents)
    {
        tabcontent.classList.remove("active_tab_about");
    }
    event.currentTarget.classList.add("active_link_about");
    document.getElementById(pTabName).classList.add("active_tab_about");
}

