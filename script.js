"use strict";

// Escopo Global: Variáveis definidas no escopo global são acessíveis em qualquer parte do código.

function calcAge(nascimento) {
  //Escopo Local: Variáveis definidas dentro de uma função são locais àquela função e não são acessíveis fora dela.
  const idade = 2040 - nascimento;

  function printIdade() {
    const output = `${nome}, você tem ${idade} anos e nasceu no ano de ${nascimento}`;
    console.log(output);
  }
  printIdade();
  return idade;
} /*Escopo de Bloco: Algumas linguagens, como C++ ou JavaScript, têm escopos de bloco (geralmente delimitados por chaves {}).
Tudo que está delimitado por chaves {} pode ser considerado um escopo de bloco, não se limitando apenas a if ou else. 
Na verdade, em muitas linguagens de programação, como C++, JavaScript e Java, qualquer bloco de código cercado por {} cria um novo escopo.*/

const nome = "Viniwonk";
calcAge(1995);

// HOISTING & TDZ(TEMPORAL DEAD ZONE)

/*chamar uma variavel antes dela ser executada acarreta em um erro de TDZ, ou seja,
JS detecta q a variavel existe, porém por ela ainda n ter sido executada acarreta em erro.
isso se da ao fato de q variaveis são  lidas pelo JS antes do código ser executado graças ao
HOISTING, a fim de ajudar em correção de bugs*/

//Hoisting

/*Variaveis*/
// console.log(eu);
//console.log(trampo); //tdz
//console.log(ano);

//Tipos de erros de acordo com a váriavel
var eu = "vini"; //undefined
let trampo = "vagabundo"; //Uncaught ReferenceError: Cannot access 'trampo' before initialization
const ano = 1995;

/*Funções*/

// console.log(letrinhas1(2, 3));
//console.log(letrinhas2(4, 5)); //tdz
// console.log(letrinhas3(6, 7));

function letrinhas1(a, b) {
  return a + b;
} //essa aqui n da erro
const letrinhas2 = function (a, b) {
  return a + b;
}; //por essa porrinha ser uma variavel, da o msm erro = Cannot access 'letrinhas2' before initialization

var letrinhas3 = (a, b) => a + b;

/*se as const serem trocadas por VAR a varável vai ser considerada 'undefined',
e por conta disso a função deixara de existir*/
/*a unica função que funcionara antes de ser declarada é a primeira */

//This

/*Exemplo*/ //passar o mouse em cima do this mostra oq ele ta usando
// console.log(this); //window

// const calcAge = function (nascimento) {
// console.log(2037 - nascimento);
// console.log(this); // this  nunca se refere a prórpria função (undefined)
// };
// calcAge(1995);

const calcAgeArrow = (nascimento) => {
  // console.log(2037 - nascimento);
  // console.log(this); //(window) pega o this do 'pai', aqui no caso o global (lexical)
};
calcAgeArrow(1995);

var primeiroNome = "Bilu Bilu Tetéia";

const eu2 = {
  primeiroNome: "Viniwonk",
  nascimento: 1995,
  calcAge2: function () {
    console.log(2058 - this.nascimento); // this aqui se refere a "eu"
  },
  ola: () => {
    console.log(`Olá ${this.primeiroNome}`); //não funcionará pois o THIS esta puxando 'nome' do escopo pai(window)
  },
};
eu2.ola();

const vinnieMoth = {
  nascimento: 2000,
};
vinnieMoth.calcAge2 = eu2.calcAge2; //pegando o this alheio
vinnieMoth.calcAge2();
