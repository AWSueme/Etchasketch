let screen=document.querySelector("#screen");

for(let i=0; i < 100; i++){
    let pixel=document.createElement('div');
    pixel.setAttribute("class", "pixel");
    screen.appendChild(pixel);
    pixel.addEventListener("mouseover", shade);
}

screen.style.backgroundColor=blue;

function shade(e){
    let pix = e.target;
    pix.style.backgroundColor="blue";
}