//manipulando string e number
let string = "123"
console.log(Number(string))
let number = 321
console.log(String(number))

//trocar ponto por vírgula e limitar o número de casas decimais
let numero = 378.3333000044449999
//o numero apresentado apoós a manipulação será apresentado como uma string, se tentarmos converter em number, apresentará o erro de NaN (not a number), pois ao trocarmos o ponto por vírgula, estamos presos a uma string, pelo fato de que não possuimos vírgula para números.
console.log(numero.toFixed(2).replace(".", ","))

//transformar letras maiúsculas e minúsculas
let word = "Programar é muito bacana!"
console.log(word.toUpperCase())
console.log(word.toLowerCase())


//separar um texto que contém espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transformar o array em um texto onde o espaço será substituido por underscore

let phrase = "Eu estou vivendo o Amor!"
//o método split consiste em tirar ou separar pelo oque colocarmos nele, por exemplo, colocamos o espaço, ele irá criar um item dentro do array toda vez que encontrar um espaço, se colocarmos a letra "o" ele irá separar toda vez que encontrar a letra "o"
let myArray = phrase.split(" ")
console.log(myArray)
// o método join quando usado em um array, irá substituir pelo que colocarmos nele, neste caso toda vez que houver o espaço ele irá substituir por underscore
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore.toUpperCase())

//verificando se o texto existe alguma palavra

let phraseFind = "Eu quero viver!"
//o método includes é case sensitivy, então ao usa-lo para encontrar uma palavra em meio ao texto, você precisa levar em conta as letras maiúsculas e minúsculas
console.log(phraseFind.includes("Amor"))
console.log(phraseFind.includes("quero"))

//array com construtor

let arrayConstructor = new Array('a', 'b', 'c')
console.log(arrayConstructor)