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
          <p>The Main Tapestry storyline consists of the destruction and reawakening of magic.
            <br/><br/>
            ༄ = Main storyline<br/>
            ᨒ = Side Tapestry Story<br/>
            ⟢ = Other Stories<br/>

          </p>`,
        characters: ``,
        worldbuilding: {
            species: `The inteligent species are:`,
            world: `brebrdhrftcvribunoyut4drcuiytvrbtyerciyvegrycthrcvyfgdsarhytucxytgdftsfhtgxyufhyu6xzegdsrghjtikugytuefsefhgytdrreggs`,
            religion: `breaxetvytbutrcstybetvyybrybudtvertvdhvtcvfvrffgfhge`,
            timeline: `
                ~2017 CE (Earth)/~1572 ME (Nezro)<br/>
                > ༄ Winterr Chronicles
                <ul>
                   <li>Awakening</li>
                   <li>Heritage</li>
                   <li>Legacy</li>
                </ul>
                <br/>
                ~1689 ME (Nezro)<br/>
                > ᨒ Loose Threads (Wip Name)<br/>
                <br/>
                ~389 LE (Nezro)<br/>
                > ༄ Threads of Time<br/>
                <br/>
                ~390 LE (Nezro)<br/>
                > ᨒ Changing Winds<br/>
                <br/>
                ~2637 CE (Earth)/~505 LE(Nezro)/~1845 AD (Jifro)<br/>
                > ᨒ On the Other Side of the World<br/>
                > ᨒ On the Other Side of Us<br/>
                <br/>
                ~517 LE (Nezro)<br/>
                > ༄ Shades of Deceit


            
            `}  
        
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
        ${stories[i].overview}<br/>
        ${stories[i].characters}
       <details> <summary>Worldbuilding</summary>
        ${stories[i].worldbuilding.timeline}<br/>
        ${stories[i].worldbuilding.world}<br/>
        ${stories[i].worldbuilding.species}<br/>
        ${stories[i].worldbuilding.religion}
        
        </details>

        `;
    }}
};
