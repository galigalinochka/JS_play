import random from './utils.js';

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

export default generateLog;