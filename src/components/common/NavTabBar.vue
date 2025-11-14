<script setup lang="ts">
import { CloudCog } from 'lucide-vue-next';
import { ref, defineProps, watch } from 'vue';

let props = defineProps({
    tabs: {
        type: Object,
        default: () => ({})
    },
    activeClasses: {
        type: String,
        default: 'bg-white text-gray-800 dark:bg-dark-900 dark:text-dark-50'
    },
    inactiveClasses: {
        type: String,
        default: 'hover:text-gray-800 dark:hover:text-dark-50',
    },
    tagPage: Function,
    cssClass: {
        type: String,
        default: ' p-1 items-center gap-1 p-1 bg-gray-100 rounded-md dark:bg-dark-850 shrink-0',
    },
    liStyle: {
        type: String,
        default: "px-3 py-1 text-xs [&.active]:bg-white dark:[&.active]:bg-dark-900 btn"
    },
    extraCss: {
        type: String,
        default: ''
    },
    listCss: {
        type: String,
        default: '',
    }
})
// Define the tabs data


const openTab = ref(1); // Initialize with the first tab open
// // Define your active and inactive classes
watch(openTab, () => {
    if (props.tagPage) {
        props.tagPage(openTab.value);
    }
})
</script>
<template>
    <ul class="flex " :class="[cssClass, extraCss]">
        <li v-for="tab in tabs" :key="tab.id" @click="openTab = tab.id">
            <button type="button" :class="[openTab === tab.id ? activeClasses : inactiveClasses, liStyle]">
                {{ tab.name }}
            </button>
        </li>
        <slot></slot>
    </ul>
</template>