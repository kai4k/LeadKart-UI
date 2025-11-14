<script setup lang="ts">
import { ref } from 'vue';
import pageHeading from '@/components/common/PageHeading.vue';
import { RiCloseFill } from 'vue-remix-icons';
interface Badge {
    text: string;
    color: string;
}

const baseBadge = ref<Badge[]>([
    { text: 'Primary', color: 'badge-primary' },
    { text: 'Purple', color: 'badge-purple' },
    { text: 'Green', color: 'badge-green' },
    { text: 'Red', color: 'badge-red' },
    { text: 'Yellow', color: 'badge-yellow' },
    { text: 'Sky', color: 'badge-sky' },
    { text: 'Pink', color: 'badge-pink' },
    { text: 'Indigo', color: 'badge-indigo' },
    { text: 'Orange', color: 'badge-orange' },
    { text: 'Light', color: 'badge-gray' },
]);

const outlineBadge = ref<Badge[]>([
    { text: 'Primary', color: 'badge-outline-primary' },
    { text: 'Purple', color: 'badge-outline-purple' },
    { text: 'Green', color: 'badge-outline-green' },
    { text: 'Red', color: 'badge-outline-red' },
    { text: 'Yellow', color: 'badge-outline-yellow' },
    { text: 'Sky', color: 'badge-outline-sky' },
    { text: 'Pink', color: 'badge-outline-pink' },
    { text: 'Indigo', color: 'badge-outline-indigo' },
    { text: 'Orange', color: 'badge-outline-orange' },
    { text: 'Dark', color: 'badge-outline-gray' },
    { text: 'Light', color: 'bg-transparent text-gray-500 border-gray-200 dark:border-dark-800 dark:text-dark-500' },
]);

const softBadge = ref<Badge[]>([
    { text: 'Primary', color: 'badge-sub-primary' },
    { text: 'Purple', color: 'badge-sub-purple' },
    { text: 'Green', color: 'badge-sub-green' },
    { text: 'Red', color: 'badge-sub-red' },
    { text: 'Yellow', color: 'badge-sub-yellow' },
    { text: 'Sky', color: 'badge-sub-sky' },
    { text: 'Pink', color: 'badge-sub-pink' },
    { text: 'Indigo', color: 'badge-sub-indigo' },
    { text: 'Orange', color: 'badge-sub-orange' },
    { text: 'Dark', color: 'bg-gray-200 text-gray-800 border-gray-200 dark:border-dark-800 dark:text-dark-50 dark:bg-dark-850' },
    { text: 'Light', color: 'badge-sub-gray' },
]);

const solidBadge = ref<Badge[]>([
    { text: 'Primary', color: 'badge-solid-primary' },
    { text: 'Purple', color: 'badge-solid-purple' },
    { text: 'Green', color: 'badge-solid-green' },
    { text: 'Red', color: 'badge-solid-red' },
    { text: 'Yellow', color: 'badge-solid-yellow' },
    { text: 'Sky', color: 'badge-solid-sky' },
    { text: 'Pink', color: 'badge-solid-pink' },
    { text: 'Indigo', color: 'badge-solid-indigo' },
    { text: 'Orange', color: 'badge-solid-orange' },
    { text: 'Dark', color: 'badge-solid-gray' },
    { text: 'Light', color: 'bg-gray-200 text-gray-500 border-gray-200 dark:bg-dark-850 dark:border-dark-800 dark:text-dark-500' },
]);


const closeBadge = ref<Badge[]>([
    { text: 'Primary', color: 'btn-sub-primary' },
    { text: 'Purple', color: 'btn-sub-purple' },
    { text: 'Green', color: 'btn-sub-green' },
    { text: 'Red', color: 'btn-sub-red' },
    { text: 'Yellow', color: 'btn-sub-yellow' },
    { text: 'Sky', color: 'btn-sub-sky' },
    { text: 'Pink', color: 'btn-sub-pink' },
    { text: 'Dark', color: 'bg-gray-200 text-gray-800 border-gray-200 dark:border-dark-800 dark:text-dark-50 dark:bg-dark-850' },
    { text: 'Light', color: 'btn-sub-gray' },
]);
const removeBadge = (index: number) => {
    closeBadge.value.splice(index, 1);
};

const squareBadge = ref<Badge[]>([
    { text: '2', color: 'badge-sub-primary' },
    { text: '3', color: 'badge-sub-purple' },
    { text: '5', color: 'badge-outline-green' },
    { text: '4', color: 'badge-sub-red' },
    { text: '3', color: 'badge-solid-primary' },
    { text: '2', color: 'badge-primary' },
    { text: '1', color: 'badge-sub-pink' },
    { text: '2', color: 'bg-gray-200 text-gray-800 border-gray-200 dark:bg-dark-850 dark:border-dark-800 dark:text-dark-50' },
    { text: '3', color: 'badge-sub-gray' },
]);

const roundedBadge = ref<Badge[]>([
    { text: 'Primary', color: 'badge-solid-primary' },
    { text: 'Purple', color: 'badge-sub-purple' },
    { text: 'Green', color: 'badge-outline-green' },
    { text: 'Red', color: 'badge-sub-red' },
]);

interface buttonBadge {
    count: number;
    color: string;
    position: string;
}

const buttonBadges = ref<buttonBadge[]>([
    { count: 2, color: 'badge-solid-red', position: '-top-2 -right-2' },
    { count: 2, color: 'badge-solid-green', position: '-right-2 -bottom-2' },
    { count: 2, color: 'badge-solid-yellow', position: '-top-2 -left-2' },
    { count: 2, color: 'badge-solid-sky', position: '-bottom-2  -left-2' },

]);

interface insideBadge {
    count: number;
    color: string;
}
const insideButtonBadges = ref<insideBadge[]>([
    { count: 2, color: 'badge-solid-red' },
    { count: 2, color: 'badge-solid-green' },
]);
</script>
<template>
    <pageHeading title="Badge" subTitle="UI" />
    <div class="grid grid-cols-12 gap-x-space">
        <div class="col-span-12 card">
            <div class="card-header">
                <h6 class="card-title">Base Badge</h6>
            </div>
            <div class="card-body">
                <div class="flex flex-wrap items-center gap-3">
                    <div class="flex flex-wrap gap-4">
                        <span v-for="(badge, index) in baseBadge" :key="index" :class="badge.color + ' badge'">{{
                            badge.text }}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-12 card">
            <div class="card-header">
                <h6 class="card-title">Outline Badge</h6>
            </div>
            <div class="card-body">
                <div class="flex flex-wrap items-center gap-3">
                    <div class="flex flex-wrap gap-4">
                        <span v-for="(badge, index) in outlineBadge" :key="index" :class="badge.color + ' badge'">{{
                            badge.text }}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-12 card">
            <div class="card-header">
                <h6 class="card-title">Soft Badge</h6>
            </div>
            <div class="card-body">
                <div class="flex flex-wrap items-center gap-3">
                    <div class="flex flex-wrap gap-4">
                        <span v-for="(badge, index) in softBadge" :key="index" :class="badge.color + ' badge'">{{
                            badge.text }}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-12 card">
            <div class="card-header">
                <h6 class="card-title">Solid Badge</h6>
            </div>
            <div class="card-body">
                <div class="flex flex-wrap items-center gap-3">
                    <div class="flex flex-wrap gap-4">
                        <span v-for="(badge, index) in solidBadge" :key="index" :class="badge.color + ' badge'">{{
                            badge.text }}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-12 card">
            <div class="card-header">
                <h6 class="card-title">Close Badge</h6>
            </div>
            <div class="card-body">
                <div class="flex flex-wrap items-center gap-3">
                    <div class="flex flex-wrap gap-4">
                        <span v-for="(badge, index) in closeBadge" :key="index"
                            :class="badge.color + ' badge flex items-center'">
                            <span>{{ badge.text }}</span>
                            <a href="#!" @click.prevent="removeBadge(index)" class="align-bottom">
                                <RiCloseFill class="w-2 ltr:ml-1 rtl:mr-1 ri-close-fill" />
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-12 lg:col-span-6 card">
            <div class="card-header">
                <h6 class="card-title">Square Badge</h6>
            </div>
            <div class="card-body">
                <div class="flex flex-wrap items-center gap-3">
                    <div class="flex flex-wrap gap-4">
                        <span v-for="(badge, index) in squareBadge" :key="index" :class="badge.color + ' badge-square'">
                            {{ badge.text }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-12 lg:col-span-6 card">
            <div class="card-header">
                <h6 class="card-title">Rounded Badge</h6>
            </div>
            <div class="card-body">
                <div class="flex flex-wrap items-center gap-3">
                    <div class="flex flex-wrap gap-4">
                        <span v-for="(badge, index) in roundedBadge" :key="index"
                            :class="badge.color + ' inline-block px-1.5 py-0.5 rounded-full text-11 border font-medium'">
                            {{ badge.text }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-12 lg:col-span-6 card">
            <div class="card-header">
                <h6 class="card-title">Button Badge</h6>
            </div>
            <div class="card-body">
                <div class="flex flex-wrap items-center gap-6">
                    <div v-for="(badge, index) in buttonBadges" :key="index" class="relative">
                        <button type="button" class="btn btn-primary">Notification</button>
                        <span class="`!border-2 !border-white p-0 rounded-full flex items-center justify-center dark:!border-dark-900 badge badge-square `"
                            :class="`absolute ${badge.color} ${badge.position}`">
                            {{ badge.count }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-12 lg:col-span-6 card">
            <div class="card-header">
                <h6 class="card-title">Inside Button Badge</h6>
            </div>
            <div class="card-body">
                <div class="flex flex-wrap items-center gap-4">
                    <button v-for="(badge, index) in insideButtonBadges" :key="index" type="button"
                        class="btn btn-primary">
                        Notification
                        <span :class="`rounded-full badge badge-square ${badge.color}`">{{ badge.count }}</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>