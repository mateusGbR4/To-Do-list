const button = document.querySelector(".button-add-task");
const input = document.querySelector(".input-task");
const listaCompleta = document.querySelector(".list-tasks");

let minhaLista = [];

function AdicionarTarefa() {
    const novaTarefa = input.value.trim();
    if (novaTarefa !== "") {
    minhaLista.push({
    tarefa: input.value,
    concluida: false
  });

  input.value = "";

  

  mostrarTarefas();
  AddTaskdiv.style.display = 'none';
    }
}
function mostrarTarefas() {
  let novaLi = "";

  minhaLista.forEach((item, posicao) => {
    novaLi =
      novaLi +
      `

        <li class="tasks ${item.concluida && "done"}">
            <img src="./img/check.png" alt="check" onclick="concluirtarefa(${posicao})"/>
            <p>${item.tarefa}</p>
            <img src="./img/trash.png" alt="trash" onclick="deletarItem(${posicao})" />
        </li>   
        `;
  });
  listaCompleta.innerHTML = novaLi;

  localStorage.setItem('lista', JSON.stringify(minhaLista))

}
function concluirtarefa(posicao){
    minhaLista[posicao].concluida = !minhaLista[posicao].concluida

    mostrarTarefas()

}

function deletarItem(posicao){
    minhaLista.splice(posicao, 1)

    mostrarTarefas()
}

function recarregartarefa(){
    const TarefasDoLocalStorage = localStorage.getItem('lista')

    if(TarefasDoLocalStorage){
    minhaLista = JSON.parse(TarefasDoLocalStorage)
}   
    mostrarTarefas()
}
recarregartarefa()
button.addEventListener("click", AdicionarTarefa);

//expandir o menu

var btnExp = document.querySelector('#btn-exp');
var menuSide = document.querySelector('.menu-lateral');

btnExp.addEventListener('click', function(){
  menuSide.classList.toggle("expandir")
})

// abrir e fechar add task

var btnClose = document.getElementById("CloseDiv");
var btnOpen = document.getElementById("show-add-task")
var AddTaskdiv = document.querySelector(".adicionar-tarefa");
var sidebarLink = document.querySelector("#sidebarLink");

btnClose.addEventListener('click', function fechar(){
  AddTaskdiv.style.display = 'none';
})
btnOpen.addEventListener('click', function abrir(){
  AddTaskdiv.style.display = 'flex';
})
sidebarLink.addEventListener('click', function abrirComSpan(){
  AddTaskdiv.style.display = 'flex';
  menuSide.classList.toggle("expandir")
});