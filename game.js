import KMG from './km/kmg.js';

const list = {
    personSmile: './assets/image/smiley.gif',
    personAngry: './assets/image/angry.gif',
    personRabbit: './assets/image/rabbitv3_ash.png',
    splash: './assets/image/splash.jpg'
};

const resources = new KMG.Resources(list);

resources.onComplete.add(() => {
    gameInit();
});

function gameInit () 
{
    console.log('GAME INIT');

    let game = new KMG.Game();

    const person  = new KMG.Sprite(resources.personSmile.data, 0, 0, 10, 10);
    const enemies = [];

    for (let i = 0; i < 1000; i++) {
        const x = Math.floor( Math.random() * 200 );
        const y = Math.floor( Math.random() * 200 );
        const size = Math.floor( Math.random() * 10 ) + 10;
        const speed  = Math.random() * 4 + 1;

        const enemie = new KMG.Sprite( resources.personRabbit.data, x, y, size, size );
        enemie.speed = speed;
        enemie.direction = 1;
        enemies.push(enemie);
    }

    person.y = 100;
    person.name= 'Tiago';
    person.speed = 1;

    const splash = new KMG.Scene(resources.splash.data);
    splash.name = 'Cenario';

    game.stage.addChild(splash);
    game.stage.addChild(person);
    
    for (const i in enemies) 
    {
        const enemie = enemies[i];
        game.stage.addChild(enemie);
    }

    game.addTick( () => 
    {
        person.x += person.speed;

        for (const i in enemies) 
        {
            const enemie = enemies[i];
            enemie.x += enemie.speed * enemie.direction;

            if (enemie.x > KMG.view.width) 
                enemie.direction = -1

            if (enemie.x < 0) 
                enemie.direction = 1
        }

        if (person.x > KMG.view.width) 
            person.speed = -2

        if (person.x < 0) 
            person.speed = 1
    });
}