

function switchCam(){
    const cam1 = document.getElementById("cam1");
    if (cam1.getAttribute("active")=="true"){
        cam1.setAttribute("active", false)
    } else {
        cam1.setAttribute( "active", true)
    }
    
}
