let num = document.querySelector('#fnum');
let lista = document.querySelector('#flista');
let res = document.querySelector('#res');
let valores = [];

function isNumber(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true;
    } else{
        return false;
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) === -1){
        return false;
    }
    else{
        return true;
    }
    
}

function adicionar(){
   if(isNumber(num.value) && !inLista(num.value, valores)){
        let n = Number(num.value);
        
        lista.innerHTML = '';
        valores.push(n)
        
        valores.forEach(numero => {
            var itemLista = document.createElement('option');
            itemLista.text = `Valor ${numero} adicionado.`;
            //itemLista.value = `lista${n}`;
            lista.appendChild(itemLista);
            res.innerHTML = '';
        });
        num.value = '';
   } 

   else{
        alert('Valor invalido ou já encontrado');
   }
   num.focus();
}

function finalizar(){
    if(valores.length == 0){
        alert('Adicione valores antes de finalizar!');
    }
    else{
    let qtdeNumeros = valores.length;
    let nMaior = valores.reduce((a, b) => Math.max(a, b), -Infinity);
    let nMenor = valores.reduce((c, d) => Math.min(c, d));
    let soma = 0;
    let media = 0;
    for(let c in valores){
        soma += valores[c];
    }
    media = soma / qtdeNumeros;
    
    res.innerHTML = `<p>Ao todo, temos ${qtdeNumeros} números cadastrados.</p>`;
    res.innerHTML += `<p>O maior número da lista é ${nMaior}.</p>`
    res.innerHTML += `<p>O menor número da lista é ${nMenor}.</p>`
    res.innerHTML += `<p>A soma de todos os valores, é ${soma}.</p>`
    res.innerHTML +=`<p>A média do valores infomados é ${media.toFixed(1)}.</p>`

    }
}