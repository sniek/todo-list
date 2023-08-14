<script setup>
import { useUserStore } from "@/stores/user";
import { useTaskStore } from "@/stores/task";
import { ref } from 'vue';

const userStore = useUserStore();
const taskStore = useTaskStore();

const email = ref("");
const password = ref("");
const title = ref("");

const testing = () => {
  console.log(userStore.user);
  console.log(taskStore.tasks);
  console.log(taskStore.tasks.length);
  console.log(taskStore.tasks.pop().id);
}

</script>

<template>
  <h1>Todo List</h1>
  <h2 v-if="userStore.user">Current User: {{ userStore.user.user.email }}</h2>
  <br>
  <section>
    <h3>Sign In</h3>
    <input placeholder="Your Email" v-model="email">
    <input placeholder="Your Password" v-model="password">
    <button @click="userStore.signInUser(email, password)">Sign In</button>
  </section>
  <br><br>


  <h3>Sign Up</h3>
  <input placeholder="Write your email" v-model="email">
  <input placeholder="Write your password" v-model="password">
  <button @click="userStore.createNewUser(email, password)">Create New User</button>

  <br><br>


  <section v-if="userStore.user">
    <h3>Create New Task</h3>
    <input placeholder="create a Task" v-model="title">
    <button @click="taskStore.createTask(taskStore.tasks.pop().id + 1, userStore.user.user.id, title)">Create Task</button>
  </section>


  <br><br>
  <button @click="taskStore.fetchTasks()">Fetch Tasks</button>
  <ul>
    <li v-for="task in taskStore.tasks">
      {{ task.id }} - {{ task.title }} - {{ task.is_complete }}
      <button @click="taskStore.deleteTask(task.id)">Delete</button>
    </li>
  </ul>

  <br><br>

  <button @click="testing">TEST</button>
</template>
