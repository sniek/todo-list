<script setup>
import { onMounted } from 'vue';
import { useUserStore } from "@/stores/user";
import { useTaskStore } from "@/stores/task";
import TaskItem from '@/components/TaskItem.vue';
import Navbar from "@/components/Navbar.vue";
import NewTask from '@/components/NewTask.vue';
import Footer from "../components/Footer.vue";

const userStore = useUserStore();
const taskStore = useTaskStore();

onMounted(() => {
    taskStore.fetchTasks();
})


</script>

<template>
    <Navbar :userStore="userStore"></Navbar>
    <div class="content">
        <div class="container">
            <NewTask    :taskStore="taskStore" 
                        :userStore="userStore" />
            <TaskItem   :taskStore="taskStore" />
        </div>
    </div>
    <Footer></Footer>
</template>

<style></style>