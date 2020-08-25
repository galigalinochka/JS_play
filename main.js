const btn = document.getElementById('btn-kick');

const character = {
    name: 'Pikachu',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character'),
    renderHP: renderHP,
    renderHPLife: renderHPLife,
    renderProgressbarHP: renderProgressbarHP,
}

const enemy = {
    name: 'Charmander',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-enemy'),
    elProgressbar: document.getElementById('progressbar-enemy'),
    renderHP: renderHP,
    renderHPLife: renderHPLife,
    renderProgressbarHP: renderProgressbarHP,
}

btn.addEventListener('click', function() {
    console.log('Kick');
    changeHP.apply(enemy,[random(20)]);
    changeHP.apply(character,[random(20)]);
});

function init() {
    console.log('Start Game');
    renderHP.call(character);
    renderHP.call(enemy);
   
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

    if(this.damageHP < count) {
        this.damageHP = 0;
        alert('Бедный ' + this.name + ' проиграл бой!');
        btn.disabled = true;
    } else {
        this.damageHP -= count;
    }
   
    renderHP.call(this);
}

function random(num) {
    return Math.ceil(Math.random() * num);
}

init();