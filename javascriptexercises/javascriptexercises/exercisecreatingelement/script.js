const link=document.createElement("a");
link.id="firsttry";
link.innerHTML="gotoportfolio";
link.style.border="5px solid red";
link.style.backgroundColor="blue";
console.log(link)

const ul=document.querySelector(".linksto")
//the tag named "link" is appended to end of the tag named "ul"
ul.appendChild(link);

//removing the first element 
const firstli=ul.children[0];
firstli.remove();

//changing the innerHTML
const buttoncontainer =document.querySelector(".container");
const firstbutton=buttoncontainer.children[0];
console.log(firstbutton)
/*create a new button to change it with 
firstbutton in div with container class*/
const newbutton=document.createElement("button");
newbutton.id="newbutton";
newbutton.className="newfirst";
newbutton.innerHTML="newfirstbutton_insteadof_firstbutton";
newbutton.style.fontSize="2rem";
// select the div with class named container to change div

firstbutton.replaceWith(newbutton);

//create a div to change newfirstbutton

const newdiv=document.createElement("div");
newdiv.id="newdiv";
newdiv.class="newfirst";
newdiv.innerHTML="newdiv_insteadof_newfirstbutton";
newdiv.style.fontSize="2rem";
newdiv.style.border="5px solid black";
newdiv.style.backgroundColor="grey";
newdiv.style.textAlign="center";
newbutton.replaceWith(newdiv);




