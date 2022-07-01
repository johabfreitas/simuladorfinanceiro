import {Financiamento} from './financiamento.js';
import {FinanciamentoCarencia} from './financiamentocarencia.js'

const comCarencia = document.querySelector('#comCarencia'); // Seleciona a tag input id="comCarencia"
const listaSuspensa = document.querySelector('#listaSuspensa'); // Seleciona a tag select id="listaSuspensa"
const corpoTabela = document.querySelector('#corpoTabela');
const botaoCalcular = document.querySelector('#botaoCalcular');
const textoValor = document.querySelector('#textoValor');
const textoEntrada = document.querySelector('#textoEntrada');
const textoTaxaJuros = document.querySelector('#textoTaxaJuros');
const textoPrazo = document.querySelector('#textoPrazo');
const print = document.querySelector('#print');
const refresh = document.querySelector('#refresh');

function limpaCorpoDaTabela() {
    while(corpoTabela.firstChild) {
        corpoTabela.removeChild(corpoTabela.firstChild);
    }
}

// recarrega a página e limpa o cache
refresh.addEventListener("click", function() {
    document.location.reload(true);
});

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
    limpaCorpoDaTabela();
    const valor = parseFloat(textoValor.value);
    const entrada = parseFloat(textoEntrada.value);
    const taxaJuros = parseFloat(textoTaxaJuros.value);
    const prazo = parseFloat(textoPrazo.value);
    let simulacao;
    if (comCarencia.checked) {
        const carencia = parseInt(listaSuspensa.value);
        simulacao = new FinanciamentoCarencia(valor,entrada,taxaJuros,prazo,carencia);
    } else {
        simulacao = new Financiamento(valor,entrada,taxaJuros,prazo);
    }
    simulacao.calcParcelasMensais();
    simulacao.exibeParcelas();
    print.removeAttribute('hidden');
    refresh.removeAttribute('hidden');
});
