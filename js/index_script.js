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

