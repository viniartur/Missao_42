$(document).ready(function() {
    $('#botao').click(calcular);

    function calcular() {
        let n1 = parseInt($('#num1').val());
        let n2 = parseInt($('#num2').val());
        let op = $('#operador').val();

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

        $('#resultado').text(`Resultado: ${res}`);
        console.log(`Resultado: ${res}`);
    }

    setInterval(() => {
        alert('Please, use me...');
    }, 30000);
});