<script setup lang="ts">
import { RiCloseLine } from 'vue-remix-icons';
import pageHeading from '@/components/common/PageHeading.vue';
import { ref } from 'vue';

interface GalleryImage {
    src: string | any;
    alt: string;
    title: string;
    subtitle: string;
}

const images = ref<GalleryImage[]>([
    { src: new URL('@/assets/images/gallery/img-01.jpg', import.meta.url), alt: '', title: 'Gallery Title', subtitle: 'Subtitle' },
    { src: new URL('@/assets/images/gallery/long/img-02.jpg', import.meta.url), alt: '', title: 'Gallery Title', subtitle: 'Subtitle' },
    { src: new URL('@/assets/images/gallery/long/img-03.jpg', import.meta.url), alt: '', title: 'Gallery Title', subtitle: 'Subtitle' },
    { src: new URL('@/assets/images/gallery/img-05.jpg', import.meta.url), alt: '', title: 'Gallery Title', subtitle: 'Subtitle' },
    { src: new URL('@/assets/images/gallery/img-06.jpg', import.meta.url), alt: '', title: 'Gallery Title', subtitle: 'Subtitle' },
]);

const getColumnClass = (index: number) => {
    if (index === 1) return 'col-span-12 sm:col-span-6 lg:col-span-8';
    if (index === 2) return 'col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-6';
    if (index === 3 || index === 4) return 'col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3';
    return 'col-span-12 sm:col-span-6 lg:col-span-4';
};

interface masonryGalleryImage {
    src: string | any;
    alt: string;
    class: string,
}

const galleryImages = ref<masonryGalleryImage[]>([
    {
        src: new URL('@/assets/images/gallery/img-01.jpg', import.meta.url),
        alt: 'Image 1',
        class: 'h-64',

    },
    {
        src: new URL('@/assets/images/gallery/img-02.jpg', import.meta.url),
        alt: 'Image 2',
        class: 'h-[25rem]',

    },
    {
        src: new URL('@/assets/images/gallery/img-04.jpg', import.meta.url),
        alt: 'Image 3',
        class: 'h-72',
    },
    {
        src: new URL('@/assets/images/gallery/img-05.jpg', import.meta.url),
        alt: 'Image 4',
        class: 'h-48 -mt-[144px]',
    },
    {
        src: new URL('@/assets/images/gallery/img-06.jpg', import.meta.url),
        alt: 'Image 5',
        class: 'h-80',
    },
    {
        src: new URL('@/assets/images/gallery/img-03.jpg', import.meta.url),
        alt: 'Image 6',
        class: 'h-80 -mt-[112px]',
    },
    {
        src: new URL('@/assets/images/gallery/long/img-01.jpg', import.meta.url),
        alt: 'Image 7',
        class: 'h-96 -mt-[272px]',
    },
]);

const isLightboxOpen = ref(false);
const currentImageSrc = ref('');

const openLightbox = (src: string) => {
    currentImageSrc.value = src;
    isLightboxOpen.value = true;
};
</script>
<template>
    <pageHeading title="Gallery" sub-title="UI" />
    <div class="grid grid-cols-12 gap-x-space">
        <div class="col-span-12 card">
            <div class="card-header">
                <h6 class="card-title">Basic Gallery</h6>
            </div>
            <div class="card-body">
                <div class="grid grid-cols-12 gap-5">
                    <div v-for="(image, index) in images" :key="index" :class="getColumnClass(index)">
                        <div class="relative overflow-hidden rounded-md group/item h-80">
                            <img :src="image.src" :alt="image.alt"
                                class="object-cover w-full h-full transition duration-800s ease-effect group-hover/item:scale-125" />
                            <div
                                class="absolute inset-0 flex items-end p-5 text-white bg-gradient-to-t from-gray-900/50">
                                <div>
                                    <h5 class="mb-1">{{ image.title }}</h5>
                                    <p class="text-white/75">{{ image.subtitle }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><!--end grid-->
            </div>
        </div>
    </div>
    <div class="col-span-12 card">
        <div class="card-header">
            <h6 class="card-title">Masonry With Lightbox Gallery</h6>
        </div>
        <div class="card-body">
            <div v-if="isLightboxOpen" @click.self="isLightboxOpen = false"
                class="fixed inset-0 flex items-center justify-center bg-gray-900/60 z-drawer">
                <div class="relative max-w-3xl mx-auto overflow-y-auto">
                    <!-- Close Button -->
                    <button @click="isLightboxOpen = false"
                        class="absolute top-0 right-0 p-1.5 m-4 text-white rounded-full bg-gray-900 hover:text-red-500 transition ease-linear duration-200">
                        <RiCloseLine data-lucide="x" class="w-5" />
                    </button>
                    <!-- Image -->
                    <img :src="currentImageSrc" alt="" class="object-contain rounded" />
                </div>
            </div>
            <ul class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                <li v-for="(image, index) in galleryImages" :key="index" :class="image.class">
                    <img :src="image.src" :alt="image.alt"
                        class="object-cover object-center w-full h-full rounded cursor-pointer"
                        @click="openLightbox(image.src)" />
                </li>
            </ul>
        </div>
    </div>
</template>