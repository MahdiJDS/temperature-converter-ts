"use strict";
const input = document.getElementById('input');
const sp = document.getElementById('sp');
const output = document.getElementById('parF');
const switcher = document.querySelector('.switch');
var State;
(function (State) {
    State["Celsius"] = "cel";
    State["Fahrenheit"] = "fah";
})(State || (State = {}));
let state = State.Celsius;
const convert = {
    celToFah: (c) => (c * 9) / 5 + 32,
    fahToCel: (f) => (f - 32) * 5 / 9
};
function update() {
    const value = parseFloat(input.value);
    if (isNaN(value)) {
        output.textContent = '';
        return;
    }
    let result;
    let label;
    let unit;
    if (state === State.Celsius) {
        result = convert.celToFah(value);
        label = 'Fahrenheit';
        unit = '°F';
    }
    else {
        result = convert.fahToCel(value);
        label = 'Celsius';
        unit = '°C';
    }
    output.innerHTML = `${label}: <span>${result.toFixed(2)}</span>${unit}`;
}
input.addEventListener('input', update);
switcher.addEventListener('click', () => {
    state = state === State.Celsius ? State.Fahrenheit : State.Celsius;
    sp.textContent = state === State.Celsius ? 'Celsius' : 'Fahrenheit';
    input.value = '0';
    update();
});
