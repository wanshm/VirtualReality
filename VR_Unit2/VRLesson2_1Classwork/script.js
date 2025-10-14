window.addEventListener("DOMContentLoaded",function() {
  //Challenge 1: Create a variable scene for the <a-scene> component in the HTML
  const scene = this.document.querySelector("a-scene");

  //Challenge 2: Create a variable for <a-dodecahedron> and create it.
  const dodo = this.document.createElement("a-dodecahedron");
  
  //Challenge 3: Change the <a-dodecahedron>'s position, radius and color
  dodo.setAttribute("position",{x:-10, y:0, z:-5});
  dodo.setAttribute("radius", 12);
  dodo.setAttribute("color","black");
  dodo.setAttribute("opacity",0.1)

  //Challenge 4: Add the <a-dodecahedron> to the scene

  scene.append(dodo);
  /* Challenge Bonus
  1) Use a for loop to create a lot of <a-dodecahedron> 
  2) Change each <a-dodecahedron>'s position to a random x, y, and z location
  3) Change each <a-dodecahedron>'s to a random color.  Hint: Use rgb( ) and string interpolation 
  */
  
  const randInt = (lower, upper)=>{return  parseInt(Math.random()*(upper-lower) + lower)};

  for(let i = 0; i<1000; i++){
    const d = this.document.createElement("a-dodecahedron");
    const x = randInt(-100,100);
    const y = randInt(0,30);
    const z = randInt(-100,100);
    d.setAttribute("position",{x:x,y:y,z:z});
    scene.append(d);
  }

})