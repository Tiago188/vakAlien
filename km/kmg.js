import Game from './Game.js';
import Sprite from './Sprite.js';

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

        this.Game = Game;
        this.Sprite = Sprite;

        return KMG.instance;
    }

    screenClear () 
    {
        this.context.clearRect(0, 0, this.view.width, this.view.height);
    }
}

const instance = new KMG();
Object.freeze(instance);

export default instance;