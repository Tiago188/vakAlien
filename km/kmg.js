import Game from './Game.js';
import Sprite from './Sprite.js';
import Scene from './Scene.js';
import Resources from './Resources.js';

class KMG 
{
    constructor () // singleton
    {
        if ( !KMG.instance )
            KMG.instance = this;

        //this.view = document.createElement('game_screen');
        this.view = document.getElementById('game_layer');
        this.view.width = 480;
        this.view.height = 320;
        this.context = this.view.getContext('2d', { alpha: false });
        //this.ObjectsRenders = [];

        this.Game = Game;
        this.Scene = Scene;
        this.Sprite = Sprite;
        this.Resources = Resources;

        return KMG.instance;
    }

    /*
    render () 
    {
    
        const ObjectsRenders = this.Game.stage.children;
        this.screenClear();
    
        for ( const i in ObjectsRenders ) 
            ObjectsRenders[i].render();
    }
    */

    screenClear () 
    {
        this.context.clearRect(0, 0, this.view.width, this.view.height);
    }
}

const instance = new KMG();
Object.freeze(instance);

export default instance;