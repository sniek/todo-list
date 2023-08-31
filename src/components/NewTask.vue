<script setup>
import { ref } from 'vue';

const props = defineProps({
    taskStore: Object,
    userStore: Object
})

const title = ref("");
// taskStore.tasks.pop().id + 1, 
</script>

<template>
    <div class="input-group mb-3">
        <input 
            type="text" 
            class="form-control" 
            placeholder="Create a new Task" 
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            id="new-task"
            v-model="title" 
            @keyup.enter="taskStore.createTask(userStore.user.user.id, title); title = ''">
        <button 
            class="btn btn-outline-secondary" 
            type="button" 
            id="button-addon2"  
            @click="taskStore.createTask(userStore.user.user.id, title); title = ''"
        >Add Task</button>
    </div>
</template>

<style>
#new-task::placeholder {
    font-size: 18px;
    opacity: 0.5;
}

#button-addon2:hover {
    background-color: #6c63ff;
}
</style>