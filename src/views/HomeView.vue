<script setup>
import { useUserStore } from "@/stores/user";
import { useTaskStore } from "@/stores/task";
import { ref, watch } from 'vue';
import TaskItem from '@/components/TaskItem.vue';

const userStore = useUserStore();
const taskStore = useTaskStore();

const email = ref("");
const password = ref("");
const title = ref("");

const testing = () => {
  console.log("User: ", userStore.user);
  console.log('Tasks: ', taskStore.tasks);
  console.log(taskStore.tasks.length);
  console.log(taskStore.tasks.pop().id);
}

watch(
  () => userStore.user,
  () => {
    taskStore.fetchTasks();
  }
)

</script>

<template>
  <h1>Todo List</h1>

  <section v-if="userStore.user">
    <h2>Current User: {{ userStore.user.user.email }}</h2>
    <button @click="userStore.signOutUser()">Sign Out</button>
  </section>

  <br>
  <section v-if="!userStore.user">
    <h3>Sign In</h3>
    <input placeholder="Your Email" v-model="email">
    <input placeholder="Your Password" v-model="password">
    <button @click="userStore.signInUser(email, password)">Sign In</button>
  </section>
  <br><br>

  <section v-if="!userStore.user">
    <h3>Sign Up</h3>
    <input placeholder="Write your email" v-model="email">
    <input placeholder="Write your password" v-model="password">
    <button @click="userStore.createNewUser(email, password)">Create New User</button>
  </section>


  <br><br>


  <section v-if="userStore.user">
    <h3>Create New Task</h3>
    <input placeholder="create a Task" v-model="title">
    <button @click="taskStore.createTask(taskStore.tasks.pop().id + 1, userStore.user.user.id, title)">Create
      Task</button>
  </section>


  <br><br>
  <TaskItem :taskStore="taskStore"/>
 <!--    <button @click="taskStore.fetchTasks()">Fetch Tasks</button>
  <ul>
    <li v-for="task in taskStore.tasks">
      {{ task.id }} - {{ task.title }} - {{ task.is_complete }}
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
  </ul> -->

  <br><br>

  <button @click="testing">TEST</button>
  <button @click="userStore.signInUser('test@test.de', '123123')">Test User Sign in</button>
</template>
