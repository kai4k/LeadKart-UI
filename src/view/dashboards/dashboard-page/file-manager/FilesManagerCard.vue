<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
    bgClass: String,
    iconClass: String,
    title: String,
    count: String,
    icon: Function,
    iconBgColor: String,
});
</script>
<template>
    <div class="relative col-span-12 sm:col-span-6 md:col-span-4 2xl:col-span-2 card" :class="bgClass">
        <div class="card-body">
            <div class="flex items-center justify-center mx-auto rounded-full bg-opacity-60 size-16"
                :class="iconBgColor">
                <icon :class="iconClass + ' size-7'"></icon>
            </div>
            <div class="flex items-center gap-3 mt-4">
                <h6 class="grow"><a href="#!" class="before:absolute before:inset-0">{{ title }}</a></h6>
                <p class="text-gray-500 dark:text-dark-500 shrink-0">{{ count }}</p>
            </div>
        </div>
    </div>
</template>