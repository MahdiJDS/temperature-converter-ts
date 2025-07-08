
const input = document.getElementById('input') as HTMLInputElement;
const sp = document.getElementById('sp') as HTMLInputElement;
const output = document.getElementById('parF') as HTMLInputElement;
const switcher = document.querySelector('.switch') as HTMLInputElement;
let state: string = 'cel';



function convertCelOfFah(input: number): number {
    return (input * 9) / 5 + 32;
}

function convertFahOfCel(input: number): number {
    return (input - 32) * 5 / 9;
}

function update(): void {
    if (state === 'cel') {
        const celsiusval = parseFloat(input.value);
        if (!isNaN(celsiusval)) {
            const fahrenheitVal = convertCelOfFah(celsiusval);
            output.innerHTML = `Fahrenheit: <span>${fahrenheitVal.toFixed(2)}</span>°F`;
        } else {
            output.innerHTML = '';
        }
    } else if (state === 'fah') {
        const fahrenheitVal = parseFloat(input.value);
        if (!isNaN(fahrenheitVal)) {
            const celsiusval = convertFahOfCel(fahrenheitVal);
            output.innerHTML = `celsius: <span>${celsiusval.toFixed(2)}</span>°F`;
        } else {
            output.innerHTML = '';
        }
    }
}

input.addEventListener('input', update);

switcher.addEventListener('click', () => {
    if (state === 'cel') {
        sp.textContent = 'Fahrenheit';
        state = 'fah'
        input.value = '0';
        update();
    } else if (state === 'fah') {
        sp.textContent = 'celsius';
        state = 'cel';
        input.value = '0';
        update();
    }
})