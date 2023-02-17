let valores = [8, 1, 7, 4, 2, 9];
valores.sort();// colocar em ordem
valores.indexOf(7); // procurar o número dentro da array e retornar o indice
// for(let c = 0; c < valores.length; c++){

//     console.log(`A posição ${c} tem  o valor ${valores[c]}`);
// }
soma = 0;
for(let c in valores){
    let total = valores[c]
    console.log(`A posição ${c} tem  o valor ${total}`);
    soma += total;
}
console.log(soma)