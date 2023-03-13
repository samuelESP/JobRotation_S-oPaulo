/*
5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;
*/


function reverseString(str) {
    let stringReversa = '';
    for (let i = str.length - 1; i >= 0; i--) { //Nesse casso o meu For vai começar a pecorre pelo ultimo elemento da minha string até chegar no primeiro elemento(incluso)
      stringReversa += str[i];
    }
    return stringReversa;
    
  }
  
  console.log(reverseString('teste'));