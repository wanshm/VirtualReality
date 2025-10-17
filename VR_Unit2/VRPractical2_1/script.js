 let scene; 
function rndInt(l, u){
  return Math.round(Math.random()*(u-l) + l);
}
function rndFloat(l, u){
  return (Math.random()*(u-l) + l);
}

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");  //CSS Selector

  for(let i = 0; i < 100; i++){
    let x = rndInt(-20,20);
    let z = rndInt(-20,20);
    createTree(x,0,z);
  }

  for (let i = 0; i < 3000; i++){
    const p = rand3([-500,500],[30,50],[-500,500])
    const s = rand3float([2,4],[.5,1],[2,4]);
    console.log(s);
    createCloud(p,s);
  }
   //Task 2: Use the createCloud(...)  to add several clouds to the scene at various positions.

   //Task 4: Use the createHouse(...)  to add several houses to the scene at various positions.
})

/* Task 1: Create a function createCloud that,
      1) Accept an x, y and z position for where to place the cloud "entity"
      2) Create an entity to store all the components that will make up the cloud
      3) Create three sphere, or some other appropriate component that can slightly overlap.         
      4) Adjust the attributes appropriately.  Add each sphere to the cloud entity
      5) Set cloud entities position to those passed in to the function.
      6) Add the cloud entity to the scene
*/

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

const createCloud = (p,s={x:1,y:2,z:1}) => {
  const cloud = document.createElement("a-entity");
  cloud.setAttribute("position",p);
  cloud.setAttribute("scale",s);
  const cp1 = document.createElement("a-sphere");
  const cp2 = document.createElement("a-sphere");
  const cp3 = document.createElement("a-sphere");
  cp2.setAttribute("position",{x:2,y:0,z:0});
  cp3.setAttribute("position",{x:1,y:0,z:0});
  cp3.setAttribute("scale",{x:1.2,y:1.2,z:1.2})
  cloud.append(cp1);
  cloud.append(cp2);
  cloud.append(cp3);
  
  scene.append(cloud);
  console.log(cloud);
}

/* Task 3: Create a function createHouse that,
      1) Accept an x and z position for where to place the house "entity"
      2) Create an entity to store all the components that will make up the house
      3) Create box for the base of the house.  Add base to the entity.
      4) Create triangular prism from a cylinder for the roof.  Add the roof to the entity.
      5) Adjust the attributes appropriately.
      5) Set house entities position to those passed in to the function.
      6) Add the house entity to the scene
*/
function createTree(x, y, z){
  let tree = document.createElement("a-entity");
  
  let pines = document.createElement("a-cone");
  pines.setAttribute("color","green");
  pines.setAttribute("position","0 2 0");
  pines.setAttribute("height","2");
  tree.append( pines );

  let stump = document.createElement("a-cylinder");
  stump.setAttribute("position","0 1 0");
  stump.setAttribute("color","brown");
  stump.setAttribute("radius","0.25");
  tree.append( stump );

  tree.setAttribute("position",{x:x, y:y, z:z});
  scene.append( tree )
}



