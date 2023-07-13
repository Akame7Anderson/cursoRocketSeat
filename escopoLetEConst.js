// const e let são locais e só funcionam no escopo onde foi criada


console.log("Existe a váriavel, ", y, " antes do bloco?")

{
    console.log("existe, ", y, "?") // vai dar erro! Porém o js irá nos dizer que sim existe o y, porém ele está inicializando depois de onde nós chamamos.
    let y = 0 // com o let o js não faz o hoisting, ou seja, se ela n for declarada antes de onde for usada, irá dar erro na aplicação!! Pois seu escopo é LOCAL.

}

let y = 1;
console.log("Existe a váriavel, ", y, " depois do bloco?") // nesta linha também irá ocorrer o erro, ja que a let é uma váriavel de escopo LOCAL, e este escopo está fora do escopo em que ela está sendo criada e atribuida com um valor