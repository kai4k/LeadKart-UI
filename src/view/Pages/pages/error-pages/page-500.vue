<script setup lang="ts">
import HomeButton from './HomeButton.vue';
import SocialMediaIcon from '../SocialMediaIcon.vue';
</script>
<template>
    <div
        class="relative flex items-center justify-center min-h-screen py-20 from-sky-500/10 ltr:bg-gradient-to-l rtl:bg-gradient-to-r via-green-500/5 to-pink-500/5">
        <div class="container">
            <div class="grid grid-cols-12">
                <div class="col-span-12 text-center xl:col-span-8 xl:col-start-3">
                    <div class="relative inline-block">
                        <img src="@/assets/images/others/500.png" alt="" class="relative mx-auto h-96" data-tilt
                            data-tilt-full-page-listening>
                    </div>
                    <h1
                        class="text-4xl font-bold leading-relaxed text-transparent md:text-6xl drop-shadow-lg ltr:bg-gradient-to-r rtl:bg-gradient-to-l from-primary-500 vie-purple-500 to-pink-500 bg-clip-text">
                        Oops! Internal Server Error</h1>
                    <p class="max-w-2xl mx-auto my-5 text-gray-500 dark:text-dark-500 text-16">Our servers may have been
                        abducted by Domiex... Please give us a moment while we search for them.</p>
                        <HomeButton/>
                        <SocialMediaIcon />
                </div>
            </div>
        </div>
    </div>
</template>