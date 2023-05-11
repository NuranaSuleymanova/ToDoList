

const newInput = document.querySelector("#myInput");
const addBtn = document.querySelector("#addBtn");
const addList = document.querySelector("#list");

let task_arr = [];


let task_list=[];

class Task{
    constructor(id,note){
        this.id=id;
        this.note=note;
    }
}

function addTask() {
    const note = newInput.value;
    const taskId= Date.now();
    let task=new Task(taskId,note);
    if (note !== '') {
        // task_arr.push(list_task);
        // task_list.push(task);

        let li = document.createElement("li");
        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = 'DELETE'
        li.innerText = task.note;
        addList.appendChild(li);
        li.appendChild(deleteBtn);
        
        deleteBtn.addEventListener('click', function () {
            removeList(task.id);
        });

        function removeList(taskId) {
            deleteBtn.parentElement.remove(li);
            task_list = task_list.filter(function(obj) {
                return obj.id !== taskId;
              });
        }
        // updateList();
    }
}

function updateList() {
    addList.innerHTML = '';
    let arrayIndex = 0;
    task_arr.forEach(list_task => {
        const curIndex = arrayIndex;
        let li = document.createElement("li");
        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = 'DELETE'
        li.innerText = list_task;
        addList.appendChild(li);
        li.appendChild(deleteBtn);

        
        deleteBtn.addEventListener('click', function () {
            removeList(curIndex);
            updateList();
        });
        arrayIndex++;

        function removeList(index) {
            deleteBtn.parentElement.remove(li);
            task_arr.splice(index, 1);
        }
    })
    document.querySelector("#myInput").value = "";
}

addBtn.addEventListener('click', addTask);

