import KMG from "./kmg.js";
import Container from "./Container.js";
import Sprite from "./Sprite.js";

export default class Scene extends Container
{
    constructor (source) 
    {
        super();

        const background = new Sprite(source, 0, 0, KMG.view.width, KMG.view.height);
        this.addChild(background, true);
    }
}