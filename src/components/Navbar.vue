<script setup>
const props = defineProps({
    userStore: Object
})
</script>

<template>
    <nav class="navbar navbar-expand fixed-top" data-bs-theme="dark" style="background-color: #6c63ff;">
        <div class="column d-flex justify-content-between">
            <div class="container-fluid flex-fill">
                <span class="navbar-brand mb-0 h1">
                    <i class="bi bi-ui-checks" style="font-size: 40px;"></i>
                    Simple ToDo
                </span>
            </div>
            <div class="container-fluid collapse navbar-collapse">
                <span class="navbar-text mb-0 h3" v-if="userStore.user">
                    <i class="bi bi-person-circle"></i> {{ userStore.user.user.email }}
                </span>
            </div>
            <span class="text-center"></span>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="container-fluid collapse navbar-collapse" id="navbarText">
                <RouterLink :to="{ name: 'home' }">
                    <span @click="userStore.signOutUser()" class="btn">Sign Out</span>
                </RouterLink>
            </div>
        </div>
    </nav>
</template>

<style>
nav {
    width: 100%;
}
</style>