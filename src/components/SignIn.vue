<script setup>
import { ref } from 'vue';

const props = defineProps({
    userStore: Object,
    taskStore: Object
})

const logInUser = async () => {
    await props.userStore.signInUser(email.value, password.value)
    props.taskStore.fetchTasks();
}

const email = ref("");
const password = ref("");

</script>

<template>
    <div class="col-md-8">
        <div class="mb-4">
            <h3>Sign In</h3>
            <p class="mb-4">Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur adipisicing.</p>
        </div>
        <form>
            <div class="form-group first">
                <input type="email" class="form-control" id="email" placeholder="Email" v-model="email">

            </div>
            <div class="form-group last mb-4">
                <input type="password" class="form-control" id="password" placeholder="Password" v-model="password">

            </div>

            <RouterLink :to="{ name: 'dashboard' }">
                <input type="submit" value="Log In" class="btn btn-block btn-primary" id="sign-up-button" @click="logInUser()">
            </RouterLink>

            <span class="d-block text-left my-4 text-muted text-center">&mdash; Not a Member?
                <RouterLink :to="{ name: 'signUp' }">
                    <span id="sign-up"> Sign Up </span>
                </RouterLink>
                &mdash;
            </span>
        </form>
    </div>
</template>

<style>
input::placeholder {
    font-size: 12px;
    display: block;
    margin-bottom: 0;
    color: #b3b3b3;
}

#sign-up-button {
    width: 100%;
    background-color: #6c63ff;
    height: 54px;
    padding-left: 30px;
    padding-right: 30px;
}

#sign-up {
    color: #6c63ff;
    text-decoration: none;
    font-weight: bold;
}
</style>