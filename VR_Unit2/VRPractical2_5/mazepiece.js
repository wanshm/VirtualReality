class MazePiece {
    constructor(type,position){
        const refpiece = document.getElementsByClassName(type);
        this.el = refpiece.cloneNode(true); 
    }
    generate(parent){
        parent.append(this.el)
    }
}