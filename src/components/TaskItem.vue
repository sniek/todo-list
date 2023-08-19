<script setup>
import { ref } from 'vue';

const props = defineProps({
    taskStore: Object
})

const newTitle = ref("");
let edit = false;

const editToggle = () => {
    if (!edit) edit = true;
    else edit = false;
}

</script>

<template>
    <h2>Task List</h2>
    <button @click="taskStore.fetchTasks()">Fetch Tasks</button>
    <ul>
        <li v-for="task in taskStore.tasks">
            {{ task.id }} - {{ task.title }} - {{ task.is_complete }}

            <input v-if="edit" v-model="newTitle">
            <button v-if="!edit" @click="editToggle(); taskStore.fetchSingleTask(task.id)">Edit</button>
            <button 
                v-if="edit"
                @click="taskStore.updateTitle(task.id, newTitle); editToggle()"
            >Save</button>

            <button 
                v-if="task.is_complete == false" 
                @click="taskStore.updateTask(task.id, true)"
            >Done</button>

            <button 
                v-if="task.is_complete == true" 
                @click="taskStore.updateTask(task.id, false)"
            >Undo</button>

            <button 
                @click="taskStore.deleteTask(task.id)"
            >Delete</button>
        </li>
    </ul>
</template>

<style></style>