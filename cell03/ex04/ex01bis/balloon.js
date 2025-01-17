$(document).ready(() => {
    let $balao = $('#balao');
    let cores = ['vermelho', 'verde', 'azul'];
    let indiceCor = 0;
    let tamanho = 200;
  
    $balao.on('click', () => {
        tamanho += 10;
        if (tamanho > 420) {
            tamanho = 200;
        }
        $balao.css({
            width: tamanho + 'px',
            height: tamanho + 'px'
        });
        indiceCor = (indiceCor + 1) % cores.length;
        $balao.removeClass().addClass(cores[indiceCor]);
    });
  
    $balao.on('mouseover', () => {
        // Não faz nada
    });
  
    $balao.on('mouseout', () => {
        tamanho = Math.max(200, tamanho - 5);
        $balao.css({
            width: tamanho + 'px',
            height: tamanho + 'px'
        });
        indiceCor = (indiceCor + cores.length - 1) % cores.length;
        $balao.removeClass().addClass(cores[indiceCor]);
    });
  });