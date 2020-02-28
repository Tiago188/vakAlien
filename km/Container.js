export default class Container 
{
    constructor () 
    {
        this.children = [];
        this._x = 0;
        this._y = 0;
        this._height = 0;
        this._width  = 0;
    }

    addChild ( child, noRender = false ) 
    {
        this.children.push( child );
        child.parent = this;
        
        if (!noRender) 
            child.render();
    }

    getChildren () 
    {
        return this.children;
    }

    getFirstChild () 
    {
        return this.children[0];
    }

    setPropertWithChildren ( propert, value ) 
    {
        const selfPropert   = `_${propert}`;
        const children      = this.getChildren();
        const diff          = value - this[selfPropert];
        this[selfPropert]   = value;

        for ( const i in children ) 
        {
            children[i][propert] += diff;
        }
    }

    setPropert ( object, propert, value ) 
    {
        object[propert] += value;
    }

    get x () { return this._x; }

    set x ( value ) { this.setPropertWithChildren( 'x', value ); }

    get y () { return this._y; }

    set y ( value ) { this.setPropertWithChildren( 'y', value ); }

    get height () { return this._height; }

    set height ( value ) { this.setPropertWithChildren( 'height', value ); }

    get width () { return this._width; }

    set width ( value ) { this.setPropertWithChildren( 'width', value ); }

    render () 
    {
        for ( const i in this.children ) 
            this.children[i].render();
    }
}