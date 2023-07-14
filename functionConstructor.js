/*
    Function() constructor

    *expressão new
    *criar um novo objeto
    * this keyword
*/

// na criação da function construtora, vamos nomea-lá com a primeira letra maiúscula para obter boas práticas, afinal existem muitos construtores e todos são nomeados com letra maiúscula
function Person(nome)
// dentro deste escopo, iremos fazer o molde do objeto que criamos com o new logo abaixo usando a palavra this
{
    this.nome = nome
    this.walk = function() {
        return this.nome + " está andando." 
    }
}

//usando o new na frente da function ela irá retornar um objeto, então esse Person("Andy") é um objeto
const andy = new Person("Andy")
const joão = new Person("João")


console.log(andy.walk())
console.log(joão.walk())