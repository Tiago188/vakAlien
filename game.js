import KMG from './km/kmg.js';

let resources = {
    personSmile: './assets/image/smiley.gif',
    personAngry: './assets/image/angry.gif',
    splash: './assets/image/splash.jpg'
};

let game = new KMG.Game();

const person = new KMG.Sprite(resources.personSmile, 0, 0, 100, 100);

const splash = new KMG.Scene(resources.splash);

game.stage.addChild(splash);
game.stage.addChild(person);
setInterval(() => {
    person.change(resources.personAngry, 100, 50);
    person.x += 5;
}, 2000);
/*
// Listen for frame updates
app.ticker.add(() => {
    // each frame we spin the bunny around a bit
    person.rotation += 0.01;
});
*/