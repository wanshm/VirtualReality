let scene, myCar;


window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene")
  myCar = new MyCar("0 0 0");
  myCar.generate(scene);
  loop();
})

let theta = 0
function loop(){
  theta ++;
  
  if (myCar.driving){
    console.log(myCar)
    
    myCar.move({x:.1,y:Math.sin(theta/100),z:.1})
  }
  window.requestAnimationFrame(loop);
}