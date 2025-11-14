<script setup lang="ts">
import { defineProps } from 'vue';
import { X, CornerDownRight } from 'lucide-vue-next';

// Define the props for the component
// const props = defineProps({
//     title: String,
//     description: String,
//     price: String,
//     features: Object,
//     isPopular: Boolean,
//     link: String,
// });

const props = defineProps<{
    title: string;
    description: string;
    price: string;
    features: Array<{ icon: string; text: string }>;
    isPopular?: boolean;
    link: string;
    button: string
}>();

</script>
<template>
    <div class="relative overflow-hidden card" data-aos="fade-up" data-aos-duration="2000">
        <div
            class="absolute border-[40px] border-gray-100 dark:border-dark-850 size-64 -bottom-16 -right-16 rounded-creative">
        </div>
        <div class="relative lg:p-8 card-body">
            <div v-if="isPopular" class="absolute right-5 top-5 badge badge-pink">Popular Plan</div>
            <div class="mb-8 text-center">
                <h5 class="mb-1">{{ title }}</h5>
                <p class="mb-6 text-gray-500 dark:text-dark-500">{{ description }}</p>
                <h1>
                    {{ price }}<sub class="text-sm text-gray-500 dark:text-dark-500">/month</sub>
                </h1>
            </div>
            <a :href="link" class="w-full btn" :class="isPopular ? 'btn-primary' : 'btn-sub-gray'">{{ button }}</a>
            <ul class="space-y-4 *:flex *:items-center *:gap-2 mt-7">
                <li v-for="(feature, index) in features" :key="index">
                    <component :is="feature.icon === 'corner-down-right' ? CornerDownRight : X"
                        class="inline-block size-4"
                        :class="feature.icon === 'corner-down-right' ? 'text-green-500 fill-green-500/10' : 'text-gray-500 fill-gray-100 dark:text-dark-500 dark:fill-dark-850'" />
                    {{ feature.text }}
                </li>
            </ul>
        </div>
    </div>
</template>