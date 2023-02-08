function count(){
    var inicio = document.getElementById('inicio');
    var fim = document.getElementById('fim');
    var passo = document.getElementById('passo');
    var resultado = document.getElementById('res');
    

    if(inicio.value.length === 0 || fim.value.length === 0 || passo.value.length === 0){
        //alert('[ERRO] valor invalido!');
        resultado.innerHTML = 'IMPOSSÍVEL CONTAR!';
    } else{
        resultado.innerHTML = 'Contando: <br>'
        var i = Number(inicio.value);
        var f = Number(fim.value);
        var p = Number(passo.value);
        if(p <= 0){
            alert('Passo inválido! Considerando PASSO 1');
            p = 1;
        }

        if(i < f){
            //crescente
            for(var c = i; c <= f; c += p){
                resultado.innerHTML += ` ${c} \u{1F449}`
            }
        } else{
            for(var c = i; c >= f; c -= p){
                resultado.innerHTML += ` ${c} \u{1F449}`
            }
        }
        
        resultado.innerHTML += `\u{1F3C1}`
    }
    
}