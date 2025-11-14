<script setup lang="ts">
import simplebar from 'simplebar-vue';
import { products } from './ecommorece-data';

</script>
<template>
    <simplebar class="h-[180px] -mx-space px-space" data-simplebar>
        <div class="space-y-4">
            <div v-for="product in products" :key="product.id" class="flex flex-col gap-3 md:flex-row md:items-center">
                <div class="bg-gray-100 rounded-md size-16 dark:bg-dark-850 shrink-0">
                    <img :src="product.image" loading="lazy" :alt="product.name" />
                </div>
                <div class="grow">
                    <h6><router-link :to="product.link">{{ product.name }}</router-link></h6>
                    <div class="text-orange-400">
                        <i v-for="i in Math.floor(product.rating)" :key="i" class="ri-star-fill"></i>
                        <i v-if="product.rating % 1 !== 0" class="ri-star-half-fill"></i>
                        <i v-for="i in 5 - Math.ceil(product.rating)" :key="'empty-' + i" class="ri-star-line"></i>
                    </div>
                    <h6>{{ product.price }}</h6>
                </div>
                <div class="flex gap-1 md:flex-col md:items-end shrink-0">
                    <button type="button" class="btn btn-sm btn-sub-green">
                        <i class="ri-pencil-line"></i> Edit
                    </button>
                    <button type="button" class="btn btn-sm btn-sub-red">
                        <i class="ri-close-line"></i> Delete
                    </button>
                </div>
            </div>
        </div>
    </simplebar>
</template>