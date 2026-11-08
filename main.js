function convertTemperature(celsius, toFahrenheit) {
    if (toFahrenheit) {
        return (celsius * 9) / 5 + 32;
    } else {
        return ((celsius - 32) * 5) / 9;
    }
}

function validatePassword(password) {
    if (password.length <= 8) {
        return false;
    }
    if (!/[a-zA-Zа-яА-ЯёЁ]/.test(password)) {
        return false;
    }
    if (!/\d/.test(password)) {
        return false;
    }
    return true;
}

function calculate(a, b, operation) {
    switch (operation) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
        case '×':
            return a * b;
        case '/':
        case '÷':
            if (b === 0) {
                return 'Ошибка: деление на ноль';
            }
            return a / b;
        default:
            return 'Неизвестная операция';
    }
}

const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const resultDiv = document.getElementById('result');
const buttons = document.querySelectorAll('.operation-btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const val1 = parseFloat(num1Input.value);
        const val2 = parseFloat(num2Input.value);
        const operation = button.textContent;

        if (isNaN(val1) || isNaN(val2)) {
            resultDiv.textContent = 'Результат: Ошибка: Введите числа';
            return;
        }

        const res = calculate(val1, val2, operation);
        resultDiv.textContent = `Результат: ${res}`;
    });
});
