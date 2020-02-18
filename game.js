import KMG from './km/kmg.js';
import Game from './km/Game.js';

let resources = {
    personSmile: './assets/image/smiley.gif',
    personAngry: './assets/image/angry.gif'
};

let game = new KMG.Game();

const person = new KMG.Sprite(resources.personSmile);

game.stage.addChild(person);

/*
// Listen for frame updates
app.ticker.add(() => {
    // each frame we spin the bunny around a bit
    person.rotation += 0.01;
});
*/