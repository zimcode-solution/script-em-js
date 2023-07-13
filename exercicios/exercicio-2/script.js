function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res =document.getElementById('res')
    if(fano.value.length==0 || fano.value > ano ){
        
        alert('ERRO!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `idade  e ${idade}`  
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero = 'homem'
            if(idade>=0 && idade <10){
                //crianca
                img.setAttribute('src','crianca-m.jpg')
            }else if(idade < 21 ){
                //jovem
                img.setAttribute('src','jovem.jpg')
            }else if(idade < 58){
                //adulto
                img.setAttribute('src','ad.jpg')
            }else{
                //idoso
                img.setAttribute('src','idoso.jpg')
            }
        }else if(fsex[1].checked){
            genero= 'mulher'
            if(idade>=0 && idade <10){
                //crianca
                img.setAttribute('src','crianca.jpg')
            }else if(idade < 21 ){
                //jovem
                img.setAttribute('src','jovem-m.jpg')
            }else if(idade < 58){
                //adulto
                img.setAttribute('src','ad-m.jpg')
            }else{
                //idoso
                img.setAttribute('src','idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML=`Detectamos ${genero} de ${idade} Anos`
        res.appendChild(img)
    }
}