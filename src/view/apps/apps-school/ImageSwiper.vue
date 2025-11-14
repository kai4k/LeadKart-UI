<script setup lang="ts">
// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
const modules = [Navigation, Autoplay]
const achievementsSwiperImage = [
    {
        title: "Academic Excellence Awards",
        img: new URL('@/assets/images/school/trophy.png', import.meta.url).href
    },
    {
        title: "Special Recognition Awards",
        img: new URL('@/assets/images/school/medal.png', import.meta.url).href
    },
    {
        title: "Arts and Sports Awards",
        img: new URL('@/assets/images/school/winner.png', import.meta.url).href
    },
]
defineProps({
    autoScroll: Object
})
const navigation = {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
}
</script>
<template>
    <h6 class="mb-6">My Achievements and Milestones</h6>
    <div class="swiper mySwiper group/swiper">
        <swiper :navigation="navigation" :modules="modules" class="swiper-wrapper" :autoplay="{
            delay: 1500,
            disableOnInteraction: false,
        }" loop>
            <template v-for="(achievement, index) in achievementsSwiperImage" :key="index">
                <swiper-slide>
                    <div class="py-3 text-center">
                        <div
                            class="flex items-center justify-center p-2 mx-auto rounded-full bg-gradient-to-t from-yellow-500/10 ring-offset-2 dark:ring-offset-dark-900 size-28 ring-2 ring-yellow-500/10">
                            <img :src="achievement.img" alt="" class="size-20">
                        </div>
                        <h6 class="mt-6">{{ achievement.title }}</h6>
                    </div>
                </swiper-slide>
            </template>
            <div
                class="swiper-button-next after:font-remix after:text-2xl after:text-gray-800 dark:after:text-dark-100 opacity-0 group-hover/swiper:opacity-100 transition ease-linear duration-300 after:content-['\ea6e']">
            </div>
            <div
                class="swiper-button-prev after:font-remix after:text-2xl after:text-gray-800 dark:after:text-dark-100 opacity-0 group-hover/swiper:opacity-100 transition ease-linear duration-300 after:content-['\ea64']">
            </div>
        </swiper>
    </div>
</template>