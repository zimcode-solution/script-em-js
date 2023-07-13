function contar(){
    var ini= document.getElementById('txti')
    var fim=document.getElementById('txtf')
    var pas= document.getElementById('txtp')
    var res = document.getElementById('res')

    if(ini.value.length ==0 || fim.value.length==0 || pas.value.length== 0){
        alert('ERRO!')
        res.innerHTML='impossivel contar'
    }else{
       res.innerHTML='contando...<br>'
       var i=Number(ini.value)
       var f=Number(fim.value)
       var p =Number(pas.value)
       //contagem crescende
        if(p <= 0){
            alert('impossivel de contar considere passo 1  ')
            p=1
        }
       if(i<f){
        for (var c=i;c<=f;c+=p){
            res.innerHTML +=`${c} \u{1f449}`
        }
        //contagem decrescende
       
       } else{
                   for (var c=i;c >= f;c-=p){
                res.innerHTML += `${c} \u{1f449}`
            }
        }
       }
       res.innerHTML += `\u{1f3c1}`
    }
