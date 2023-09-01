<script setup>
import { ref } from 'vue';

const props = defineProps({
    userStore: Object
})

const email = ref("");
const password = ref("");
console.log();
</script>

<template>
  <div class="col-md-8">
        <div class="mb-4">
            <h3>Sign Up</h3>
            <p class="mb-4">Sign up and enjoy the simple solution to todo lists. Create, Edit, Delete Tasks. Nothing more, nothing less.</p>
        </div>
        <form>
            <div class="form-group first">
                <input type="email" class="form-control" id="email" placeholder="Email" v-model="email">

            </div>
            <div class="form-group last mb-4">
                <input type="password" class="form-control" id="password" placeholder="Password" v-model="password">

            </div>

            <RouterLink :to="{ name: 'dashboard' }">
                <input type="submit" value="Sign Up" class="btn btn-block btn-primary" id="sign-up-button" @click="userStore.createNewUser(email, password)">
            </RouterLink>

            <span class="d-block text-left my-4 text-muted text-center">&mdash; Already a Member?
                <RouterLink :to="{ name: 'home' }">
                    <span id="sign-up"> Sign In </span>
                </RouterLink>
                &mdash;
            </span>
        </form>
    </div>
</template>

<style>
</style>