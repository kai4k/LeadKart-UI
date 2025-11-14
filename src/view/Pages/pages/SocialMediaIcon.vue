<script setup lang="ts">
import { Dribbble, Facebook, Gitlab, Instagram, Linkedin, Twitch } from 'lucide-vue-next';


</script>
<template>
    <div class="flex items-center justify-center gap-2 mt-7">
        <a href="#!"
            class="inline-flex items-center justify-center text-white rounded-full shadow-lg bg-sky-500 shadow-gray-200 dark:shadow-dark-800 size-10">
            <Linkedin class="size-5"></Linkedin>
        </a>
        <a href="#!"
            class="inline-flex items-center justify-center text-white bg-pink-500 rounded-full shadow-lg shadow-gray-200 dark:shadow-dark-800 size-10">
            <Dribbble class="size-5"></Dribbble>
        </a>
        <a href="#!"
            class="inline-flex items-center justify-center text-white rounded-full shadow-lg bg-primary-500 shadow-gray-200 dark:shadow-dark-800 size-10">
            <Facebook data-lucide="facebook" class="size-5"></Facebook>
        </a>
        <a href="#!"
            class="inline-flex items-center justify-center text-white bg-purple-500 rounded-full shadow-lg shadow-gray-200 dark:shadow-dark-800 size-10">
            <Twitch class="size-5"></Twitch>
        </a>
        <a href="#!"
            class="inline-flex items-center justify-center text-white bg-pink-500 rounded-full shadow-lg shadow-gray-200 dark:shadow-dark-800 size-10">
            <Instagram class="size-5"></Instagram>
        </a>
        <a href="#!"
            class="inline-flex items-center justify-center text-white bg-orange-500 rounded-full shadow-lg shadow-gray-200 dark:shadow-dark-800 size-10">
            <Gitlab class="size-5"></Gitlab>
        </a>
    </div>
</template>