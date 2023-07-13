function calcular(){
    var tx1 = document.getElementById('txt1')
    var tx2 = document.getElementById('txt2')
    var n1 = Number(tx1.value)
    var n2 = Number(tx2.value)
    var agora = new Date()
    var hora = agora.getHours
        var res = document.getElementById('res')
    var s1 = n1+n2
    var s2 = n1-n2
    var s3 = n1*n2
    var s4 = n1/n2
    var s5 = n1**n2
  
    if(n1== 0 || n2 == 0){
        alert('digite os numeros porfavor')
    }else{
        res.innerHTML += `<p>A soma entre  ${n1} e  ${n2} e igual a ${s1} </p>`
        res.innerHTML += `<p>A difrenca entre ${n1} e ${n2} e igual a ${s2}</p>`
        res.innerHTML += `<p>A multiplicao entre ${n1} e ${n2} e igual a  ${s3}</p>`
        res.innerHTML += `<p>A divisao entre ${n1} e ${n2} e igual a ${s4}</p>`
        res.innerHTML += `<p>potencia e enttre ${n1} e ${n2} e igual a ${s5} </p>`
    }

    if(hora < 12){
        res.innerHTML+='bom dia'
    }else if(hora >=12 || hora == 18){
        res.innerHTML+= 'boa tarde'
    }else{
        res.innerHTML += 'boa noite'
    }
 
}