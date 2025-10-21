
window.addEventListener("DOMContentLoaded",function() {
    const sun = this.document.querySelector("#sun")
    const car = this.document.querySelector("#car")
    sun.setAttribute("opacity",0);

    sun.fade = 1;
    car.vx = -.112501;
    sun.opacity = 0;

    
    const loop = () => {
        car.position = car.getAttribute("position");
        sun.opacity+=sun.fade/100;
        
        car.setAttribute("position",{x:car.position.x+car.vx,y:car.position.y,z:car.position.z})
        sun.opacity < 1 && sun.setAttribute("opacity", sun.opacity); 
        this.requestAnimationFrame(loop);
    }
    loop();
})
