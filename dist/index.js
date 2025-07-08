"use strict";
const input = document.getElementById('input');
const sp = document.getElementById('sp');
const output = document.getElementById('parF');
const switcher = document.querySelector('.switch');
let state = 'cel';
function convertCelOfFah(input) {
    return (input * 9) / 5 + 32;
}
function convertFahOfCel(input) {
    return (input - 32) * 5 / 9;
}
function update() {
    if (state === 'cel') {
        const celsiusval = parseFloat(input.value);
        if (!isNaN(celsiusval)) {
            const fahrenheitVal = convertCelOfFah(celsiusval);
            output.innerHTML = `Fahrenheit: <span>${fahrenheitVal.toFixed(2)}</span>°F`;
        }
        else {
            output.innerHTML = '';
        }
    }
    else if (state === 'fah') {
        const fahrenheitVal = parseFloat(input.value);
        if (!isNaN(fahrenheitVal)) {
            const celsiusval = convertFahOfCel(fahrenheitVal);
            output.innerHTML = `celsius: <span>${celsiusval.toFixed(2)}</span>°F`;
        }
        else {
            output.innerHTML = '';
        }
    }
}
input.addEventListener('input', update);
switcher.addEventListener('click', () => {
    if (state === 'cel') {
        sp.textContent = 'Fahrenheit';
        state = 'fah';
        input.value = '0';
        update();
    }
    else if (state === 'fah') {
        sp.textContent = 'celsius';
        state = 'cel';
        input.value = '0';
        update();
    }
});
