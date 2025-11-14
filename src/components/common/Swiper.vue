<script setup lang="ts">
import { defineProps } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper/modules';
defineProps({

})
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';

const modules = [Navigation];
</script>
<template>
    <swiper class="swiper-wrapper" :modules="modules">
        <slot></slot>
    </swiper>
</template>