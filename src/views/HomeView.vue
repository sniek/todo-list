<script setup>
import { useUserStore } from "@/stores/user";
import { useTaskStore } from "@/stores/task";
import { onMounted, ref, watch } from 'vue';
import SignIn from "@/components/SignIn.vue";
import SignUp from '@/components/SignUp.vue'
import Footer from "../components/Footer.vue";
import { useRoute } from 'vue-router';

const route = useRoute();

const userStore = useUserStore();
const taskStore = useTaskStore();

const email = ref("");
const password = ref("");

onMounted(() => {
  taskStore.fetchTasks();
})

</script>

<template>
<div class="content">
  <h1 class="text-center" id="headline"><i class="bi bi-ui-checks"></i> Simple ToDo</h1>
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div class="col-md-6">
          <img src="../assets/undraw_remotely_2j6y.svg" alt="Image" class="img-fluid">
        </div>
        <div class="col-md-6 contents">
          <div class="row justify-content-center">
              <SignIn v-if="route.name == 'home'"
                      :userStore="userStore"
                      :taskStore="taskStore"/>
              <SignUp v-if="route.name =='signUp'"
                      :userStore="userStore"/>
          </div>
        </div>
      </div>
    </div>
  </div>

<Footer></Footer>
</template>

<style>
#headline {
  margin-bottom: 80px;
  font-size: 80px;
  color: rgb(55, 53, 76);
}
</style>