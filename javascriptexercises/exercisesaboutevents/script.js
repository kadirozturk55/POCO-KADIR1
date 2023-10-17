




function general () {
    
    
    if (document.querySelector(".firstname1").textContent==="first name") {
        changeTitle();
    } else if (document.querySelector(".firstname1").textContent==="newButton") {
        changeTitle2 ()
    } else {
        alert("thereissomethingnew")
    }
}

function changeTitle () {
document.querySelector(".firstname1").textContent="newButton";
}



function changeTitle2 () {
    document.querySelector(".firstname1").textContent="ohmyGod!"
}


const lastbutton=document.querySelector(".lasttry");
lastbutton.addEventListener("click",changeagain) 

function changeagain() {
    const letstry1=document.querySelectorAll(".try")[0].textContent="newtry";
}