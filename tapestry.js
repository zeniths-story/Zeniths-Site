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
        overview: `<p class="disclaimer">!!These pages will contain lore/spoilers 
          about the characters and worlds. 
          If you would like to bug me to write faster you can reach me 
          <a id="email" href="mailto:starfoxbutbusiness+hurryTFup@gmail.com">here</a>!!</p>
          <h3> Tapestry Overview </h3>
          <p>The Main Tapestry storyline consists of the destruction and reawakening of magic.
            <br/><br/>
            ༄ = Main storyline<br/>
            ᨒ = Side Tapestry Story<br/>
            ⟢ = Other Non-Tapestry Stories<br/>

          </p>`,
        characters: ``,
        worldbuilding: {
            species: `The inteligent species are:`,
            world: `<h3>Nezro:<h3>
            		
                `,
            religion: `breaxetvytbutrcstybetvyybrybudtvertvdhvtcvfvrffgfhge`,
            timeline: `
                <div class="timelinePoint"> ~2017 CE/AD (Earth)/~1572 ME (Nezro)<br/>
                > ༄ Winterr Chronicles
                <ul>
                   <li>Awakening</li>
                   <li>Heritage</li>
                   <li>Legacy</li>
                </ul></div>
                
                <div class="timelinePoint">~1689 ME (Nezro)<br/>
                > ᨒ Loose Threads (Wip Name)<br/></div>

                <div class="timelinePoint">~389 LE (Nezro)<br/>
                > ༄ Threads of Time<br/></div>

                <div class="timelinePoint">~390 LE (Nezro)<br/>
                > ᨒ Changing Winds<br/></div>
                
                <div class="timelinePoint">~2637 CE/AD (Earth)/~505 LE(Nezro)/~1845 AD (Jifro)<br/>
                > ᨒ On the Other Side of the World<br/>
                > ᨒ On the Other Side of Us<br/></div>
                
                <div class="timelinePoint">~517 LE (Nezro)<br/>
                > ༄ Shades of Deceit</div>
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
       <h2>Timeline</h2>
        <div class="timeline">${stories[i].worldbuilding.timeline}</div><br/>
        ${stories[i].worldbuilding.world}<br/>
        ${stories[i].worldbuilding.species}<br/>
        ${stories[i].worldbuilding.religion}
        
        </details>

        `;
    }}
};
