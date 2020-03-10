const result = document.getElementById('result');
const form = document.getElementById('myform');
const lowerCheckbox = document.getElementById('lowerCheckbox');
const upperCheckbox = document.getElementById('upperCheckbox');
const numberCheckbox = document.getElementById('numberCheckbox');
const symbolCheckbox = document.getElementById('symbolsCheckbox');
const lenght = document.getElementById('lenght')

lowerCheckbox.checked = true;
upperCheckbox.checked = true;
numberCheckbox.checked = true;
symbolsCheckbox.checked = true;


let CHARSET = []

lenght.addEventListener('click', (e) => {
    e.preventDefault;
    lenght.select();
})
form.addEventListener('submit', onSubmit);

function onSubmit (event) {
    event.preventDefault();
    let password = 'chuj';
    let lowerValue = lowerCheckbox.checked;
    let upperValue = upperCheckbox.checked;
    let numberValue = numberCheckbox.checked;
    let symbolValue = symbolCheckbox.checked;
    let lenghtValue = lenght.value;
    if(lowerValue + upperValue + numberValue + symbolValue == 0){
        console.log('You mast check at least one checkbox'); 
    } else {
        appendCharset(lowerValue, upperValue, numberValue, symbolValue);
        password = generate(CHARSET, lenghtValue);
        result.textContent = password;
    }
}
function appendCharset(low, upp, num, sym) {
    CHARSET = [];
    if(low === true) {
        CHARSET = CHARSET.concat(rowToArray(97, 122));
    }
    if(upp === true ) {
        CHARSET = CHARSET.concat(rowToArray(65, 90));
    }
    if(num === true) {
        CHARSET = CHARSET.concat(rowToArray(48, 57));
    }
    if(sym === true) {
        CHARSET = CHARSET.concat(rowToArray(33, 47)).concat(rowToArray(58, 64)).concat(rowToArray(92, 95));
    }
}
function rowToArray(first, last) {
    const array = []
    for(i = first; i<= last; i++) {
        array.push(i);
    }
    return array;
}
function generate(set = [], size) {
    password = '';
    for(let i = 0; i<size; i++) {
        password = password.concat(String.fromCharCode(set[Math.floor(Math.random() * set.length)]))
    }
     return password
}