import Pokemon from './pokemon.js';
import { random, generateLog, counter } from './utils.js';
import { pokemons } from './pokemons.js';

const logs = document.querySelector('#logs');
const $control = document.querySelector('.control');

function randomPokemon() {
    return pokemons[(Math.ceil(Math.random() * pokemons.length))];   
}
const randomHero = randomPokemon();

console.log(randomHero);

const $heroImg = document.getElementById('img-player1');
console.log($heroImg);
$heroImg.src = randomHero.img; 
const $heroName = document.getElementById('name-player1');
$heroName.innerText = randomHero.name;

const player1 = new Pokemon({
    ...randomHero,
    selectors: 'player1',
});

console.log(player1);

const player2 = new Pokemon({
    name: 'Charmander',
    defaultHP: 300,
    damageHP: 300,
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