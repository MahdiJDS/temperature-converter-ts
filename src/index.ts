const body = document.querySelector('body') as HTMLBodyElement;
const input = document.getElementById('input') as HTMLInputElement;
const sp = document.getElementById('sp') as HTMLElement;
const output = document.getElementById('parF') as HTMLElement;
const switcher = document.querySelector('.switch-button') as HTMLElement;
const dark_mode = document.querySelector('.dark-mode') as HTMLElement;

enum State {
    Celsius = 'cel',
    Fahrenheit = 'fah'
}

enum Mode {
    dark,
    light
}

let state: State = State.Celsius;
let mode: Mode = Mode.light;

const convert = {
    celToFah: (c: number) => (c * 9) / 5 + 32,
    fahToCel: (f: number) => (f - 32) * 5 / 9
};

function changeMode(): void {
    mode = mode === Mode.light ? Mode.dark : Mode.light;

    if (mode === Mode.dark) {
        body.style.background = 'linear-gradient(135deg, #1f1f1f, #3d0e0e)';
        body.style.color = '#f1f1f1';
        dark_mode.textContent = '🌞';
    } else {
        body.style.background = 'linear-gradient(35deg, #cfb9b9, #b52020)';
        body.style.color = '#000';
        dark_mode.textContent = '🌝';
    }
}


function update(): void {
    const value = parseFloat(input.value);

    if (isNaN(value)) {
        output.textContent = '';
        return;
    }

    let result: number;
    let label: string;
    let unit: string;

    if (state === State.Celsius) {
        result = convert.celToFah(value);
        label = 'Fahrenheit';
        unit = '°F';
    } else {
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
