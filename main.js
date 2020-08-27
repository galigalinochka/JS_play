
const logs = document.querySelector('#logs');

function getElById(id) {
    return document.getElementById(id);
}

const btn = getElById('btn-kick');

const character = {
    name: 'Pikachu',
    defaultHP: 100,
    damageHP: 100,
    elHP: getElById('health-character'),
    elProgressbar: getElById('progressbar-character'),
    changeHP: changeHP,
    renderHP: renderHP,
    renderHPLife: renderHPLife,
    renderProgressbarHP: renderProgressbarHP,
}

const enemy = {
    name: 'Charmander',
    defaultHP: 100,
    damageHP: 100,
    elHP: getElById('health-enemy'),
    elProgressbar: getElById('progressbar-enemy'),
    changeHP: changeHP,
    renderHP: renderHP,
    renderHPLife: renderHPLife,
    renderProgressbarHP: renderProgressbarHP,
}

btn.addEventListener('click', function() {
    console.log('Kick');
    enemy.changeHP(random(20));
    character.changeHP(random(20));
});

function init() {
    console.log('Start Game');
    character.renderHP();
    enemy.renderHP();
   
}

function renderHP() {
    this.renderHPLife();
    this.renderProgressbarHP();
}

function renderHPLife() {
    this.elHP.innerText = this.damageHP + ' / ' + this.defaultHP;
}

function renderProgressbarHP() {
    this.elProgressbar.style.width = this.damageHP + '%'
}

function changeHP(count) {
    this.damageHP -= count;

    
    const log = this === enemy ? generateLog(this, character, count) : generateLog(this, enemy, count);
    
    
        const msg = document.createElement('p');
        msg.classList.add('frame');
        msg.innerText = log;
        logs.insertBefore(msg, logs.children[0]);
    
  
    

    if(this.damageHP <= 0) {
        this.damageHP = 0;
        alert('Бедный ' + this.name + ' проиграл бой!');
        btn.disabled = true;
    }
   
    this.renderHP();
}

function random(num) {
    return Math.ceil(Math.random() * num);
}

function generateLog(firstPerson, secondPerson, count) {
    
    const { defaultHP, damageHP } = firstPerson;
    const $1name= firstPerson.name;
    const $2name= secondPerson.name;
    const statistic = `${count} [${damageHP}/${defaultHP}]`;
    
    const logs = [
        `${$1name} поперхнулся, и за это ${$2name} с испугу приложил прямой удар коленом в лоб врага.-${statistic}`,
        `${$1name} вспомнил что-то важное, но неожиданно ${$2name}, не помня себя от испуга, ударил в предплечье врага.-${statistic}`,
        `${$1name} забылся, но в это время наглый ${$2name}, приняв волевое решение, неслышно подойдя сзади, ударил.-${statistic}`,
        `${$1name} пришел в себя, но неожиданно ${$2name} случайно нанес мощнейший удар.-${statistic}`,
        `${$1name} поперхнулся, но в это время ${$2name} нехотя раздробил кулаком \<вырезанно цензурой\> противника.-${statistic}`,
        `${$1name} удивился, а ${$2name} пошатнувшись влепил подлый удар.-${statistic}`,
        `${$1name} высморкался, но неожиданно ${$2name} провел дробящий удар.-${statistic}`,
        `${$1name} пошатнулся, и внезапно наглый ${$2name} беспричинно ударил в ногу противника.-${statistic}`,
        `${$1name} расстроился, как вдруг, неожиданно ${$2name} случайно влепил стопой в живот соперника.-${statistic}`,
        `${$1name} пытался что-то сказать, но вдруг, неожиданно ${$2name} со скуки, разбил бровь сопернику.-${statistic}`,
    ]; 

    return logs[random(logs.length)-1];
}
init();