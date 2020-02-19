import KMG from "./kmg.js";

export default class DisplayObject extends Image
{
    constructor () 
    {
        super();

        this._x = this.x;
        this._y = this.y;
    }

    render () 
    {
        KMG.render();

        this.src = this.source;

        this.onload = () => 
            KMG.context.drawImage(this, this._x, this._y, this.width, this.height);

        //KMG.screenClear();
    }

    get x () 
    {
        return this._x;
    }

    set x ( value ) 
    {
        this._x = value;
        this.render();
    }

    get y () 
    {
        return this._y;
    }

    set y ( value ) 
    {
        this._y = value;
        this.render();
    }
}