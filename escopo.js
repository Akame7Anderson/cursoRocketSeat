// escopo local e global

console.log("Existe a variável,", x, " antes do bloco dela?") // a resposta seria não, pois nós não declaramos ela acima desta linha, o js lê o código de forma vertical!
                                                            // uma questão interessante seria que por de baixo dos panos o js iria sim declarar a váriavel porém atribuir o valor undefined para ela, isto é oque nós chamamos de hoisting!
{

    var x = 0 // escopo local, e oque está fora do bloco se torna global

}

console.log("Existe a variável,", x, " depois do bloco dela?") // a resposta é SIM, pois atribuimos um valor a ela já!