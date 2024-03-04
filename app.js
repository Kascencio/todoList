const task = document.getElementById('input');
const add  = document.getElementById('add');
const adding = document.getElementsByClassName("tasks")[0];
const deleteT = document.querySelectorAll(".delete_Task");
let dd = 1;

function agregarTask(){
    var inputValue = task.value;
    var d = 1;
    const card = `
    <div class="card_Task" id="${++dd}">
     <input type = "checkbox" name ="cboxTask" id="cboxTask">
     <label> <h2>${inputValue}</h2> </label>
     <img src="img/Trash.png" alt="Delete" class="delete_Task">
    </div>
    `;
    adding.innerHTML += card;
    task.value = " ";
}

function deleteTask(event){
    const card = event.currentTarget.closest('.card_Task');
    card.remove();
}

add.addEventListener('click', agregarTask);

adding.addEventListener('click', function(event) {
    if (event.target.classList.contains('delete_Task')) {
      const card = event.target.closest('.card_Task');
      card.remove();
    }
  });

deleteT.addEventListener('click', deleteTask);