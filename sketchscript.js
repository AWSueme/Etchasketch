let screen=document.querySelector("#screen");
let reset=document.querySelector("#reset");
let random=document.querySelector("#random");
let rainbow=document.querySelector("#rainbow");
let pen=document.querySelector("#pencolor");
pen.addEventListener("change", colorchange);
reset.addEventListener("click", screenrender);
rainbow.addEventListener("click", screenrender);
random.addEventListener("click", rainbowrender);
let colour;
let rando = false;

screenrender();

function screenrender(){

    while (screen.firstChild) {
        screen.removeChild(screen.firstChild);
    }

    for(let i=0; i < 3600; i++){
        let pixel=document.createElement('div');
        pixel.setAttribute("class", "pixel");
        screen.appendChild(pixel);
        pixel.addEventListener("mouseover", shade);
        
        if(rando){
            colour="#" + Math.floor(Math.random()*16777215).toString(16);
        }
        
        pixel.style.backgroundColor=colour;
    }
    
}

function colorchange(e){
    colour= e.target.value;
    rando=false;
    screenrender();
}

function rainbowrender(){
    rando=true;
    screenrender();

}

function shade(e){
    let p = Number(e.target.style.opacity);
    p = p + 0.25;
    e.target.style.opacity = p;
}