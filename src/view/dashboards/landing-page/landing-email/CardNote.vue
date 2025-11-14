<script setup lang="ts">
import { MoveRight } from 'lucide-vue-next';
import { defineProps } from 'vue';

// Define the props for the component
const props = defineProps<{
    data: {
        icon: Object;
        title: string;
        description: string;
    }
}>();
</script>
<template>
    <div data-aos="fade-up" data-aos-duration="2000">
        <div class="p-4 mb-4 bg-white rounded-lg text-primary-500 size-14 dark:bg-dark-900">
            <component :is="data.icon" class="fill-primary-100" />
        </div>
        <h5 class="mb-1">{{ data.title }}</h5>
        <p class="mb-4 text-gray-500 dark:text-dark-500 text-16">{{ data.description }}</p>
        <a href="#!" class="link link-primary text-16">
            Read More <MoveRight data-lucide="move-right" class="inline-block ml-1 size-4"></MoveRight>
        </a>
    </div>
</template>