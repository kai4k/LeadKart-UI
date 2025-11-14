<script setup lang="ts">
import { phases } from './roadmap-data';
import { onMounted } from 'vue';
const props = defineProps({
    setTitle: Function
})
onMounted(() => {
    if (props.setTitle) props.setTitle('RoadMap');
});
// Define the data for each phase
</script>
<template>
    <div class="card">
        <div class="card-body">
            <div class="relative before:absolute space-y-6 before:w-2 before:h-[calc(100%_-_5px)] before:bg-gray-100 dark:before:bg-dark-850 ltr:before:left-3.5 rtl:before:right-3.5 before:top-2 before:rounded-md">
                <div class="relative inline-block px-5 py-2 bg-gray-100 rounded-full dark:bg-dark-850 timeline-month">
                    <i class="text-gray-400 ri-circle-fill dark:text-dark-500"></i> Project RoadMap
                </div>

                <!-- Loop through the phases dynamically -->
                <div v-for="(phase, index) in phases" :key="index" class="relative ltr:pl-10 rtl:pr-10 timeline-section before:absolute before:w-7 before:h-px before:bg-gray-200 dark:before:bg-dark-800 before:top-3.5 ltr:before:left-5 rtl:before:right-5 after:absolute after:top-2 after:left-3 rtl:after:right-3 after:bg-primary-500 after:border after:border-gray-200 dark:after:border-dark-800 after:size-3 after:rounded-full">

                    <!-- Phase Title -->
                    <div class="mb-5 timeline-date py-1 px-3.5 bg-gray-100 dark:bg-dark-850 dark:text-dark-500 text-gray-500 relative inline-block rounded-md border border-gray-200 dark:border-dark-800">
                        {{ phase.title }}
                    </div>

                    <!-- Loop through the tasks for the current phase -->
                    <div class="grid grid-cols-1 gap-3">
                        <div v-for="(task, taskIndex) in phase.tasks" :key="taskIndex" class="relative overflow-hidden bg-gray-100 border border-gray-200 rounded-md timeline-box dark:bg-dark-850 dark:border-dark-800">
                            <div class="box-content p-5 bg-gray-100 dark:bg-dark-850">
                                <h6 class="mb-3">{{ task.title }}</h6>
                                <ul class="space-y-2 list-disc list-inside">
                                    <li v-for="(item, itemIndex) in task.items" :key="itemIndex">{{ item }}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>