const comCarencia = document.querySelector('#comCarencia'); // Seleciona a tag input id="comCarencia"
const listaSuspensa = document.querySelector('#listaSuspensa'); // Seleciona a tag select id="listaSuspensa"

/**
 * Adicionar um método addEventListener com parâmetro 'change' 
 * e uma função ao checkbox id="comCarencia"
 */
comCarencia.addEventListener('change', function() {
    if(this.checked) {
        listaSuspensa.removeAttribute('hidden');
    } else {
        listaSuspensa.setAttribute('hidden','hidden');
    }
});