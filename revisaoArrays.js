//Arrays

// const animals = [
//     'Cat',
//     'tiger',
//     'lion'

// ]

// //acessar valores 
// console.log(animals[0])

const animals = [
    'Cat',
    'tiger',
    //posso adicionar um object dentro do array
    {
        name: 'lion',
        age: 6
    }

]

//acessar valores quando se tem diferente tipos de dados, no caso do array a gente usa os colchetes para coletar os dados da posição que queremos e o .name para coletar a informação que queremos de dentro do object, assim como fazemos quando se tem apenas um object
console.log(animals[3].name)