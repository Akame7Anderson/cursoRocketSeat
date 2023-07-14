// callback function

function sayMynome(nome){
    console.log('Antes de executar a callback');
    nome();
    console.log('Depois de executar a callback')
}

// ao atribuir essa arrow function para alimentar o parametro da função criada anteriormente eu estou fazendo uma callback, que tornara o parametro da função anterior em uma function que poderá ser usada para chamarna function anterior devolta
sayMynome(
    () => {
        console.log('Estou executando a callback');
    }
)