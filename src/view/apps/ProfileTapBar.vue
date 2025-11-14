<script setup lang="ts">

import { onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps({
    tabs: {
        type: Object,
        default: () => ({}),
    },
    activeTab: {
        type: String,
        default: '',
    }
})
// Reactive state to track the active tab
const activeTab = ref<string>('overview');

// Method to set active tab on click
function setActiveTab(tabName: string) {
    activeTab.value = tabName;
}
onMounted(() => {
    setActiveTab(props.activeTab)
})
</script>
<template>
    <ul class="pb-2 overflow-x-auto tabs-pills lg:pb-0">
        <li v-for="tab in tabs" :key="tab.name">
            <RouterLink :to="tab.link" :class="[
                'nav-item text-gray-500 dark:text-dark-500 [&.active]:!bg-primary-500 [&.active]:!text-primary-50 ',
                { 'active': activeTab === tab.name }
            ]" @click="setActiveTab(tab.name)">
                <component :is="tab.icon" class="inline-block ltr:mr-1 rtl:ml-1 size-4" /> <span class="align-middle whitespace-nowrap">{{ tab.label }}</span>
            </RouterLink>
        </li>
    </ul>
</template>