const header = document.querySelector('.head');
const main = document.querySelector('.mainSection');
const footer = document.querySelector('.foot');

// Exercício 1:

const title = document.createElement('h1');
title.innerText = 'Minha Lista de Tarefas';
title.className = 'titleClass';
header.appendChild(title);