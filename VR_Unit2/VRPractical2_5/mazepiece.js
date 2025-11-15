class MazePiece {
    constructor(type,p){
        this.el = type.cloneNode(true); 
        this.el.setAttribute("position",p);
    }
    generate(parent){
        parent.append(this.el);
    }
}