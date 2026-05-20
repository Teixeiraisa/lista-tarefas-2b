const input = document.getElementById('input');
const button = document.getElementById('add');
const display = document.getElementById('display');

function inserirTarefa() {
    let tarefa = input.value;
    display.innerHTML += 
    `<div>
    ${tarefa}
    <div class="tarefa">
    <button class="delete-btn">deletar</button>
    <button class="edit-btn">editar</button>
    </div>
    </div>`;
    input.value = '';   
}
button.addEventListener('click', inserirTarefa);