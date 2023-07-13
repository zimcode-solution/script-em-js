function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data=new Date()
    var hora =data.getHours()
    msg.innerHTML = `agora sao ${hora} horas`
    if(hora >=0 && hora< 12){
        img,src = 'manha.jpg'
        document.body.style.background='black'
    }else if(hora >=12 && hora < 18){
        img.src='tard.jpg'
        document.body.style.background='green'
    }else{
        img.src='noit.jpg'
        document.body.style.background='red'
    
    }
}
