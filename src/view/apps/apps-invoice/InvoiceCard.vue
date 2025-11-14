<script setup lang="ts">
import Apexchart from '@/components/common/Apexchart.vue';
import { CircleAlert, CircleCheckBig, Hourglass, X } from 'lucide-vue-next';
import { invoiceStatusChart } from './list-view/list-data';
import RecentMenuList from '@/view/dashboards/recent-menu-list.vue';
// Data for the cards
const cards = [
    {
        count: 16,
        percentage: 35.56,
        label: "Paid Invoice",
        icon: CircleCheckBig,
        iconClass: "relative text-green-500 stroke-1 size-9 fill-green-500/10",
        iconContainerClass: "flex items-center justify-center mb-4 size-16 bg-gradient-to-t from-green-500/10 rounded-modern",
        classes: "col-span-12 md:col-span-6 xl:col-span-4 2xl:col-span-2 card",
    },
    {
        count: 8,
        percentage: 17.78,
        label: "Unpaid Invoice",
        icon: CircleAlert,
        iconClass: "relative text-pink-500 stroke-1 size-9 fill-pink-500/10",
        iconContainerClass: "flex items-center justify-center mb-4 size-16 bg-gradient-to-t from-pink-500/10 rounded-modern",
        classes: "col-span-12 md:col-span-6 xl:col-span-4 2xl:col-span-2 card",
    },
    {
        count: 12,
        percentage: 26.67,
        label: "Pending Invoice",
        icon: Hourglass,
        iconClass: "relative text-yellow-500 stroke-1 size-9 fill-yellow-500/10",
        iconContainerClass: "flex items-center justify-center mb-4 size-16 bg-gradient-to-t from-yellow-500/10 rounded-modern",
        classes: "col-span-12 md:col-span-6 xl:col-span-4 2xl:col-span-2 card",
    },
    {
        count: 9,
        percentage: 20,
        label: "Overdue Invoice",
        icon: X,
        iconClass: "relative text-red-500 stroke-1 size-9 fill-red-500/10",
        iconContainerClass: "flex items-center justify-center mb-4 size-16 bg-gradient-to-t from-red-500/10 rounded-modern",
        classes: "col-span-12 md:col-span-6 xl:col-span-4 2xl:col-span-2 card",
    },
];

const titleName = () => 'Last Week'
</script>
<template>
    <div class="grid grid-cols-12 gap-x-space">
        <div v-for="(card, index) in cards" :key="index" :class="card.classes">
            <div class="card-body">
                <div :class="card.iconContainerClass">
                    <component :is="card.icon" :class="card.iconClass"></component>
                </div>
                <h5 class="mb-1">{{ card.count }}</h5>
                <p class="mb-4">{{ card.label }}</p>
                <p class="text-gray-500 dark:text-dark-500">
                    <span class="align-bottom badge badge-green">
                        {{ card.percentage.toFixed(2) }}%
                    </span>
                    This month
                </p>
            </div>
        </div>
        <div class="col-span-12 md:col-span-6 xl:col-span-4 2xl:col-span-4 card">
            <div class="flex items-center gap-3 card-header">
                <h6 class="card-title grow">Invoice Status</h6>
                <RecentMenuList :list="['Weekly', 'Monthly', 'Yearly']" :title="titleName" className="flex px-2 py-1 text-xs border-gray-200 dark:border-dark-800 link link-red border rounded-md" extraClass="zero-position" />
            </div>
            <div class="card-body">
                <Apexchart :options="invoiceStatusChart.chartOptions" :series="invoiceStatusChart.series" :height="110" class="!min-h-full" />
            </div>
        </div>
    </div>
</template>