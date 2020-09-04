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
            console.log(generateLog(player1, player2, count));
            
        });

        player2.changeHP(item.maxDamage);
    })
    $control.appendChild($btn);
    
});

