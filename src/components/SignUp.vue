<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const props = defineProps({
    userStore: Object
})

const email = ref("");
const password = ref("");
console.log();

const signUpUser = async () => {
    console.log('new user: ', email.value, password.value);
    await props.userStore.createNewUser(email.value, password.value)
    router.push('/dashboard')
}

const handleSubmit = () => {
    signUpUser()
}
</script>

<template>
  <div class="col-md-8">
        <div class="mb-4">
            <h3>Sign Up</h3>
            <p class="mb-4">Stay on top of life with this Simple ToDo app. Create, edit and delete tasks with ease.</p>
        </div>
        <form @submit.prevent="handleSubmit">
            <div class="form-group first">
                <input type="email" class="form-control" id="email" placeholder="Email" v-model="email" required>

            </div>
            <div class="form-group last mb-4">
                <input type="password" class="form-control" id="password" placeholder="Password" v-model="password" required>

            </div>
            
            <input type="submit" value="Sign Up" class="btn btn-block btn-primary" id="sign-up-button">

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