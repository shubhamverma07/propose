let index = 0;
const totalPages = 4;
const music = document.getElementById("bgMusic");

function next(){
  if(index < totalPages - 1){
    index++;
    document.getElementById('slider').style.transform =
      `translateX(-${index * 100}vw)`;
  }
}

function playMusic(){
  music.play();
}

/* Falling hearts */
function createHeart(){
  const heart = document.createElement('div');
  heart.className = 'heart-fall';
  heart.innerHTML = '❤️';
  heart.style.left = Math.random()*100 + 'vw';
  heart.style.animationDuration = (Math.random()*3+2)+'s';
  document.body.appendChild(heart);
  setTimeout(()=>heart.remove(),5000);
}

setInterval(createHeart,250);