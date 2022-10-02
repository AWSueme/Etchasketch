let screen=document.querySelector("#screen");

screenrender();

reset=document.querySelector("#reset");
reset.addEventListener("click", screenrender)

function screenrender(){

    while (screen.firstChild) {
        screen.removeChild(screen.firstChild);
    }

    for(let i=0; i < 900; i++){
        let pixel=document.createElement('div');
        pixel.setAttribute("class", "pixel");
        screen.appendChild(pixel);
        pixel.addEventListener("mouseover", shade);
    }
    
}



function shade(e){
    let p = Number(e.target.style.opacity);
    p = p + 0.1;
    console.log(p);
    e.target.style.opacity = p;
}