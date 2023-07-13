function verificar(){
     var txt =document.getElementById('txtn')
     var res = document.getElementById('res')
     var txt1 = Number(txt.value)
     res.innerHTML = ` <p>a sua e idade e de ${txt1} anos</p>`
     if(txt1 == 16){
        res.innerHTML+='<p>voto opional</p>'
     } if(txt1 == 16 || txt1<60){
        res.innerHTML += '<p>voto obrigatorio</p>'
     }else{
        res.innerHTML += '<p>nao e permitido votar</p>'
     }
}