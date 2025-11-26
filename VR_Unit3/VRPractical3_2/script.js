let scene, myCar;

  const rockets= [];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene")
  myCar = new MyCar("0 0 0");
  myCar.generate(scene);
  for (let i = 0; i < 500; i++){
    const r = new Rocket({x:1,y:0,z:1})
    r.generate(scene);
    rockets.push(r);
  }
  loop();
})

let theta = 0
function loop(){
  theta ++;
  
  if (myCar.driving){
    console.log(myCar)
    
    myCar.move({x:Math.sin(theta)*5,y:0,z:0.1})
  }

  rockets.forEach((rocket)=>{
    if (rocket.launched){
      rocket.launch(2);
    }
  })

  window.requestAnimationFrame(loop);
}