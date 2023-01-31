function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');

    if (fano.value.length == 0 || fano.value > ano){
        alert('[ERRO] Verifique os dados e tente novamente!');
    } else{
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');

        if (fsex[0].checked){
            genero = 'Homem';
            if(idade >= 0 && idade < 10){
                // imagem da criança homem
                img.setAttribute('src', 'foto.criançaM.jpg');
            } else if (idade < 21){
                //imagem jovem homem
                img.setAttribute('src', 'foto.jovemM.jpg');

            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'foto.adultoM.jpg');
            } else{
                // idoso
                img.setAttribute('src', 'foto.idosoM.jpg');
            }
        } else if (fsex[1].checked){
            genero = 'Mulher';
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'foto.criançaF.jpg');
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'foto.jovemF.jpg');
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'foto.adultoF.jpg');
            } else{
                //idoso
                img.setAttribute('src', 'foto.idosoF.jpg');
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}