class Ufo{

    //courtesy of celina huang
    //not stolen trust
    constructor(x,y,z){
        this.obj = document.createElement("a-entity");

        
        let circle = document.createElement("a-sphere");
        circle.setAttribute("color","#eb4034");
        circle.setAttribute("position","0 2 0");
        circle.setAttribute("radius","2.5");
        this.obj.append( circle );
        

        let ring = document.createElement("a-cylinder");
        ring.setAttribute("color","#6e0d07");
        ring.setAttribute("position","0 1 0");
        ring.setAttribute("radius","3.5");
        ring.setAttribute("height","2");
        this.obj.append( ring );

        let glass = document.createElement("a-box");
        glass.setAttribute("color","black");
        glass.setAttribute("position","0 2 2");
        glass.setAttribute("weight","2");
        glass.setAttribute("height","2");
        glass.setAttribute("scale","2");
        this.obj.append( glass );

        let light1 = document.createElement("a-cylinder");
        light1.setAttribute("color","#9afa70");
        light1.setAttribute("position","0 0 0");
        light1.setAttribute("radius","1.3");
        light1.setAttribute("height","1");
        this.obj.append( light1 );

        let light = document.createElement("a-cone");
        light.setAttribute("color","#9afa70");
        light.setAttribute("position","0 -3 0");
        light.setAttribute("radius","2.5");
        light.setAttribute("height","8");
        this.obj.append( light );

        let light3 = document.createElement("a-cone");
        light3.setAttribute("color","#9afa70");
        light3.setAttribute("position","0 -3 0");
        light3.setAttribute("rotation","-180 0 0");
        light3.setAttribute("radius","8");
        light3.setAttribute("height","8");
        this.obj.append( light3 );

        let ringLight = document.createElement("a-cylinder");
        ringLight.setAttribute("color","yellow");
        ringLight.setAttribute("position","0 1.5 0");
        ringLight.setAttribute("radius","3.6");
        ringLight.setAttribute("height","0.1");
        this.obj.append( ringLight );

        let ringLight2 = document.createElement("a-cylinder");
        ringLight2.setAttribute("color","yellow");
        ringLight2.setAttribute("position","0 1 0");
        ringLight2.setAttribute("radius","3.6");
        ringLight2.setAttribute("height","0.1");
        this.obj.append( ringLight2 );

        this.obj.setAttribute("position",{x:x, y:y, z:z});
    }

    generate(el){
        el.append(this.obj);
    }
}