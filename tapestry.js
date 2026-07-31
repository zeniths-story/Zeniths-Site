var winterr = document.getElementById("winterr");
var cv = document.getElementById("CV");
var sod = document.getElementById("SoD");
var extra = document.getElementById("extra");
var essa = document.getElementById("essa");
var overview = document.getElementById("overview");

var currTab = overview

function openTab(element) {
    var tab = document.getElementById(element.id + "Tab");
    element.style.display = "flex";
    tab.classList.add("select");
    currTab = element
}

function closeTab (element) {
    var tab = document.getElementById(element.id + "Tab");
    element.style.display = "none";
    tab.classList.remove("select");
   
}

function getOpen(element){
    var tab = document.getElementById(element.id + "Tab");
    tab.addEventListener("click", function() { 
        closeTab(currTab);
        openTab(element);
    });
};

getOpen(winterr);
getOpen(overview);
getOpen(cv);
getOpen(sod);
getOpen(extra);
getOpen(essa);