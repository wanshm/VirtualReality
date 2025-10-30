let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); 
  const rockets = [];
  
    const u = new Ufo(0,10,-1)
    u.generate(scene);
  for (let i = 0; i<500;i++){  
    const z = Math.floor(i/10)*6;
    const x = (i)%10*6;
    const p = {x:x,y:0,z:z};
    const r = new Rocket(p);
    


    r.generate(scene);
    rockets.push(r);
    console.log(r.el.getAttribute("position"))
  }
  function loop(){

    rockets.forEach((r) =>{
      r.launch(.5);
    })
    window.requestAnimationFrame( loop );
  }

  loop();
})
