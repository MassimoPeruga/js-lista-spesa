'use strict';

const lista = document.querySelector('.list');
const spesa = [
    'Pane',
    'Pasta',
    'Riso',
    'Uova',
    'Farina',
    'Zucchero',
    'Latte',
];

let indiceLista = 0;

while (indiceLista < spesa.length) {
    const prodotto = document.createElement('li');
    prodotto.classList.add('prodotto');
    prodotto.textContent = spesa[indiceLista];
    lista.appendChild(prodotto);
    indiceLista++;
}