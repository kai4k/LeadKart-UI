<script setup lang="ts">
import pageHeading from '@/components/common/PageHeading.vue';
import { ref } from 'vue';

// Define an array of progress bars
const progressBars = ref([
    { label: 'Primary', value: 50, color: 'bg-primary-500' },
    { label: 'Purple', value: 33.33, color: 'bg-purple-500' },
    { label: 'Green', value: 66.66, color: 'bg-green-500' },
    { label: 'Red', value: 80, color: 'bg-red-500' },
    { label: 'Yellow', value: 75, color: 'bg-yellow-500' },
]);

// Function to get the appropriate class based on the color
const getBarClass = (value: number) => {
    return progressBars.value.find(progress => progress.value === value)?.color || '';
};

const lightProgressBars = ref([
    { label: 'Primary', value: 50, bgColor: 'bg-sky-500', textColor: 'text-white' },
    { label: 'Pink', value: 66.66, bgColor: 'bg-pink-500', textColor: 'text-white' },
    { label: 'Light', value: 60, bgColor: 'bg-gray-200 dark:bg-dark-800', textColor: 'text-gray-500 dark:text-dark-500' },
    { label: 'Dark', value: 100, bgColor: 'bg-gray-900 dark:bg-dark-300', textColor: 'text-white dark:text-dark-500' },
]);

const softProgressBarsLeft = ref([
    { width: '50%', textColor: 'text-primary-500', bgColor: 'bg-primary-500/20' },
    { width: '33.33%', textColor: 'text-purple-500', bgColor: 'bg-purple-500/20' },
    { width: '66.66%', textColor: 'text-green-500', bgColor: 'bg-green-500/20' },
    { width: '80%', textColor: 'text-red-500', bgColor: 'bg-red-500/20' },
    { width: '75%', textColor: 'text-yellow-500', bgColor: 'bg-yellow-500/20' },
]);

// Define right side soft progress bars
const softProgressBarsRight = ref([
    { width: '50%', textColor: 'text-sky-500', bgColor: 'bg-sky-500/20' },
    { width: '66.66%', textColor: 'text-pink-500', bgColor: 'bg-pink-500/20' },
    { width: '60%', textColor: 'text-gray-500', bgColor: 'bg-gray-500/20 dark:text-dark-500/20' },
]);

const animationProgressBarsLeft = ref([
    { width: 'w-1/2', bgColor: 'bg-primary-500' },
    { width: 'w-1/3', bgColor: 'bg-purple-500' },
    { width: 'w-2/3', bgColor: 'bg-green-500' },
    { width: 'w-4/5', bgColor: 'bg-red-500' },
    { width: 'w-3/4', bgColor: 'bg-yellow-500' },
]);

// Define right side animation progress bars
const animationProgressBarsRight = ref([
    { width: 'w-1/2', bgColor: 'bg-sky-500' },
    { width: 'w-2/3', bgColor: 'bg-pink-500' },
    { width: 'w-3/5', bgColor: 'bg-gray-200' },
    { width: 'w-full', bgColor: 'bg-gray-900' },
]);

const gradientProgressBars = ref([
    { width: '50%', gradientClass: 'bg-gradient-to-r from-primary-500 to-green-500' },
    { width: '33.33%', gradientClass: 'bg-gradient-to-r from-primary-500 to-sky-500 via-sky-600' },
    { width: '40%', gradientClass: 'bg-gradient-to-r from-indigo-500 to-purple-500' },
]);

const sizeProgressBars = ref([
    { width: '50%', height: "progress-1", bgColor: 'bg-primary-500' },
    { width: '50%', height: "progress-2", bgColor: 'bg-primary-500' },
    { width: '50%', height: "progress-3", bgColor: 'bg-primary-500' },
    { width: '50%', height: "progress-4", bgColor: 'bg-primary-500' },
    { width: '50%', height: "progress-5", bgColor: 'bg-primary-500' },
    { width: '50%', height: "progress-6", bgColor: 'bg-primary-500' },
    { width: '50%', height: "progress-7", bgColor: 'bg-primary-500' },
]);

const progressItems = ref([
    { label: 'Project Workforce', percentage: '32.21%', width: '50%', bgColor: 'bg-primary-500' },
    { label: 'Critical Hours', percentage: '64%', width: '64%', bgColor: 'bg-green-500' },
]);
</script>
<template>
    <pageHeading title="Progress Bar" sub-title="UI" />
    <div class="grid grid-cols-12 gap-x-space">
        <div class="col-span-12 card">
            <div class="card-header">
                <h6 class="card-title">Basic Progress Bar</h6>
            </div>
            <div class="card-body">
                <div class="grid grid-cols-12 gap-5">
                    <div class="col-span-12 md:col-span-6">
                        <div class="flex flex-col gap-3">
                            <div v-for="(progress, index) in progressBars" :key="index" class="progress-bar">
                                <div :class="['progress-bar-wrap text-white ', getBarClass(progress.value)]" :style="{ width: progress.value + '%' }">
                                    {{ progress.label }} {{ progress.value }}%
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-12 md:col-span-6">
                        <div class="flex flex-col gap-3">
                            <div v-for="(bar, index) in lightProgressBars" :key="index" class="progress-bar">
                                <div :class="['progress-bar-wrap', bar.bgColor, bar.textColor]" :style="{ width: bar.value + '%' }">
                                    {{ bar.label }} {{ bar.value }}%
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-12 card">
            <div class="card-header">
                <h6 class="card-title">Soft Progress Bar</h6>
            </div>
            <div class="card-body">
                <div class="grid grid-cols-12 gap-5">
                    <div class="col-span-12 md:col-span-6">
                        <div class="flex flex-col gap-3">
                            <div v-for="(bar, index) in softProgressBarsLeft" :key="index" class="progress-bar">
                                <div :class="['progress-bar-wrap', bar.textColor, bar.bgColor]" :style="{ width: bar.width }"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-12 md:col-span-6">
                        <div class="flex flex-col gap-3">
                            <div v-for="(bar, index) in softProgressBarsRight" :key="index" class="progress-bar">
                                <div :class="['progress-bar-wrap', bar.textColor, bar.bgColor]" :style="{ width: bar.width }"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-12 card">
            <div class="card-header">
                <h6 class="card-title">Animation Progress Bar</h6>
            </div>
            <div class="card-body">
                <div class="grid grid-cols-12 gap-5">
                    <div class="col-span-12 md:col-span-6">
                        <div class="flex flex-col gap-3">
                            <div v-for="(bar, index) in animationProgressBarsLeft" :key="index" class="overflow-hidden progress-bar">
                                <div :class="['relative', bar.width, 'text-white', bar.bgColor, 'progress-bar-wrap']">
                                    <div class="progress-animate"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-12 md:col-span-6">
                        <div class="flex flex-col gap-3">
                            <div v-for="(bar, index) in animationProgressBarsRight" :key="index" class="overflow-hidden progress-bar">
                                <div :class="[bar.width, 'text-white', bar.bgColor, 'progress-bar-wrap']">
                                    <div class="progress-animate"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-12 card">
            <div class="card-header">
                <h6 class="card-title">Gradient Progress Bar</h6>
            </div>
            <div class="card-body">
                <div class="flex flex-col gap-3">
                    <div v-for="(bar, index) in gradientProgressBars" :key="index" class="progress-bar">
                        <div :class="['text-white', 'progress-bar-wrap', bar.gradientClass]" :style="{ width: bar.width }"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-12 card">
            <div class="card-header">
                <h6 class="card-title">Sizes Progress Bar</h6>
            </div>
            <div class="card-body">
                <div class="flex flex-col gap-3">
                    <div v-for="(bar, index) in sizeProgressBars" :key="index" :class="[`progress-bar`, bar.height]">
                        <div :class="['text-white', 'progress-bar-wrap', bar.bgColor]" :style="{ width: bar.width }">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-12 card">
            <div class="card-header">
                <h6 class="card-title">Content Progress Bar</h6>
            </div>
            <div class="card-body">
                <div class="flex flex-col gap-3">
                    <div v-for="(item, index) in progressItems" :key="index">
                        <div class="flex items-center gap-3 mb-2">
                            <h6 class="text-xs grow">{{ item.label }}</h6>
                            <h6 class="text-xs font-semibold text-red-500">{{ item.percentage }}</h6>
                        </div>
                        <div class="h-2 progress-bar">
                            <div :class="['text-white h-full ', 'progress-bar-wrap', item.bgColor]" :style="{ width: item.width }"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>