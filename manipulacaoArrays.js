//transformar uma cadeia de caracteres em elementos do array

let wordParaArray = "Surpresa"
console.log(Array.from(wordParaArray))

let techs = ["html", "css", 'js'] 
//Adicionar um elemento no inicio do array
techs.unshift("java")

//adicionar um elemento no final do array
techs.push("sql")

//remover do começo
// techs.shift()

//remover do fim
// techs.pop()

//pegar somente alguns elementos do array
// console.log(techs.slice(1,3)) // no primeiro parametro passamos a partir de qual elemento do array vamos pegar, e no segundo vamos dizer quantos a partir do primeiro elemento vamos pegar

//remover 1 ou mais items de em qualquer posição do array
// techs.splice(0, 1) // os parametros funcionam seguindo a mesma logica do slice acima

// encontrar uma posição do elemento no array
let index = techs.indexOf('css')
techs.splice(index, 1)



console.log(techs)