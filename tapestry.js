var overview = document.getElementById("overview");
var winterr = document.getElementById("winterr");
var tot = document.getElementById("tot");
var CV = document.getElementById("CV");
var SoD = document.getElementById("SoD");
var extra = document.getElementById("extra");
var essa = document.getElementById("essa");


var currTab = overview

var stories = [
    {
        series:"overview",
        overview: `<p class="disclaimer">!!These pages will contain lore/spoilers about the characters and worlds. 
          If you would like to bug me to write faster you can reach me <a id="email" href="mailto:starfoxbutbusiness+bookcomplaints@gmail.com">here</a>!!</p>
          <h3> Tapestry Overview </h3>
          <p>The Main Tapestry storyline consists of the destruction and reawakening of magic.</p>`,
        characters: `nteb`,
        worldbuilding: {
            species: `breweqzxerdutefvitvyeivteivetitvv7trirbrbrtsg`,
            world: `brebrdhrftcvribunoyut4drcuiytvrbtyerciyvegrycthrcvyfgdsarhytucxytgdftsfhtgxyufhyu6xzegdsrghjtikugytuefsefhgytdrreggs`,
            religion: `breaxetvytbutrcstybetvyybrybudtvertvdhvtcvfvrffgfhge`,
            timeline: `brgeswqxrvyni,o,imk,yhdejghbbjkhlugdrhtjuikldsffegythuiklodsfgrhtyuiklobsergsn6`,
           }  
        
    },
    {
        series:"winterr",
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
        series:"CV",
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
        series:"SoD",
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
           },
    },


];

function openTab(element) {
    var open = document.getElementById(element.id + "Tab");
    element.style.display = "flex";
    open.classList.add("select");
    currTab = element;
}

function closeTab(element) {
    var close = document.getElementById(element.id + "Tab");
    close.classList.remove("select");
    element.style.display = "none";
    
   
}

function getOpen(element){
    var tab = document.getElementById(element.id + "Tab");
    tab.addEventListener("click", function() { 
        closeTab(currTab);
        openTab(element);
        putTab(currTab);
    });
};

getOpen(overview);
getOpen(winterr);
getOpen(tot)
getOpen(CV);
getOpen(SoD);
getOpen(extra);
getOpen(essa);

function putTab(element) {
    for(let i=0; i<stories.length; i++){
        if (currTab.id == stories[i].series){
        //set page content
        var page = document.getElementById(element.id + "pg");
        page.innerHTML = `
        ${stories[i].overview}
        <p>${stories[i].characters}<p/>
       <details> <summary>Worldbuilding</summary>
        ${stories[i].worldbuilding.timeline}<br/>
        ${stories[i].worldbuilding.world}<br/>
        ${stories[i].worldbuilding.species}<br/>
        ${stories[i].worldbuilding.religion}
        
        </details>

        `;
    }}
};
