let scene, boxes = [];

function randInt(upper,lower){
  return parseInt(Math.random()*(upper-lower)+lower)
}

window.onload = function(){
  scene = document.querySelector("a-scene");
  /* Challenge
     Create 10 random boxes through the world
  */
 for(let i = 0; i<10; i++){
    const b = new Box(randInt(0,4), 1, randInt(0,4))
    boxes.push(b)
    console.log(b)
 }
 loop()
}


function loop(){
  /* Challenge 
     Make the boxes blast off
  */
  boxes.forEach((box)=>{
    box.blast()
  })



  window.requestAnimationFrame( loop )
  
}