<script setup lang="ts">
import { Ellipsis } from 'lucide-vue-next';
import RecentMenuList from '../../recent-menu-list.vue';

defineProps<{
    title: string;
    value: string;
    change: string;
}>();
</script>
<template>
    <div class="col-span-12 md:col-span-6 xl:col-span-2 card">
        <div class="card-body">
            <RecentMenuList :title="Ellipsis" :showArrow="false" className="" mainCss="float-end"
                :list="['Weekly', 'Monthly', 'Yearly']" extraClass="set-position" />
            <p class="text-gray-500 dark:text-dark-500">{{ title }}</p>
            <h5 class="mt-6 mb-1">{{ value }}</h5>
            <p class="text-gray-500 dark:text-dark-500">
                <span class="text-green-500">{{ change }}</span> From last week
            </p>
        </div>
    </div>
</template>