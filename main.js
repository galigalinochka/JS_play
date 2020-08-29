
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
init();