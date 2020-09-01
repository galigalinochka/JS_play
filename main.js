import Pokemon from './pokemon.js';
import random from './utils.js';

const player1 = new Pokemon({
    name: 'Pikachu',
    defaultHP: 100,
    damageHP: 100,
    selectors: 'character',
});

const player2 = new Pokemon({
    name: 'Charmander',
    defaultHP: 100,
    damageHP: 100,
    selectors: 'enemy',
})

const logs = document.querySelector('#logs');
const btn = getElById('btn-kick');
const btnRefresh = getElById('btn-refresh');
const attemptsLeft = document.createElement('span');
const attemptsLeft2 = document.createElement('span');

btn.appendChild(attemptsLeft);
btnRefresh.appendChild(attemptsLeft2);

function getElById(id) {
    return document.getElementById(id);
}

function counter(btnType, maxKlicks) {
    let count = 0;
    

    return function() {
        
        count ++;
        
        btnType.getElementsByTagName('span')[0].innerText=`Klicks left: ${maxKlicks - count}`;

        if (count >= maxKlicks) {
            btnType.disabled = true;
        }  
    
    }
}

const btnKlickCounter = counter(btn, 12);
const btnRefreshKlickCounter = counter(btnRefresh, 3);

btn.addEventListener('click', () => {
    btnKlickCounter();
    player1.changeHP(random(20), function(count) {
        console.log('Some changes after HP', count);
        console.log(generateLog(player1, player2, count));

    });
    player2.changeHP(random(20));
});    

btnRefresh.addEventListener('click', () => btnRefreshKlickCounter());

// function changeHP(count) {
//     this.damageHP -= count;
//     console.log(typeof(changeHP));
//     const log = this === enemy ? generateLog(this, character, count) : generateLog(this, enemy, count);
        
//     const msg = document.createElement('p');
       
//     msg.innerText = log;
//     logs.insertBefore(msg, logs.children[0]);
    
//     if(this.damageHP <= 0) {
//         this.damageHP = 0;
//         alert('Бедный ' + this.name + ' проиграл бой!');
//         btn.disabled = true;
//     }
   
//     this.renderHP();
// }

function generateLog(firstPerson, secondPerson, count) {
    
    const { defaultHP, damageHP } = firstPerson;
    const firstPersonName= firstPerson.name;
    const secondtPersonName= secondPerson.name;
    const statistic = `${count} [${damageHP}/${defaultHP}]`;
    
    const logs = [
        `${firstPersonName} поперхнулся, и за это ${secondtPersonName} с испугу приложил прямой удар коленом в лоб врага.-${statistic}`,
        `${firstPersonName} вспомнил что-то важное, но неожиданно ${secondtPersonName}, не помня себя от испуга, ударил в предплечье врага.-${statistic}`,
        `${firstPersonName} забылся, но в это время наглый ${secondtPersonName}, приняв волевое решение, неслышно подойдя сзади, ударил.-${statistic}`,
        `${firstPersonName} пришел в себя, но неожиданно ${secondtPersonName} случайно нанес мощнейший удар.-${statistic}`,
        `${firstPersonName} поперхнулся, но в это время ${secondtPersonName} нехотя раздробил кулаком \<вырезанно цензурой\> противника.-${statistic}`,
        `${firstPersonName} удивился, а ${secondtPersonName} пошатнувшись влепил подлый удар.-${statistic}`,
        `${firstPersonName} высморкался, но неожиданно ${secondtPersonName} провел дробящий удар.-${statistic}`,
        `${firstPersonName} пошатнулся, и внезапно наглый ${secondtPersonName} беспричинно ударил в ногу противника.-${statistic}`,
        `${firstPersonName} расстроился, как вдруг, неожиданно ${secondtPersonName} случайно влепил стопой в живот соперника.-${statistic}`,
        `${firstPersonName} пытался что-то сказать, но вдруг, неожиданно ${secondtPersonName} со скуки, разбил бровь сопернику.-${statistic}`,
    ]; 

    return logs[random(logs.length)-1];
}
