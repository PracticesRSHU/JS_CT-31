//rectangle: div =>  width: 200px, height: 100px, background-color: red 
//ellipce: div =>  width: 200px, height: 100px, background-color: red; border-radius: 50%  
//circle: div =>  width: 100px, height: 100px, background-color: red; border-radius: 50%  

class RootFigure{ //interface or abstraxt class
    #name;
    constructor(width, height, bg_color="white",color="black"){
        this.width=width;
        this.height=height;
        this.bg_color=bg_color;
        this.color=color;
        this.#name="None";
        this.figure_style=`width: ${this.width}px; height: ${this.height}px;
        background-color: ${this.bg_color};
        color: ${this.color}; display: flex; justify-content:center; align-items:center;  margin: 0 auto; `
    }
    create(){
        document.write(`<div style="${this.figure_style}">${this.#name}</div>`)
    }

    set name(value){
        this.#name=value;
    }
}


class Rectangle extends RootFigure{
    constructor(width, height, bg_color="white",color="black"){
        super(width, height, bg_color,color)
        this.name=`${bg_color.toUpperCase()} reactangular`
    }
}


class Ellipce extends RootFigure{
    constructor(width, height, bg_color="white",color="black"){
        super(width, height, bg_color,color)
        this.name=`${bg_color.toUpperCase()} ellipce`
        this.figure_style+=`border-radius: 50%`;
    }
}

let rg1=new Rectangle(200,100,"green","white");
// rg1.name="Green reactagle";
rg1.create();


let rg2=new Rectangle(300,100,"yellow","blue");
// rg2.name="yellow reactagle";
rg2.create();
let elipce=new Ellipce(300,100,"yellow","blue");
// elipce.name="yellow ellipce";
elipce.create();