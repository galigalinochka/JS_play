window.onload = function () {
    document.body.classList.add('loaded');
};

import Pokemon from './pokemon.js';
import { random, generateLog, counter } from './utils.js';
import { pokemons } from './pokemons.js';

const logs = document.querySelector('#logs');
const $control = document.querySelector('.control');

function randomPokemon() {
    return pokemons[(Math.ceil(Math.random() * pokemons.length-1))];   
}

const firstRandomHero = randomPokemon();
const secondRandomHero = randomPokemon();

if ( firstRandomHero.name !== secondRandomHero.name) {
    const $firstHeroImg = document.getElementById('img-player1');
    const $secondHeroImg = document.getElementById('img-player2');

    $firstHeroImg.src = firstRandomHero.img; 
    $secondHeroImg.src = secondRandomHero.img;

    const $firstHeroName = document.getElementById('name-player1');
    const $secondHeroName = document.getElementById('name-player2');
    $firstHeroName.innerText = firstRandomHero.name;
    $secondHeroName.innerText = secondRandomHero.name;
} else {
   location.reload();
}

const player1 = new Pokemon({
    ...firstRandomHero,
    selectors: 'player1',
});

const player2 = new Pokemon({
    ...secondRandomHero,
    selectors: 'player2',
});

player1.attacks.forEach(item => {
    const $btn = document.createElement('button');
    $btn.classList.add('button');
    $btn.innerText = item.name;

    const btnCount= counter($btn, item.maxCount);

    $btn.addEventListener('click', () => {
        console.log('Click button', $btn.innerText);
        btnCount();
        player1.changeHP(item.minDamage, function(count) {
            console.log('Some changes after HP', count);
            const msg = document.createElement('p');

            msg.innerText = generateLog(player1, player2, count);
            logs.insertBefore(msg, logs.children[0]); 
        });

        player2.changeHP(item.maxDamage, function(count) {
            const msg2 = document.createElement('p');
            msg2.innerText = generateLog(player2, player1, count);
            logs.insertBefore(msg2, logs.children[0]);
        });
        

    })
    $control.appendChild($btn);
    
});


// class Game {
//     getPokemons = async() => {

//     const responce = await fetch('https://reactmarathon-api.netlify.app/api/pokemons');
//     const body = await responce.json();
//     return body;
//     };
    
    
//     start = async() => {
//         const pokemons = await this.getPokemons();
//         console.log(pokemons);
//         const pikachu = pokemons.find(item => item.name === 'Abra');
//         const charmander = pokemons.find(item => item.name === 'Charmander');
//         const player1 = new Pokemon({
//             ...pikachu,
//             selectors: 'player1',
//         });
        
//         const player2 = new Pokemon({
//             ...charmander,
//             selectors: 'player2',
//         });

//         console.log(pikachu);
        
//         const player1Img = document.getElementById('img-player1');
//         const player2Img = document.getElementById('img-player2');
        
//         player1Img.src = player1.img; 
//         player2Img.src = player2.img;

//         const player1Name = document.getElementById('name-player1');
//         const player2Name = document.getElementById('name-player2');
//         player1Name.innerText =  player1.name;
//         player2Name.innerText =  player2.name;


        
        
           
//     }
// }

// const game = new Game();
// game.start();


// class Game {
//     getPokemons = async() => {

//     const responce = await fetch('https://reactmarathon-api.netlify.app/api/pokemons');
//     const body = await responce.json();
//     return body;
//     }

//     start = async() => {
//         const pokemons = await this.getPokemons();
//         console.log(pokemons);
//         const player1 = new Pokemon({
//             ...firstRandomHero,
//             selectors: 'player1',
//         });
        
//         const player2 = new Pokemon({
//             ...secondRandomHero,
//             selectors: 'player2',
//         });
//     }

// function randomPokemon() {
//     return pokemons[(Math.ceil(Math.random() * pokemons.length-1))];   
// }
// const firstRandomHero = randomPokemon();
// const secondRandomHero = randomPokemon();


// function newGame() {

//     if ( firstRandomHero.name !== secondRandomHero.name) {
//         const $firstHeroImg = document.getElementById('img-player1');
//         const $secondHeroImg = document.getElementById('img-player2');
        
//         $firstHeroImg.src = firstRandomHero.img; 
//         $secondHeroImg.src = secondRandomHero.img;

//         const $firstHeroName = document.getElementById('name-player1');
//         const $secondHeroName = document.getElementById('name-player2');
//         $firstHeroName.innerText = firstRandomHero.name;
//         $secondHeroName.innerText = secondRandomHero.name;

//     } else {
//         newGame();
//     }
// };

// newGame();

// player1.attacks.forEach(item => {
//     const $btn = document.createElement('button');
//     $btn.classList.add('button');
//     $btn.innerText = item.name;

//     const btnCount= counter($btn, item.maxCount);

//     $btn.addEventListener('click', () => {
//         console.log('Click button', $btn.innerText);
//         btnCount();
//         player1.changeHP(item.minDamage, function(count) {
//             console.log('Some changes after HP', count);
//             const msg = document.createElement('p');

//             msg.innerText = generateLog(player1, player2, count);
//             logs.insertBefore(msg, logs.children[0]); 
//         });

//         player2.changeHP(item.maxDamage);
//     })
//     $control.appendChild($btn);
    
// });

// const game = new Game();
// game.start();
    