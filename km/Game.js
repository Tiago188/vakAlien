import Container from "./Container.js";

export default class Game 
{
    constructor () // singleton
    {
        this.stage = new Container();
    }

    addScene () 
    {
        //
    }

    removeScene () 
    {
        //
    }

    render () 
    {
        const ObjectsRenders = this.stage.children;
        this.screenClear();
    
        for ( const i in ObjectsRenders ) 
            ObjectsRenders[i].render();
    }
}