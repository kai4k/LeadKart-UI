<script setup lang="ts">
import { defineProps } from 'vue';
defineProps({
    title: String,
    icon: Function,
    color: String,
    number: Number,
    bColor: String,
    className: String,
    sign: {
        type: String,
        default: ''
    }
})
</script>
<template>
    <div class="relative col-span-12 md:col-span-4 2xl:col-span-2 card" :class="className">
        <div class="card-body">
            <div class="flex items-center gap-2 mb-7">
                <div :class="`flex items-center justify-center rounded-md size-7 text-primary-50 bg-${color}-500`">
                    <icon class="size-5"></icon>
                </div>
                <p class="text-gray-500 dark:text-dark-500">{{ title }}</p>
            </div>
            <h5 class="relative inline-block mb-2 before:absolute before:border-b-2 before:inset-x-0 before:-bottom-1"
                :class="bColor">
                <slot></slot>
            </h5>
        </div>
    </div>
</template>