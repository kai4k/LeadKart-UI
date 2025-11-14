<script setup lang="ts">
import SocialMediaIcon from './SocialMediaIcon.vue';
// Function to refresh the page
const refreshPage = () => {
    location.reload();
};
</script>
<template>
    <div
        class="relative flex items-center justify-center min-h-screen py-20 from-sky-500/10 ltr:bg-gradient-to-l rtl:bg-gradient-to-r via-green-500/5 to-pink-500/5">
        <div class="container">
            <div class="grid grid-cols-12">
                <div class="col-span-12 text-center lg:col-span-8 lg:col-start-3">
                    <div class="relative inline-block">
                        <img src="@/assets/images/others/setting.png" alt=""
                            class="absolute right-16 top-12 animate-bounce h-44" />
                        <img src="@/assets/images/others/maintenance.png" alt="" class="relative mx-auto h-96" data-tilt
                            data-tilt-full-page-listening />
                    </div>
                    <h1
                        class="text-4xl font-bold text-transparent md:text-6xl lg:leading-relaxed drop-shadow-lg bg-gradient-to-r from-primary-500 vie-purple-500 to-pink-500 bg-clip-text">
                        Opp! We're Under Maintenance
                    </h1>
                    <p class="max-w-2xl mx-auto mt-3 mb-5 text-gray-500 dark:text-dark-500 text-16">
                        This website is currently undergoing scheduled maintenance. We'll be back shortly.
                    </p>
                    <button type="button" class="btn btn-primary" @click="refreshPage">
                        Refresh
                    </button>
                    <SocialMediaIcon />
                </div>
            </div>
        </div>
    </div>
</template>