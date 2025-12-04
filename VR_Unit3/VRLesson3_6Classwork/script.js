let rnd = (l,u) => Math.random() * (u-l) + l
let scene, camera, balls = [];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  camera = document.querySelector("a-camera");
  gem = document.getElementById("gem");


  /*
    Challenge 1
    Add an eventlistener that associates user pressing the keys with the following actions.
    1) Rotate the gem in the positively on the z-axis
    2) Rotate the gem in the negatively on the z-axis
    3) Rotate the gem in the positively on the x-axis
    4) Rotate the gem in the negatively on the x-axis
    5) Rotate the gem in the positively on the y-axis
    6) Rotate the gem in the negatively on the y-axis
    Note: Copy and paste!
  */

  function handlekeypress(event){
    switch(event.key){
      case "q":
        gem.object3D.rotation.y +=0.1;
        break;
      case "e":
        gem.object3D.rotation.y -=0.1;
        break;
      case "r":
        gem.object3D.rotation.x +=0.1;
        break;
      case "t":
        gem.object3D.rotation.x -=0.1;
        break;
      case "z":
        gem.object3D.rotation.z +=0.1;
        break;
      case "x":
        gem.object3D.rotation.z -=0.1;
        break;
    }
  }
  window.addEventListener("keydown",(e)=>{handlekeypress(e)} )
  window.addEventListener("click",()=>{gem.setAttribute("rotation","0 0 0")} )

  /*  Challenge 2
     When the user clicks in the window, resets the gem rotation to (0,0,0)
  */ 
})
