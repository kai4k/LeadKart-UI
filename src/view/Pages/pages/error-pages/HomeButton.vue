<script setup lang="ts">
import { Home } from 'lucide-vue-next';
</script>
<template>
    <router-link to="/" class="btn btn-primary">
        <Home data-lucide="home" class="inline-block size-4 ltr:mr-0.5 rtl:ml-0.5" /> <span class="align-middle">Back to Home</span>
    </router-link>
</template>