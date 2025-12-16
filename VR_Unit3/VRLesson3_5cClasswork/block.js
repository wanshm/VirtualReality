class Block{
  constructor(x,z){
    this.s = 1;
    this.ds = -0.1;
    this.obj = document.createElement("a-gltf-model");
    this.obj.setAttribute("src","#sukuna")
    this.obj.setAttribute("position",{x:x,y:0,z:z});
    this.obj.setAttribute("scale",{x:2,y:2,z:2});
    scene.append( this.obj );
  }
  shrink(){
    if( this.shot && this.s > 0){
      this.s += this.ds;
      this.obj.setAttribute("scale",{x:this.s,y:this.s,z:this.s});
    }
  }
}