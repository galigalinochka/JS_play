//1
const firstRow = 'мама мыла раму';
const secondRow = 'собака друг человека';

function getRow(firstRow, secondRow) {

    let aInFirstRow = '';
    for(let i = 0; i < firstRow.length; i++) {
        
        if(firstRow.charAt(i) !== 'а') {
            continue;
        }

        aInFirstRow += firstRow.charAt(i);
    }

    let aInSecondRow = '';
    for(let i = 0; i < secondRow.length; i++) {
        
        if(secondRow.charAt(i) !== 'а') {
            continue;
        }

        aInSecondRow += secondRow.charAt(i);
    }

    if (aInFirstRow > aInSecondRow) {
        console.log(firstRow);
    } else if (aInFirstRow < aInSecondRow) {
        console.log(secondRow);
    } else {
        console.log(`В предложениях одинаковое количество букв 'а' - ` + aInFirstRow.length +' шт.');
    }
}
getRow(firstRow, secondRow); 

//2
// function formattedPhone(phone) {

//     console.log(phone.slice(0, 2) + ' (' + phone.slice(2,5) + ') ' + phone.slice(5, 8) + '-' + phone.slice(8, 10) + '-' + phone.slice(10, 12));
// }

// formattedPhone('+71234567890'); // +7 (123) 456-78-90