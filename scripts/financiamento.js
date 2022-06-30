import {Parcela} from './scripts/parcela.js';

class Financiamento {
    #taxaJuros; //juros mensais
    #prazo; //em meses
    #parcelas = [];
    constructor(valor,entrada,taxaJuros,prazo) {
        this.taxaJuros = taxaJuros;
        this.#prazo = prazo;
        //composição - financiamento possui ou tem parcelas
        this.#parcelas.push(new Parcela(0,0,0,0,valor - entrada));
    }
}