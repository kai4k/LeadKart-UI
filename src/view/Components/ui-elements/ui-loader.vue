<script setup lang="ts">
import pageHeading from '@/components/common/PageHeading.vue';
import { ref } from 'vue';
import { RiFacebookLine, RiNotification2Line } from 'vue-remix-icons';
// Array of spin loader objects with descriptive names and classes
const spinLoaders = ref([
    { name: 'Primary', class: 'text-primary-500' },
    { name: 'Purple', class: 'text-purple-500' },
    { name: 'Green', class: 'text-green-500' },
    { name: 'Red', class: 'text-red-500' },
    { name: 'Yellow', class: 'text-yellow-500' },
    { name: 'Sky', class: 'text-sky-500' },
    { name: 'Pink', class: 'text-pink-500' },
    { name: 'Gray', class: 'text-gray-500' },
    { name: 'Light Gray', class: 'text-gray-200 border-opacity-15' },
]);

const Loaders = ref([
    { class: 'loader-primary' },
    { class: 'loader-purple' },
    { class: 'loader-green' },
    { class: 'loader-red' },
    { class: 'loader-yellow' },
    { class: 'loader-sky' },
    { class: 'loader-pink' },
    { class: 'loader-gray' },
    { class: 'loader-gray border-opacity-10' },
]);

const pulseLoaders = ref([
    { class: 'pulse-primary' },
    { class: 'pulse-purple' },
    { class: 'pulse-green' },
    { class: 'pulse-red' },
    { class: 'pulse-yellow' },
    { class: 'pulse-sky' },
    { class: 'pulse-pink' },
    { class: 'pulse-gray' },
    { class: 'pulse-gray bg-opacity-10' },
]);


const gradientLoaders = ref([
    { classes: 'border-primary-500 border-l-green-500 border-r-red-500 border-b-yellow-500' },
    { classes: 'border-primary-500 border-l-pink-500 border-r-sky-500 border-b-purple-500' },
    { classes: 'border-primary-200 border-l-green-200 border-r-red-200 border-b-yellow-200' },
]);

const buttons = ref([
    {
        label: 'Facebook',
        icon: RiFacebookLine,
        class: 'bg-primary-500 border-primary-500 hover:bg-primary-600 focus:bg-primary-600',
        notifications: [{ class: 'bg-red-500' }, { class: 'bg-red-500' }]
    },
    {
        label: 'Notification',
        icon: RiNotification2Line,
        class: 'bg-purple-500 border-purple-500 hover:bg-purple-600 focus:bg-purple-600',
        notifications: [{ class: 'bg-green-500' }, { class: 'bg-green-500' }]
    },
]);

const spinners = ref([
    { borderClass: 'border-primary-500' },
    { borderClass: 'border-purple-500' },
    { borderClass: 'border-green-500' },
    { borderClass: 'border-red-500' },
]);

const loadingDots = ref([
    ['gray-800', 'gray-800', 'gray-800'],
    ['primary-500', 'primary-500', 'primary-500'],
    ['green-500', 'primary-500', 'purple-500'],
]);

const getAnimationDelay = (index: number) => {
    return {
        animationDelay: `${-0.3 + index * 0.15}s`,
    };
};
</script>
<template>
    <pageHeading title="Loader" sub-title="UI" />
    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-space">
        <div class="card">
            <div class="card-header">
                <h6 class="card-title">Spin Loader</h6>
            </div>
            <div class="card-body">
                <div class="flex flex-wrap items-center gap-6">
                    <div v-for="(loader, index) in spinLoaders" :key="index"
                        class="animate-spin inline-block size-8 border-[2px] border-current border-t-transparent rounded-full"
                        :class="`${loader.class} dark:text-white`" role="status" aria-label="loading">
                    </div>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">
                <h6 class="card-title">Modern Spin Loader</h6>
            </div>
            <div class="card-body">
                <div class="flex flex-wrap items-center gap-4">
                    <span v-for="(loader, index) in Loaders" :key="index" class="spin modern-spin" :class="loader.class"
                        role="status" aria-label="loading"></span>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">
                <h6 class="card-title">Bounce Loader</h6>
            </div>
            <div class="card-body">
                <div class="flex flex-wrap items-center gap-4">
                    <span v-for="(loader, index) in Loaders" :key="index" class="spin animate-bounce"
                        :class="loader.class" role="status" aria-label="loading"></span>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">
                <h6 class="card-title">Ping Loader</h6>
            </div>
            <div class="card-body">
                <div class="flex flex-wrap items-center gap-6">
                    <span v-for="(loader, index) in Loaders" :key="index" class="rounded-full spin size-4 animate-ping"
                        :class="loader.class" role="status" aria-label="loading"></span>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">
                <h6 class="card-title">Pulse Loader</h6>
            </div>
            <div class="card-body">
                <div class="flex flex-wrap items-center gap-4">
                    <span v-for="(loader, index) in pulseLoaders    " :key="index" class="spin animate-pulse"
                        :class="loader.class" role="status" aria-label="loading"></span>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">
                <h6 class="card-title">Gradient Loader</h6>
            </div>
            <div class="card-body">
                <div class="flex flex-wrap items-center gap-4">
                    <span v-for="(loader, index) in gradientLoaders" :key="index"
                        class="inline-block border-4 rounded-full size-8 animate-spin" :class="loader.classes"
                        role="status" aria-label="loading"></span>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">
                <h6 class="card-title">Button</h6>
            </div>
            <div class="card-body">
                <div class="flex flex-wrap gap-4">
                    <div class="relative" v-for="(button, index) in buttons" :key="index">
                        <button :class="button.class" class="flex items-center gap-2 text-white btn">
                            <component :is="button.icon" class="w-4" /> {{ button.label }}
                        </button>
                        <div v-for="(notification, nIndex) in button.notifications" :key="nIndex"
                            class="absolute top-0 right-0 w-3 h-3 -mt-1 -mr-1 rounded-full animate-ping"
                            :class="notification.class"></div>
                        <div v-for="(notification, nIndex) in button.notifications" :key="nIndex + 'static'"
                            class="absolute top-0 right-0 w-3 h-3 -mt-1 -mr-1 rounded-full" :class="notification.class">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                <h6 class="card-title">Oval Shaped Spinner</h6>
            </div>
            <div class="flex flex-wrap items-center gap-3 card-body">
                <div v-for="(spinner, index) in spinners" :key="index" class="relative">
                    <div class="border-t-4 border-b-4 border-gray-200 rounded-full dark:border-dark-800 size-8"></div>
                    <div class="absolute top-0 left-0 border-t-4 border-b-4 rounded-full size-8"
                        :class="spinner.borderClass + ' animate-spin'"></div>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                <h6 class="card-title">Loading dots</h6>
            </div>
            <div class="flex flex-wrap items-center gap-3 card-body">
                <div v-for="(colorSet, index) in loadingDots" :key="index"
                    class='flex items-center justify-center space-x-1'>
                    <span class='sr-only'>Loading...</span>
                    <div v-for="(color, dotIndex) in colorSet" :key="dotIndex"
                        class='rounded-full size-3 animate-bounce' :class="`bg-${color}`"
                        :style="getAnimationDelay(dotIndex)"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>