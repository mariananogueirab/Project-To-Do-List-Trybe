const header = document.querySelector('.head');
const main = document.querySelector('.mainSection');

// Exercício 1:

const title = document.createElement('h1');
title.innerText = 'Minha Lista de Tarefas';
title.className = 'titleClass';
header.appendChild(title);

// Exercício 2:

const marker = document.createElement('p');
marker.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
marker.id = 'funcionamento';
header.appendChild(marker);

// Exercício 3:

const divCreateTask = document.createElement('div');
divCreateTask.className = 'divInputClass';
main.appendChild(divCreateTask);

const inputTask = document.createElement('input');
inputTask.type = 'text';
inputTask.id = 'texto-tarefa';
divCreateTask.appendChild(inputTask);

// Exercício 4:

const divList = document.createElement('div');
divList.className = 'divListClass';
main.appendChild(divList);

const list = document.createElement('ol');
list.id = 'lista-tarefas';
divList.appendChild(list);

// Exercício 5:

const buttonTask = document.createElement('button');
buttonTask.type = 'button';
buttonTask.innerText = 'Criar tarefa';
buttonTask.id = 'criar-tarefa';
divCreateTask.appendChild(buttonTask);

function createLineTask(task) {
  const line = document.createElement('li');
  line.className = 'lineTask';
  line.innerText = task;
  list.appendChild(line);
}

buttonTask.addEventListener('click', () => {
  const task = inputTask.value;
  createLineTask(task);
  inputTask.value = '';
});

// Exercício 7 e 8:

divList.addEventListener('click', (event) => {
  const selectedItens = document.querySelector('.selected');
  if (selectedItens != null) {
    selectedItens.classList.remove('selected');
    event.target.classList.add('selected');
  }
  event.target.classList.add('selected');
});

// Exercício 9:

divList.addEventListener('dblclick', (event) => {
  event.target.classList.toggle('completed');
});

// Exercício 10:

const divButton = document.createElement('div');
divButton.className = 'divButtonClearClass';
main.appendChild(divButton);

const buttonClear = document.createElement('button');
buttonClear.type = 'button';
buttonClear.innerText = 'Clear All';
buttonClear.id = 'apaga-tudo';
divButton.appendChild(buttonClear);

buttonClear.addEventListener('click', () => {
  list.innerHTML = '';
});

// Exercício 11:

const buttonCompleted = document.createElement('button');
buttonCompleted.type = 'button';
buttonCompleted.innerText = 'Clear Completed';
buttonCompleted.id = 'remover-finalizados';
divButton.appendChild(buttonCompleted);

buttonCompleted.addEventListener('click', () => {
  const completeds = document.getElementsByClassName('completed');
  while (completeds.length > 0) {
    completeds[0].remove();
  }
});

// Exercício 12:

const saveTasks = document.createElement('button');
saveTasks.type = 'button';
saveTasks.innerText = 'Save Tasks';
saveTasks.id = 'salvar-tarefas';
divButton.appendChild(saveTasks);

saveTasks.addEventListener('click', () => {
  const lista = document.getElementById('lista-tarefas');
  localStorage.setItem('listaOL', lista.innerHTML);
});

window.onload = function restaurandoLista() {
  const listaSalva = localStorage.getItem('listaOL');
  if (listaSalva != null) {
    const lista = document.getElementById('lista-tarefas');
    lista.innerHTML = listaSalva;
  }
};

// Exercício 13:

const moverCima = document.createElement('button');
moverCima.type = 'button';
moverCima.innerText = 'Mover Para Cima';
moverCima.id = 'mover-cima';
divButton.appendChild(moverCima);

const moverBaixo = document.createElement('button');
moverBaixo.type = 'button';
moverBaixo.innerText = 'Mover Para Baixo';
moverBaixo.id = 'mover-baixo';
divButton.appendChild(moverBaixo);

function moveUp() {
  const selectedIten = document.getElementsByClassName('selected');
  if (selectedIten[0] !== list.firstElementChild && selectedIten !== null) {
    list.insertBefore(selectedIten[0], selectedIten[0].previousElementSibling);
  }
}

function moveDown() {
  const selectedIten = document.querySelectorAll('.selected');
  if (selectedIten !== null && selectedIten[0] !== list.lastElementChild) {
    list.insertBefore(selectedIten[0], selectedIten[0].nextElementSibling.nextElementSibling);
  }
}

moverCima.addEventListener('click', moveUp);
moverBaixo.addEventListener('click', moveDown);

// Exercício 14:

const removeSelected = document.createElement('button');
removeSelected.type = 'button';
removeSelected.innerText = 'Remover Item Selecionado';
removeSelected.id = 'remover-selecionado';
divButton.appendChild(removeSelected);

removeSelected.addEventListener('click', () => {
  const selecteds = document.getElementsByClassName('selected');
  selecteds[0].remove();
});
