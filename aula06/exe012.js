var idade = 20
console.log('sistema de votacao')
if(idade < 16){
    console.log('nao vota') 
}else if(idade == 16 || idade > 65){
    console.log('voto opcional')
}else{
    console.log('voto obrigatorio')
}