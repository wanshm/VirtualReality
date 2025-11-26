class Rocket {

    constructor(p){
        this.el = document.createElement("a-entity");
        this.el.x = p.x;
        this.el.y = p.y;
        this.el.z = p.z;

        const rbody = document.createElement("a-cylinder");
        const rcone = document.createElement("a-cone");
        const rfin1 = document.createElement("a-triangle");
        const rfin2 = document.createElement("a-triangle");
        const rfin3 = document.createElement("a-triangle");

        let launched = false;

        rbody.setAttribute("scale","1 4 1");
        rbody.setAttribute("position","0 2 0")
        rbody.setAttribute("color","#EEEEEE");

        rcone.setAttribute("scale","1.5 2 1.5");
        rcone.setAttribute("position","0 5 0");
        rcone.setAttribute("color","red")

        rfin1.setAttribute("side","double");
        rfin1.setAttribute("color","red");
        rfin1.setAttribute("vertex-a","1 0 0");
        rfin1.setAttribute("vertex-b","2 0 0");
        rfin1.setAttribute("vertex-c","1 1.73 0");
        
        rfin2.setAttribute("side","double");
        rfin2.setAttribute("color","red");
        rfin2.setAttribute("vertex-a","-.5 0 -0.866");
        rfin2.setAttribute("vertex-b","-1 0 -1.73");
        rfin2.setAttribute("vertex-c","-.5 1.73 -.866");

        rfin3.setAttribute("side","double");
        rfin3.setAttribute("color","red");
        rfin3.setAttribute("vertex-a","-.5 0 0.866");
        rfin3.setAttribute("vertex-b","-1 0 1.73");
        rfin3.setAttribute("vertex-c","-.5 1.73 .866");


        this.el.append(rbody);
        this.el.append(rcone);
        this.el.append(rfin1);
        this.el.append(rfin2);
        this.el.append(rfin3);
    
        this.el.setAttribute("position",p);
    
        this.el.addEventListener("mouseenter",()=>{
            this.launched = true;
        })
    }

    launch(v){
        const p = this.el.getAttribute("position");

        this.el.setAttribute("position",{x:this.el.x,y:p.y+v,z:this.el.z})
    }
    generate(parent) {
        parent.append(this.el);
    }
}