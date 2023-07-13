var tela = document.querySelector('.tela')
function inserir(num){
    tela.innerHTML +=num 
}
function clean(){
    tela.innerHTML = "";
}
function back(){
    let tela = document.querySelector('.tela').innerHTML;
    document.querySelector('.tela').innerHTML= tela.substring(0, tela.length-1)
} 
function somar(){
    let tela = document.querySelector('.tela').innerHTML
    if(tela){
        document.querySelector('.tela').innerHTML= eval(tela)
    }else{
        tela.innerHTML = 'ERRO!'
    }
}
 