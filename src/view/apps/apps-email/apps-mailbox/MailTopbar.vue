<script setup lang="ts">
import { contacts } from './email-data';

</script>
<template>
    <div class="flex gap-4 *:shrink-0">
        <div v-for="contact in contacts" :key="contact.name">
            <a href="#!"
                class="block w-24 p-2 text-center transition duration-300 ease-linear rounded-md hover:bg-gray-50 dark:hover:bg-dark-850">
                <div
                    class="relative flex items-center justify-center mx-auto mb-1 text-lg font-semibold text-gray-500 bg-white border border-gray-200 rounded-full dark:bg-dark-900 dark:text-dark-500 dark:border-dark-800 size-12">
                    <template v-if="contact.image">
                        <img :src="contact.image" alt="" class="size-6">
                    </template>
                    <template v-else>
                        {{ contact.initial }}
                    </template>
                    <span v-if="contact.badge"
                        class="absolute flex items-center justify-center !p-0 leading-none rounded-full !text-11 -bottom-0.5 -right-0.5 !border-2 !border-white size-5 badge dark:border-dark-900 badge-solid-primary">
                        {{ contact.badge }}
                    </span>
                </div>
                <h6 class="font-medium truncate">{{ contact.name }}</h6>
            </a>
        </div>
    </div>
</template>