/*
    Variáveis 

    *var
    *let*const

*/

var clima = "Quente" //o valor pode ser alterado depois
clima = "Frio"

let climax = "Arenoso" //praticamente igual ao var, porém mais usado
climax = "chuvoso"

const climaFixo = "Não vai mudar" //ao se atribuir um valor para a constante, ele não irá mais ser alterado


//JS é uma linguagem fracamente tipada, que quer dizer q as váriaveis depois de declaradas podem ser usadas de diversos tipos, sendo eles string ou number ou qualquer outro

let clima
clima = "Quente"
console.log(typeof clima); // typeof é usado para saber o tipo de uma variavel, que aqui no caso seria string

clima = 50
console.log(typeof clima); // podemos extrair que a variavel agora é um number, pois atribuimos este valor acima
