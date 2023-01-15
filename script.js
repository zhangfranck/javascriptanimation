const box1 = document.getElementById("box1");
const startStopBtn = document.querySelector(".startstop");
const chance = document.getElementById("chance").style.color = "green";
let animationId;

startStopBtn.addEventListener("click", function() {
  if (this.innerHTML === "Commencer") {
    this.innerHTML = "Arrêter";
    const myText = document.getElementById("chance");
    chance.textContent = "0,0010000% !";
    animationId = requestAnimationFrame(moveBox);
  } 
    else {
    this.innerHTML = "Commencer";
    cancelAnimationFrame(animationId);
  }
});

function moveBox() {
  box1.style.left = box1.getBoundingClientRect().left + 1 + "px";
  animationId = requestAnimationFrame(moveBox);
}

function changetaille(taille) {
  const chance = document.getElementById("chance").style.fontSize = 100 + "px";
}

function changeClass() { 
  const box1 = document.getElementById('box1').className = "box3"; 
}






