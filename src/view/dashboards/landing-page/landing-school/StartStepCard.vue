<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
    number: string;
    icon: any;
    title: string;
    description: string;
    right?: boolean;
    cardDirection?: string,
    iconStyle?: string,
}>();

const isRight = props.right || false;
</script>
<template>
    <div class="relative before:absolute mb-8 before:border-b dark:bg-transparent before:w-2/3 before:top-1/2 ltr:[&.right]:before:right-0 rtl:[&.right]:before:left-0 before:border-gray-200 after:border-gray-200 dark:before:border-dark-800 dark:after:border-dark-800 after:absolute ltr:after:border-l rtl:after:border-r md:after:h-[calc(100%_+_2rem_)] after:top-1/2 ltr:after:left-2/3 rtl:after:right-2/3 ltr:[&.right]:after:left-auto rtl:[&.right]:after:right-auto ltr:[&.right]:after:right-2/3 rtl:[&.right]:after:left-2/3 last:after:hidden last:before:w-[33.3%]"
        :class="{ 'right': isRight }">
        <div class="relative max-w-md card bg-gradient-to-b from-orange-500/10" :class="cardDirection">
            <div class="absolute text-orange-500 top-5 right-5 text-7xl opacity-10">{{ number }}</div>
            <div class="card-body">
                <icon class="size-8" :class="iconStyle"></icon>
                <h6 class="mt-4 mb-2 text-16">{{ title }}</h6>
                <p class="text-gray-500 dark:text-dark-500">{{ description }}</p>
            </div>
        </div>
    </div>
</template>