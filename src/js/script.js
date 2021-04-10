"use strict";

const calculator = document.querySelector('.calculator');
const output = calculator.querySelector('output');
const symbol = calculator.querySelectorAll('div');
const btn = calculator.querySelector('button');
const clear = calculator.querySelector('.clear');
const clearOnce = calculator.querySelector('.clearOnce');


symbol.forEach(symbol => symbol.addEventListener('click', (e) => {

    switch (e.target.innerText) {
        case clear.innerText:
            output.innerHTML = '';
            break;
        case clearOnce.innerText:
            output.innerHTML = output.innerHTML.slice(0, output.innerHTML.length - 1);
            break;
        default:
            output.innerHTML += (e.target.innerText);
            break;
    }
}));


btn.addEventListener('click', () => {
    const answer = eval(output.innerText);
    output.innerHTML = answer;
});

// Я понимаю что Выполнение кода JavaScript с текстовой строки - это невероятный риск для безопасности. Злоумышленнику слишком легко запустить какой угодно код, когда используется eval(). Но это всего лишь Калькулятор, тем более поле ввода крайне ограничено.