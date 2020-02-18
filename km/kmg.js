import Game from './Game';
import Sprite from './Sprite';

export default class KMG 
{
    KMG () // singleton
    {
        this.Game = new this.Game();
        this.Sprite = new this.Sprite();
    }
}