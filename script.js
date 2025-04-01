const bodyEL = document.querySelector("body");


bodyEL.addEventListener("mousemove", ()=>{
     const xPos = event.offsetX;       
     const YPos = event.offsetY;
     const spanEL = document.createElement("span");
     spanEL.style.left = xPos + "px";
     spanEL.style.top = YPos + "px";
     const size = Math.random() * 100;
     spanEL.style.width = size + "px";
     spanEL.style.height = size +"px";
     bodyEL.appendChild(spanEL);
     setTimeout(()=>{
        spanEL.remove();
     },3000);
});