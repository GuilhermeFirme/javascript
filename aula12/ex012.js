var agora = new Date()
var hora = agora.getHours()
var min = agora.getMinutes()
var diaSem = agora.getDay()
var po = agora.getTimezoneOffset

switch(diaSem){
    case 0:
        console.log(`Hoje é Domingo!`)
        break
    case 1:
        console.log(`Hoje é Segunda!`)
        break
    case 2:
        console.log(`Hoje é Terça!`)
        break
    case 3:
        console.log(`Hoje é Quarta!`)
        break
    case 4:
        console.log(`Hoje é Quinta!`)
        break
    case 5:
        console.log(`Hoje é Sexta!`)
        break
    case 6:
        console.log('Hoje é Sábado!')
        break
}

console.log(`Agora são exatamente ${hora}:${min}`)

if (hora < 5){
    console.log('Boa madrugada!')
}  else if (hora < 13){
    console.log('Bom dia!')
} else if (hora <= 18){
    console.log('Boa tarde!')
}
 else if (hora <= 23){
    console.log('Boa noite!')
}