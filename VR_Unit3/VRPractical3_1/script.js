let carousel,balloon1,balloon2,surpriseBox;

window.addEventListener("DOMContentLoaded",function() {
  carousel = document.getElementById("carousel-arms");
  carousel.r = 0;
  carousel.dr = 1;
  carousel.rotating = false;
  /* Challenge 1: Make the carousel rotate only when the mouse is on it.  Hint: Manipulate a flag called "rotate" between true and false. 
   Two event listeners required. */
  carousel.addEventListener("mouseenter",()=>{
    carousel.rotating = true;
  });
  carousel.addEventListener("mouseleave",()=>{
    carousel.rotating = false;
  })
  balloon1 = document.getElementById("balloon1"); //blue
  balloon1.y = 5
  balloon1.dy = -0.05;
  balloon1.falling = false;
  /* Challenge 2: Make balloon1 fall when the user clicks on the balloon. Hint: Set a "flag" to true when the user clicks on balloon1 */
  balloon1.addEventListener("click",()=>{
    balloon1.falling= true;
  })
  surpriseBox = document.getElementById("surpriseBox"); //white box with red balloon
  /* Challenge 4: Make the red balloon "fly" up when you click on the surprise box.  
  Note: You are interacting with one object but animating another.  Not as hard as it sounds.  
  Set a flag for balloon2 upon the interaction with the surprisebox */

  balloon2 = document.getElementById("balloon2"); //red
  balloon2.y = 0.5
  balloon2.dy = 0.02;
  balloon2.rising = false;
  surpriseBox.addEventListener("click",()=>{
    balloon2.rising= true;
  })

  loop();
}) 

function loop(){
  if(carousel.rotating){
    carousel.r += carousel.dr;
    // carousel.setAttribute("rotation",{x:0, y:0, z: carousel.r});
    carousel.object3D.rotation.z = carousel.r;
  }
  if(balloon1.falling){
    //Challenge 3: Add the animation to make the balloon fall.  Hint: Look at the HTML to find out the original x and z coordinates.
    balloon1.y += balloon1.dy;
    console.log(balloon1.y)
    balloon1.object3D.position.y = balloon1.y;
    balloon1.falling = balloon1.y <= 0 ? false : true;
  }
  //Challenge 5: Add a decision that checks for the flag on balloon2.  If the flag is true, make balloon2 fly up. Hint: Look at the HTML to find out the original x and z coordinates.
  if(balloon2.rising){
     balloon2.y += balloon2.dy;
    balloon2.object3D.position.y = balloon2.y;
  }
  
  window.requestAnimationFrame( loop );
}


