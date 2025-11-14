<script setup lang="ts">
import { Moon, Sun } from 'lucide-vue-next';
import { ref, defineProps, computed } from 'vue';
// @ts-ignore
import { useStore } from 'vuex'
const store = useStore()
defineProps({
    className: {
        type: String,
        default: 'bg-primary-500',
    }
})
// Define a reactive variable for the mode

const mode = ref('light');
const layoutTheme = computed(() => store.getters.layoutTheme);
// Function to toggle the mode
const toggleTheme = () => {
    const newTheme = layoutTheme.value === 'light' ? 'dark' : 'light';
    const modeElement = document.querySelector('[data-mode]');
    if (modeElement) {
        modeElement.setAttribute('data-mode', newTheme); // Apply the theme to the page
    }
    store.dispatch('updateLayoutTheme', newTheme); // Update Vuex state and localStorage
};

</script>
<template>
    <button @click="toggleTheme"
        class="fixed flex items-center justify-center text-white ltr:right-0 rtl:left-0 ltr:rounded-l-md rtl:rounded-r-md size-12 top-1/2"
        :class="className">
        <Moon data-lucide="moon" class="inline-block size-5" v-if="mode === 'light'"></Moon>
        <Sun data-lucide="sun" class=" size-5" v-if="mode === 'dark'"></Sun>
    </button>
</template>