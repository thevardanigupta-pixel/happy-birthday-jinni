const floating = document.getElementById("floating");

setInterval(() => {

const item = document.createElement("div");

if(Math.random() > 0.5){
item.className = "heart";
item.innerHTML = "♡";
}else{
item.className = "star";
item.innerHTML = "✦";
}

item.style.left = Math.random() * 100 + "%";
item.style.fontSize = (Math.random() * 20 + 15) + "px";
item.style.animationDuration = (Math.random() * 8 + 8) + "s";

floating.appendChild(item);

setTimeout(() => {
item.remove();
},15000);

},300);
function playMusic(){
    document.getElementById("bgMusic").play();
}