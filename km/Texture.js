import KMG from "./kmg.js";

export default class Texture extends Image
{
    constructor ( source, x = 0, y = 0, width = 10, height = 10 ) 
    {
        super();

        this.src = source;
        this._x = x;
        this._y = y;
        this.width = width;
        this.height = height;
    }

    change ( source ) 
    {
        this.src = source;
    }

    render () 
    {
        KMG.context.drawImage(this, this._x, this._y, this.width, this.height);
    }

    get x () { return this._x; }

    set x ( value ) { this._x = value; }

    get y () { return this._y; }

    set y ( value ) { this._y = value; }
}