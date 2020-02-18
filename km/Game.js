import Container from "./Container.js";

export default class Game 
{
    constructor () // singleton
    {
        this.stage = new Container();
    }

    screenClear () 
    {
        this.context.clearRect(0, 0, this.view.width, this.view.height);
    }

    addScene () 
    {
        //
    }

    removeScene () 
    {
        //
    }
}