let rnd = (l,u) => Math.random() * (u-l) + l
let scene, camera, bullets = [], enemies = [], ammo_boxes = [], ammo_count = 10, enemy_killed = 0;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  camera = document.querySelector("a-camera");

  for(let i = 0;i < 100;i++ ){
    const e = new Enemy("spider",{x:rnd(-50,50),y:0.5,z:rnd(-50,50)})
    enemies.push(e)
    e.generate(scene);
  }

  window.addEventListener("keydown",function(e){
    
    //User can only fire with they press the spacebar and have sufficient ammo
    if(e.key == " "){
      const b = new Bullet();
      bullets.unshift(b);
      ammo_count--;
    }
  })
  window.addEventListener("keydown",function(e){
    //User can only fire with they press the spacebar and have sufficient ammo
    if(e.key == "r"){
      ammo_count=10;
    }
  })
  


  setTimeout(loop,100);
  setTimeout(countdown,100);
})

function loop(timestamp){

  bullets.forEach((b,i)=>{
    b.fire();
    if(distance(b.obj,camera)>200 && b){
      bullets.splice(i,1)
      b.obj.parentNode.removeChild(b.obj);
    }
    // enemies.forEach((enemy)=>{
    //   if(distance(enemy.el,b.obj)>5){
    //     enemy.kill()
    //   }
    // })
  })
 
  window.requestAnimationFrame(loop);
}

function countdown(){

  setTimeout(countdown,1000);
}

function distance(obj1,obj2){
  let x1 = obj1.object3D.position.x;
  let y1 = obj1.object3D.position.y;
  let z1 = obj1.object3D.position.z;
  let x2 = obj2.object3D.position.x;
  let y2 = obj2.object3D.position.y;
  let z2 = obj2.object3D.position.z;

  let d = Math.sqrt(Math.pow(x1-x2,2) + Math.pow(y1-y2,2) + Math.pow(z1-z2,2));
  return d;
}