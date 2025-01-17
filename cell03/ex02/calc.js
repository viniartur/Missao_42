let num1 = document.getElementById('num1');
let operador = document.getElementById('operador');
let num2 = document.getElementById('num2');
let botao = document.getElementById('botao');
let resultado = document.getElementById('resultado');

botao.addEventListener('click', calcular);

function calcular() {
    let n1 = parseInt(num1.value);
    let n2 = parseInt(num2.value);
    let op = operador.value;

    if (isNaN(n1) || isNaN(n2) || n1 < 0 || n2 < 0) {
        alert('Error :(');
        return;
    }

    let res;
    switch (op) {
        case '+':
            res = n1 + n2;
            break;
        case '-':
            res = n1 - n2;
            break;
        case '*':
            res = n1 * n2;
            break;
        case '/':
            if (n2 === 0) {
                alert("It's over 9000!");
                return;
            }
            res = n1 / n2;
            break;
        case '%':
            if (n2 === 0) {
                alert("It's over 9000!");
                return;
            }
            res = n1 % n2;
            break;
    }

    resultado.textContent = `Resultado: ${res}`;
    console.log(`Resultado: ${res}`);
}

setInterval(() => {
    alert('Please, use me...');
}, 30000);