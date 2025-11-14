<script setup lang="ts">
import { MoveLeft, MoveRight } from 'lucide-vue-next';
import { features } from './school-date';
</script>
<template>
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-space">
        <div v-for="(feature, index) in features" :key="index">
            <div :class="['p-4 mb-3 rounded-lg', feature.bgColor, 'size-20']">
                <img :src="feature.image" :alt="feature.title">
            </div>
            <h5 class="mb-1">{{ feature.title }}</h5>
            <p class="mb-3 text-gray-500 dark:text-dark-500 text-16">{{ feature.description }}</p>
            <a href="#!" class="link link-orange text-16">
                Read More
                <MoveRight data-lucide="move-right" class="ml-1 ltr:inline-block rtl:hidden size-4"></MoveRight>
                <MoveLeft data-lucide="move-left" class="mr-1 rtl:inline-block ltr:hidden size-4"></MoveLeft>
            </a>
        </div>
    </div>
</template>