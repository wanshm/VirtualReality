window.addEventListener("DOMContentLoaded",function() {
  let myBox = document.querySelector("#myBox");
  //Task 3: Create a variable for the cylinder.  Get the element from the HTML
  const cylinder = this.document.querySelector("#tube");



  myBox.addEventListener("mouseenter",function(){
    myBox.setAttribute("height",2);
  const p = myBox.getAttribute("position")
    myBox.setAttribute("position",{x:p.x,y:p.y+.5,z:p.z});
  })
  //Task 4: Add another event to set the height of myBox back to 1 when the mouse is no longer on myBox
  myBox.addEventListener("mouseleave",function(){
    myBox.setAttribute("height",1);
  const p = myBox.getAttribute("position")
    myBox.setAttribute("position",{x:p.x,y:p.y-.5,z:p.z});
  })
  //Task 5: Make  the the cylinder disappear when you click on it.  Set opacity to zero

  cylinder.addEventListener("click",function(){
    o = cylinder.getAttribute("opacity");
    cylinder.setAttribute("opacity",o==0? 1: 0);
  })
})
