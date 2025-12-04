"use strict";
const body = document.querySelector('body');
const input = document.getElementById('input');
const sp = document.getElementById('sp');
const output = document.getElementById('parF');
const switcher = document.querySelector('.switch-button');
const dark_mode = document.querySelector('.dark-mode');
var State;
(function (State) {
    State["Celsius"] = "cel";
    State["Fahrenheit"] = "fah";
})(State || (State = {}));
var Mode;
(function (Mode) {
    Mode[Mode["dark"] = 0] = "dark";
    Mode[Mode["light"] = 1] = "light";
})(Mode || (Mode = {}));
let state = State.Celsius;
let mode = Mode.light;
const convert = {
    celToFah: (c) => (c * 9) / 5 + 32,
    fahToCel: (f) => (f - 32) * 5 / 9
};
function changeMode() {
    mode = mode === Mode.light ? Mode.dark : Mode.light;
    if (mode === Mode.dark) {
        body.style.background = 'linear-gradient(135deg, #1f1f1f, #3d0e0e)';
        body.style.color = '#f1f1f1';
        dark_mode.textContent = '🌞';
    }
    else {
        body.style.background = 'linear-gradient(35deg, #cfb9b9, #b52020)';
        body.style.color = '#000';
        dark_mode.textContent = '🌝';
    }
}
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
dark_mode.addEventListener('click', changeMode);
switcher.addEventListener('click', () => {
    state = state === State.Celsius ? State.Fahrenheit : State.Celsius;
    sp.textContent = state === State.Celsius ? 'Celsius' : 'Fahrenheit';
    input.value = '0';
    update();
});
