<script setup lang="ts">
import { ref, defineProps } from 'vue';
import { ShoppingBasket, Check } from 'lucide-vue-next';
import { productCardImage } from './add-new/form-data';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

defineProps({
    autoplay: Object,
})

const productPrice = "$36.87";
const productName = "Bra Lace Crop top";
const category = "Fashion";
const modules = [Pagination, Autoplay];
// Define the product details and state
const activeLink = ref<string>('primary');
// Colors and Sizes data
const colors = [
    { value: 'primary', name: 'Primary' },
    { value: 'pink', name: 'Pink' },
    { value: 'green', name: 'Green' },
    { value: 'red', name: 'Red' },
];
const sizes = ['S', 'M', 'L', 'XL', '2XL'];
// Reactive state for active color and size
const activeSize = ref('S');
const setActiveLink = (link: string) => {
    activeLink.value = link;
};

const setActiveSize = (size: string) => {
    activeSize.value = size;
};
</script>

<template>
    <div class="card-body">
        <div class="relative p-5 bg-gray-100 dark:bg-dark-850">
            <a href="#!" class="absolute z-10 flex items-center justify-center bg-white rounded-full link link-red size-10 shrink-0 top-5 dark:bg-dark-850 ltr:right-5 rtl:left-5">
                <i class="text-lg ri-heart-line"></i>
            </a>

            <!-- Swiper Slider -->
            <swiper :slides-per-view="1" pagination :modules="modules" :autoplay="autoplay">
                <swiper-slide v-for="(image, index) in productCardImage" :key="index">
                    <img :src="image.images" alt="" class="w-3/4 mx-auto" />
                </swiper-slide>
            </swiper>
        </div>

        <div class="mt-5">
            <h5 class="mb-2">{{ productPrice }}</h5>
            <h6 class="mb-1"><a href="#!" class="!text-current link link-primary">{{ productName
                    }}</a></h6>
            <p class="text-gray-500 dark:text-dark-500">{{ category }}</p>

            <!-- Color Selection -->
            <div class="flex flex-wrap items-center gap-2">
                <div class="flex items-center gap-2 mt-3 grow">
                    <a v-for="(color, index) in colors" :key="index" href="#!" class="flex items-center justify-center text-white rounded size-5 group/item" :class="{
                        active: activeLink === color.value,
                        [`bg-${color.value}-500`]: true
                    }" @click.prevent="setActiveLink(color.value)">
                        <Check data-lucide="check" class="size-4 hidden group-[&.active]/item:block"></Check>
                    </a>
                </div>
                <!-- Size Selection -->
                <div class="flex flex-row-reverse items-center gap-2 mt-3 font-medium shrink-0">
                    <a v-for="(size, index) in sizes" :key="index" href="#!" class="text-gray-500 dark:text-dark-500 [&.active]:!text-green-500" :class="{ 'active': activeSize === size }" @click.prevent="setActiveSize(size)">
                        {{ size }}
                    </a>
                </div>
            </div>
            <div class="flex gap-2 mt-4">
                <a href="apps-ecommerce-shop-cart" class="w-full btn btn-primary">Buy Now</a>
                <a href="#!" class="btn btn-sub-gray btn-icon shrink-0">
                    <ShoppingBasket data-lucide="shopping-basket" class="size-5"></ShoppingBasket>
                </a>
            </div>
        </div>
    </div>
</template>