import KMG from "./kmg.js";

export default class DisplayObject 
{
    render () 
    {
        if (this.type == 'image') 
        {
            this.image = new Image();
            this.image.src = this.source;

            this.image.onload = () => {
                KMG.context.drawImage(this.image.src, this.x, this.y, this.width, this.height);
            }
        }
        else 
        {
            KMG.context.fillStyle = this.source;
            KMG.context.fillRect(this.x, this.y, this.width, this.height);
        }
    }
}