var about = document.getElementById("Abt");
var headmates = document.getElementById("headmates");
var winterr = document.getElementById("winterr");
var cv = document.getElementById("CV");
var sod = document.getElementById("SoD");
var extra = document.getElementById("extra");
var essa = document.getElementById("essa");
var overview = document.getElementById("overveiw");


var selected = document.getElementsByClassName("select");
var tabopen = 1;

/*function setPage(element) {
if (selected) {
    element.style.display = "flex";
    
} else {
   element.style.display = "none";
}
};*/

function openTab(element) {
    var tab = document.getElementById(element.id + "Tab");
    element.style.display = "flex";
    tab.classList.add("select");
    
}

function closeTab (element) {
    var tab = document.getElementById(element.id + "Tab");
    element.style.display = "none";
    tab.classList.remove("select");
}

function getOpen(element){
    var tab = document.getElementById(element.id + "Tab");
    tab.addEventListener("click", function() { 
        openTab(element)
        if (element == about) {
            tabopen = 1;
            closeTab(headmates);
        } else {
            tabopen = 2;
            closeTab(about);
        }
    });
};

getOpen(about);
getOpen(headmates);

//getOpen(winterr);
//getOpen(overview);
//getOpen(cv);
//getOpen(sod);
//getOpen(extra);
//getOpen(essa);