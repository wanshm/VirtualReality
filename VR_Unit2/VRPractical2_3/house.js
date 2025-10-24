class House {
    constructor(p){
        this.house = document.createElement("a-entity");

        let base = document.createElement("a-box");
        let roof = document.createElement("a-cylinder");

        roof.setAttribute("color","black");

        base.setAttribute("color","blue");
        base.setAttribute("position","0 2 0");
        base.setAttribute("height","3");
        base.setAttribute("width","3");
        base.setAttribute("depth","2.5");

        roof.setAttribute("segments-radial","3");
        roof.setAttribute("position","0 4.5 0");
        roof.setAttribute("rotation","-90 0 0");

        roof.setAttribute("scale","2.5 2.5 2")


        this.house.append(base);
        this.house.append(roof);

        this.house.setAttribute("position",p);
        scene.append(this.house);
        
    }
}