import {Financiamento} from '../scripts/financiamento.js';

const comCarencia = document.querySelector('#comCarencia'); // Seleciona a tag input id="comCarencia"
const listaSuspensa = document.querySelector('#listaSuspensa'); // Seleciona a tag select id="listaSuspensa"
const corpoTabela = document.querySelector('#corpoTabela');
const botaoCalcular = document.querySelector('#botaoCalcular');
const textoValor = document.querySelector('#textoValor');
const textoEntrada = document.querySelector('#textoEntrada');
const textoTaxaJuros = document.querySelector('#textoTaxaJuros');
const textoPrazo = document.querySelector('#textoPrazo');

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

botaoCalcular.addEventListener('click', function() {
    const valor = parseFloat(textoValor.value);
    const entrada = parseFloat(textoEntrada.value);
    const taxaJuros = parseFloat(textoTaxaJuros.value);
    const prazo = parseFloat(textoPrazo.value);
    let simulacao;
    simulacao = new Financiamento(valor,entrada,taxaJuros,prazo);
    simulacao.calcParcelasMensais();
    simulacao.exibeParcelas();
});