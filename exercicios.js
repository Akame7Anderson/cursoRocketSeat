// 1. Declare uma variável de nome weight

// let weight;
// 2. Que tipo de dado é a variável acima?

// undefined
/*   
    3. Declare uma variável e atribua valores para cada um dos dados:
    *name: String
    *age: Number(integer)
    *stars: Number(float)
    *isSubscribed: Boolean
*/
// let nome = 'Andy'
// let age = 21
// let stars = 4.9
// let isSubscribed = true

/*
    4. A váriavel student abaixo é de que tipo de dados?
    object
    4.1 Atribua a ela as mesmas propriedades e valores do exercicio 3.

    4.2 Mostre no console a segunte mensagem:
    <name> de idade <age> pesa <weight> kg.

    Atenção, substitua <name> <age>  e <weight> pelos valores de cada propriedade do objeto 
*/

let student = {
    nome: 'Andy',
    age: 21,
    weight: 88.1,
    isSubscribed: true
};
// console.log(`${student.nome} de idade ${student.age} pesa ${student.weight} kg.`)

/*
    5. Declare uma variavel do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somenteo Array vazio.
*/

let students = [];

/*
    6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)
*/

// students = [
//     student
// ]
// console.log(students);

/*
    7. Coloque no console o valor da posição zero do Array acima.
*/
// console.log(students[0])

/*
    8. Criem um novo student e coloque na posição 1 do Array students
*/
const joaquina = {
    nome: 'Joaquina',
    age: 27,
    weight: 71.5,
    isSubscribed: true
}

students = [
    student,
    joaquina
]
students[1] = joaquina
console.log(students)

/*
    9. Sem rodar o código abaixo responda qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se acertou.

    console,log(a)
    var a = 1

    R: Vai ser undefined pois o js faria oque chamamos de hoisting, pois usamos var.
*/