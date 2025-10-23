class Cloud {
    constructor(position,scale){
        this.cloud = document.createElement("a-entity");
        this.cloud.setAttribute("position",position);
        this.cloud.setAttribute("scale",scale);
        const cp1 = document.createElement("a-sphere");
        const cp2 = document.createElement("a-sphere");
        const cp3 = document.createElement("a-sphere");
        cp2.setAttribute("position",{x:2,y:0,z:0});
        cp3.setAttribute("position",{x:1,y:0,z:0});
        cp3.setAttribute("scale",{x:1.2,y:1.2,z:1.2})
        this.cloud.append(cp1);
        this.cloud.append(cp2);
        this.cloud.append(cp3);
        scene.append(this.cloud);
    }
}