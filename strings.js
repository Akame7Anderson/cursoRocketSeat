/* 
    String

    *Cadeia de caracteres
*/

"" // aspas duplas
    '' // aspas simples
    `` // template literals ou template strings

console.log("Qualquer txt''''''") // caso for usar aspas simples dentro da string, utilize aspas duplas para sinalizar que é uma string e vice versa

console.log(`
Teste string com crase e multilinhas """" ''''

`) // utilizando a crase para sinalizar uma string, me possibilita quebrar linhas e usar " tanto quando ' dentro da string

console.log(`Vamos utilizar operações dentro da string utilizando o cifrão ${1+1}`) // chamamos de interpolação o ato de utilizar a crase para fazer uso de operações mátematicas por exemplo em meio a strings, basicamente concatenamos
