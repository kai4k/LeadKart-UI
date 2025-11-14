<script setup lang="ts">
import { ref } from 'vue';
import PageHeading from '@/components/common/PageHeading.vue';
import { Clipboard, MoveRight, Trash2 } from 'lucide-vue-next';
// Define the type for links
interface Link {
    id: number;
    text: string;
    url: string;
    class: string;
}

// Create a reactive array of links
const basicLinks = ref<Link[]>([
    { id: 1, text: 'Basic Links', url: '#!', class: 'link link-primary' },
    { id: 2, text: 'Basic Links', url: '#!', class: 'text-gray-800 link dark:text-dark-50 hover:text-primary-500 dark:hover:text-primary-500' },

])
const links = ref<Link[]>([
    { id: 1, text: 'Basic Underline Links', url: '#!', class: 'link link-primary' },
    { id: 2, text: 'Basic Underline Links', url: '#!', class: 'text-gray-800 link dark:text-dark-50 hover:text-primary-500 dark:hover:text-primary-500' },
]);

const hoverLinks = ref<Link[]>([
    { id: 1, text: 'hover Underline Links', url: '#!', class: 'link-primary hover:underline' },
    { id: 2, text: 'Hover Underline Links', url: '#!', class: 'text-gray-800 dark:text-dark-50 hover:text-primary-500 dark:hover:text-primary-500 hover:underline' },
]);

const noUnderlineLinks = ref<Link[]>([
    { id: 1, text: 'hover No Underline Links', url: '#!', class: 'link-primary hover:no-underline' },
    { id: 2, text: 'hover No Underline Links', url: '#!', class: 'text-gray-800 dark:text-dark-50 hover:text-primary-500 hover:no-underline' },
]);

const coloredLinks = ref<Link[]>([
    { id: 1, text: 'Primary Basic Links', url: '#!', class: 'link-primary' },
    { id: 2, text: 'Purple Basic Links', url: '#!', class: 'link-purple' },
    { id: 3, text: 'Green Basic Links', url: '#!', class: 'link-green' },
    { id: 4, text: 'Red Basic Links', url: '#!', class: '!link-red' },
    { id: 5, text: 'Yellow Basic Links', url: '#!', class: '!link-yellow' },
    { id: 6, text: 'Sky Basic Links', url: '#!', class: 'link-sky' },
    { id: 7, text: 'Pink Basic Links', url: '#!', class: '!link-pink' },
    { id: 8, text: 'Indigo Basic Links', url: '#!', class: '!link-indigo' },
    { id: 9, text: 'Orange Basic Links', url: '#!', class: '!link-orange' },
]);

const underlineColoredLinks = ref<Link[]>([
    { id: 1, text: 'Primary Basic Links', url: '#!', class: 'link-primary' },
    { id: 2, text: 'Purple Basic Links', url: '#!', class: 'link-purple' },
    { id: 3, text: 'Green Basic Links', url: '#!', class: 'link-green' },
    { id: 4, text: 'Red Basic Links', url: '#!', class: 'link-red' },
    { id: 5, text: 'Yellow Basic Links', url: '#!', class: 'link-yellow' },
    { id: 6, text: 'Sky Basic Links', url: '#!', class: 'link-sky' },
    { id: 7, text: 'Pink Basic Links', url: '#!', class: 'link-pink' },
    { id: 8, text: 'Indigo Basic Links', url: '#!', class: 'link-indigo' },
    { id: 9, text: 'Orange Basic Links', url: '#!', class: 'link-orange' },
]);

const hoverColoredLinks = ref<Link[]>([
    { id: 1, text: 'Primary Basic Links', url: '#!', class: 'link-line-primary' },
    { id: 2, text: 'Purple Basic Links', url: '#!', class: 'link-line-purple' },
    { id: 3, text: 'Green Basic Links', url: '#!', class: 'link-line-green' },
    { id: 4, text: 'Red Basic Links', url: '#!', class: 'link-line-red' },
    { id: 5, text: 'Yellow Basic Links', url: '#!', class: 'link-line-yellow' },
    { id: 6, text: 'Sky Basic Links', url: '#!', class: 'link-line-sky' },
    { id: 7, text: 'Pink Basic Links', url: '#!', class: 'link-line-pink' },
    { id: 8, text: 'Indigo Basic Links', url: '#!', class: 'link-line-indigo' },
    { id: 9, text: 'Orange Basic Links', url: '#!', class: 'link-line-orange' },
]);


interface IconLink {
    id: number;
    text: string;
    url: string;
    class: string;
    iconCss?: string;
    iconRight?: string | unknown;  // Optional icon for right
    iconLeft?: string | unknown;   // Optional icon for left
}
const iconLinks = ref<IconLink[]>([
    { id: 1, text: 'Read More', url: '#!', class: 'link link-primary', iconCss: "", iconLeft: MoveRight },
    { id: 2, text: 'Delete', url: '#!', class: 'link link-red', iconCss: "group-hover/item:animate-bounce", iconRight: Trash2 },
    { id: 3, text: 'Copy Content', url: '#!', class: 'link link-primary', iconCss: "group-hover/item:-translate-y-0.5", iconRight: Clipboard },
]);
</script>
<template>
    <PageHeading title="UI Links" sub-title="UI" />
    <div class="grid grid-cols-12 gap-x-space">
        <div class="col-span-12 md:col-span-6 card">
            <div class="card-header">
                <h6 class="card-title">Basic Links</h6>
            </div>
            <div class="flex flex-wrap items-center gap-3 card-body">
                <a v-for="link in basicLinks" :key="link.id" :href="link.url" class="link" :class="link.class">
                    {{ link.text }}
                </a>
            </div>
        </div>
        <div class="col-span-12 md:col-span-6 card">
            <div class="card-header">
                <h6 class="card-title">Underline Links</h6>
            </div>
            <div class="flex flex-wrap items-center gap-3 card-body">
                <a v-for="link in links" :key="link.id" :href="link.url" class="underline link" :class="link.class">
                    {{ link.text }}
                </a>
            </div>
        </div>
        <div class="col-span-12 md:col-span-6 card">
            <div class="card-header">
                <h6 class="card-title">Underline Hover Links</h6>
            </div>
            <div class="flex flex-wrap items-center gap-3 card-body">
                <a v-for="link in hoverLinks" :key="link.id" :href="link.url" class="no-underline link" :class="link.class">
                    {{ link.text }}
                </a>
            </div>
        </div>
        <div class="col-span-12 md:col-span-6 card">
            <div class="card-header">
                <h6 class="card-title">Hover Links</h6>
            </div>
            <div class="flex flex-wrap items-center gap-3 card-body">
                <a v-for="link in noUnderlineLinks" :key="link.id" :href="link.url" class="underline link" :class="link.class">
                    {{ link.text }}
                </a>
            </div>
        </div>
        <div class="col-span-12 md:col-span-4 card">
            <div class="card-header">
                <h6 class="card-title">Colored Links</h6>
            </div>
            <div class="flex flex-col gap-3 card-body">
                <a v-for="link in coloredLinks" :key="link.id" :href="link.url" class="link" :class="link.class">
                    {{ link.text }}
                </a>
            </div>
        </div>
        <div class="col-span-12 md:col-span-4 card">
            <div class="card-header">
                <h6 class="card-title">Underline Colored Links</h6>
            </div>
            <div class="flex flex-col gap-3 card-body">
                <a v-for="link in underlineColoredLinks" :key="link.id" :href="link.url" class="underline link" :class="link.class">
                    {{ link.text }}
                </a>
            </div>
        </div>
        <div class="col-span-12 md:col-span-4 card">
            <div class="card-header">
                <h6 class="card-title">Underline Hover Colored Links</h6>
            </div>
            <div class="flex flex-col gap-3 card-body">
                <a v-for="link in hoverColoredLinks" :key="link.id" :href="link.url" class="link" :class="link.class">
                    {{ link.text }}
                </a>
            </div>
        </div>
        <div class="col-span-12 md:col-span-12 card">
            <div class="card-header">
                <h6 class="card-title">Icon with Links</h6>
            </div>
            <div class="flex items-center gap-4 card-body">
                <a v-for="link in iconLinks" :key="link.id" :href="link.url" :class="link.class" class="group/item">
                    <component :is="link.iconRight" class="inline-block w-5 transition duration-200 ease-linear size-4" :class="link.iconCss" /> {{ link.text }}
                    <component :is="link.iconLeft" class="w-5 inline-block rtl:hidden transition duration-200 ease-linear size-4 group-hover/item:translate-x-0.5" />
                </a>
            </div>
        </div>
    </div>

</template>