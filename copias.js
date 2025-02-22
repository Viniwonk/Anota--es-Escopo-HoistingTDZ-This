const vini = {
  nome: "Vinicius",
  segundoNome: "Mangolin",
  idade: 29,
  amigos: ["VinnieMoth", "Menó"], //objeto
};

//shallow copy(cópia rasa)
const viniCopia = { ...vini }; //os "..." servem para criar uma cópia identica da variavel
//criar uma cópia serve para manter a integridade do original caso vc queira alterar algum
//  valor da variavel (só funciona em primitivas, não objetos)

viniCopia.nome = "Vini raso";
viniCopia.segundoNome = "Inutil";
viniCopia.amigos.push("1", "2"); //adciona em ambos por ser um objeto

console.log(vini, viniCopia);

//deep copy (cópia profunda)// la ele...

const viniClone = structuredClone(vini);

viniClone.nome = "Vini Profundo";
viniClone.segundoNome = "la ele...";
viniClone.amigos.push("eles gostam...");

console.log(viniClone);
