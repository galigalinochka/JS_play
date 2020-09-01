class Selectors{
    constructor(name) {
        this.elHP = document.getElementById(`health-${name}`);
        this.elProgressbar = document.getElementById(`progressbar-${name}`);
        this.btn = document.getElementById('btn-kick');
    }
}



class Pokemon extends Selectors {
    constructor({ name, defaultHP, damageHP, selectors }) {
        super(selectors);

        this.name = name;
        this.defaultHP = defaultHP;
        this.damageHP = damageHP;

        this.renderHP();
    }
    

    changeHP = (count, cb) => {
        this.damageHP -= count;
       // const btn = getElementById('btn-kick');
        if(this.damageHP <= 0) {
            this.damageHP = 0;
            alert('Бедный ' + this.name + ' проиграл бой!');
            this.btn.disabled = true;
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
        this.elProgressbar.style.width = this.damageHP + '%'
    }

    
}



export default Pokemon;
