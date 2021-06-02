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

const divInput = document.createElement('div');
divInput.className = 'divInputClass';
main.appendChild(divInput);

const inputTask = document.createElement('input');
inputTask.type = 'text';
inputTask.id = 'texto-tarefa';
divInput.appendChild(inputTask);