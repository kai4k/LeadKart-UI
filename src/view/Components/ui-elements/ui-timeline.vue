<script setup lang="ts">
import { RiAddLine, RiPulseLine } from 'vue-remix-icons';
import pageHeading from '@/components/common/PageHeading.vue';
import { ref } from 'vue';

// Timeline items data
const timelineItems = ref([
    { text: 'Dark, Light with RTL Supported', active: true },
    { text: 'Multiple Layouts with Responsive', active: true },
    { text: 'Fully Responsive Design', active: true },
    { text: 'W3C Validated HTML Pages', active: false },
    { text: 'Easy to Customize with Tailwind.config & SCSS', active: false },
    { text: 'Unlimited Template Possibilities', active: false },
]);

interface ChangeLogItem {
    version: string;
    date: string;
    type: string;
    changes: string[];
}

const changelogItems = ref<ChangeLogItem[]>([
    {
        version: 'v1.3.0',
        date: '15 May, 2024',
        type: 'Feature',
        changes: [
            'Added Chat Application',
            'Added Modern Layout',
            'Added Email Application'
        ],
    },
    {
        version: 'v1.2.0',
        date: '05 May, 2024',
        type: 'Feature & Bug',
        changes: [
            'Added Chat Application',
            'Added Modern Layout',
            'Added Email Application'
        ],
    },
    {
        version: 'v1.0.0',
        date: '29 April, 2024',
        type: '',
        changes: [
            'Initial Released'
        ],
    },
]);

</script>
<template>
    <pageHeading title="Timeline" sub-title="UI" />
    <div class="grid grid-cols-12 gap-x-space">
        <div class="col-span-12 md:col-span-6 xl:col-span-4 card">
            <div class="card-header">
                <h6 class="card-title">Basic Timeline</h6>
            </div>
            <div class="card-body ">
                <ul class=" timeline">
                    <li v-for="(item, index) in timelineItems" :key="index"
                        :class="['timeline-primary', { active: item.active }]">
                        {{ item.text }}
                    </li>
                </ul>
            </div>
        </div>
        <div class="col-span-12 md:col-span-6 xl:col-span-4 card">
            <div class="card-header">
                <h6 class="card-title">Square Timeline</h6>
            </div>
            <div class="card-body">
                <ul class="timeline-square timeline">
                    <li v-for="(item, index) in timelineItems" :key="index"
                        :class="['timeline-purple pl-5', { active: item.active }]">
                        {{ item.text }}
                    </li>
                </ul>
            </div>

        </div>
        <div class="col-span-12 xl:col-span-4 card">
            <div class="card-header">
                <h6 class="card-title">Colored Timeline</h6>
            </div>
            <div class="card-body">
                <ul class="timeline-square timeline">
                    <li v-for="(item, index) in timelineItems" :key="index"
                        :class="['timeline-red', { active: item.active }]">
                        {{ item.text }}
                    </li>
                </ul>
            </div>
        </div>
        <div class="col-span-12 card">
            <div class="card-header">
                <h6 class="card-title">ChangeLog Timeline</h6>
            </div>
            <div class="card-body">
                <div class="max-w-xl mx-auto">
                    <ul
                        class="*:before:absolute *:before:w-0.5 *:before:bg-gray-200 dark:*:before:bg-dark-800 *:before:inset-y-0 *:relative rtl:*:before:right-4 ltr:*:before:left-4 flex flex-col *:pb-6">
                        <li v-for="(item, index) in changelogItems" :key="index" class="last:before:hidden last:pb-0">
                            <div class="relative">
                                <div class="relative flex items-start space-x-3 rtl:space-x-reverse">
                                    <div class="relative shrink-0">
                                        <div
                                            class="flex items-center justify-center text-white rounded-full bg-primary-500 size-8 ring-8 ring-white dark:ring-dark-900">
                                            <RiAddLine data-lucide="plus" class="size-4" />
                                        </div>
                                    </div>
                                    <div class="mt-1 grow">
                                        <div class="flex items-center gap-2 mb-2">
                                            <a href="#" class="font-medium">{{ item.version }}</a>
                                            <a href="#"
                                                class="relative flex items-center px-3 py-1 text-xs border border-gray-200 rounded-full dark:border-dark-800"
                                                v-if="item.type">
                                                <div class="absolute flex items-center justify-center shrink-0">
                                                    <span class="size-1.5 rounded-full bg-green-500"
                                                        aria-hidden="true"></span>
                                                </div>
                                                <h6
                                                    class="ltr:ml-3.5 rtl:mr-3.5 text-gray-500 dark:text-dark-500 text-xs">
                                                    {{ item.type }}</h6>
                                            </a>
                                        </div>
                                        <h6 class="mb-3 text-sm text-gray-500 dark:text-dark-500 whitespace-nowrap">{{
                                            item.date }}</h6>
                                        <ul class="list-disc list-inside">
                                            <li v-for="(change, i) in item.changes" :key="i">{{ change }}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
