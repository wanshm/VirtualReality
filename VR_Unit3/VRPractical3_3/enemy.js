class Enemy {
    constructor(elId, position){
        const original = document.querySelector("#"+elId);
        this.el = original.cloneNode(true);

        this.el.setAttribute("position",position);
        
    }

    generate(parent){
        parent.append(this.el)
    }

    kill(){
        this.el.parentNode.removeChild(this.el);
    }

}