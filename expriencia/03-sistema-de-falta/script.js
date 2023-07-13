/*
var agora = new Date()
var hora = agora.getHours()
var minuto = agora.getMinutes()
var secundo = agora.getSeconds()
var txt = document.getElementById('txt1')
var lista = document.getElementById('flist')
var res =document.getElementById('res')
var nomes = []
var genero = ''
res.innerHTML+= `Agora sao ${hora} `
/*function inlista(n, l){
    if(l.indexOf(String(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    var tx = String(txt.value)
    var fsex = document.getElementsByName('radsex')
        if(tx.length == 0){
        alert('ERRO!digite um Nome')
    }else if(fsex[0].checked){
        genero = 'homem'
        
    } else{
        genero = 'mulher'
    }
    //res.innerHTML += `${tx} e ${genero}`
    nomes.push(tx)
    var item=document.createElement('option')
    item.text+=`${tx}`
    lista.appendChild(item)
    res.innerHTML= ''
    tx= ''
        
}

function finalizar(){
    var fsex = document.getElementsByName('radsex')
    if(nomes.length == 0){
        alert('ERRO! introduza nomes porfavor')
    }else{
        for (var pos in nomes){
            res.innerHTML += ` ${pos}  ${nomes[pos]} ${genero}`
                  }
    }
        if(fsex[0].checked){
        genero='homem'
    }else{
        genero = 'Mulher'
    }
  
}
*/

// Obter elementos HTML
var txt = document.getElementById('txt1');
var lista = document.getElementById('flist');
var res = document.getElementById('res');

// Variáveis
var nomes = [];
var genero = '';

// Função para adicionar nomes
function adicionar() {
  var tx = txt.value.trim();
  var fsex = document.querySelector('input[name="radsex"]:checked');

  if (tx.length === 0) {
    alert('ERRO! Digite um nome.');
    return;
  }

  if (!fsex) {
    alert('ERRO! Selecione um gênero.');
    return;
  }

  genero = fsex.value === 'homem' ? 'homem' : 'mulher';
  nomes.push(tx);

  var item = document.createElement('option');
  item.textContent = tx;
  lista.appendChild(item);

  txt.value = '';
}

// Função para finalizar e exibir resultados
function finalizar() {
  if (nomes.length === 0) {
    alert('ERRO! Introduza nomes, por favor.');
    return;
  }

  res.innerHTML = '';

  for (var i = 0; i < nomes.length; i++) {
    res.innerHTML += `${i} - ${nomes[i]} ${genero}<br>`;
  }
}



