<script setup>
const props = defineProps({
    userStore: Object
})
</script>

<template>
    <nav class="navbar" data-bs-theme="dark">
        <div class="container-fluid">
            <span class="navbar-brand mb-0 h1">
                <i class="bi bi-ui-checks" style="font-size: 40px;"></i>
                Simple ToDo
            </span>
            <span class="navbar-text mb-0 h4" v-if="userStore.user">
                <i class="bi bi-person-circle"></i> {{ userStore.user.user.email }}
            </span>
            <RouterLink :to="{ name: 'home' }">
                <span @click="userStore.signOutUser()" class="btn" id="sign-out">Sign Out</span>
            </RouterLink>

        </div>
    </nav>
</template>

<style>
nav {
    width: 100%;
    float: none;
    background-color: #6c63ff;
}

#sign-out {
    color: white;
}

#sign-out:hover {
    color: #dc3545;
    border-color: #dc3545;
}
</style>