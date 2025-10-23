function rndInt(l, u){
  return Math.round(Math.random()*(u-l) + l);
}
function rndFloat(l, u){
  return (Math.random()*(u-l) + l);
}
const rand3 = (l1,l2,l3) => {
  const a = rndInt(l1[0],l1[1]);
  const b = rndInt(l2[0],l2[1]);
  const c = rndInt(l3[0],l3[1]);
  return {x:a,y:b,z:c};
}
const rand3float = (l1,l2,l3) => {
  const a = rndFloat(l1[0],l1[1]);
  const b = rndFloat(l2[0],l2[1]);
  const c = rndFloat(l3[0],l3[1]);
  return {x:a,y:b,z:c};
}

let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); //CSS Selector

  for(let i = 0; i < 3000; i++){
    let x = rndInt(-200,200);
    let z = rndInt(-200,200);
    let tree = new Tree(x, 0 , z);
    const cloud = new Cloud(rand3([-500,500],[30,50],[-500,500]),rand3float([2,4],[.5,1],[2,4]));
  }

})
