export default class Container 
{
    constructor () 
    {
        this.children = [];
    }

    addChild ( child ) 
    {
        this.children.push( child );
        child.parent = this;
        child.render();
    }

    render () 
    {
        for ( const i in this.children ) 
            this.children[i].render();
    }
}