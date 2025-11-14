<script setup lang="ts">
import simplebar from 'simplebar-vue';
import { ref } from 'vue';
import { items } from './chart-data';
const activeTag = ref(0)
</script>
<template>
    <div class="col-span-12 2xl:col-span-1 card">
        <simplebar data-simplebar class="max-h-[calc(100vh_-_13rem)]">
            <div class="flex gap-4 2xl:flex-col *:shrink-0 card-body">
                <a v-for="(item, index) in items" :key="index" :href="item.link" :title="item.title"
                    class="relative flex items-center justify-center font-semibold transition duration-200 ease-linear bg-gray-100 rounded-full dark:bg-dark-850 size-14 hover:ring-2 [&.active]:ring-2 hover:ring-offset-2 dark:hover:ring-offset-dark-900 [&.active]:ring-offset-2 dark:[&.active]:ring-offset-dark-900 hover:ring-opacity-100 [&.active]:ring-opacity-100 hover:ring-primary-500 [&.active]:ring-primary-500"
                    :class="{ 'active': activeTag == index }">
                    <img v-if="item.image" :src="item.image" alt="" class="rounded-full size-9" />
                    <span v-if="!item.image">{{ item.label }}</span>
                    <span
                        class="absolute bottom-0 bg-green-500 border-2 border-white rounded-full dark:border-dark-900 right-1 size-3"></span>
                </a>
            </div>
        </simplebar>
    </div>
</template>