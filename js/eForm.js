/*Essence-FORM (javascript)
    JavaScript for Web Applications for Essence of Zen
    Http://EssenceOfZen.org/
        - Zane "ZenOokami" Blalock
    Version: --
    License:

    Directions:

    Thank yous:


    Notes:
        

    Table of Contents

*/


function test() {
    console.log("test");
}

// Adjust elements to react to the sticky navbar
function adjustBaseElements() {
    var navbar_offset_height = document.getElementById("navBar").offsetHeight;
    var base_content = document.getElementById('baseContent');
    var base_content_offset_height = base_content.offsetHeight;
    var footer = document.getElementById('footer');
    var footer_offset_height = footer.offsetHeight;


    document.getElementById("sideNav").style.top = navbar_offset_height;
    document.getElementById("sideOption").style.top = navbar_offset_height;

    /* Making sure the footer is always at the bottom of the screen - because we have 3 major elements to consider 
        (Navbar, main content in body and footer) we check for those 3 offset heights and recalculate the sizing.
    */
    if(base_content_offset_height < window.innerHeight){
        console.log("adjustBaseElements() was called")
        // console.log(base_content_offset_height);
        // console.log(window.innerHeight);

        /* NodeJS includes the footer WITHIN the body tag, so the '- footer_offset_height' actually ruins the calculations */
        base_content.style.height = (window.innerHeight - navbar_offset_height - footer_offset_height) + "px";
        // base_content.style.height = (window.innerHeight - navbar_offset_height ) + "px";
        // console.log(base_content.style.height);
    }

}

function navbarShadow() {
    var offset = document.getElementById("navBar").offsetHeight;
    if (window.pageYOffset > offset) {
        document.getElementById("navBar").style.boxShadow = "0px 2px 10px #333333";
        // document.getElementById("navBar").style.position = "fixed";
    } else {
        document.getElementById("navBar").style.boxShadow = "0px 0px 0px #333333";
        // document.getElementById("navBar").style.position = "absolute";
    }
}

// Popup menus
//  Would it be better to not use element_id but rather the element object as the parameter instead?
function showPopupMenu(element_id) {
    var element = document.getElementById(element_id);
    element.style.opacity = 1;
    element.style.top = (window.outerHeight / 3.5) + window.pageYOffset;
}

function hidePopupMenu(element_id) {
    var element = document.getElementById(element_id);
    element.style.opacity = 0;
    element.style.top = -1000;
}

// Phantom Menus
function showPhantomMenu(element_id){
    var element = document.getElementById(element_id);
    element.style.top = (window.outerHeight / 3.5) + window.pageYOffset;
    element.style.visibility = "visible";
    element.style.opacity = "1";
}

function hidePhantomMenu(element_id){
    var element = document.getElementById(element_id);
    element.style.opacity = "0";
    element.style.visibility = "hidden";
}

// Side Panel - Covers the Screen
function openSidePanelCover(navigation_id, nav_width) {
    document.getElementById(navigation_id).style.width = nav_width;
}

function closeSidePanelCover(navigation_id) {
    document.getElementById(navigation_id).style.width = 0;
}

function toggleSidePanelCover(navigation_id, nav_width) {
    var current_nav_width = document.getElementById(navigation_id).style.width;
    console.log(current_nav_width);
    if (current_nav_width < nav_width || current_nav_width == "" || current_nav_width == null) {
        openSidePanelCover(navigation_id, nav_width);
    } else {
        closeSidePanelCover(navigation_id);
    }
}

// Side Panel - Pushes the Screen
function openSidePanelPush(navigation_id, base_content, nav_width) {
    document.getElementById(navigation_id).style.width = nav_width;
    document.getElementById(base_content).style.marginLeft = nav_width;
}

function closeSidePanelPush(navigation_id, base_content) {
    document.getElementById(navigation_id).style.width = 0;
    document.getElementById(base_content).style.marginLeft = 0;
}

function toggleSidePanelPush(navigation_id, base_content){
    var current_nav_width = document.getElementById(navigation_id).style.width;
    console.log(current_nav_width);
    if(current_nav_width > 0 && document.getElementById(base_content).style.width > 0){
        closeSidePanelPush(navigation_id, base_content);
    }else{
        openSidePanelPush(navigation_id, base_content);
    }
}