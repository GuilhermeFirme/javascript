function tabuada(){
    var num = document.getElementById('txtn');
    var tab = document.getElementById('seltab');

    if(num.value.length == 0){
        alert('Por favor, digite um número');
    } else{
        let n = Number(num.value);

        tab.innerHTML = '';
        for(var c = 1; c <= 10; c++){
            let item = document.createElement('option')
            var multi = n * c;
            item.text = `${n} X ${c} = ${multi}`;
            item.value = `tab${c}`;
            tab.appendChild(item)
        }
    }
}