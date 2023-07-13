/*
var tx1 = document.getElementById('txt1')
var tx2= document.getElementById('txt2')
var lista = document.getElementById('flist')
var lista2=document.getElementById('list')
var res = document.getElementById('res')
var vetor = []
var idade2=[]
var agora = new Date()
var ano = agora.getFullYear()

function analisar(){
    var idade = ano-Number(tx2.value)
    idade2.push(idade)
    var item2=document.createElement('option')
    item2.text+=`${idade}`
    lista2.appendChild(item2)
    res.innerHTML=''
    idade =''
    
    if(tx2.value.length==0 || tx2.value > ano ){
        alert('ERRO!')
    } else if(idade < 16 ){
        res.innerHTML+= 'Nao e permitido votar'
    }else if(idade == 16 || idade >= 60){
        res.innerHTML+='voto opcional'
    }else{
        res.innerHTML+='voto obrigatorio'
    }

  
         
}
function adicionar (){
    var t1 = String(tx1.value)
    if(t1.length==0){
        alert('por favor introduz o seu nome')
    }else{
    vetor.push(t1)
    var item=document.createElement('option')
    item.text+=`${t1}`
    lista.appendChild(item)
    res.innerHTML= ''
    t1= ''
    }
}
*/

// Obter elementos HTML
var tx1 = document.getElementById('txt1');
var tx2 = document.getElementById('txt2');
var lista = document.getElementById('flist');
var lista2 = document.getElementById('list');
var res = document.getElementById('res');
var vetor = [];
var idade2 = [];
var agora = new Date();
var ano = agora.getFullYear();

function adicionarEAnalisar() {
  var t1 = tx1.value.trim();
  var anoNascimento = Number(tx2.value);

  if (t1.length === 0) {
    alert('ERRO! Por favor, introduza o seu nome.');
    return;
  }

  if (tx2.value.length === 0 || anoNascimento > ano) {
    alert('ERRO! Por favor, digite um ano válido.');
    return;
  }

  vetor.push(t1);

  var item = document.createElement('option');
  item.textContent = t1;
  lista.appendChild(item);

  idade = ano - anoNascimento;
  idade2.push(idade);

  var item2 = document.createElement('option');
  item2.textContent = idade;
  lista2.appendChild(item2);

  res.innerHTML = '';

  if (idade2 < 16) {
    res.innerHTML = 'Não é permitido votar.';
  } else if (idade2 >= 16 && idade2 < 18 || idade2 >= 70) {
    res.innerHTML = 'Voto opcional.';
  } else {
    res.innerHTML = 'Voto obrigatório.';
  }

  tx1.value = '';
  tx2.value = '';
}