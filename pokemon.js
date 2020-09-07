class Selectors{
    constructor(name) {
        this.elHP = document.getElementById(`health-${name}`);
        this.elProgressbar = document.getElementById(`progressbar-${name}`);
        this.elProgressLine = document.querySelector('.health');
        this.$btn = document.querySelector('.button');
        this.btnRefresh = document.getElementById('btn-refresh');
    }
}

class Pokemon extends Selectors {
    constructor({ name, type, defaultHP, damageHP, attacks = [], selectors }) {
        super(selectors);

        this.name = name;
        this.type = type;
        this.defaultHP = defaultHP;
        this.damageHP = damageHP;
        this.attacks = attacks;
        
        this.renderHP();
    }
    

    changeHP = (count, cb) => {
        this.damageHP -= count;
        const $btn = document.querySelectorAll('.button');
        
        if(this.damageHP <= 0) {
            this.damageHP = 0;
            alert('Бедный ' + this.name + ' проиграл бой!');
            $btn.forEach(item => 
                item.disabled = true);
        const $control = document.querySelector('.control');
        const $btnNewGame = document.createElement('button');
        $btnNewGame.classList.add('button-restart');
        $btnNewGame.innerText = 'Play again';
        console.log($btnNewGame);
        $control.appendChild($btnNewGame);

        $btnNewGame.addEventListener('click', () => location.reload());
        }
       
        this.renderHP();
        cb && cb(count);   
    }

    renderHP = () => {
        this.renderHPLife();
        this.renderProgressbarHP();
    }
    
    renderHPLife = () => {
        this.elHP.innerText = this.damageHP + ' / ' + this.defaultHP;
       
    }
    
    renderProgressbarHP = () => {
        this.elProgressbar.style.width = this.damageHP*100/this.defaultHP + '%'
        
        if (this.damageHP <= 250) {
            this.elProgressbar.classList.add('low');

        } if (this.damageHP <= 100) {
            this.elProgressbar.classList.add('critical');
        }
    }
}

export default Pokemon;
