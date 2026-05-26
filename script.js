/* Elements */

const btn = document.getElementById("btn");
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
const music = document.getElementById("nasheed");
const typing = document.getElementById("typing");
const giftBox = document.getElementById("giftBox");
const mainContent = document.getElementById("mainContent");

/* Canvas */

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let fireworks = [];

/* Gift Animation */

window.addEventListener("load", () => {

  setTimeout(() => {
    giftBox.classList.add("open");
  }, 1000);

  setTimeout(() => {

    giftBox.classList.add("hide");

    mainContent.style.opacity = "1";

    mainContent.style.transform =
      "translate(-50%, -50%) scale(1)";

    typeText();

  }, 3000);

});

/* Typing Text */

const text =
"Allah ap ki zindagi ko khushiyon, barkaton aur mohabbat se bhar de ✨";

let index = 0;

function typeText(){

  if(index < text.length){

    typing.innerHTML += text.charAt(index);

    index++;

    setTimeout(typeText, 70);
  }
}

/* Celebrate Button */

btn.addEventListener("click", () => {

  alert("🎉 Eid ul Adha Mubarak From IY 🎉");

  for(let i = 0; i < 5; i++){

    setTimeout(() => {

      createFirework(
        Math.random() * canvas.width,
        Math.random() * canvas.height / 2
      );

    }, i * 500);

  }

});

/* Fireworks */

function createFirework(x, y){

  const particles = [];

  for(let i = 0; i < 100; i++){

    particles.push({

      x:x,
      y:y,

      angle: Math.random() * Math.PI * 2,

      speed: Math.random() * 5 + 2,

      radius: Math.random() * 3 + 1,

      alpha:1
    });

  }

  fireworks.push(particles);
}

function animate(){

  ctx.clearRect(0,0,canvas.width,canvas.height);

  fireworks.forEach((particles,index) => {

    particles.forEach((p) => {

      p.x += Math.cos(p.angle) * p.speed;

      p.y += Math.sin(p.angle) * p.speed;

      p.alpha -= 0.01;

      ctx.beginPath();

      ctx.arc(p.x,p.y,p.radius,0,Math.PI*2);

      ctx.fillStyle =
      `rgba(${Math.random()*255},
             ${Math.random()*255},
             ${Math.random()*255},
             ${p.alpha})`;

      ctx.fill();

    });

    fireworks[index] =
    particles.filter(p => p.alpha > 0);

  });

  requestAnimationFrame(animate);
}

animate();

/* Music */

function toggleMusic(){

  if(music.paused){

    music.play();

    document.querySelector(".music-btn").innerHTML =
    "🔊 Music";

  }else{

    music.pause();

    document.querySelector(".music-btn").innerHTML =
    "🔇 Mute";
  }
}

/* Resize */

window.addEventListener("resize", () => {

  canvas.width = window.innerWidth;

  canvas.height = window.innerHeight;

});