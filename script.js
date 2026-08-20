var about = document.getElementById("Abt");
var headmates = document.getElementById("headmates");
var projects = document.getElementById("projects");
var blog = document.getElementById("blog");

var currTab = about;

function openTab(element) {
    var tab = document.getElementById(element.id + "Tab");
    element.style.display = "flex";
    tab.classList.add("select");
    currTab = element;
    
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

getOpen(about);
getOpen(headmates);
getOpen(projects);
getOpen(blog);

var headmates = [
    {
        name:"Name",
        pronouns: "Pronouns",
        role: "Role (if any)",
        firstNoted: `[Date], approx when they showed up/we noticed in headspace.<br/>
        !!Evi Doesn't have one because they hosted for so long we arn't 
        sure the exact date star showed up!!`,
        gender: "Gender",
        age:"In-sys Age",
        quote: "May or may not have a quote/song lyrics here",
        species: "In-sys Species",
        origin:`Origins:<br/>
        >Willowgenic: Created on purpose<br/>
        >Brainmade: not based off pre-existing media<br/>
        >Introject: based off pre-existing media or people.<br/>
        <span id="red">!!Introjects have no control over their source. 
        Introjects will have varying degrees of source attachment. 
        Don't immeditely assume an introject wants to be treated or acts like their source!!</span><br/>
        >>Fictive: based off a fictional character/person<br/>
        >>>OCtive: based off an OC (Original Character)<br/>
        >>>Songtive: based off one or more songs<br/>
        >>Factive: based off a real-life person or thing<br/>
        >>Faitive: mix of fictive & factive traits
        `,
        misc:"Miscalanious info such as important relations",
        links: `Links to playlists/Voice Claims/Any link they want to put here<br/>
        Picrew credits:<br/>
        <a href="https://picrew.me/en/image_maker/2795963" target="blank">>Ari-1</a><br/>
        <a href="https://picrew.me/share?cd=XyauBKLFfK" target="blank">
        >Ari-2, Asher, Charly, Danger-1, Evi, Opal, Reid, Rylen, Theo, Ves, Zenith-2</a><br/>
        <a href="https://picrew.me/share?cd=p2jKx7aTt8" target="blank">>Ash, Lumi, Tina-2</a><br/>
        <a href="https://picrew.me/share?cd=oxGaGfBTJb" target="blank">>Az, Danger-2, Rowan, Zane</a><br/>
        <a href="https://picrew.me/share?cd=mlczI0ex0G" target="blank">>Evyn, Kai, Quill, Zenith-1</a><br/>
        <a href="https://picrew.me/share?cd=qT2x5gDBRc" target="blank">>Fletcher</a><br/>
        <a href="https://picrew.me/share?cd=UjQo8cvPL6" target="blank">>Hart</a><br/>
        <a href="https://picrew.me/share?cd=nPKi5s6xWi" target="blank">>Luna-1</a><br/>
        <a href="https://picrew.me/share?cd=J6BxsGC9Mq" target="blank">>Luna-2</a><br/>
        <a href="https://picrew.me/en/image_maker/1904634" target="blank">>Luna-3</a><br/>
        <a href="https://picrew.me/share?cd=SHbTH7668e" target="blank">>Rocky</a><br/>
        <a href="https://picrew.me/share?cd=eXBRA6ANXt" target="blank">>Ryon, Silveny, Tina-1</a><br/>
        <a href="https://picrew.me/share?cd=vgI4HWPR1s" target="blank">>Texas</a><br/>
        
        `,

        pictures: `Pictures go here<br/> 
        Still working on geting pics for Cat, Hades, and Zer0 
        <img src="hmpics/zen-picrew.png">
        Zenith-1<img src="hmpics/zen-2.png">Zenith-2 `,
    },
    {
        name:"Ari",
        pronouns: "She/They",
        role: "",
        firstNoted: "July 12, 2026",
        gender: "Girl",
        age:"13",
        quote: "",
        species: "Foxkin (Zesper)",
        origin:"OCtive - 1st draft of Zesper Chronicles",
        misc: `I prefer being called the old term of "foxkin" 
        because thats wat we first called it before switching to zesper. 
        Also I don't have any of the nerfs the zespers have 
        due to our new worldbuilding. ¬⩊¬<br/>
        Friends: Nova :D
        `,
        links: "",
        pictures: `<img src="hmpics/ari-1.png"> Best picture  
        <img src="hmpics/ari-2.png"> Take away Human ears `,
    },
    {
        name:"Asher",
        pronouns: "They/Pup/Dream/He",
        role: "",
        firstNoted: "March 24, 2026",
        gender: "Agender",
        age:"16",
        quote: "",
        species: "Human",
        origin:"Brainmade",
        misc:"Friends: Evi",
        links: "",
        pictures: `<img src="hmpics/asher.png">`,
    },
    {
        name:"Ash",
        pronouns: "It/Sie",
        role: "Little",
        firstNoted: "May 30, 2026",
        gender: "Girl",
        age:"5",
        quote: "",
        species: "Human",
        origin:"Brainmade",
        misc: `Caretaker: Az<br/>
        Friends: Silveny, Lumi`,
        links: "",
        pictures: `<img src="hmpics/ash.webp">`,
    },
    {
        name:"Az",
        pronouns: "She/They",
        role: "Caretaker/SysMom",
        firstNoted: "May 16, 2026",
        gender: "",
        age:"27",
        quote: "",
        species: "Human",
        origin:"Brainmade",
        misc: `As the sysmom I tend to take care of everyone and be a general comforter.<br/>
        Family: Danger, Zane, Ethan<br/>
        Friends: Rowan <br/>
        Caretaker of: Ash, Vesper`,
        links: "",
        pictures: `<img src="hmpics/Az.webp">`,
    },
    {
        name:"Cat",
        pronouns: "She/Her",
        role: "",
        firstNoted: "January 28, 2026",
        gender: "Female",
        age:"Adult",
        quote: "",
        species: "Cat",
        origin:"Brainmade - Willowgenic?",
        misc: `Bestie: Theo<br/>
        Friend: Lumi
        `,
        links: ``,
        pictures: "no pic yet...",
    },
    {
        name:"Charly",
        pronouns: "He/They/She",
        role: "",
        firstNoted: "June 14, 2026",
        gender: "Bigender (boy/girl)",
        age:"16",
        quote: "",
        species: "Werewolf (<i>Wolf Children</i> style)",
        origin:"Brainmade",
        misc: `Hi, I'm Charly! I'm very energetic and appeared right around 
        when Evyn (my beautiful partner) appeared! 
        I tend to stay with fur and generally keep howls spirits up!<br/>
        Dating: Evyn`,
        links: `<a href="https://open.spotify.com/playlist/1ICjZ7JwC8z46ERScw3wfW" target="blank">
        Voice Claim/Playlist</a>`,
        pictures: `<img src="hmpics/charly.png">`,
    },
    {
        name:"Danger",
        pronouns: "He/They",
        role: "",
        firstNoted: "May 2, 2026",
        gender: "",
        age:"16",
        quote: "",
        species: "Explosion/Chaos God",
        origin:"Brainmade",
        misc: "Family: Az",
        links: `<a href="https://open.spotify.com/playlist/46zHm8sxmKftu1TAzKGEvS" target="blank">
        God Complex (playlist)</a>`,
        pictures: `<img src="hmpics/danger-1.png"><img src="hmpics/danger-2.png">`,
    },
    {
        name:"Ethan",
        pronouns: "He/Him",
        role: "Tech Crew",
        firstNoted: "July 5, 2026",
        gender: "Boy",
        age:"19",
        quote: "",
        species: "Human",
        origin:"Brainmade",
        misc:`Hi, I'm a big techie and tend to do some of the coding around here with Hart.<br/>
        Family: Az, Zane`,
        links: ``,
        pictures: `<img src="hmpics/ethan.png">`,
    },
    {
        name:"Evi",
        pronouns: "They/Star/She",
        role: "Host",
        firstNoted: "",
        gender: "Agender Girlflux",
        age:"16",
        quote: `They told me I was vital in the plan to save my life 
        so I promised mine in hope I'd be the one holding the knife | 
        Heaven's Gate - Amélie Farren`,
        species: "Enderman",
        origin:"Brainmade",
        misc:`I'm like the "core" you could say. 
        However I definitly don't think thats like a thing.
        If you belive in that though I definitly don't think I'm the "original" either. 
        I just split a lot of sysmates.<br/>
        Friends: Asher, Theo, Ryon, Quill`,
        links: ``,
        pictures: `<img src="hmpics/evi.png">`,
    },
    {
        name:"Evyn",
        pronouns: "Fur/Paw/Hunt/Howl",
        role: "",
        firstNoted: "June 12, 2026",
        gender: "WolfGender",
        age:"16",
        quote: "",
        species: "Werewolf (<i>Wolf Children</i> style)",
        origin:"Brainmade",
        misc:`I will bark at you.<br/>
        Dating:Charly`,
        links: ``,
        pictures: `<img src="hmpics/evyn.jpg">`,
    },
    {
        name:"Fletcher",
        pronouns: "They/He",
        role: "",
        firstNoted: "August 2, 2026",
        gender: "Gendervoid",
        age:"13-14",
        quote: "",
        species: "Human?",
        origin:"Brainmade",
        misc:`Hi! I'm new! uh, you can call me either fletch or fletcher idc <br/>
        I like arrows n stuff<br/>
        Friends: Tommy`,
        links: ``,
        pictures: `<img src="hmpics/fletch.png">`,
    },
    {
        name:"Hades",
        pronouns: "He/Him",
        role: "",
        firstNoted: "July 16, 2026",
        gender: "Male",
        age:"Adult",
        quote: "",
        species: "Semi-realistic Minecraft Woods Wolf",
        origin:"Minecraft Woods Wolf",
        misc:`Can often be seen with Tommy (-Null)<br/>
        Bestie: Tommy<br/>
        Friend: Lumi`,
        links: ``,
        pictures: "no pic yet...",
    },
    {
        name:"Hart",
        pronouns: "She/They",
        role: "Tech Elf",
        firstNoted: "June 26, 2026",
        gender: "Girlvoid",
        age:"17",
        quote: "",
        species: "Elf (semi-KotLC)",
        origin:"Brainmade",
        misc:"Friend: Rylen, Reid",
        links: ``,
        pictures: `<img src="hmpics/hart.png">`,
    },
    {
        name:"Kai",
        pronouns: "Glitch/Void/They/He",
        role: "",
        firstNoted: "April 7, 2026",
        gender: "Robotgender",
        age:"15",
        quote: `Am I a robot of a doll, 
        am I anything at all maybe a flaw like me doesn't 
        deserve to know hunching over standing tall 
        I lost my identity so very long ago | Language of the Lost - Riproducer`,
        species: "Holographic Assistant",
        origin:"Brainmade",
        misc:"Dormant?",
        links: ``,
        pictures: `<img src="hmpics/kai.webp">`,
    },
    {
        name:"Lumi",
        pronouns: "She/They",
        role: "Joy/Childhood Holder",
        firstNoted: "March 30, 2026",
        gender: "Girl",
        age:"7",
        quote: `Take a short moment to gather your thougts,
        your head and your heart are just one foot apart | Head and Hart - TV Room`,
        species: "Human",
        origin:"Brainmade",
        misc:`Family: Rowan, Silveny, Theo<br/>
        Friends: Cat, Ash, Ryon, Quill, Hades, Tommy`,
        links: ``,
        pictures: `<img src="hmpics/lumi.png">`,
    },
    {
        name:"Luna",
        pronouns: "She/Any",
        role: "",
        firstNoted: "July 29, 2026",
        gender: "Girl",
        age:"16 (regresses to 12)",
        quote: `love falls like the rain,
        but my feelings never dried for you | Red Pack - Kevian Kraemer<br/><br/>
        Ignorance means nothing to find,
        lost things go where eyes avoid and I was made to be destroyed, 
        I'm losing my mind | Losing my Mind - Amélie Farren`,
        species: "Human",
        origin:"Brainmade",
        misc:`New, Quiet girl, pretty nice (-Null)`,
        links: `<a href="https://open.spotify.com/playlist/3b0M1S2ZfzmdwlhN7JTBg9" target="blank">Luna's Likes (playlist)<a/>`,
        pictures: `<img src="hmpics/luna-1.png"> This one's best 
        <img src="hmpics/luna-2.png">
        <img src="hmpics/luna-3.png">`,
    },
    {
        name:"Nova",
        pronouns: "Any",
        role: "",
        firstNoted: "July 17, 2026",
        gender: "No",
        age:"Ageless",
        quote: "",
        species: "Star-thing",
        origin:"Brainmade",
        misc:`My bestie and I are the best alters in here ¬ᴗ¬ sorry not sorry 𓁹‿𓁹
        <br/>Bestie:Ari`,
        links: ``,
        pictures: `<img src="hmpics/nova.jpg"> Drawn by yours truly :3`,
    },
    {
        name:"Null",
        pronouns: "They/Void/Null",
        role: "Caretaker/Protector",
        firstNoted: "July 9, 2026",
        gender: "Sure",
        age:"Adult",
        quote: "The most basic form of mind control is repetition.",
        species: "Void",
        origin:"Brainmade",
        misc:``,
        links: ``,
        pictures: `<img src="hmpics/nova-1.png"> True form 
        <img src="hmpics/nova-2.png"> human-esqe form`,
    },
    {
        name:"Opal",
        pronouns: "She/They",
        role: "",
        firstNoted: "July 6, 2026",
        gender: "Demi-girl",
        age:"16",
        quote: "",
        species: "Human",
        origin:"Brainmade",
        misc:`You can call me Evy or Evelyn as well as Opal ^-^<br/>
        `,
        links: ``,
        pictures: `<img src="hmpics/opal-1.png">
        <img src="hmpics/opal-2.jpg"><img src="hmpics/opal-3.jpg">`,
    },
    {
        name:"Quill",
        pronouns: "They/Xe/Fae/Forest/Mountain",
        role: "Host",
        firstNoted: "June 3, 2026",
        gender: "Forestgender/Autumngender",
        age:"16",
        quote: `All the fake shit, where's your Oscar? 
        Wearin' my name like a collar, threw you a bone just to get scratched,
         meet my canines (Bitch I bite back) | HOUNDSOFHELL - Mad Tsai 
         <br/><br/>
         What if its midnight driving, 
         what if its heart rates rising,
         what if I stay when you want me to go? 
         Yeah, these things never happened to no one. 
         What if its hypnotizing, what if we just can't hide it, 
         what if our love's straight up cinematic, 
         I wanna watch how it happens | Cinematic - Will Linley`,
        species: "Fairy",
        origin:"Brainmade",
        misc:`Friends: Evi, Lumi`,
        links: ``,
        pictures: `<img src="hmpics/quill.webp">`,
    },
    {
        name:"Reid",
        pronouns: "He/She",
        role: "",
        firstNoted: "June 24, 2026",
        gender: "Bigenderfluid (Boy/Girl)",
        age:"17",
        quote: `Too much, too much, people complain too much
        Hate me but that's not my concern | Right Now - Confetti
        <br/><br/>
        I'm not phased by the things you gotta say
        I guess I got my head in the clouds | Right Now - Confetti`,
        species: "Human",
        origin:"Brainmade",
        misc:`Friends: Ry(len), Hart`,
        links: `<a href="https://pin.it/7Fz1GQSIM" target="blank">Draw me in these please!!</a><br/>
        <a href="https://open.spotify.com/playlist/4n8UrKarVgxTa7Isl90yG0" target="blank">
        Reid's Tunes</a>`,
        pictures: `<img src="hmpics/reid.png">`,
    },
    {
        name:"Rocky",
        pronouns: "Th♪y/H♪ (They/He)",
        role: "",
        firstNoted: "June 1, 2026",
        gender: "",
        age:"Adult",
        quote: `"Words of <em>great</em> encouragement!" Rocky - Project Hail Mary`,
        species: "Eridian",
        origin: "Rocky - Project Hail Mary (Movie)",
        misc:``,
        links: ``,
        pictures: `<img src="hmpics/rocky.webp">`,
    },
    {
        name:"Rowan",
        pronouns: "He/Him",
        role: "Caretaker/Protector",
        firstNoted: "March 28, 2026",
        gender: "Non-binary on the male side",
        age:"28",
        quote: `whether you think you can or you think you can't, you're right. | 
        Listen, smile, agree, 
        then do whatever the fuck you were going to do anyway. -RDJ`,
        species: "Demon",
        origin:"Brainmade",
        misc:`Friends: Az <br/>
        Family: Lumi`,
        links: `<a href="https//music.amazon.com/albums/B0DF8VMY2J" target="blank">
        Voice Claim</a>`,
        pictures: `<img src="hmpics/rowan.webp">`,
    },
    {
        name:"Rylen",
        pronouns: "He/They",
        role: "",
        firstNoted: "June 17, 2026",
        gender: "Genderqueer",
        age:"17",
        quote: `I'll tell you the story of a warrior 
        who fought the fight of love, 
        with every wound he wore he raised his sword 
        and marched through tears and blood | 
        Story of a Warrior - John Michael Howell`,
        species: "Human",
        origin:"Brainmade",
        misc:`So I'm a knight,<br/>
        Friends: Hart, Reid`,
        links: `<a href="https://www.tiktok.com/t/ZP8Gj9jaU" target="blank">
        Voice Claim (First Voice)</a>`,
        pictures: `<img src="hmpics/rylen.png">`,
    },
     {
        name:"Ryon",
        pronouns: "He/They",
        role: "",
        firstNoted: "March 28, 2026",
        gender: "Boy",
        age:"15",
        quote: "",
        species: "Human",
        origin:"Brainmade",
        misc:`I love Calzones! If you get one near us, I <em>will</em> front.
        Friends:Lumi, Theo, Evi`,
        links: ``,
        pictures: `<img src="hmpics/ryon.webp">`,
    },
    {
        name:"Silveny",
        pronouns: "She/Her",
        role: "Little",
        firstNoted: "June 10, 2026",
        gender: "Girl",
        age:"5",
        quote: "",
        species: "Human",
        origin:"Brainmade",
        misc:`Family:Lumi<br/>
        Friends:Ash`,
        links: ``,
        pictures: `<img src="hmpics/silveny.png">`,
    },
    {
        name:"Texas",
        pronouns: "He/Him",
        role: "",
        firstNoted: "June 16, 2026",
        gender: "Boy",
        age:"34",
        quote: "",
        species: "Human",
        origin:"Brainmade",
        misc:`Texas, Dakota, The Cowboy, any work for me. 
        (He also really likes the library for some reason. -Null, Evi)`,
        links: ``,
        pictures: `<img src="hmpics/texas.png">`,
    },
    {
        name:"Theo",
        pronouns: "He/They",
        role: "",
        firstNoted: "May 17, 2026",
        gender: "Boy",
        age:"13",
        quote: "",
        species: "Human",
        origin:"Brainmade",
        misc:`I like animes! :> <br/>
        Family: Lumi<br/>
        Bestie: Cat<br/>
        Friends: Ryon, Evi, Tommy`,
        links: ``,
        pictures: `<img src="hmpics/theo-1.png"><img src="hmpics/theo-2.jpg">`,
    },
    {
        name:"Tina",
        pronouns: "She/They",
        role: "",
        firstNoted: "May 18, 2026",
        gender: "Girl",
        age:"27",
        quote: `Fame is a gun and I point it blind, 
        crash and burn girl baby swallow it blind 
        you got a front row seat and I, 
        I got a taste of the glamorous life 
        love is a drug that I can't deny, 
        I'm your dream girl but you're not my type
        you got a front row seat and I, 
        I got a taste of the glamorous life | 
        Fame is a Gun -Addison Rae
        <br/><br/>
        (Don't hate the girl, 
        just hate the crime) 
        oh forgive me lord 
        oh I'm a good girl, 
        I'd never hurt a fly, 
        but I've got walls to climb 
        oh, forgive me lord, 
        oh a minor chord, 
        you put me in this house, 
        I had to crawl right out, 
        run rabbit, run rabid | 
        Run Rabbit - Mollie Elisabeth`,
        species: "Human",
        origin:"Songtive - Necromancer-Legrand",
        misc:`Don't hurt the body...`,
        links: `<a href="https://open.spotify.com/playlist/13GphB6UQ7T79BTCtGhYO9" target="blank">
        Tina's Playlist</a>`,
        pictures: `<img src="hmpics/tina-1.png"><img src="hmpics/tina-2.png">`,
    },
    {
        name:"Tommy",
        pronouns: "He/Him",
        role: "",
        firstNoted: "July 14, 2026",
        gender: "Boy",
        age:"Slider 16-22",
        quote: `"Who am I without you?" -Me<br/>
        "Yourself." -Tubbo (My Bsf)`,
        species: "Human",
        origin:"Faitive - Tommyinnit/Tom Simons",
        misc:`If I'm fronting, please don't treat me like the actual Tom Simons! 
        I will refer to us as the same person, but I'm aware we are fundamentally different.<br/>
        Bestie: Hades<br/>
        Friends: Theo, Lumi, Fletch`,
        links: `<a href="https://open.spotify.com/playlist/1f9mlzalrqvLP5w6AB5D8j" target="blank">
        Tommy's Jams</a>`,
        pictures: `<img src="hmpics/tommy.jpg"> Art by @Shmeckdoesstuff on twitter`,
    },
    {
        name:"Ves",
        pronouns: "Night/Star/Void",
        role: "Guilt/Fear Holder",
        firstNoted: "April ??, 2026",
        gender: "Agender",
        age:"17",
        quote: "",
        species: "Fallen Angel",
        origin:"Brainmade",
        misc:`I'm learning to be better.<br/>
        Caretaker: Az`,
        links: ``,
        pictures: `<img src="hmpics/ves.png">
        <img src="hmpics/ves-3.png">
        Super awesome ArtFight attack drawn by my bestie @nameless_vessel <3 (-Nova)
        <img src="hmpics/ves-2.jpg"> 
        ArtFight Attack by @mikkiasie`,
    },
    {
        name:"Zane",
        pronouns: "They/Them",
        role: "",
        firstNoted: "June 19, 2026",
        gender: "Non-Binary",
        age:"18",
        quote: "",
        species: "Human",
        origin:"Brainmade",
        misc:` Hi, I'm Zane. I'm pretty chill and I help Mom with the littles.
        <br/>Family: Az, Ethan`,
        links:``,
        pictures: `<img src="hmpics/zane.png">`,
    },
    {
        name:"Zer0",
        pronouns: "They/Axis/Orbit",
        role: "",
        firstNoted: "August 13, 2026",
        gender: "",
        age:"Ageless",
        quote: "",
        species: "Gravity",
        origin:"Brainmade",
        misc:``,
        links:``,
        pictures: `no pic yet...`,
    },
    
];


function addToList(index){
    var list = document.getElementById("list");
    var hminfo = headmates[index];
    var newDiv = document.createElement("div");
    newDiv.innerHTML= `${hminfo.name}<p></p>`;

    newDiv.addEventListener("click", function(){
        sethmCont(index);
    });
    list.appendChild(newDiv);
};

for(let i=0; i<headmates.length; i++){
    addToList(i);
}

function sethmCont(index){
    var name = document.getElementById("name");
    var pronouns = document.getElementById("pronouns");
    var role = document.getElementById("role");
    var firstNoted = document.getElementById("firstNoted");
    var gender = document.getElementById("gender");
    var age = document.getElementById("age");
    var quote = document.getElementById("quote");
    var species = document.getElementById("species");
    var origin = document.getElementById("origin");
    var misc = document.getElementById("misc");
    var links = document.getElementById("links");
    var pict = document.getElementById("pictures")

    name.innerHTML = headmates[index].name;
    pronouns.innerHTML = headmates[index].pronouns;
    role.innerHTML = headmates[index].role;
    firstNoted.innerHTML = headmates[index].firstNoted;
    gender.innerHTML = headmates[index].gender;
    age.innerHTML = headmates[index].age;
    quote.innerHTML = headmates[index].quote;
    species.innerHTML = headmates[index].species;
    origin.innerHTML = headmates[index].origin;
    misc.innerHTML = headmates[index].misc;
    links.innerHTML = headmates[index].links;
    pict.innerHTML = headmates[index].pictures;
};
sethmCont(0);

function getHMTot(){
    var totSpan =document.getElementById("hmTot");
    totSpan.innerHTML = (headmates.length - 1)
}
getHMTot()

function seltag(element) {
    element.classList.add("tagsel");
    getProjs();
};

function deseltag (element) {
    element.classList.remove("tagsel");
    getProjs();
};

function getTag(element){
        element.addEventListener("click", function() { 
            if(element.classList.contains("tagsel")){
                deseltag(element);
           } else {
                seltag(element);
            };
        });
};

var current = document.getElementById("current");
var y2026 = document.getElementById("2026");
/*var y2025 = document.getElementById("2025");
var y2024 = document.getElementById("2024");*/
var art = document.getElementById("art");
var af = document.getElementById("af");
var tech = document.getElementById("tech");
var HC = document.getElementById("HC");
getTag(current);
getTag(y2026);
/*getTag(y2025);
getTag(y2024);*/
getTag(art);
getTag(af);
getTag(tech);
getTag(HC);

var projects = [
    {
        projname:"Our Website",
        projpic:`<img src="./zen-site.png">`,
        projtags:"current, 2026, HC, tech",
        desc: "",
        visible: "false",
        num: 0,
    },
    {
        projname:"NovaOS",
        projpic:`<img src="./novaos.png">`,
        projtags:"current, 2026, HC, tech",
        visible: "false",
        num: 1,
    },
    {
        projname:"Archie Enjoying a Drink",
        projpic:`<img src="ArtFight/archie.png">`,
        projtags:"2026, art, af",
        visible: "false",
        num: 2,
    },
    {
        projname:"FallingStarStruck",
        projpic:`<img src="ArtFight/fallingStarStruck.png">`,
        projtags:"2026, art, af",
        visible: "false",
        num: 3,
    },
    {
        projname:"Sleepy Boi",
        projpic:`<img src="ArtFight/SleepyBoi.png">`,
        projtags:"2026, art, af",
        visible: "false",
        num: 4,
    },
    {
        projname:"Vexia",
        projpic:`<img src="ArtFight/vexia.png">`,
        projtags:"2026, art, af",
        visible: "false",
        num: 5,
    },
    {
        projname:"Young Dominy",
        projpic:`<img src="ArtFight/youngDominy.png">`,
        projtags:"2026, art, af",
        visible: "false",
        num: 6,
    },
    {
        projname:"Hades' Mask",
        projpic:`<img src="crafts/hades-maskFront.jpeg">`,
        projtags:"2026, art, crafts",
        visible: "false",
        num: 7,
    },

];
var seltags = document.getElementsByClassName("tagsel");

function getProjs() {
    if (seltags.length >= 1) { 
        //if tags are selected display only those 
         deleteAllProj();
         addTaggedProjs();
    } else {     
        //no tags are selected, display everything 
         deleteAllProj();
         addAllProjs();
    };
};

function deleteAllProj(){  //remove everything
    var currProjs = document.getElementsByClassName("showpic");
    var currProjsLeng = currProjs.length;

    for(let i=0; i < currProjsLeng; i++){
        var num = currProjs[0].id;

        projects[num].visible = "false";
        currProjs[0].remove();   
    }; 
};

function addTaggedProjs(){ // *works*
    for(let i=0; i< seltags.length; i++){ //for if there is multiple tags selected
        var tagName = seltags[i].id

        for(let i=0; i<projects.length; i++){
            
            if(projects[i].projtags.includes(tagName) && projects[i].visible == "false"){ 
                addToShow(i); 

            };
        };
    };
};

function addAllProjs(){
    for(let i=0; i< projects.length; i++){
        if(projects[i].visible == "false"){ //check if visible
            //if not visible:
            addToShow(i);  //make visible
        };
    };
};

function addToShow(index){
    var sc = document.getElementById("showcase");
    var divTotal = document.createElement("div");

    divTotal.innerHTML = `
    <p>${projects[index].projname}</p>
     ${projects[index].projpic}
    <p></p>`

    divTotal.classList.add("showpic");
    divTotal.id = projects[index].num;
    sc.appendChild(divTotal);
    projects[index].visible = "true";

    /*divTotal.addEventListener("click", function(){
        spotlight(??);
    });*/
          
};

/*function spotlight(index) {
    var splTitle = document.getElementById("splTitle");
    var splDesc = document.getElementById("splDesc");
    var AllPics = [projects[index].projpic, ]

    splTitle.innerHTML = projects[index].projname;
    splDesc.innerHTML = projects[index].desc;
    
}*/

var blogPosts =[
    {
        title: `First day of Junior Year`,
        date: `Aug. 12, 2026`,
        body: ` 
            Dispite being a half day, today was very interesting. 
            It started off pretty normal, my sister of course being late to the car 
            (I'm driving us this year). <br/>
            When we arrived at school there was only five minutes left 
            until the tardy bell rang and we still needed to get our 
            updated schedules and put our stuff in our locker. <br/>
            Unlike every other school schedule we'll have over the 
            course of this next school season, we had homeroom first.
            I of course made it to homeroom on time before we went to chapel. 
            During chapel the principal just went on and on, 
            but eventually we were let out to our first period, 
            which for me was Spanish 2. <br/> When everyone had sat down 
            and we were going to start, it was halfway through our 
            already short period. We went through the syllabus but didn't have any time to 
            start the syllabus homework. Next was weightlifting. Pretty uneventful, 
            we just went through the syllabus. Same with Portfolio. 
            When going to forensics someone called my name and when I 
            turned to look, someone was staring right at me probably trying to 
            talk to me, I was just trying to get to class so I said, "Later!" 
            If I was supposed to recognize them, I didn't, sorry. <br/>
            In forensics, after going through the syllabus we did several stations to introduce us to 
            different concepts we'd be working with. <br/> In US history we pretended 
            to be people in the future who didn't know anything about the USA and had to infer
            things based off a penny. <br/> In theology we were told thart we're having a quiz on monday. Fun -_-<br/>
            In English and PreCalc we just went over the syllabus. <br/>
            Now I'm back home and working on this site. 
            The Projects tab mostly works, but has a weird glitch with the art and 
            ArtFight tags even though their ids are "art" and "af" respectfully.
            `,
    },
    {
        title: `2nd Day of Junior Year`,
        date: `Aug. 13, 2026`,
        body: `
            Suprisingly, there's still no math homework, 
            or much homework in general, just theology.<br/>
            really dissocitive today for some reason. Emo Sib left with Mom to the MCR/PTV
            concert... I wanted to go but instead she took one of their other friends. 
            Totally not jealous... (╥˰╥") <br/>
            Still no clue whats going on with the project tags.
            `,
    },
    {
        title: `Word Count`,
        date: `Aug. 20, 2026`,
        body: `
            After school today I had to pick my sib up from volleyball, 
            but I had to wait for two hours. in those two hours, 
            I continued writing a fanfic i had been working on. 
            Around the beginning I glanced at the number of words it had, it only had two chapters, 
            and chapter one was pretty short, yet somehow it almost had the amount of 
            words my original story currently has
            (granted, the original story has a full ~11 page chapter one 
            and the beginning of chapter two). It probably has more now. O.O
        `,
    },
    {
        title: `BlogTop`,
        date: `Aug. ??, 2026`,
        body: `
            Zenith's IRL Stories
        `,
    },
];

/*
    {
        title: `title`,
        date: `Aug. ??, 2026`,
        body: `
            start
        `,
    },
    */

function addPost(index) {
    if (blogPosts[index].title == "BlogTop"){
          var postDiv = document.createElement("div");
          var blogWall = document.getElementById("blogWall");
          var BlogId = "BlogTop";

          postDiv.innerHTML = `
          ${blogPosts[index].body}
        `;

          postDiv.id = BlogId;
          postDiv.classList.add("postDes");
          blogWall.appendChild(postDiv);

    } else {
        var postDiv = document.createElement("div");
        var blogWall = document.getElementById("blogWall");

        //*
        postDiv.innerHTML = `
        <div class="postTop"> 
        <h3>${blogPosts[index].title}</h3>
        <p class="postDate">${blogPosts[index].date}</p> 
        </div>
        <p class="bodyText">${blogPosts[index].body}</p>
        `;
        //*/

        postDiv.classList.add("postDes");
        blogWall.appendChild(postDiv);
    }
};

for(i=0; i< (blogPosts.length); i++){
        addPost(i);

};

function blogClick(){
    var blogTop = document.getElementById("BlogTop");
    blogTop.scrollIntoView();
};