<script setup lang="ts">
import PageHeading from '@/components/common/PageHeading.vue';
import CardBody from './common-components/CardComponent.vue';
import { ref } from 'vue';
import { ChevronDown, ChevronUp, Minus, Plus } from 'lucide-vue-next';
const colors = [
    { name: 'primary', class: 'input-spin-primary', count: ref(1) },
    { name: 'purple', class: 'input-spin-purple', count: ref(1) },
    { name: 'green', class: 'input-spin-green', count: ref(1) },
    { name: 'red', class: 'input-spin-red', count: ref(1) },
    { name: 'yellow', class: 'input-spin-yellow', count: ref(1) },
    { name: 'sky', class: 'input-spin-sky', count: ref(1) },
];

const solidColors = [
    { name: 'primary', class: 'input-spin-solid-primary', count: ref(1) },
    { name: 'purple', class: 'input-spin-solid-purple', count: ref(1) },
    { name: 'green', class: 'input-spin-solid-green', count: ref(1) },
    { name: 'orange', class: 'input-spin-solid-orange', count: ref(23) },
    { name: 'yellow', class: 'input-spin-solid-yellow', count: ref(10) },
    { name: 'sky', class: 'input-spin-solid-sky', count: ref(5) },
];

const boxColors = [
    { name: 'primary', count: ref(1), buttonClassMinus: 'text-gray-500 dark:text-dark-500 hover:text-primary-500 dark:hover:text-primary-500 bg-transparent', buttonClassPlus: 'text-gray-500 dark:text-dark-500 hover:text-primary-500 dark:hover:text-primary-500 bg-transparent' },
    { name: 'primarySolid', count: ref(1), buttonClassMinus: 'text-primary-500 rounded-md bg-primary-500/20 hover:text-primary-700', buttonClassPlus: 'text-primary-500 rounded-md bg-primary-500/20 hover:text-primary-700' },
    { name: 'purple', count: ref(1), buttonClassMinus: 'text-purple-500 rounded-md bg-purple-500/20 hover:text-purple-700', buttonClassPlus: 'text-purple-500 rounded-md bg-purple-500/20 hover:text-purple-700' },
    { name: 'green', count: ref(1), buttonClassMinus: 'text-green-200 rounded-md bg-green-500 hover:text-white', buttonClassPlus: 'text-green-200 rounded-md bg-green-500 hover:text-white' },
    { name: 'pink', count: ref(1), buttonClassMinus: 'text-pink-200 rounded-md bg-pink-500 hover:text-white', buttonClassPlus: 'text-pink-200 rounded-md bg-pink-500 hover:text-white' },
];
const spinners = [
    { count: ref(10) },
    { count: ref(20) },
];

// Methods to handle incrementing and decrementing the count
const increment = (color: { count: { value: number } }) => {
    color.count.value++;
};

const decrement = (color: { count: { value: number } }) => {
    color.count.value--;
};
</script>
<template>
    <PageHeading title="Input Spin" sub-title="Form" />
    <div class="grid grid-cols-12">
        <CardBody title="Basic" :fullWidth="true">
            <div class="flex flex-wrap gap-3">
                <div v-for="color in colors" :key="color.name" class="input-spin-group" :class="color.class">
                    <button @click="decrement(color)" class="input-spin-minus">
                        <Minus class="size-4" data-lucide="minus"></Minus>
                    </button>
                    <input type="text" :value="color.count.value" class="input-spin form-input" readonly />
                    <button @click="increment(color)" class="input-spin-plus">
                        <Plus class="size-4" data-lucide="plus"></Plus>
                    </button>
                </div>
            </div>
        </CardBody>
        <CardBody title="Solid Example" :fullWidth="true">
            <div class="flex flex-wrap gap-3">
                <div v-for="color in solidColors" :key="color.name" class="input-spin-group" :class="color.class">
                    <button @click="decrement(color)" class="input-spin-minus">
                        <Minus class="size-4" data-lucide="minus"></Minus>
                    </button>
                    <input type="text" :value="color.count.value" class="input-spin form-input" readonly />
                    <button @click="increment(color)" class="input-spin-plus">
                        <Plus class="size-4" data-lucide="plus"></Plus>
                    </button>
                </div>
            </div>
        </CardBody>
        <CardBody title="Boxed Example" :fullWidth="true">
            <div class="flex flex-wrap gap-3">
                <div v-for="color in boxColors" :key="color.name"
                    class="flex items-center w-32 p-1 text-center border border-gray-200 rounded-md dark:border-dark-800">
                    <button @click="decrement(color)"
                        :class="['flex items-center justify-center size-8 shrink-0', color.buttonClassMinus]"
                        class="transition duration-200 ease-linear">
                        <Minus class="size-4" data-lucide="minus"></Minus>
                    </button>
                    <input type="text" :value="color.count.value"
                        class="h-8 p-0 text-center !border-0 rounded-none form-input" readonly />
                    <button @click="increment(color)"
                        :class="['flex items-center justify-center size-8 shrink-0', color.buttonClassPlus]"
                        class="transition duration-200 ease-linear">
                        <Plus class="size-4" data-lucide="plus"></Plus>
                    </button>
                </div>
            </div>
        </CardBody>
        <CardBody title="Skin Example" :fullWidth="true">
            <div class="flex flex-wrap gap-3">
                <div v-for="(spinner, index) in spinners" :key="index"
                    class="flex items-center w-20 p-1 text-center border border-gray-200 rounded-md dark:border-dark-800"
                    :class="spinners.length == index + 1 ? 'flex-row-reverse' : ''">
                    <div class="flex flex-col">
                        <button @click="increment(spinner)"
                            class="flex items-center justify-center text-gray-500 transition duration-200 ease-linear dark:text-dark-500 plus hover:text-primary-500 dark:hover:text-primary-500">
                            <ChevronUp class="size-4" data-lucide="chevron-up"></ChevronUp>
                        </button>
                        <button @click="decrement(spinner)"
                            class="flex items-center justify-center text-gray-500 transition duration-200 ease-linear dark:text-dark-500 minus hover:text-primary-500 dark:hover:text-primary-500">
                            <ChevronDown class="size-4" data-lucide="chevron-down"></ChevronDown>
                        </button>
                    </div>
                    <!-- Input Field -->
                    <input type="text" :value="spinner.count.value"
                        class="h-8 p-0 text-center !border-0 rounded-none form-input" readonly />
                </div>
            </div>
        </CardBody>
    </div>
</template>