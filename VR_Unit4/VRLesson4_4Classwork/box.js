class Box{
 constructor(x,y,z){
   this.obj = document.createElement("a-box");
   /* Challenge
      Associate the fireball sound with the box and 
      enable it to play forever
   */
  this.boom = false;
  this.obj.setAttribute("sound","src:#fb; autoplay:true; loop: true")
  this.obj.setAttribute("raycastable","")
   /* Challenge
      Add an event listener that sets boom to true and
      plays the fireball sound effect
   */

  this.obj.addEventListener("click",()=>{
    if(this.boom == false){
      document.querySelector("#dragon").components.sound.playSound()
      console.log("3")
    }
    this.boom  = true;
  })

   this.obj.setAttribute("position",{x:x,y:y,z:z});
   scene.append(this.obj);
 } 
 blast(){
   if(this.boom){
     this.obj.object3D.position.y += 0.02;
   }
 }
}