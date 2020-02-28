import Container from "./Container.js";

export default class Sprite extends Container 
{
    constructor ( source, x, y, width, height ) 
    {
        super();

        this.addChild(source, true);

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    from ( source ) 
    {
        this.change (source);
        this.onload = () => this.render();
    }

    change ( source ) 
    {
        this.children = [];
        this.addChild(source);
    }

    update () 
    {
        //
    }
}