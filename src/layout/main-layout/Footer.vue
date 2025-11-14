<script setup lang="ts">
const year = new Date().getFullYear()
</script>
<template>
    <div class="main-footer">
        <div class="w-full">
            <div class="grid grid-cols-1 gap-5 lg:grid-cols-2">
                <div class="hidden lg:block">
                    <ul class="flex items-center gap-4">
                        <li><a href="#!" class="font-medium text-gray-500 transition duration-300 ease-linear dark:text-dark-500 hover:text-primary-500 dark:hover:text-primary-500">About</a>
                        </li>
                        <li><a href="#!" class="font-medium text-gray-500 transition duration-300 ease-linear dark:text-dark-500 hover:text-primary-500 dark:hover:text-primary-500">Support</a>
                        </li>
                        <li><a href="#!" class="font-medium text-gray-500 transition duration-300 ease-linear dark:text-dark-500 hover:text-primary-500 dark:hover:text-primary-500">Purchase
                                Now</a></li>
                    </ul>
                </div>
                <div class="text-center text-gray-500 dark:text-dark-500 ltr:lg:text-right rtl:lg:text-left">
                    <div>
                        &copy; <span x-text="year">{{ year }}</span> Domiex. Crafted by <a href="#!" class="font-semibold">SRBThemes</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>