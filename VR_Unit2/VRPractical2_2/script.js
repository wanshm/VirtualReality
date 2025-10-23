
window.addEventListener("DOMContentLoaded",function() {
    const sun = this.document.querySelector("#sun");
    const car = this.document.querySelector("#car");
    const rocket = this.document.querySelector("#rocket");
    const dude = this.document.querySelector("#dude");
    const pb = this.document.querySelector("#pokemonball");
    
    const carVx = -.112501;

    const sunFade = 1;
    let sunOpacity = 0;
    sun.setAttribute("opacity",0);

    const rocketVy= 1;

    const dudeG = .2;

    const pbr = 1;
    

    const loop = () => {
        let carPosition = car.getAttribute("position");
        let rocketPosition = rocket.getAttribute("position");
        let dudeScale = dude.getAttribute("scale");
        let pbRotation = pb.getAttribute("rotation");
        sunOpacity+=sunFade/100;

        car.setAttribute("position",{x:carPosition.x+carVx,y:carPosition.y,z:carPosition.z})
        rocket.setAttribute("position",{x:rocketPosition.x,y:rocketPosition.y+rocketVy,z:rocketPosition.z})
        dudeScale.x < 20 && dude.setAttribute("scale",{x:dudeScale.x+dudeG,y:dudeScale.y+dudeG,z:dudeScale.z+dudeG});
        pb.setAttribute("rotation",{x:pbRotation.x+pbr,y:pbRotation.y,z:pbRotation.z});

        sunOpacity < 1 && sun.setAttribute("opacity", sunOpacity); 

        this.requestAnimationFrame(loop);
    }
    loop();
})
