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

// Função para realizar todas as análises
function realizarAnalises() {
  adicionar();
  finalizar();
}
