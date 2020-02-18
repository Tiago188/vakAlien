export default class Container 
{
    constructor () 
    {
        this.children = [];
    }

    addChild ( child ) 
    {
        this.children.push( child );
        child.render();
    }
}