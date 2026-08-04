var winterr = document.getElementById("winterr");
var tot = document.getElementById("tot");
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
getOpen(tot)
getOpen(cv);
getOpen(sod);
getOpen(extra);
getOpen(essa);

var stories = [
    {
        series:"overview",
        overview: `<p class="disclaimer">!!These pages will contain lore/spoilers about the characters and worlds. 
          If you would like to bug me to write faster you can reach me <a id="email" href="mailto:starfoxbutbusiness+bookcomplaints@gmail.com">here</a>!!</p>
          <h3> Tapestry Overview </h3>
          <p>The Main Tapestry storyline consists of the destruction and reawakening of magic.</p>`,
        characters: ``,
        worldbuilding: {
            species: ``,
            world: ``,
            religion: ``,
            timeline: ``,
           }  
        
    },
    {
        series:"Winterr",
        overview: ``,
        characters: ``,
        worldbuilding: {
            species: ``,
            world: ``,
            religion: ``,
            timeline: ``,
           }  
    },
    {
        series:"tot",
        overview: ``,
        characters: ``,
        worldbuilding: {
            species: ``,
            world: ``,
            religion: ``,
            timeline: ``,
           }  
    },
    {
        series:"cv",
        overview: ``,
        characters: ``,
        worldbuilding: {
            species: ``,
            world: ``,
            religion: ``,
            timeline: ``,
           }  
    },
    {
        series:"sod",
        overview: ``,
        characters: ``,
        worldbuilding: {
            species: ``,
            world: ``,
            religion: ``,
            timeline: ``,
           }  
    },
    {
        series:"extra",
        overview: ``,
        characters: ``,
        worldbuilding: {
            species: ``,
            world: ``,
            religion: ``,
            timeline: ``,
           }  
    },
    {
        series:"essa",
        overview: ``,
        characters: ``,
        worldbuilding: {
            species: ``,
            world: ``,
            religion: ``,
            timeline: ``,
           }  
    },


];