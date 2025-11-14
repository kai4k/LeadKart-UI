<script setup lang="ts">
import { ref } from 'vue';
const currentYear = ref(new Date().getFullYear());
</script>
<template>
    <footer
        class="relative py-5 border-t border-purple-200 border-dashed bg-purple-50 dark:bg-purple-500/10 dark:border-purple-500/20">
        <div class="container mx-auto px-4 max-w-[1350px]">
            <div class="flex flex-wrap justify-between gap-5 text-16">
                <div>
                    <p class="text-gray-500">
                        &copy; {{ currentYear }} Domiex. Crafted by <a href="#!" class="font-semibold">SRBThemes</a>
                    </p>
                </div>
                <div>
                    <div class="flex justify-end gap-6 text-lg">
                        <a href="#!" title="twitter" class="link link-sky"><i class="ri-twitter-x-line"></i></a>
                        <a href="#!" title="instagram" class="link link-pink"><i class="ri-instagram-line"></i></a>
                        <a href="#!" title="amazon" class="link link-green"><i class="ri-amazon-line"></i></a>
                        <a href="#!" title="chrome" class="link link-red"><i class="ri-chrome-line"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>