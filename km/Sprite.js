import DisplayObject from "./DisplayObject.js";

export default class Sprite extends DisplayObject
{
    constructor ( source, x = 0, y = 0, width = 10, height = 10 ) 
    {
        super();

        this.type = 'image';
        this.width = width;
        this.height = height;
        this.source = source;
        //this.source = '#FF0000';
        this.x = x;
        this.y = y;
    }

    change ( source ) 
    {
        this.image.src = source;
        this.render();
    }

    update () 
    {
        //
    }
}