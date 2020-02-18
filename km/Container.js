export default Container 
{
    Container () 
    {
        this.children = [];
    }

    addChild ( child ) {
        this.children.push( child );
    }
}