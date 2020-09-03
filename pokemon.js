class Selectors{
    constructor(name) {
        this.elHP = document.getElementById(`health-${name}`);
        this.elProgressbar = document.getElementById(`progressbar-${name}`);
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
        console.log($btn);

        if(this.damageHP <= 0) {
            this.damageHP = 0;
            alert('Бедный ' + this.name + ' проиграл бой!');
            $btn.forEach(item => 
                item.disabled = true);

    }
       
        this.renderHP();
        cb && cb(count);
    }

    // refreshHP = (count, cb) => {
    //     this.damageHP += count; 
        
    //     if(this.damageHP >= 100) {
    //         this.damageHP = 100;
    //         alert('Это максимальный уровень HP Для' + this.name);
    //     }

    //     this.renderHP();
    //     cb && cb(count);
    //}

    renderHP = () => {
        this.renderHPLife();
        this.renderProgressbarHP();
    }
    
    renderHPLife = () => {
        this.elHP.innerText = this.damageHP + ' / ' + this.defaultHP;
       
    }
    
    renderProgressbarHP = () => {
        this.elProgressbar.style.width = this.damageHP*100/this.defaultHP + '%'
    }
}



export default Pokemon;
