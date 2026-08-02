var about = document.getElementById("Abt");
var headmates = document.getElementById("headmates");
var projects = document.getElementById("projects");

var currTab = about

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
getOpen(about);
getOpen(headmates);
getOpen(projects);

var headmates = [
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
        links: "",
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
        links: "",
    },
    {
        name:"Ash",
        pronouns: "It/Sie",
        role: "",
        firstNoted: "May 30, 2026",
        gender: "Girl",
        age:"5",
        quote: "",
        species: "Human",
        origin:"Brainmade",
        links: "",
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
        links: "",
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
        links: "",
    },
    {
        name:"Charly",
        pronouns: "He/They/She",
        role: "",
        firstNoted: "June 14, 2026",
        gender: "Bigender (boy/girl)",
        age:"16",
        quote: "",
        species: "Werewolf (Wolf Children style)",
        origin:"Brainmade",
        links: `<a href="https://open.spotify.com/track/3d4WE2mXks9S6qyxUABSmv">Voice Claim</a>`,
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
        links: "",
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
        links: "",
    },
    {
        name:"Evi",
        pronouns: "They/Star/She",
        role: "Host",
        firstNoted: "",
        gender: "Agender Girl",
        age:"16",
        quote: `They told me I was vital in the plan to save my life 
        so I promised mine in hope I'd be the one holding the knife
        Heaven's Gate - Amélie Farren`,
        species: "Enderman",
        origin:"Brainmade",
        links: "",
    },
    {
        name:"Evyn",
        pronouns: "Fur/Paw/Hunt/Howl",
        role: "",
        firstNoted: "June 12, 2026",
        gender: "WolfGender",
        age:"16",
        quote: "",
        species: "Werewolf (Wolf Children style)",
        origin:"Brainmade",
        links: "",
    },
    {
        name:"Hades",
        pronouns: "He/Him",
        role: "",
        firstNoted: "July 16, 2026",
        gender: "Male",
        age:"Adult",
        quote: "",
        species: "Semi-realistic Minecraft Wolf",
        origin:"Minecraft",
        links: "",
    },
    {
        name:"Hart",
        pronouns: "She/They",
        role: "",
        firstNoted: "June 26, 2026",
        gender: "Girlvoid",
        age:"17",
        quote: "",
        species: "Elf (KotLC)",
        origin:"Brainmade",
        links: "",
    },
    {
        name:"Kai",
        pronouns: "Glitch/Void/They/He",
        role: "",
        firstNoted: "April 7, 2026",
        gender: "Robotgender",
        age:"15",
        quote: "",
        species: "Holographic Assistant",
        origin:"Brainmade",
        links: "",
    },
    {
        name:"Lumi",
        pronouns: "She/They",
        role: "",
        firstNoted: "March 30, 2026",
        gender: "Girl",
        age:"7",
        quote: `I'ma dance my heart out 'til the dawn 
        but I won't be done when mornin' comes, 
        doin' it all night all summer, doin it the way I wanna
        Lush Life - Zara Larsson`,
        species: "Human",
        origin:"Brainmade",
        links: "",
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
        links: "",
    },
    {
        name:"Null",
        pronouns: "They/Void/Null",
        role: "Caretaker",
        firstNoted: "July 9, 2026",
        gender: "Sure",
        age:"Adult",
        quote: "The most basic form of mind control is repetition.",
        species: "Void",
        origin:"Brainmade",
        links: "",
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
        links: "",
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
        links: "",
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
         meet my canines (Bitch I bite back) HOUNDSOFHELL - Mad Tsai 
         <br/><br/>
         What if its midnight driving, 
         what if its heart rates rising,
         what if I stay when you want me to go? 
         Yeah, these things never happened to no one. 
         What if its hypnotizing, what if we just can't hide it, 
         what if our love's straight up cinematic, 
         I wanna watch how it happens Cinematic - Will Linley`,
        species: "Fairy",
        origin:"Brainmade",
        links: "",
    },
    {
        name:"Reid",
        pronouns: "He/She",
        role: "",
        firstNoted: "June 24, 2026",
        gender: "Bigenderfluid (Boy/Girl)",
        age:"17",
        quote: `Too much, too much, people complain too much
        Hate me but that's not my concern Right Now - Confetti
        <br/><br/>
        I'm not phased by the things you gotta say
        I guess I got my head in the clouds Right Now - Confetti`,
        species: "Human",
        origin:"Brainmade",
        links: "",
    },
    {
        name:"Rocky",
        pronouns: "Th♪y/H♪ (They/He)",
        role: "",
        firstNoted: "June 1, 2026",
        gender: "",
        age:"Adult",
        quote: `"Life is Reason!" Rocky - Project Hail Mary`,
        species: "Eridian",
        origin: "Rocky - Project Hail Mary",
        links: "",
    },
    {
        name:"Rowan",
        pronouns: "He/Him",
        role: "Caretaker/Protector",
        firstNoted: "March 28, 2026",
        gender: "Non-binary on the male side",
        age:"28",
        quote: "",
        species: "Demon",
        origin:"Brainmade",
        links: `<a href="https//music.amazon.com/albums/B0DF8VMY2J">Voice Claim</a>`,
    },
    {
        name:"Rylan",
        pronouns: "He/They",
        role: "",
        firstNoted: "June 17, 2026",
        gender: "Genderqueer",
        age:"17",
        quote: `I'll tell you the story of a warrior 
        who fought the fight of love, 
        with every wound he wore he raised his sword 
        and marched through tears and blood 
        Story of a Warrior - John Michael Howell`,
        species: "Human",
        origin:"Brainmade",
        links: `<a href="https://www.tiktok.com/t/ZP8Gj9jaU">Voice Claim (First Voice)</a>`,
    },
    {
        name:"Silveny",
        pronouns: "She/Her",
        role: "",
        firstNoted: "June 10, 2026",
        gender: "Girl",
        age:"5",
        quote: "",
        species: "Human",
        origin:"Brainmade",
        links: "",
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
        links: "",
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
        links: "",
    },
    {
        name:"Tina",
        pronouns: "She/They",
        role: "",
        firstNoted: "May 18, 2026",
        gender: "Girl",
        age:"27",
        quote: `Fame is s gun and I point it blind, 
        crash and burn girl baby swallow it blind 
        you got a front row seat and I, 
        I got a taste of the glamorous life 
        love is a drug that I can't deny, 
        I'm your dream girl but you're not my type
        you got a front row seat and I, 
        I got a taste of the glamorous life
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
        run rabbit, run rabid>
        Run Rabbit - Mollie Elisabeth`,
        species: "Human",
        origin:"Songtive - Necromancer-Legrand",
        links: "",
    },
    {
        name:"Tommy",
        pronouns: "He/Him",
        role: "",
        firstNoted: "July 14, 2026",
        gender: "Boy",
        age:"Slider 16-22",
        quote: `“Who am I without you?” -Me<br/>
        “Yourself.” -Tubbo (My Bsf)`,
        species: "Human",
        origin:"Tommyinnit-verse",
        links: "",
    },
    {
        name:"Ves",
        pronouns: "Night/Star/Void",
        role: "",
        firstNoted: "April ??, 2026",
        gender: "Agender",
        age:"17",
        quote: "",
        species: "Fallen Angel",
        origin:"Brainmade",
        links: "",
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
        links: "",
    },
    
];


function addToList(index){
    var list = document.getElementById("list");
    var hminfo = headmates[index];
    var newDiv = document.createElement("div");
    newDiv.innerHTML= `
    <p>
    ${hminfo.name}
    </p>`;

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
    var links = document.getElementById("links");
    name.innerHTML = headmates[index].name;
    pronouns.innerHTML = headmates[index].pronouns;
    role.innerHTML = headmates[index].role;
    firstNoted.innerHTML = headmates[index].firstNoted;
    gender.innerHTML = headmates[index].gender;
    age.innerHTML = headmates[index].age;
    quote.innerHTML = headmates[index].quote;
    species.innerHTML = headmates[index].species;
    origin.innerHTML = headmates[index].origin;
    links.innerHTML = headmates[index].links;
};
sethmCont(0)

