let screen=document.querySelector("#screen");
let reset=document.querySelector("#reset");
let random=document.querySelector("#random");
let rainbow=document.querySelector("#rainbow");
let pen=document.querySelector("#pencolor");
pen.addEventListener("change", colorchange);
reset.addEventListener("click", screenrender);
rainbow.addEventListener("click", rainbowrender);
random.addEventListener("click", randomrender);
let colour;
let rando = false;
let rainbowpen = false;
let j = Number(1);

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
    rainbowpen=false;
    screenrender();
}

function rainbowrender(){
    rando=false;
    rainbowpen=true;
    screenrender();

}

function randomrender(){
    rando=true;
    rainbowpen=false;
    screenrender();

}

function shade(e){

    if(rainbowpen){
        colour = "hsl("+j+", 100%, 50%)";
        j++;
        if(j>359){
            j=1;
        }
        e.target.style.backgroundColor = colour;
        e.target.style.opacity = 1.0;
    }else{
        let p = Number(e.target.style.opacity);
        p = p + 0.25;
        e.target.style.opacity = p;
    }
}