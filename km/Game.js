import KMG from "./kmg.js";
import Container from "./Container.js";

export default class Game 
{
    constructor () // singleton
    {
        this.stage = new Container();
        this.tickState = 'stop';
        this.tickers = [];
    }

    addScene () 
    {
        //
    }

    removeScene () 
    {
        //
    }

    addTick ( tick ) 
    {
        this.tickers.push(tick);

        if ( this.tickState === 'stop' ) 
            this.tick();
    }

    tick () 
    {
        for ( const i in this.tickers ) 
            this.tickers[i]();

        this.render();
        requestAnimationFrame(()=>this.tick());
    }

    render () 
    {
        const ObjectsRenders = this.stage.children;
        KMG.screenClear();
    
        for ( const i in ObjectsRenders ) 
            ObjectsRenders[i].render();
    }
}