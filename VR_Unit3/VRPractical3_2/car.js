class MyCar {
    constructor(p,s){
        const original = document.querySelector("#mycar");
        this.el = original.cloneNode(true);

        if(p){
            this.el.setAttribute("position", p);
        } else this.el.setAttribute("position","0 0 0");
        if(s){
            this.el.setAttribute("scale",s);
        } else this.el.setAttribute("scale", "1 1 1");
        
        this.driving = false;

        this.el.addEventListener("click",()=>{
            this.driving = true;
        })
    }

    move(v){
        const p = this.el.getAttribute("position")
        this.el.setAttribute("position",{x:p.x+v.x,y:p.y+v.y,z:p.z+v.z})
        console.log(p)
    }

    generate(parent){
        parent.append(this.el);
    }
}
