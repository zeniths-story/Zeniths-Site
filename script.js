var about = document.getElementById("Abt");
var headmates = document.getElementById("headmates");
var projects = document.getElementById("projects");
var winterr = document.getElementById("winterr");
var cv = document.getElementById("CV");
var sod = document.getElementById("SoD");
var extra = document.getElementById("extra");
var essa = document.getElementById("essa");
var overview = document.getElementById("overveiw");


var currTab = document.getElementsByClassName("select");

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
    //matchTab(element)
    tab.addEventListener("click", function() { 
       // closeTab();
        openTab(element);
    });
};

getOpen(about);
getOpen(headmates);
getOpen(projects);

//getOpen(winterr);
//getOpen(overview);
//getOpen(cv);
//getOpen(sod);
//getOpen(extra);
//getOpen(essa);

var tabList = [
    {
        tabName: "about",
    },
    {
        tabName: "headmates",
    },
    {
        tabName: "projects",
    },
    {
        tabName: "overview",
    },
    {
        tabName: "cv",
    },
    {
        tabName: "sod",
    },
    {
        tabName: "extra",
    },
    {
        tabName: "essa",
    },
    {
        tabName: "winterr",
    },
];

/*function matchTab(element){
    var tabNum = tabList[index]
    if () {
        console.log(element);
    } else {
        console.log("try again");
        console.log(element);
    }
}*/

/*
tell what tab we're on
> classes
open that tab
close all other tabs



*/