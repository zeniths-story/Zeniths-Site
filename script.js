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
        pronouns: "",
        firstNoted: "",
        quote: "",
        gender: "",
        age:"",
        sexuality: "",
        species: "",
        origin:"",
        links: "",
    },
    {
        name:"Asher",
        pronouns: "",
        firstNoted: "",
        quote: "",
        gender: "",
        age:"",
        sexuality: "",
        species: "",
        origin:"",
        links: "",
    },
    {
        name:"Ash",
        pronouns: "",
        firstNoted: "",
        quote: "",
        gender: "",
        age:"",
        sexuality: "",
        species: "",
        origin:"",
        links: "",
    },
    {
        name:"Az",
        pronouns: "",
        firstNoted: "",
        quote: "",
        gender: "",
        age:"",
        sexuality: "",
        species: "",
        origin:"",
        links: "",
    },
    {
        name:"Cat",
        pronouns: "",
        firstNoted: "",
        quote: "",
        gender: "",
        age:"",
        sexuality: "",
        species: "",
        origin:"",
        links: "",
    },
    {
        name:"Charly",
        pronouns: "",
        firstNoted: "",
        quote: "",
        gender: "",
        age:"",
        sexuality: "",
        species: "",
        origin:"",
        links: "",
    },
    {
        name:"Danger",
        pronouns: "",
        firstNoted: "",
        quote: "",
        gender: "",
        age:"",
        sexuality: "",
        species: "",
        origin:"",
        links: "",
    },
    {
        name:"Ethan",
        pronouns: "",
        firstNoted: "",
        quote: "",
        gender: "",
        age:"",
        sexuality: "",
        species: "",
        origin:"",
        links: "",
    },
    {
        name:"Evi",
        pronouns: "",
        firstNoted: "",
        quote: "",
        gender: "",
        age:"",
        sexuality: "",
        species: "",
        origin:"",
        links: "",
    },
    {
        name:"Evyn",
        pronouns: "",
        firstNoted: "",
        quote: "",
        gender: "",
        age:"",
        sexuality: "",
        species: "",
        origin:"",
        links: "",
    },
    {
        name:"Hades",
        pronouns: "",
        firstNoted: "",
        quote: "",
        gender: "",
        age:"",
        sexuality: "",
        species: "",
        origin:"",
        links: "",
    },
    {
        name:"Hart",
        pronouns: "",
        firstNoted: "",
        quote: "",
        gender: "",
        age:"",
        sexuality: "",
        species: "",
        origin:"",
        links: "",
    },
    {
        name:"Kai",
        pronouns: "",
        firstNoted: "",
        quote: "",
        gender: "",
        age:"",
        sexuality: "",
        species: "",
        origin:"",
        links: "",
    },
    {
        name:"Lumi",
        pronouns: "",
        firstNoted: "",
        quote: "",
        gender: "",
        age:"",
        sexuality: "",
        species: "",
        origin:"",
        links: "",
    },
    {
        name:"Nova",
        pronouns: "",
        firstNoted: "",
        quote: "",
        gender: "",
        age:"",
        sexuality: "",
        species: "",
        origin:"",
        links: "",
    },
    {
        name:"Null",
        pronouns: "",
        firstNoted: "",
        quote: "",
        gender: "",
        age:"",
        sexuality: "",
        species: "",
        origin:"",
        links: "",
    },
    {
        name:"Opal",
        pronouns: "",
        firstNoted: "",
        quote: "",
        gender: "",
        age:"",
        sexuality: "",
        species: "",
        origin:"",
        links: "",
    },
    {
        name:"Ryon",
        pronouns: "",
        firstNoted: "",
        quote: "",
        gender: "",
        age:"",
        sexuality: "",
        species: "",
        origin:"",
        links: "",
    },
    {
        name:"Quill",
        pronouns: "",
        firstNoted: "",
        quote: "",
        gender: "",
        age:"",
        sexuality: "",
        species: "",
        origin:"",
        links: "",
    },
    {
        name:"Reid",
        pronouns: "",
        firstNoted: "",
        quote: "",
        gender: "",
        age:"",
        sexuality: "",
        species: "",
        origin:"",
        links: "",
    },
    {
        name:"Rocky",
        pronouns: "",
        firstNoted: "",
        quote: "",
        gender: "",
        age:"",
        sexuality: "",
        species: "",
        origin:"",
        links: "",
    },
    {
        name:"Rowan",
        pronouns: "",
        firstNoted: "",
        quote: "",
        gender: "",
        age:"",
        sexuality: "",
        species: "",
        origin:"",
        links: "",
    },
    {
        name:"Rylan",
        pronouns: "",
        firstNoted: "",
        quote: "",
        gender: "",
        age:"",
        sexuality: "",
        species: "",
        origin:"",
        links: "",
    },
    {
        name:"Silveny",
        pronouns: "",
        firstNoted: "",
        quote: "",
        gender: "",
        age:"",
        sexuality: "",
        species: "",
        origin:"",
        links: "",
    },
    {
        name:"Texas",
        pronouns: "",
        firstNoted: "",
        quote: "",
        gender: "",
        age:"",
        sexuality: "",
        species: "",
        origin:"",
        links: "",
    },
    {
        name:"Theo",
        pronouns: "",
        firstNoted: "",
        quote: "",
        gender: "",
        age:"",
        sexuality: "",
        species: "",
        origin:"",
        links: "",
    },
    {
        name:"Tina",
        pronouns: "",
        firstNoted: "",
        quote: "",
        gender: "",
        age:"",
        sexuality: "",
        species: "",
        origin:"",
        links: "",
    },
    {
        name:"Tommy",
        pronouns: "",
        firstNoted: "",
        quote: "",
        gender: "",
        age:"",
        sexuality: "",
        species: "",
        origin:"",
        links: "",
    },
    {
        name:"Ves",
        pronouns: "",
        firstNoted: "",
        quote: "",
        gender: "",
        age:"",
        sexuality: "",
        species: "",
        origin:"",
        links: "",
    },
    {
        name:"Zane",
        hmInfo: `
        pronouns: "",
        firstNoted: "",
        quote: "",
        gender: "",
        age:"",
        sexuality: "",
        species: "",
        origin:"",
        links: "",`
    },
    
];

function sethmCont(index){
    var hmcont = document.getElementById("HMcont");
    hmcont.innerHTML = headmates[index].hmInfo;
};
//setListCont(0)

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