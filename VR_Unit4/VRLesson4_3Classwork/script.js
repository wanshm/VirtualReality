let rnd = (l,u) => Math.random()*(u-l)+l;
let scene;
window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  //Challenge 2: Create 200 Balls at random locations and watch them fall or push them off the end
  for (let i = 0; i<2000;i++){
    const b = new Ball(rnd(-100,100), 10, rnd(-100,100))
  }

  
})