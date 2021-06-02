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

function createLineTask (task) {
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