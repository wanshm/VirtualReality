class Bullet{
  constructor(){
    this.obj = document.createElement("a-sphere");
    this.obj.setAttribute("radius",2)
    let pos = camera.object3D.position;
    this.obj.setAttribute("position",{x:pos.x,y:pos.y+10,z:pos.z});
    scene.append(this.obj);
    
    this.theta = camera.object3D.rotation.y + Math.PI;
    this.phi = THREE.MathUtils.degToRad(laserAngle.x) ; // do something 
    let v = 2.1;
    let v_xz = v * Math.cos(this.phi);
    this.dz = v_xz * Math.cos(this.theta);
    this.dx = v_xz * Math.sin(this.theta);
    this.dy = v * Math.sin(this.phi);
  }
  fire(){

    this.obj.object3D.position.x += this.dx;
    this.obj.object3D.position.y += this.dy;
    this.obj.object3D.position.z += this.dz; 

    //this.obj.object3D.rotation.y = this.theta - Math.PI/2;
  }
}