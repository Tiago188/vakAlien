import Game from './Game.js';
import Sprite from './Sprite.js';
import Scene from './Scene.js';

class KMG 
{
    constructor () // singleton
    {
        if ( !KMG.instance )
            KMG.instance = this;

        //this.view = document.createElement('game_screen');
        this.view = document.getElementById('game_screen');
        this.view.width = 480;
        this.view.height = 270;
        this.context = this.view.getContext('2d');
        //this.ObjectsRenders = [];

        this.Game = Game;
        this.Scene = Scene;
        this.Sprite = Sprite;

        return KMG.instance;
    }

    render () 
    {console.log(this, this.Game, this.Game.stage);
    
        const ObjectsRenders = this.Game.stage.children;
        this.screenClear();
    
        for ( const i in ObjectsRenders ) 
            ObjectsRenders[i].render();
    }

    screenClear () 
    {
        this.context.clearRect(0, 0, this.view.width, this.view.height);
    }
}

const instance = new KMG();
Object.freeze(instance);

export default instance;