<script setup lang="ts">
import { Flower, Redo2, X } from 'lucide-vue-next';
import { defineProps } from 'vue';

defineProps<{
    icon: string;
    title: string;
    description: string;
    price: string;
    buttonText: string;
    buttonStyle: string;
    features: {
        included: string[];
        notIncluded: string[];
    };
    highlight?: string; // Optional prop for highlighting
}>();

</script>
<template>
    <div
        :class="['border rounded bg-gradient-to-br border-gray-200 dark:border-slate-300/10 dark:from-purple-500/5 dark:to-body-invoice dark:shadow-purple-100/5', { 'overflow-hidden dark:border-purple-500 !border-purple-500 ': highlight }]">
        <div v-if="highlight" class="p-3 text-center bg-purple-500 text-purple-50">
            {{ highlight }}
        </div>
        <div class="p-8">
            <h6 class="flex items-center gap-3 mb-1 text-16">
                <Flower class="inline-block text-green-500 size-5"></Flower>
                {{ title }}
            </h6>
            <p class="mb-8 text-gray-500">{{ description }}</p>
            <h2 class="mb-6">{{ price }}<sub class="text-gray-500 fotn-normal text-14">/monthly</sub></h2>
            <button type="button" class="w-full btn" :class="buttonStyle">{{ buttonText }}</button>
            <div class="mt-6">
                <ul class="space-y-3 *:flex *:items-center  *:gap-2">
                    <li v-for="(feature, index) in features.included" :key="'included-' + index">
                        <Redo2 data-lucide="redo-2" class="inline-block text-green-500 size-4"></Redo2> {{ feature }}
                    </li>
                    <li v-for="(feature, index) in features.notIncluded" :key="'not-included-' + index"
                        class="text-gray-500">
                        <X data-lucide="x" class="inline-block text-red-500 size-4"></X> {{ feature }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>