// function hoisting

sayMyName();


//deste modo a function vai sofrer o hoisting
function sayMyName()
{
    console.log('Andy')
}

// como a const não sofre hoisting, recebremos o erro de que não temos acesso a inicialização da função. E utilizando o var? Ela irá sim sofrer o hoisting, mas apenas a criação da variável sayMyName e deste modo teremos o erro de que a function não existe.
const sayMyName = function sayMyName()
{
    console.log('Andy')
}