/*4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

SP – R$67.836,43
RJ – R$36.678,66
MG – R$29.229,88
ES – R$27.165,48
Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora. */


//Decidi usar Objetos pelo motivo de demostrar que eu conheço POO

class faturamento {
    
    Estado;
    Valor;

    constructor(Estado, Valor){
        this.Estado = Estado;
        this.Valor = Valor;
    }

    porcentagem (){
        let valorPercentual = this.Valor * 100 / Soma;
        console.log(`No estado de ${this.Estado} teve um faturamento percentual de ${valorPercentual.toFixed(2)}% em relação a soma total de todas as distribuidoras da empresa`);
    }
}

const SP = new faturamento('SP', 67836.43);

const RJ = new faturamento('RJ', 36678.66);

const MG = new faturamento('MG', 29229.88);

const ES = new faturamento('ES', 27165.48);

const Outros = new faturamento('Outros', 19849.53);

const Soma = SP.Valor + RJ.Valor + MG.Valor + ES.Valor + Outros.Valor;

console.log(Soma);


SP.porcentagem()
RJ.porcentagem()
MG.porcentagem()
ES.porcentagem()
Outros.porcentagem()
