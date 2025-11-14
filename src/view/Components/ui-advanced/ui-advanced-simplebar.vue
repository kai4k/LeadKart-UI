<script setup lang="ts">
import pageHeading from '@/components/common/PageHeading.vue';
import simplebar from 'simplebar-vue';
import { ref } from 'vue';

const sections = ref([
    {
        title: 'User Management',
        items: [
            'Ability to view all users registered in the system.',
            'Options to add, edit, or delete users.',
            'Permissions management to control access levels for different users or user groups.',
            'User activity logs to track user actions within the system.',
        ],
    },
    {
        title: 'Content Management',
        items: [
            'Interface to manage various types of content (e.g., articles, products, events).',
            'CRUD (Create, Read, Update, Delete) operations for content items.',
            'Workflow management for content approval processes if necessary.',
            'Content categorization and tagging features.',
        ],
    },
]);
</script>
<template>
    <pageHeading title="Simplebar" sub-title="UI Advanced" />
    <div class="grid grid-cols-12 gap-x-space">
        <div class="col-span-12 md:col-span-6 card">
            <div class="card-header">
                <h6 class="card-title">Default Simplebar</h6>
            </div>
            <div class="card-body">
                <simplebar class="h-64 -mx-space px-space">
                    <p class="mb-3 text-gray-500 dark:text-dark-500">
                        Creating an admin dashboard requires careful consideration of the specific needs and
                        functionalities of the system you're administering. Here's a general outline of the content and
                        features you might include in an admin dashboard:
                    </p>

                    <div v-for="(section, index) in sections" :key="index">
                        <h6 class="mb-2">{{ section.title }}:</h6>
                        <ul class="flex flex-col gap-2 mb-3 text-gray-500 list-disc list-inside dark:text-dark-500">
                            <li v-for="(item, itemIndex) in section.items" :key="itemIndex">{{ item }}</li>
                        </ul>
                    </div>
                </simplebar>
            </div>
        </div>
        <div class="col-span-12 md:col-span-6 card">
            <div class="card-header">
                <h6 class="card-title">Primary Simplebar</h6>
            </div>
            <div class="card-body">
                <simplebar class="h-64 -mx-space px-space" data-simplebar data-simplebar-scroll="primary">
                    <p class="mb-3 text-gray-500 dark:text-dark-500">
                        Creating an admin dashboard requires careful consideration of the specific needs and
                        functionalities of the system you're administering. Here's a general outline of the content and
                        features you might include in an admin dashboard:
                    </p>

                    <div v-for="(section, index) in sections" :key="index">
                        <h6 class="mb-2">{{ section.title }}</h6>
                        <ul class="flex flex-col gap-2 mb-3 text-gray-500 list-disc list-inside dark:text-dark-500">
                            <li v-for="(item, itemIndex) in section.items" :key="itemIndex">{{ item }}</li>
                        </ul>
                    </div>
                </simplebar>
            </div>
        </div>
        <div class="col-span-12 md:col-span-6 xl:col-span-4 card">
            <div class="card-header">
                <h6 class="card-title">Green Simplebar</h6>
            </div>
            <div class="card-body">
                <simplebar class="h-64 -mx-space px-space" data-simplebar data-simplebar-scroll="green">
                    <p class="mb-3 text-gray-500 dark:text-dark-500">
                        Creating an admin dashboard requires careful consideration of the specific needs and
                        functionalities of the system you're administering. Here's a general outline of the content and
                        features you might include in an admin dashboard:
                    </p>

                    <div v-for="(section, index) in sections" :key="index">
                        <h6 class="mb-2">{{ section.title }}</h6>
                        <ul class="flex flex-col gap-2 mb-3 text-gray-500 list-disc list-inside dark:text-dark-500">
                            <li v-for="(item, itemIndex) in section.items" :key="itemIndex">{{ item }}</li>
                        </ul>
                    </div>
                </simplebar>
            </div>
        </div>
        <div class="col-span-12 md:col-span-6 xl:col-span-4 card">
            <div class="card-header">
                <h6 class="card-title">Purple Simplebar</h6>
            </div>
            <div class="card-body">
                <simplebar class="h-64 -mx-space px-space" data-simplebar data-simplebar-scroll="purple">
                    <p class="mb-3 text-gray-500 dark:text-dark-500">
                        Creating an admin dashboard requires careful consideration of the specific needs and
                        functionalities of the system you're administering. Here's a general outline of the content and
                        features you might include in an admin dashboard:
                    </p>

                    <div v-for="(section, index) in sections" :key="index">
                        <h6 class="mb-2">{{ section.title }}</h6>
                        <ul class="flex flex-col gap-2 mb-3 text-gray-500 list-disc list-inside dark:text-dark-500">
                            <li v-for="(item, itemIndex) in section.items" :key="itemIndex">{{ item }}</li>
                        </ul>
                    </div>
                </simplebar>
            </div>
        </div>
        <div class="col-span-12 md:col-span-6 xl:col-span-4 card">
            <div class="card-header">
                <h6 class="card-title">Yellow Simplebar</h6>
            </div>
            <div class="card-body">
                <simplebar class="h-64 -mx-space px-space" data-simplebar data-simplebar-scroll="yellow">
                    <p class="mb-3 text-gray-500 dark:text-dark-500">
                        Creating an admin dashboard requires careful consideration of the specific needs and
                        functionalities of the system you're administering. Here's a general outline of the content and
                        features you might include in an admin dashboard:
                    </p>

                    <div v-for="(section, index) in sections" :key="index">
                        <h6 class="mb-2">{{ section.title }}</h6>
                        <ul class="flex flex-col gap-2 mb-3 text-gray-500 list-disc list-inside dark:text-dark-500">
                            <li v-for="(item, itemIndex) in section.items" :key="itemIndex">{{ item }}</li>
                        </ul>
                    </div>
                </simplebar>
            </div>
        </div>
        <div class="col-span-12 md:col-span-6 xl:col-span-4 card">
            <div class="card-header">
                <h6 class="card-title">Red Simplebar</h6>
            </div>
            <div class="card-body">
                <simplebar class="h-64 -mx-space px-space" data-simplebar data-simplebar-scroll="red">
                    <p class="mb-3 text-gray-500 dark:text-dark-500">
                        Creating an admin dashboard requires careful consideration of the specific needs and
                        functionalities of the system you're administering. Here's a general outline of the content and
                        features you might include in an admin dashboard:
                    </p>

                    <div v-for="(section, index) in sections" :key="index">
                        <h6 class="mb-2">{{ section.title }}</h6>
                        <ul class="flex flex-col gap-2 mb-3 text-gray-500 list-disc list-inside dark:text-dark-500">
                            <li v-for="(item, itemIndex) in section.items" :key="itemIndex">{{ item }}</li>
                        </ul>
                    </div>
                </simplebar>
            </div>
        </div>
        <div class="col-span-12 md:col-span-6 xl:col-span-4 card">
            <div class="card-header">
                <h6 class="card-title">Sky Simplebar</h6>
            </div>
            <div class="card-body">
                <simplebar class="h-64 -mx-space px-space" data-simplebar data-simplebar-scroll="sky">
                    <p class="mb-3 text-gray-500 dark:text-dark-500">
                        Creating an admin dashboard requires careful consideration of the specific needs and
                        functionalities of the system you're administering. Here's a general outline of the content and
                        features you might include in an admin dashboard:
                    </p>

                    <div v-for="(section, index) in sections" :key="index">
                        <h6 class="mb-2">{{ section.title }}</h6>
                        <ul class="flex flex-col gap-2 mb-3 text-gray-500 list-disc list-inside dark:text-dark-500">
                            <li v-for="(item, itemIndex) in section.items" :key="itemIndex">{{ item }}</li>
                        </ul>
                    </div>
                </simplebar>
            </div>
        </div>
        <div class="col-span-12 md:col-span-6 xl:col-span-4 card">
            <div class="card-header">
                <h6 class="card-title">Pink Simplebar</h6>
            </div>
            <div class="card-body">
                <simplebar class="h-64 -mx-space px-space" data-simplebar data-simplebar-scroll="pink">
                    <p class="mb-3 text-gray-500 dark:text-dark-500">
                        Creating an admin dashboard requires careful consideration of the specific needs and
                        functionalities of the system you're administering. Here's a general outline of the content and
                        features you might include in an admin dashboard:
                    </p>

                    <div v-for="(section, index) in sections" :key="index">
                        <h6 class="mb-2">{{ section.title }}</h6>
                        <ul class="flex flex-col gap-2 mb-3 text-gray-500 list-disc list-inside dark:text-dark-500">
                            <li v-for="(item, itemIndex) in section.items" :key="itemIndex">{{ item }}</li>
                        </ul>
                    </div>
                </simplebar>
            </div>
        </div>
    </div>
</template>