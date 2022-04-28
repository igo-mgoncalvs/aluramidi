function tocaSom (seletrorAudio) {
    const elemento = document.querySelector (seletrorAudio);

    if (elemento && elemento.localName === 'audio') {
            elemento.play();
        }
    else {
        console.log('Elemento não encontrado ou seletor invalido');
    }
}

const listaDeTeclas = document.querySelectorAll ('.tecla');

//enquanto
for (let contador = 0; contador < listaDeTeclas.length; contador ++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //tamplate string

    tecla.onclick = function () {
        tocaSom (idAudio);
    }

    tecla.onkeydown = function (evento) {

        if (evento.code == 'Space' || evento.code == 'Enter') {
        tecla.classList.add('ativa');
        }

    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}
