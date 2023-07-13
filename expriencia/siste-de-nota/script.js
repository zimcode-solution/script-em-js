/*
var tx1 = document.getElementById('txt1')
var tx2=document.getElementById('txt2')
var  tx3= document.getElementById('txt3')
var lista1 = document.getElementById('flist')
var lista2=document.getElementById('list')
var lista3 = document.getElementById('inlist')
var nome =[]
var nota=[]
function resultados(){
    var t1 = String(tx1.value.trim())
      if (t1.length == 0){
        alert('por favor insira o seu nome')
    }

    if (tx2.value.length === 0 || txt3.value.length=== 0) {
        alert('ERRO! nota invalida.');
        return;
      } 

      var t2 = Number(tx2.value.trim())
      var t3 = Number(txt3.value.trim())  
      var media = (t2 + t3)/2
    nome.push(t1)
    var item1 = document.createElement('option')
    item1.textContent=t1
    lista1.appendChild(item1)

    nota.push(media)
    var item2=document.createElement('option')
    item2.textContent=media
    lista2.appendChild(item2)
    
    res.innerHTML = '';

    if(media < 10){
        res.innerHTML += 'voce esta excluido!'
    }else if(media >= 10 && media < 14 ){
        res.innerHTML = ' voce esta admitido ao exame'
    }else{
        res.innerHTML+='dispensado de fazer exames'
    }
    var vh  = nome + nota
    var item3 =document.createElement('option')
    item3.textContent =vh
    lista3.appendChild(item3)



    tx1.value = '';
    tx2.value = '';
    tx3.value = '';

    

}
*/
/*

<!DOCTYPE html>
<html>
<head>
  <title>Calculadora de Notas</title>
</head>
<body>
  <label for="txt1">Nome:</label>
  <input type="text" id="txt1"><br><br>

  <label for="txt2">Nota 1:</label>
  <input type="number" id="txt2"><br><br>

  <label for="txt3">Nota 2:</label>
  <input type="number" id="txt3"><br><br>

  <button onclick="resultados()">Calcular Média</button>

  <h2>Resultados:</h2>
  <div id="res"></div>

  <h2>Lista de Nomes:</h2>
  <select id="flist"></select>

  <h2>Lista de Médias:</h2>
  <select id="list"></select>

  <h2>Lista de Alunos:</h2>
  <select id="inlist"></select>
  */

 
    var tx1 = document.getElementById('txt1');
    var tx2 = document.getElementById('txt2');
    var tx3 = document.getElementById('txt3');
    var lista1 = document.getElementById('flist');
    var lista2 = document.getElementById('list');
    var lista3 = document.getElementById('inlist');
    var nome = [];
    var nota = [];

    function resultados() {
      var t1 = String(tx1.value.trim());
      if (t1.length == 0) {
        alert('Por favor, insira o seu nome.');
        return;
      }

      if (tx2.value.length === 0 || tx3.value.length === 0) {
        alert('ERRO! Nota inválida.');
        return;
      }

      var t2 = Number(tx2.value.trim());
      var t3 = Number(tx3.value.trim());
      var media = (t2 + t3) / 2;

      nome.push(t1);
      var item1 = document.createElement('option');
      item1.textContent = t1;
      lista1.appendChild(item1);

      nota.push(media);
      var item2 = document.createElement('option');
      item2.textContent = media;
      lista2.appendChild(item2);

      res.innerHTML = '';

      if (media < 10) {
        res.innerHTML += 'Você está excluído!';
      } else if (media >= 10 && media < 14) {
        res.innerHTML = 'Você está admitido ao exame.';
      } else {
        res.innerHTML += 'Dispensado de fazer exames.';
      }

      var vh = nome.map(function (value, index) {
        return value + ' - ' + nota[index];
      });

      var item3 = document.createElement('option');
      item3.textContent = vh;
      lista3.appendChild(item3);

      tx1.value = '';
      tx2.value = '';
      tx3.value = '';
    }
