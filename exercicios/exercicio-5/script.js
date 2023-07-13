var num = document.getElementById('fnum')
var lista = document.getElementById('flist')
var res = document.getElementById('res')
var valores = []
function inNumero(n){
    if(Number(n)>=1 && Number(n)<=100){
        return true
    }else{
        return false
    }
}

function inlista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(inNumero(num.value) && !inlista(num.value,valores)){
       valores.push(Number(num.value))
       var item=document.createElement('option')
       item.text = `o valor${num.value} foi adicionado`
       lista.appendChild(item)
       res.innerHTML= ''

    }else{
        alert('valor invalido ou adicionado')
    }
    num.value= ''
    num.focus()//para apagar automaticamente os formularios 
}
function finalizar(){
    if(valores.length == 0){
        alert('antes de finalizar adicione um numero')
    }else{
        var tot = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma=0
        var media=0
        for(var pos in valores){
            soma+=valores[pos]
            if(valores[pos]> maior) 
                maior =valores[pos]
                if(valores[pos]<menor)
                menor=valores[pos]

        } 
        media=soma/tot
        res.innerHTML = ''
        res.innerHTML += `<p>o valor adicionado tem ${tot}</p>`
        res.innerHTML += `<p>o maior valor e ${maior}</p>`
        res.innerHTML+= `<p>o menor valor e ${menor}</p>`
        res.innerHTML += `<p>somando todos numeros temos ${soma}</p>`
        res.innerHTML += `<p>a media de todos numeros e ${media}</p>`
    }
}