<script setup lang="ts">
import { X } from 'lucide-vue-next';
import { ref, watch } from 'vue';
const props = defineProps({
    moduleShow: Boolean,
    setModuleShowValue: Function,
    bookData: Object,
})
interface Book {
    title: string;
    author: string;
    image: string;
    rating: number;
    reviewCount: number;
    price: number | string;
    type: string;
}

const inViewBook = ref<Book | any>({
    title: 'The Wager: A Tale of Shipwreck, Mutiny and Murder',
    author: 'Elin Hilderbrand',
    image: '',
    rating: 2,
    reviewCount: 150,
    price: 29.99,
    type: 'Popular Book',
});
watch(() => props.bookData, (newData) => {
    if (newData) {
        inViewBook.value = { ...newData }
    }
})

// Close the modal
const closeModal = () => {
    if (props.setModuleShowValue) props.setModuleShowValue(false)
};

// Helper functions for star ratings
const fullStars = (rating: number) => Math.floor(rating);
const halfStars = (rating: number) => rating % 1 !== 0;
const emptyStars = (rating: number) => 5 - Math.ceil(rating);
</script>
<template>
    <div v-if="moduleShow" class="modal">
        <div class="modal-wrap modal-center">
            <!-- Modal Header -->
            <div class="modal-header">
                <h6>Book Overview</h6>
                <button @click="closeModal" class="link link-red">
                    <X data-lucide="x" class="size-5"></X>
                </button>
            </div>

            <!-- Modal Content -->
            <div class="modal-content">
                <img :src="inViewBook.image" alt="Book Cover" class="mx-auto rounded-md h-44" />
                <div class="mt-5">
                    <!-- Book Rating -->
                    <div class="text-yellow-500 flex gap-1.5 mb-2">
                        <i v-for="i in fullStars(inViewBook.rating)" :key="'full-' + i" class="ri-star-fill"></i>
                        <i v-if="halfStars(inViewBook.rating)" class="ri-star-half-fill"></i>
                        <i v-for="i in emptyStars(inViewBook.rating)" :key="'empty-' + i" class="ri-star-line"></i>
                        <span class="text-gray-800 dark:text-dark-50">({{ inViewBook.reviewCount }})</span>
                    </div>

                    <!-- Book Title -->
                    <h6 class="mb-1 truncate">
                        <a href="#!" class="text-current link link-primary">{{ inViewBook.title }}</a>
                    </h6>

                    <!-- Book Author -->
                    <p class="mb-2 text-gray-500 dark:text-dark-500">
                        By <a href="#!" class="underline link link-green">{{ inViewBook.author }}</a>
                    </p>

                    <!-- Book Price -->
                    <h5 class="mb-2">${{ inViewBook.price }}</h5>

                    <!-- Buy Now Button -->
                    <button type="button" class="w-full btn btn-sub-red">Buy Now</button>
                </div>
            </div>
        </div>
        <div class="backdrop-overlay backdrop-blur-xs" @click="closeModal"></div>

    </div>
</template>