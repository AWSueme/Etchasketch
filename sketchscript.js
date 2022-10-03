let screen=document.querySelector("#screen");
let reset=document.querySelector("#reset");
let random=document.querySelector("#random");
let rainbow=document.querySelector("#rainbow");
let pen=document.querySelector("#pencolor");
pen.addEventListener("change", colorchange);
reset.addEventListener("click", screenrender);
rainbow.addEventListener("click", screenrender);
random.addEventListener("click", screenrender);
let colour;

screenrender();

function screenrender(){

    while (screen.firstChild) {
        screen.removeChild(screen.firstChild);
    }

    for(let i=0; i < 900; i++){
        let pixel=document.createElement('div');
        pixel.setAttribute("class", "pixel");
        screen.appendChild(pixel);
        pixel.addEventListener("mouseover", shade);
        
        
        
        pixel.style.backgroundColor=colour;
    }
    
}

function colorchange(e){
    colour= e.target.value;
    screenrender();
}

function rainbowrender(){
    screenrender();

}

function shade(e){
    let p = Number(e.target.style.opacity);
    p = p + 0.1;
    e.target.style.opacity = p;
}