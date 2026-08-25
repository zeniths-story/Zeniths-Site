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
          <p>The Main Tapestry storyline consists of the destruction and reawakening of magic. </p>`,
        characters: ` ༄ = Main storyline<br/>
            ᨒ = Side Tapestry Story<br/>
            ⟢ = Other Non-Tapestry Stories (for now...?)<br/><br/>`,
        worldbuilding: {
            species: `The inteligent species are:
                <h3>Mi'kru'mir</h3>
                <h3>Hareni</h3>
                <h3>Zesper</h3>
                <h3>Antored</h3>
                
            `,
            world: `<h3>Nezro:</h3>
                 Name & Meaning: Nezro [Ne-say-row]
                 <h3>Jifro:</h3>
                 Name & Meaning: Jifro [he-fro]
                 <h3>Mamirye (Earth):</h3>
                 Name & Meaning: Mamirye [Maw-mear-yea] "place without magic"
            		
                `,
            religion: `breaxetvytbutrcstybetvyybrybudtvertvdhvtcvfvrffgfhge`,
            timeline: `
                <div class="timelinePoint"> ~2017 CE/AD (Earth)/<br/>~1572 ME (Nezro)<br/>
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
                
                <div class="timelinePoint">~2637 CE/AD (Earth)/<br/>~505 LE(Nezro)/<br/>~1845 AD (Jifro)<br/>
                > ᨒ On the Other Side of the World<br/>
                > ᨒ On the Other Side of Us<br/></div>
                
                <div class="timelinePoint">~517 LE (Nezro)<br/>
                > ༄ Shades of Deceit</div>
            `}  
        
    },
    {
        series:"winterr",
        overview: `<h3> Winterr Chronicles Overview </h3>
          <p>The Winterr Chronicles follow Ari Winterr as her 
          powers awaken and she discovers what she really is.<br/>
           <details> <summary>Awakening summary</summary> 
               On Ari Winterr's thirteenth birthday she awakes to find animal-like 
               ears on top of her head and a big fluffy tail have appeared. 
               On top of that her hair has turned purple. This isn't exactly the first impression she 
               wanted to give on her first day at a new school. A couple weeks later her new 
               friends also awaken with strange powers. The trio vows to use their powers for good but
               don't realize what that'll entail once their class gets roped into a real-live supervillan's scheme.

           </details> <br/>
           <details> <summary>Heritage summary</summary> 
                With the fight's interuption with her aunt and uncle, 
                no one is more confused than Ari's Dad. Having already confronted them, 
                he's not excited to have to do that again. However, they're more powerful
                now than when they were kids, and now they have a whole diety on their side. 
                Ari's going to have to find a way back to the place where she was born and confront the 
                beings ruling the world in order to save both realms.

           </details><br/>
           <details> <summary>Legacy summary</summary> 
                All Ari wants now is to finish human highschool, spend time with her now-huge family, 
                and learn more aout what it means to be zesper. However tension is building in the Winterr
                kingdom and there is increasingly more evidence of an uprising from a rebel zesper group.
                Ari's pleas for the rest of her life to be simple go unanswered as she's tasked with 
                an insanely difficult choice. Will she make the right one and save both of her kingdoms?

           </details>
          </p>`,
        characters: `
           <details> <summary>Awakening Characters</summary>
            Ari Winterr<br/>
            Age: 13<br/>
            Species: Zesper<br/>
                Ari is very friendly but quite reserved as well. She's been homeschooled for most of her 
                life and this is the first year she'll be going to public school. Ari loves art and drawing, 
                particularly she likes drawing animals. Ari also loves reading, her favorite genres 
                are fantasy and sci-fi.
            <br/><br/>

            Holly Prince<br/>
            Age: 12 <br/>
            Species: Human (Mostly)<br/>
            Holly is the energy of the trio. She's always bouncing off the walls or ranting about something.
            Holly is super sensitive and her emotions can change in a moment's notice. She's also super smart 
            and has an exellent memory.
            <br/><br/>

            Grace Smith<br/>
            Age: 13 <br/>
            Species: Human (Mostly)<br/>
                A calm girl, Grace is the mediator of the trio. She's also a big anime and manga fan.
                When her sheild power awakens she's both completely estatic and absolutely terrified.

            <br/><br/>

           </details> <br/>
           <details> <summary>Heritage Characters</summary> 
            Ari Winterr<br/>
            Age: 13<br/>
            Species: Zesper<br/>
                Ari is very protective and outgoing. She firmly believes with her friends she can do anything. 
                Now that she's gotten control over most of her powers, she hopes she can make the world a
                kinder, and therefore safer, place to live.
            <br/><br/>

            Holly Prince<br/>
            Age: 13 <br/>
            Species: Human (Mostly)<br/>
            Holly is still as energetic as ever. She loves helping people and with her speed she 
            can help more people in less time. Holly is super sensitive and her emotions can change in a moment's notice. She's also super smart 
            and has an exellent memory.
            <br/><br/>

            Grace Smith<br/>
            Age: 14 <br/>
            Species: Human (Mostly)<br/>
                A calm girl, Grace is the mediator of the trio. She's also a big anime and manga fan.
                When her sheild power awakens she's both completely estatic and absolutely terrified.

            <br/><br/>

           </details><br/>
           <details> <summary>Legacy Characters</summary> 

           </details><br/>
        
        `,
        /*
            name lastn<br/>
            age (at start of book/series)<br/>
            species<br/>
            desc of char<br/><br/>
            */
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
        ${stories[i].characters}<br/>
       <details> <summary>Worldbuilding</summary>
       <h2>Timeline</h2>
        <div class="timeline">${stories[i].worldbuilding.timeline}</div><br/>
        ${stories[i].worldbuilding.world}<br/><br/>
        ${stories[i].worldbuilding.species}<br/><br/>
        ${stories[i].worldbuilding.religion}
        
        </details>

        `;
    }}
};
