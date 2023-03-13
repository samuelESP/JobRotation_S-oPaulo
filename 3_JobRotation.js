/*
3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na
 linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;
*/
const fs = require('fs');

const dados = JSON.parse(fs.readFileSync('faturamento.json'));
// dados será usado para representar meu vetor de faturamento



const diasComFaturamento = dados.filter(valor => valor > 0);//vai filtrar o valor que seja superior a 0

const mediaMensal = diasComFaturamento.reduce((soma, valor) => soma + valor, 0) / diasComFaturamento.length;
//soma é um accumulator e valor é o curentvalue. vai somar todos os valores diferentes de 0 e dividir pelo numero de dias com faturamento positivo

//Agora vamos calculoar o maior valor do meu vetor:

let max = Math.max(...diasComFaturamento)
console.log('O maior faturamento do mês foi de: R$'+ max);

//Agora o menor

let min =Math.min(...diasComFaturamento)
console.log('O menor faturamento do mês foi de: R$'+ min);

// Agora os dias com o valor maior que a média

let faturamentoDiarioSuperior = 0;
//Esse for vai pegar valor por valor do meu faturamento maior que 0 e vai comparar com a mediaMensal
//Todo alor que chegar a ser maior que a média mensal vai aumentar em 1 a variável faturamentoDiarioSuperior
for (let i = 0; i < diasComFaturamento.length; i++) {
 
    if(diasComFaturamento[i] >  mediaMensal){
       faturamentoDiarioSuperior +=  1
    }
}

console.log('A quantidade de dias que o faturamento diário foi maior que a média mensal foi de: ' + faturamentoDiarioSuperior + ' dias');
