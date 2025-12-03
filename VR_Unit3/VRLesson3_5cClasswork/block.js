class Block{
  constructor(x,z){
    this.s = 1;
    this.ds = -0.1;
    this.obj = document.createElement("a-box");
    this.obj.setAttribute("position",{x:x,y:2.5,z:z});
    this.obj.setAttribute("scale",{x:1,y:5,z:1});
    scene.append( this.obj );
  }
  shrink(){
    if( this.shot && this.s > 0){
      this.s += this.ds;
      this.obj.setAttribute("scale",{x:this.s,y:this.s,z:this.s});
    }
    
  }
}