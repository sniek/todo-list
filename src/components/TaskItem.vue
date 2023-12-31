<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
    taskStore: Object
})

let edit = ref(false);
let editValue = ref();
let storeId = ref();
let deleteTasks = ref(false);

const editToggle = (taskId, taskTitle) => {
    edit.value = !edit.value;
    editValue.value = taskTitle;
    storeId.value = taskId;
}

const deleteToggle = () => {
  deleteTasks.value = !deleteTasks.value;
}

const checkboxToggle = (taskId, checked) => {
    storeId.value = taskId;
    if (checked == false) props.taskStore.updateTask(taskId, {is_complete: true});
    else props.taskStore.updateTask(taskId, {is_complete: false}); 
}

const deleteCompletedTasks = () => {
  props.taskStore.tasks.forEach(task => {
    if(task.is_complete) props.taskStore.deleteTask(task.id)
  });
  deleteToggle();
}

onMounted(() => {
   props.taskStore.fetchTasks();
})

</script>

<template>  
<!-- Modal -->
<div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Edit your task</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="edit = false"></button>
      </div>
      <div class="modal-body">
        <input type="text" class="form-control"  v-model="editValue">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="edit = false">Close</button>
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="taskStore.updateTask(storeId, {title: editValue}); edit = false">Save changes</button>
      </div>
    </div>
  </div>
</div>

<!-- Task List -->
<div class="card">
  <div class="card-header">
    <h2><i class="bi bi-ui-checks"></i> Task List</h2>
  </div>
  <ul class="list-group list-group-flush">
    <li v-for="task in taskStore.tasks" :key="task.id"  class="list-group-item">
        <span v-if="!task.is_complete"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" @change="checkboxToggle(task.id, task.is_complete)">
            {{ task.title }}</span> 

            <span class="completed" v-if="task.is_complete"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" @change="checkboxToggle(task.id, task.is_complete)" checked> 
            {{ task.title }}</span> 
        
        <div class="btn-group d-grid d-md-flex float-sm-end" id="list-btn">
                <button 
                v-if="!edit" 
                @click="editToggle(task.id, task.title)"
                type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#editModal"
            ><i class="bi bi-pencil-fill"></i></button>

            <button 
                type="button" class="btn btn-outline-danger btn-small"
                @click="taskStore.deleteTask(task.id)"
                ><i class="bi bi-trash3-fill"></i></button>
        </div>
            
    </li>
  </ul>
  
</div>

<div class="container d-flex justify-content-end" id="delete-complete-task-button">
    <span v-if="deleteTasks">
      Are you sure?
      <button class="btn btn-success" @click="deleteCompletedTasks()">Yes</button>
      <button class="btn btn-danger" @click="deleteToggle()">No</button>
    </span>
    
    <button v-if="!deleteTasks" class="btn btn-outline-secondary" @click="deleteToggle()">Delete Completed Tasks</button>
</div>
</template>

<style>
.card-header {
    background-color: #6c63ff;
    color: white;
    font-weight: bold;
}

#list-btn button {
    opacity: 0;
    transition: opacity .4s ease;
}

li {
    line-height: 40px;
}

li:hover #list-btn button {
    opacity: 100;
}

#editModal .modal-footer #modal-btn{
    background-color: #6c63ff;
}

.completed {
    text-decoration: line-through;
    opacity: 0.8;
}
input[type="checkbox"] {
    vertical-align: middle;
    margin-right: 20px;
}
input:checked {
    background-color: #01d28e !important;
    border-color: #01d28e !important;
}
#delete-complete-task-button {
  margin-top: 20px;
  padding: 0;
}
</style>