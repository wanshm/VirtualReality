

function incrementPositon(element,x,y,z){
    const vx = x;
    const vy = y;
    const vz = z;

    const camera = document.querySelector(element);

    const camPosition = camera.getAttribute("position");
    
    camera.setAttribute("position",{x:camPosition.x+vx, y:camPosition.y+vy, z:camPosition.z+vz});

    console.log(camPosition);
}

function moveCamera(e){
    const key = e.key;
    
    if (key == " "){
        incrementPositon("a-camera", 0, 1, 0);
    }

    if(key == "Shift") {
        incrementPositon("a-camera", 0, -1, 0);
    }

    console.log(key);
}