export default class Game 
{
    Game () // singleton
    {
        this.canvas = document.createElement('game_screen');
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext('2d');
    }

    screenClear () 
    {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}