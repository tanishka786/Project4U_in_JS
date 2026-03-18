const form = document.getElementById('bmi-form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.getElementById('results');
    const bmiVal = document.getElementById('bmi-value');
    const bmiCat = document.getElementById('bmi-cat');

    results.classList.remove('show');

    if (!height || height < 0 || isNaN(height)) {
        bmiVal.textContent = '⚠️';
        bmiCat.textContent = 'Please enter a valid height';
        results.classList.add('show');
        return;
    }
    if (!weight || weight < 0 || isNaN(weight)) {
        bmiVal.textContent = '⚠️';
        bmiCat.textContent = 'Please enter a valid weight';
        results.classList.add('show');
        return;
    }

    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    bmiVal.textContent = bmi;

    if (bmi < 18.6) bmiCat.textContent = 'Underweight';
    else if (bmi <= 24.9) bmiCat.textContent = 'Normal Range';
    else bmiCat.textContent = 'Overweight';

    results.classList.add('show');
});
