const input = document.getElementById('input') as HTMLInputElement;
const sp = document.getElementById('sp') as HTMLElement;
const output = document.getElementById('parF') as HTMLElement;
const switcher = document.querySelector('.switch') as HTMLElement;

enum State {
    Celsius = 'cel',
    Fahrenheit = 'fah'
}

let state: State = State.Celsius;

const convert = {
    celToFah: (c: number) => (c * 9) / 5 + 32,
    fahToCel: (f: number) => (f - 32) * 5 / 9
};

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

switcher.addEventListener('click', () => {
    
    state = state === State.Celsius ? State.Fahrenheit : State.Celsius;

    
    sp.textContent = state === State.Celsius ? 'Celsius' : 'Fahrenheit';

    input.value = '0';
    update();
});
