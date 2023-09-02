<script setup>
import { ref } from 'vue';
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
    userStore: Object,
    taskStore: Object
})

const logInUser = async () => {   
    await props.userStore.signInUser(email.value, password.value)
    router.push('/dashboard')
    props.taskStore.fetchTasks();   
}

const handleSubmit = () => {
    logInUser()
}

const email = ref("");
const password = ref("");

</script>

<template>
    <div class="col-md-8">
        <div class="mb-4">
            <h3>Sign In</h3>
            <p class="mb-4">Stay on top of life with this Simple ToDo app. Create, edit and delete tasks with ease.</p>
        </div>
        <form @submit.prevent="handleSubmit">
            <div class="form-group first">
                <input type="email" class="form-control" id="email" placeholder="Email" v-model="email" required>

            </div>
            <div class="form-group last mb-4">
                <input type="password" class="form-control" id="password" placeholder="Password" v-model="password" required>

            </div>
            
            <input type="submit" value="Log In" class="btn btn-block btn-primary" id="sign-up-button" >  

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
#sign-up-button:hover {
    background-color: #847dff;
    border-color: #847dff;
}

#sign-up {
    color: #6c63ff;
    font-weight: bold;
}
#sign-up:hover {
    color: #847dff;
}
</style>