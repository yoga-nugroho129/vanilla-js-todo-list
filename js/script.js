// DEFINE UI Vars 
const form = document.querySelector('#task-form');
const taskInput = document.querySelector('#task');
const taskFilter = document.querySelector('#filter');
const taskList = document.querySelector('.list-group');
const clearBtn = document.querySelector('.clear-task');
// Load all event listener
loadEventListener();
// function to load all event listener
function loadEventListener() {
    form.addEventListener('submit', addTask); // create task
    taskList.addEventListener('click', removeSingleTask); // remove single task
    clearBtn.addEventListener('click', clearTasks); // clear all task
}
// function of add task 
function addTask(e) {
    if (taskInput.value === '') {
        alert('Please Input a Task');
    }
    // create li element
    const li = document.createElement('li');
    // add class to li element
    li.className = 'list-group-item d-flex justify-content-between align-items-center';
    // create text node & append to li
    li.appendChild(document.createTextNode(taskInput.value));
    // create delete task item 
    const del = document.createElement('button');
    // add class to delete task item
    del.className = 'btn delete-item badge badge-danger badge-pill text-white';
    // add close "x" icon
    del.innerHTML = 'X';
    //add delete button to li
    li.appendChild(del);
    // append li to the ul
    taskList.appendChild(li);
    // clear task input after add task button clicked
    taskInput.value = '';
    // console.log(li);
    e.preventDefault();
}
// function remove single task
function removeSingleTask(e) {
    if (e.target.classList.contains('delete-item')) {
        if (confirm("Are You Sure?")) {
            e.target.parentElement.remove();
        }
    }
    e.preventDefault();
}
// function clar tasks
function clearTasks(e) {
    if (confirm("Remove all these Tasks?")) {
        taskList.innerHTML = '';
    }
    e.preventDefault();
}