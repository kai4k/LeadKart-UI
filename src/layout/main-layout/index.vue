<script lang="ts" setup>
import { RouterView } from 'vue-router';
import Footer from './Footer.vue';
import Topbar from './Topbar.vue';
import Sidebar from './Sidebar.vue';
import { onMounted, ref } from 'vue';
// @ts-ignore
import { useStore } from 'vuex';
const store = useStore()
const scrolled = ref(false);
const searchingQuery = ref('')

const handleScroll = () => {
    scrolled.value = window.scrollY > 1;
};


onMounted(() => {
    window.addEventListener('scroll', handleScroll);
})
</script>
<template>
    <Topbar :scrolled="scrolled" @searchQuery="(query) => searchingQuery = query" />
    <Sidebar :scrolled="scrolled" :searchQuery="searchingQuery" />
    <div class=" relative min-h-screen group-data-[layout=boxed]:bg-white group-data-[layout=boxed]:rounded-md">
        <div class="page-wrapper">
            <RouterView />
        </div>
        <Footer />
    </div>
</template>