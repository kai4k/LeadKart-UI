<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import Apexchart from '@/components/common/Apexchart.vue';
import PageHeading from '@/components/common/PageHeading.vue';
import { updateCounter } from '@/view/dashboards/dashboard-page/email/email-data';
import { Activity, Aperture, CircleArrowUp, Ellipsis } from 'lucide-vue-next';
import { adsRevenueChart, columnWithLabels, viewPerformanceChart } from './chart-data';
import { salesRevenueChart } from '@/view/dashboards/dashboard-page/analytics/analytics-data';
import RecentMenuList from '@/view/dashboards/recent-menu-list.vue';
import VueApexCharts from '@/components/common/VueApexCharts.vue';

const adsRevenue = ref(0);
const saleRevenue = ref(0);
const selectDate = ['Last Week', 'Last Month', 'Last year']
onMounted(() => {
    updateCounter(145, adsRevenue)
    updateCounter(145, saleRevenue)
})

</script>
<template>

    <PageHeading title="Charts" sub-title="Widgets" />
    <div class="grid grid-cols-12 gap-x-space">
        <div class="col-span-12 xl:col-span-6 2xl:col-span-4 card">
            <div class="card-body">
                <div class="flex gap-3 mb-3">
                    <div class="flex items-center justify-center text-red-500 border-2 border-red-400 rounded-full ring-1 ring-offset-2 dark:ring-offset-dark-900 ring-red-500/20 size-12">
                        <Activity data-lucide="activity" class="fill-red-500/10"></Activity>
                    </div>
                    <div>
                        <p class="mb-1 text-gray-500 dark:text-dark-500">Ads Revenue</p>
                        <h5>$<span>{{ adsRevenue }}</span>M</h5>
                    </div>
                </div>
                <Apexchart :series="adsRevenueChart.series" :options="adsRevenueChart.chartOptions" :height="140" class="!min-h-full" />
            </div>
        </div>
        <div class="col-span-12 xl:col-span-6 2xl:col-span-4 card">
            <div class="card-body">
                <div class="flex gap-3 mb-3">
                    <div class="flex items-center justify-center border-2 rounded-full text-primary-500 ring-1 ring-offset-2 dark:ring-offset-dark-900 ring-primary-500/20 size-12 border-primary-500">
                        <CircleArrowUp class="fill-primary-500/10"></CircleArrowUp>
                    </div>
                    <div>
                        <p class="mb-1 text-gray-500 dark:text-dark-500">Sales Revenue</p>
                        <h5>$<span>{{ saleRevenue }}</span>M</h5>
                    </div>
                </div>
                <VueApexCharts type="line" :options="salesRevenueChart.chartOptions" :series="salesRevenueChart.series" :height="140" color-classes="[bg-primary-500, bg-primary-100, bg-primary-50, bg-primary-300]" class="!min-h-full" />
            </div>
        </div>
        <div class="col-span-12 xl:col-span-6 2xl:col-span-4 card">
            <div class="card-body">
                <div class="flex gap-3 mb-3">
                    <div class="flex items-center justify-center text-purple-500 border-2 border-purple-400 rounded-full ring-1 ring-offset-2 dark:ring-offset-dark-900 ring-purple-500/20 size-12">
                        <Aperture class="fill-purple-500/10"></Aperture>
                    </div>
                    <div>
                        <p class="mb-1 text-gray-500 dark:text-dark-500">Ads Revenue</p>
                        <h5>$<span>{{ adsRevenue }}</span>M</h5>
                    </div>
                </div>
                <Apexchart :options="adsRevenueChart.chartOptions" :series="adsRevenueChart.series" :height="140" class="!min-h-full" />
            </div>
        </div>
        <div class="col-span-12 md:col-span-6 2xl:col-span-4">
            <div class="card">
                <div class="flex items-center gap-3 card-header">
                    <h6 class="card-title grow">Total Sales</h6>
                    <RecentMenuList :title="() => 'Last week'" :list="['Last Week', 'Last Month', 'Last year']" mainCss="" iconCss="size-4" menuIconCss="size-4" />
                </div>
                <div class="card-body">
                    <VueApexCharts type="bar" :options="columnWithLabels.chartOptions" :series="columnWithLabels.chartSeries" :height="268" class="!min-h-full" color-classes="[bg-primary-500]" />
                </div>
            </div>
        </div>
        <div class="col-span-12 md:col-span-6 2xl:col-span-3">
            <div class="card">
                <div class="flex items-center gap-3 card-header">
                    <h6 class="card-title grow">Total View Performance</h6>
                    <RecentMenuList :title="Ellipsis" :showArrow="false" className="" extraClass="set-position" :list="['Last Week', 'Last Month', 'Last year']" mainCss="" iconCss="size-5" menuIconCss="size-4" />
                </div>
                <div class="card-body">
                    <VueApexCharts type="donut" :options="viewPerformanceChart.chartOptions" :series="viewPerformanceChart.chartSeries" :height="260" color-classes="[bg-primary-500, bg-pink-400]"/>
                    <div class="mt-3 text-center">
                        <p class="mb-3 text-gray-500 dark:text-dark-500">Ensure your information is kept updated to
                            enhance performance.</p>
                        <a href="#!" class="btn btn-primary">Guide Views <i class="ml-1 align-bottom ri-arrow-right-s-line"></i></a>
                    </div>
                </div>
                <div class="flex items-center justify-center gap-3 text-sm card-footer">
                    <a href="#!" class="text-gray-500 dark:text-dark-500"><i class="align-bottom ri-circle-fill text-primary-500"></i> View Count: <span class="font-medium text-gray-800 dark:text-dark-100">148</span></a>
                    <a href="#!" class="text-gray-500 dark:text-dark-500"><i class="text-pink-400 align-bottom ri-circle-fill"></i> Percentage: <span class="font-medium text-gray-800 dark:text-dark-100">59%</span></a>
                </div>
            </div>
        </div>
    </div>
</template>