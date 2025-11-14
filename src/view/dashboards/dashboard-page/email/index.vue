<script setup lang="ts">
import PageHeading from '@/components/common/PageHeading.vue';
import { ref, onMounted, watch } from 'vue';
import { TrendingUp, TrendingDown, Ellipsis, MoveRight, MoveLeft } from 'lucide-vue-next';
import { updateCounter, lineWithLabelsChart, gradientDonutChartOptions, columnWithDataLabelsChartOptions, mailStatisticChartOptions, timeSpendingChart } from './email-data';
import Apexchart from '@/components/common/Apexchart.vue';
import NavTabBar from '@/components/common/NavTabBar.vue';
import RecentMenuList from '../../recent-menu-list.vue';
import StatCard from './StatCard.vue';
import MonthlyCampaignStats from './MonthlyCampaignStats.vue';
import AllEmailPerformance from './AllEmailPerformance.vue';

//@ts-ignore
import { useStore } from 'vuex'
import VueApexCharts from '@/components/common/VueApexCharts.vue';
const store = useStore()
// ------------------ chart color set -----------------------
// const lineWithLabChart = ref(lineWithLabelsChart());
// const gradientDonutChart = ref(gradientDonutChartOptions());
const columnWithDataLabChart = ref(columnWithDataLabelsChartOptions());
const mailStatisticChart = ref(mailStatisticChartOptions());

watch(() => store.getters.primaryColor, () => {
    // lineWithLabChart.value = lineWithLabelsChart();
    mailStatisticChart.value = mailStatisticChartOptions();
    columnWithDataLabChart.value = columnWithDataLabelsChartOptions()
    // gradientDonutChart.value = gradientDonutChartOptions()
})

const metrics = ref([
    { title: 'Emails Sent', value: 48, unit: 'k', icon: TrendingUp, trend: 'up', animatedValue: 0 },
    { title: 'Average Click Rate', value: 32, unit: 'k', icon: TrendingUp, trend: 'up', animatedValue: 0 },
    { title: 'Open Rate', value: 84, unit: '%', icon: TrendingDown, trend: 'down', animatedValue: 0 },
    { title: 'Unsubscribe', value: 26, unit: '%', icon: TrendingDown, trend: 'down', animatedValue: 0 }
]);

const animateCounter = (metric: { value: number; animatedValue: number }, duration: number) => {
    const start = 0;
    const increment = metric.value / (duration / 16); // roughly 60 frames per second
    metric.animatedValue = start;
    const updateCounter = () => {
        if (metric.animatedValue < metric.value) {
            metric.animatedValue += increment;
            requestAnimationFrame(updateCounter);
        } else {
            metric.animatedValue = metric.value; // ensure we don't exceed the target
        }
    };
    // Start the animation
    updateCounter();

};

// Start animations on component mount
onMounted(() => {
    updateCounter(1097, animatedConversionRate)
    updateCounter(147, revenueRate)
    metrics.value.forEach(metric => {
        animateCounter(metric, 500); // animate over 500 milliseconds
    });
});
const tabs = ref([
    { id: 1, name: 'Monthly' },
    { id: 2, name: 'Weekly' },
    { id: 3, name: 'Yearly' },
]);


const animatedConversionRate = ref(0);
const revenueRate = ref(0)
</script>
<template>
    <PageHeading title="Email" sub-title="Dashboards" />
    <div class="grid grid-cols-12 gap-x-space">
        <div v-for="(metric, index) in metrics" :key="index" class="col-span-12 md:col-span-6 xl:col-span-2 card">
            <div class="card-body">
                <p class="mb-2 text-gray-500">{{ metric.title }}</p>
                <h5>
                    <span>{{ Math.round(metric.animatedValue) }}</span>{{ metric.unit }}
                    <component :is="metric.icon" class="inline-block mr-1 ltr:ml-1 rtl:mr-1 size-4"
                        :class="metric.trend === 'up' ? 'text-green-500' : 'text-red-500'"></component>
                    <small class="text-sm font-normal text-gray-500 dark:text-dark-500">This years</small>
                </h5>
            </div>
        </div>
        <div
            class="relative col-span-12 overflow-hidden border-0 xl:col-span-4 xl:row-span-2 card ltr:bg-gradient-to-bl rtl:bg-gradient-to-br from-green-500/15 to-primary-500/15">
            <img src="@/assets/images/dashboards/ecommerce/pattern.png" loading="lazy" alt=""
                class="absolute bottom-0 ltr:right-0 rtl:left-0 opacity-20">
            <div class="relative card-body">
                <h6 class="mb-5">Top Campaign</h6>
                <h5 class="mb-2 capitalize">Feeling embarrassed by your design skills? Here’s what you can do.</h5>
                <p class="mb-8 text-gray-500 dark:text-dark-500">29 June, 2024</p>

                <p class="mb-1">Conversion Rate</p>
                <h5>
                    <span>{{ Math.round(animatedConversionRate) }}</span>
                    <TrendingDown class="inline-block ml-3 text-red-500 size-4 me-1"/>
                    <small class="text-sm font-normal text-gray-500 dark:text-dark-400">12.9% This years</small>
                </h5>
            </div>
        </div>
        <div class="col-span-12 xl:col-span-8 xl:row-span-2 card">
            <div class="flex flex-col gap-5 lg:items-center lg:flex-row card-header">
                <h6 class="card-title grow">Email Campaigns Performance</h6>
                <NavTabBar :tabs="tabs" extraCss="rounded-md" />
            </div>
            <div class="card-body">
                <VueApexCharts  type="area" :series="lineWithLabelsChart.series" :options="lineWithLabelsChart.options" :height="280"  color-classes="[bg-primary-500, bg-gray-300]"/>
            </div>
        </div>
        <div class="col-span-12 overflow-hidden xl:col-span-4 card">
            <div class="grid items-center grid-cols-12">
                <div class="col-span-12 lg:col-span-8">
                    <VueApexCharts type="donut" :series="gradientDonutChartOptions.series" :options="gradientDonutChartOptions.options"
                        :height="165"  color-classes="[bg-primary-500, bg-red-500]"/>
                </div>
                <div class="col-span-12 lg:col-span-4 bg-primary-500 card-body !-m-[1px] text-center">
                    <Apexchart :series="columnWithDataLabChart.series" :options="columnWithDataLabChart.chartOptions"
                        :height="100" />
                    <p class="mt-4 text-primary-100">Total Revenue</p>
                    <h5 class="text-white">$<span x-init="updateCounter">{{ revenueRate }}</span>M</h5>
                </div>
            </div>
        </div>
        <div class="col-span-12 xl:col-span-4 xl:row-span-2 card">
            <div class="flex items-center gap-5 card-header">
                <h6 class="card-title grow">Mail Statistics</h6>
                <RecentMenuList :title="Ellipsis" :showArrow="false" className="" :list="['Weekly', 'Monthly', 'Yearly']"
                    extraClass="set-position" />
            </div>
            <div class="card-body">
                <Apexchart :series="mailStatisticChart.series" :options="mailStatisticChart.chartOptions"
                    :height="335" />
            </div>
        </div>
        <div class="col-span-12 xl:col-span-4 card">
            <div class="flex items-center gap-5 card-header">
                <h6 class="card-title grow">All Time Spending</h6>
                <router-link to="#!" class="badge badge-sub-gray">
                    See All
                    <MoveRight data-lucide="move-right" class="ltr:inline-block rtl:hidden ml-0.5 size-4"></MoveRight>
                    <MoveLeft data-lucide="move-left" class="rtl:inline-block ltr:hidden mr-0.5 size-4"></MoveLeft>
                </router-link>
            </div>
            <div class="card-body">
                <div class="grid grid-cols-12">
                    <div class="col-span-6">
                        <h5>7.4%</h5>
                        <p class="text-gray-500 dark:text-dark-500">Conversion Rate</p>
                    </div>
                    <div class="col-span-6">
                        <h5>48,759</h5>
                        <p class="text-gray-500 dark:text-dark-500">Users</p>
                    </div>
                    <div class="col-span-12">
                        <Apexchart :series="timeSpendingChart.series" :options="timeSpendingChart.chartOptions"
                            :height="120" />
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-12 xl:col-span-4 xl:row-span-2 card">
            <div class="flex items-center gap-5 card-header">
                <h6 class="card-title grow">Monthly Campaign Stats</h6>
                <RecentMenuList :title="Ellipsis" :showArrow="false" className="" :list="['Weekly', 'Monthly', 'Yearly']"
                    extraClass="set-position" />
            </div>
            <div class="card-body">
                <div class="overflow-x-auto table-box">
                    <MonthlyCampaignStats />
                </div>
            </div>
        </div>
        <StatCard title="Total Customers" value="1,32,603" change="0.5%" />
        <StatCard title="Bounce Rate" value="48,314" change="1.8%" />

        <!-- All Email Performance  -->
        <AllEmailPerformance />
    </div>
</template>