const header = document.querySelector('.head');
const main = document.querySelector('.mainSection');
const footer = document.querySelector('.foot');

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

// Exercício 7: não ta funcionando

divList.addEventListener('click', (event) => {
  const selectedItens = document.querySelector('.selected');
  if (selectedItens != null) {
    selectedItens.classList.remove('selected');
    event.target.classList.add('selected');
  }
  event.target.classList.add('selected');
});

// Exercício 8:


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

const completedItens = document.querySelector('.completed');

/* buttonCompleted.addEventListener('click' () => {
  

}) */