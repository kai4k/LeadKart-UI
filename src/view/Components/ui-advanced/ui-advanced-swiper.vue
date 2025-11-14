<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';
import pageHeading from '@/components/common/PageHeading.vue';
import { ref } from 'vue';
import { RiArrowRightLine } from 'vue-remix-icons';
interface Image {
    src: string | any;
    alt: string;
}

const images = ref<Image[]>([
    { src: new URL('@/assets/images/gallery/img-01.jpg', import.meta.url), alt: 'Image 1' },
    { src: new URL('@/assets/images/gallery/img-02.jpg', import.meta.url), alt: 'Image 2' },
    { src: new URL('@/assets/images/gallery/img-03.jpg', import.meta.url), alt: 'Image 3' },
    { src: new URL('@/assets/images/gallery/img-04.jpg', import.meta.url), alt: 'Image 4' },
]);
const dynamicSwiper = ref<Image[]>(
    [
        { src: new URL('@/assets/images/gallery/img-06.jpg', import.meta.url), alt: 'Image 1' },
        { src: new URL('@/assets/images/gallery/img-05.jpg', import.meta.url), alt: 'Image 2' },
        { src: new URL('@/assets/images/gallery/img-02.jpg', import.meta.url), alt: 'Image 3' },
        { src: new URL('@/assets/images/gallery/img-03.jpg', import.meta.url), alt: 'Image 4' },
    ]
);
const paginationSwiper = ref<Image[]>(
    [
        { src: new URL('@/assets/images/gallery/img-03.jpg', import.meta.url), alt: 'Image 1' },
        { src: new URL('@/assets/images/gallery/img-04.jpg', import.meta.url), alt: 'Image 2' },
        { src: new URL('@/assets/images/gallery/img-05.jpg', import.meta.url), alt: 'Image 3' },
        { src: new URL('@/assets/images/gallery/img-06.jpg', import.meta.url), alt: 'Image 4' },
    ]
);
const verticalSwiper = ref<Image[]>([
    { src: new URL('@/assets/images/gallery/img-05.jpg', import.meta.url), alt: 'Image 5' },
    { src: new URL('@/assets/images/gallery/img-06.jpg', import.meta.url), alt: 'Image 6' },
    { src: new URL('@/assets/images/gallery/img-03.jpg', import.meta.url), alt: 'Image 3' },
    { src: new URL('@/assets/images/gallery/img-02.jpg', import.meta.url), alt: 'Image 2' },
]);

const slidesImages = ref<Image[]>([
    { src: new URL('@/assets/images/gallery/img-05.jpg', import.meta.url), alt: 'Image 5' },
    { src: new URL('@/assets/images/gallery/img-06.jpg', import.meta.url), alt: 'Image 6' },
    { src: new URL('@/assets/images/gallery/img-03.jpg', import.meta.url), alt: 'Image 3' },
    { src: new URL('@/assets/images/gallery/img-02.jpg', import.meta.url), alt: 'Image 2' },
    { src: new URL('@/assets/images/gallery/img-04.jpg', import.meta.url), alt: 'Image 4' }
]);
const modules = [Pagination];
</script>
<template>
    <pageHeading title="Swiper" sub-title="UI Advanced" />
    <div class="grid grid-cols-12 gap-x-space">
        <div class="col-span-12 md:col-span-6 card">
            <div class="card-header">
                <h6 class="card-title">Basic Slider</h6>
            </div>
            <div class="card-body">
                <swiper class="mySwiper" :slides-per-view="1" :space-between="30">
                    <swiper-slide v-for="(item, index) in images" :key="index" class="swiper-wrapper">
                        <div class="swiper-slide">
                            <img :src="item.src" :alt="item.alt" class="object-cover w-full h-full rounded-md">
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
        <div class="col-span-12 md:col-span-6 card">
            <div class="card-header">
                <h6 class="card-title">Pagination Dynamic</h6>
            </div>
            <div class="card-body">
                <swiper class="paginationDynamicSlider" :pagination="true" :space-between="30" :modules="modules"
                    :slides-per-view="1">
                    <swiper-slide v-for="(item, index) in dynamicSwiper" :key="index">
                        <img :src="item.src" :alt="item.alt" class="object-cover w-full h-full rounded-md">
                    </swiper-slide>
                </swiper>
            </div>
        </div>
        <div class="col-span-12 md:col-span-6 card">
            <div class="card-header">
                <h6 class="card-title">Pagination</h6>
            </div>
            <div class="card-body">
                <swiper class="pagination-swiper" :modules="modules" :pagination="{ clickable: true }"
                    :slides-per-view="1" :space-between="30">
                    <swiper-slide v-for="(image, index) in paginationSwiper" :key="index">
                        <img :src="image.src" :alt="image.alt" class="object-cover w-full h-full rounded-md" />
                    </swiper-slide>
                    <div class="swiper-pagination"></div>
                </swiper>
            </div>
        </div>
        <div class="col-span-12 md:col-span-6 card">
            <div class="card-header">
                <h6 class="card-title">Vertical</h6>
            </div>
            <div class="card-body">
                <swiper class="verticalSlider h-[445px]" :modules="modules" direction="vertical"
                    :pagination="{ clickable: true }" :slides-per-view="1">
                    <swiper-slide v-for="(image, index) in verticalSwiper" :key="index">
                        <img :src="image.src" :alt="image.alt" class="object-cover w-full h-full rounded-md" />
                    </swiper-slide>
                    <div class="swiper-pagination"></div>
                </swiper>
            </div>
        </div>
        <div class="col-span-12 card">
            <div class="card-header">
                <h6 class="card-title">Grab cursor</h6>
            </div>
            <div class="card-body">
                <swiper class="grabCursorSlider" :slidesPerView="4" :spaceBetween="20" :centeredSlides="true"
                    :pagination="{
                        clickable: true,
                    }" :modules="modules">
                    <swiper-slide v-for="(image, index) in images" :key="index">
                        <img :src="image.src" :alt="image.alt" class="object-cover w-full h-full rounded-md" />
                    </swiper-slide>
                    <div class="swiper-pagination"></div>
                </swiper>
            </div>
        </div>
        <div class="col-span-12 card">
            <div class="card-header">
                <h6 class="card-title">Slides per view</h6>
            </div>
            <div class="card-body">
                <swiper class="slidersPerView" :modules="modules" :pagination="{ clickable: true }" :slides-per-view="3"
                    :space-between="20">
                    <swiper-slide v-for="(image, index) in slidesImages" :key="index">
                        <img :src="image.src" :alt="image.alt" class="object-cover w-full h-full rounded-md" />
                    </swiper-slide>
                    <div class="swiper-pagination"></div>
                </swiper>
            </div>
        </div>
    </div>
    <div class="mb-5 text-center">
        <a href="https://swiperjs.com/demos" target="_blank"
            class="text-white btn bg-primary-500 border-primary-500 hover:bg-primary-600 hover:text-white hover:border-primary-600 focus:bg-primary-600 focus:text-white focus:border-primary-600 hover:-translate-y-0.5">View
            All Demos
            <RiArrowRightLine class="inline-block ml-1 size-4" />
        </a>
    </div>
</template>