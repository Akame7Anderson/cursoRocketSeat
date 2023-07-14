// function scope

let subject = 'Create video'


// se tirarmos o parametro subject passado na function ele irá apenas sob escrever a váriavel ja criada, como passamos o parametro ele irá atribuir um valor para a váriavel dentro do escopo da function
function createThink(subject)
{
    subject = 'study'
    // console.log(subject)
    return subject // ao tirarmos o return da function ele retornará apenas o ultimo chamado
}

console.log(subject)
// createThink()
console.log(createThink(subject))