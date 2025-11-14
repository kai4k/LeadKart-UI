<script setup lang="ts">
import PageHeading from '@/components/common/PageHeading.vue';
import ScheduleTable from './ScheduleTable.vue';
import { Blend, BookOpenText, LibraryBig, NotebookText, NotepadTextDashed, Video } from 'lucide-vue-next';
import { ref } from "vue";
const isOpen = ref(true);
// Progress circle
const progress = ref(66);
const percent = ref(34);

// Mock exam type data
const examTypes = ref([
    { name: "All", label: "Total Test", icon: BookOpenText, color: "primary" },
    { name: "General", label: "General Test", icon: LibraryBig, color: "purple" },
    { name: "Formative", label: "Formative Test", icon: NotepadTextDashed, color: "sky" },
    { name: "Summative", label: "Summative Test", icon: NotebookText, color: "green" },
    { name: "Online", label: "Online Test (MCQ)", icon: Video, color: "red" },
    { name: "Rejoining", label: "Rejoining Test", icon: Blend, color: "yellow" },
]);

// Mock filter function
const examTypeFilter = (type: string) => {
    const data: any = {
        All: 18,
        General: 4,
        Formative: 5,
        Summative: 8,
        Online: 1,
        Rejoining: 0,
    };
    return data[type] || 0;
};
</script>
<template>
    <PageHeading title="Schedule" sub-title="Exam" />
    <div v-if="isOpen" class="font-medium text-center ltr:pr-10 rtl:pl-10 alert alert-primary mb-space">
        <span>Today Test: 2 Test and online 1 Test</span>
        <a href="javascript:void(0);" @click="isOpen = false"
            class="absolute text-lg transition duration-200 ease-linear text-primary-400 hover:text-primary-500 ltr:right-5 rtl:left-5 top-2">
            <i class="ri-close-fill"></i>
        </a>
    </div>
    <div class="grid grid-cols-12 gap-x-space">
        <!-- Total Exam Card -->
        <div class="col-span-12 row-span-2 sm:col-span-6 xl:col-span-3 card">
            <div class="card-body">
                <h6 class="mb-5">Total Exam (This month)</h6>
                <div class="relative mx-auto size-36" :style="{ direction: 'ltr' }">
                    <svg class="size-full" width="36" height="36" viewBox="0 0 36 36"
                        xmlns="http://www.w3.org/2000/svg">
                        <circle cx="18" cy="18" r="16" fill="none" class="stroke-current text-sky-500/10"
                            stroke-width="3"></circle>
                        <g class="origin-center transform -rotate-90">
                            <circle cx="18" cy="18" r="16" fill="none" class="stroke-current text-sky-500"
                                stroke-width="3" :stroke-dasharray="100" :stroke-dashoffset="progress"
                                style="transition: stroke-dashoffset 1s ease-out;"></circle>
                        </g>
                    </svg>
                    <!-- Percentage Text -->
                    <div class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 start-1/2">
                        <span class="text-lg font-bold text-center text-gray-800 dark:text-dark-50">{{ percent
                            }}%</span>
                    </div>
                </div>
            </div>
        </div>
        <!-- Other Cards -->
        <div v-for="type in examTypes" :key="type.name" class="relative col-span-12 sm:col-span-6 xl:col-span-3 card">
            <div class="card-body">
                <component :is="type.icon"
                    :class="`absolute top-5 ltr:right-5 rtl:left-5 text-${type.color}-500 fill-${type.color}-500/10 size-6 ${type.icon}`">
                </component>
                <p class="mb-3 text-gray-500 dark:text-dark-500">{{ type.label }}</p>
                <h5>{{ examTypeFilter(type.name) }}</h5>
            </div>
        </div>
    </div>
    <ScheduleTable />
</template>
