<script setup lang="ts">
import PageHeading from '@/components/common/PageHeading.vue';
import simplebar from 'simplebar-vue';
import { computed, onMounted, ref, watch } from 'vue';
import { CircleArrowUp, Activity, Ellipsis } from 'lucide-vue-next';
import { salesRevenueChart, adsRevenueChart, averageOnlineSalesChart, averageOnlineWeeklyChart, webAnalyticsApp, followersAppChart, visitBrowsersAppChart, trafficSourceApp } from './analytics-data'
import { ArrowUpFromDot, Eye, MousePointerClick, Mouse, CircleDotDashed } from 'lucide-vue-next';
import NavTabBar from '@/components/common/NavTabBar.vue';
import Apexchart from '@/components/common/Apexchart.vue';
import CardEffect from './CardEffect.vue';
import RecentMenuList from '../../recent-menu-list.vue';
import RecentTransactionTable from './RecentTransactionTable.vue';
import CampaignPerformanceTable from './CampaignPerformanceTable.vue';
import VueApexCharts from '@/components/common/VueApexCharts.vue';

//@ts-ignore
import { useStore } from 'vuex'
const store = useStore()
const trafficSourceChart = ref(trafficSourceApp())
watch(() => store.getters.primaryColor, () => {
    trafficSourceChart.value = trafficSourceApp()
})

const start = 0;
const end = 145;
const duration = 500; // duration in milliseconds

const current = ref(start);
const formattedRevenue = computed(() => Math.round(current.value));
const adsRevenue = computed(() => Math.round(current.value));

const animateCounter = () => {
    const startTime = performance.now();
    const animate = (currentTime: number) => {
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1); // limit to 1

        current.value = start + progress * (end - start);

        if (progress < 1) {
            requestAnimationFrame(animate);
        }
    };
    requestAnimationFrame(animate);
};

onMounted(() => {
    animateCounter();
});

// ---------------- Performance -------------
const tabs = ref([
    { id: 1, name: 'New Users' },
    { id: 2, name: 'Online Sales' },
    { id: 3, name: 'Daily Sale' },
]);
const activeTag = ref(1)
function tagPage(active: number) {
    activeTag.value = active
}
interface userType {
    avatar: string | any;
    name: string;
    clicks: number
}
const user = ref<userType>({
    avatar: new URL('@/assets/images/avatar/user-13.png', import.meta.url),
    name: 'Jabari Mayer',
    clicks: 244,
});
// Define animated counter
const animatedCount = ref(0);
const growthRate = ref(9.63);
const landingProductsCount = ref(0);
const adminProductsCount = ref(0);
const averageOnlineSales = ref(0);
const landingWeeklyProductsCount = ref(0);
const adminWeeklyProductsCount = ref(0);
const averageWeeklySales = ref(0);
const PageViews = ref(0);
const PageViewsMinutes = ref(0);
const PageViewsSecond = ref(0);
const VisitBrowsers = ref(0)
const Country = ref(0)

// Function to update the counter values
const updateCounter = (target: number, counterRef: any) => {
    const duration = 500;
    const start = performance.now();

    const animate = (timestamp: number) => {
        const progress = timestamp - start;
        const increment = Math.min(progress / duration, 1);
        counterRef.value = Math.round(increment * target);

        if (increment < 1) {
            requestAnimationFrame(animate);
        }
    };

    requestAnimationFrame(animate);
};

// Use onMounted to trigger counter updates
onMounted(() => {
    updateCounter(1154, landingProductsCount);
    updateCounter(2387, adminProductsCount);
    updateCounter(4321, averageOnlineSales);
    updateCounter(54, animatedCount);
    updateCounter(46, landingWeeklyProductsCount);
    updateCounter(78, adminWeeklyProductsCount);
    updateCounter(1173, averageWeeklySales);
    updateCounter(17415, PageViews);
    updateCounter(2, PageViewsMinutes);
    updateCounter(18, PageViewsSecond);
    updateCounter(4510, VisitBrowsers);
    updateCounter(3145, Country);

});
const WebAnalyticsNav = [
    { label: 'Referral', color: 'primary' },
    { label: 'Direct', color: 'green' },
    { label: 'Ads', color: 'purple' }
];

// On Boarding Campaign Data
const stats = ref([
    { label: 'Delivered', percentage: '17.9%', colorCss: 'badge-sub-green' },
    { label: 'Clicked', percentage: '54.6%', colorCss: 'badge-sub-sky' },
    { label: 'Opened', percentage: '47.3%', colorCss: 'badge-sub-gray' },
    { label: 'Converted', percentage: '11.8%', colorCss: 'badge-sub-yellow' },
]);

interface User {
    name: string;
    followers: string;
    avatar: URL | any; // Using URL type for the avatar
}
const users = ref<User[]>([
    { name: 'Julian Glover', followers: '78.4M', avatar: new URL('@/assets/images/avatar/user-18.png', import.meta.url) },
    { name: 'Steve Powlowski', followers: '64.9M', avatar: new URL('@/assets/images/avatar/user-11.png', import.meta.url) },
    { name: 'Della Brekke', followers: '63.2M', avatar: new URL('@/assets/images/avatar/user-14.png', import.meta.url) },
    { name: 'Jerod Bernhard', followers: '59.3M', avatar: new URL('@/assets/images/avatar/user-15.png', import.meta.url) },
    { name: 'Dominic Larkin', followers: '47.2M', avatar: new URL('@/assets/images/avatar/user-17.png', import.meta.url) }
]);

interface Country {
    name: string;
    flag: string | any; // URL to the flag image
    percentage: string; // Percentage as a string (e.g., "24%")
}
const countries = ref<Country[]>([
    { name: 'United States', flag: new URL('@/assets/images/flag/us.svg', import.meta.url), percentage: '24%' },
    { name: 'Germany', flag: new URL('@/assets/images/flag/de.svg', import.meta.url), percentage: '17%' },
    { name: 'Italy', flag: new URL('@/assets/images/flag/it.svg', import.meta.url), percentage: '16%' }
]);
</script>
<template>
    <PageHeading title="Analytics" sub-title="Dashboards" />
    <div class="grid grid-cols-12 gap-x-space">
        <!--   Sales Revenue   -->
        <div class="col-span-12 xl:col-span-6 2xl:col-span-4 card">
            <div class="card-body">
                <div class="flex gap-3 mb-3">
                    <div class="flex items-center justify-center border-2 rounded-full text-primary-500 ring-1 ring-offset-2 dark:ring-offset-dark-900 ring-primary-500/20 size-12 border-primary-500">
                        <CircleArrowUp class="fill-primary-500/10" data-lucide="circle-arrow-up"></CircleArrowUp>
                    </div>
                    <div>
                        <p class="mb-1 text-gray-500 dark:text-dark-500">Sales Revenue</p>
                        <h5>
                            $<span>{{ formattedRevenue }}M</span>
                        </h5>
                    </div>
                </div>
                <VueApexCharts type="line" :series="salesRevenueChart.series" :options="salesRevenueChart.chartOptions" :height="140" class="!min-h-full" color-classes="[bg-primary-500, bg-primary-100, bg-primary-50, bg-primary-300]"/>
            </div>
        </div>
        <!--    Ads Revenue   -->
        <div class="col-span-12 xl:col-span-6 2xl:col-span-4 card">
            <div class="card-body">
                <div class="flex gap-3 mb-3">
                    <div class="flex items-center justify-center text-red-500 border-2 border-red-400 rounded-full ring-1 ring-offset-2 dark:ring-offset-dark-900 ring-red-500/20 size-12">
                        <Activity data-lucide="activity" class="fill-red-500/10"></Activity>
                    </div>
                    <div>
                        <p class="mb-1 text-gray-500 dark:text-dark-500">Ads Revenue</p>
                        <h5>
                            $<span>{{ adsRevenue }}M</span>
                        </h5>
                    </div>
                </div>
                <VueApexCharts type="line" :series="adsRevenueChart.series" :options="adsRevenueChart.chartOptions" :height="140" class="!min-h-full" color-classes="[bg-red-500, bg-red-100, bg-red-50, bg-red-300]"/>
            </div>
        </div>
        <!--    Impressions   -->
        <CardEffect title="Impressions" effectClass="stroke-green-500/20" class="text-green-500" :totalNumber="47859" :numberIcon="ArrowUpFromDot" :growth="39.7" :growthIcon="Eye" />
        <!--   Clicks   -->
        <CardEffect title="Clicks" effectClass="stroke-sky-500/20" class="text-sky-500" :totalNumber="15487" :numberIcon="MousePointerClick" :growth="4.8" :growthIcon="Mouse" />
        <!--   Performance    -->
        <div class="col-span-12 xl:col-span-6 2xl:col-span-3 card">
            <div class="flex items-center gap-3 card-header">
                <h6 class="card-title grow">Performance</h6>
                <RecentMenuList :title="Ellipsis" :showArrow="false" className="" extraClass="set-position" :list="['Weekly', 'Monthly', 'Yearly']" />
            </div>
            <div class="card-body">
                <div>
                    <NavTabBar :tabs="tabs" :tagPage="tagPage" liStyle="relative block px-2 py-1 font-medium !text-center rounded-full text-13" cssClass="flex p-1.5 bg-gray-100 dark:bg-dark-850 rounded-full *:grow"/>
                    <div class="w-full mt-4">
                        <div v-show="activeTag === 1">
                            <div class="card">
                                <div class="card-body">
                                    <div class="flex items-center gap-3">
                                        <div class="rounded-full size-24">
                                            <img :src="user.avatar" alt="" class="rounded-full">
                                        </div>
                                        <div>
                                            <p class="mb-1 text-gray-500 dark:text-dark-500 text-13">Top User</p>
                                            <h6 class="mb-2">{{ user.name }}</h6>
                                            <p class="mb-1 text-gray-500 dark:text-dark-500 text-13">Daily Visit</p>
                                            <h6>{{ user.clicks }} Clicks</h6>
                                        </div>
                                    </div>
                                    <div class="pt-4 mt-4 border-t border-gray-200 border-dashed dark:border-dark-800">
                                        <div class="flex items-center gap-3">
                                            <div class="grow">
                                                <p class="mb-1 text-gray-500 dark:text-dark-500 text-13">New Users</p>
                                                <h5>
                                                    +<span>{{ animatedCount }}</span>M
                                                </h5>
                                            </div>
                                            <div class="shrink-0">
                                                <span class="inline-block font-medium text-green-500">
                                                    <i data-lucide="move-up" class="inline-block size-3"></i>
                                                    {{ growthRate }}%
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p class="text-center text-gray-500 dark:text-dark-500">
                                Increase your email marketing by <span class="text-primary-500">41%</span> to reach your
                                user acquisition and monthly targets.
                            </p>
                        </div>
                        <div v-show="activeTag === 2">
                            <div class="grid grid-cols-12 gap-space">
                                <div class="col-span-6 p-3 text-center border border-gray-200 border-dashed rounded-md dark:border-dark-800">
                                    <p class="mb-1 text-gray-500 dark:text-dark-500 text-13">Landing Products</p>
                                    <h6><span>{{ landingProductsCount }}+</span></h6>
                                </div>
                                <div class="col-span-6 p-3 text-center border border-gray-200 border-dashed rounded-md dark:border-dark-800">
                                    <p class="mb-1 text-gray-500 dark:text-dark-500 text-13">Admin Products</p>
                                    <h6><span>{{ adminProductsCount }}+</span></h6>
                                </div>
                            </div>
                            <p class="mt-3 mb-1 text-gray-500 dark:text-dark-500">Average Online Sales</p>
                            <h5 class="mb-2"><span>{{ averageOnlineSales }}+</span></h5>
                            <Apexchart :series="averageOnlineSalesChart.series" :options="averageOnlineSalesChart.chartOptions" :height="160" />
                        </div>
                        <div v-show="activeTag === 3">
                            <div class="grid grid-cols-12 gap-space">
                                <div class="col-span-6 p-3 text-center border border-gray-200 border-dashed rounded-md dark:border-dark-800">
                                    <p class="mb-1 text-gray-500 dark:text-dark-500 text-13">Landing Products</p>
                                    <h6><span>{{ landingWeeklyProductsCount }}+</span></h6>
                                </div>
                                <div class="col-span-6 p-3 text-center border border-gray-200 border-dashed rounded-md dark:border-dark-800">
                                    <p class="mb-1 text-gray-500 dark:text-dark-500 text-13">Admin Products</p>
                                    <h6><span>{{ adminWeeklyProductsCount }}+</span></h6>
                                </div>
                            </div>
                            <p class="mt-3 mb-1 text-gray-500 dark:text-dark-500">Average Weekly Sales</p>
                            <h5 class="mb-2"><span>{{ averageWeeklySales }}+</span></h5>
                            <Apexchart :series="averageOnlineWeeklyChart.series" :options="averageOnlineWeeklyChart.chartOptions" :height="160" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Web Analytics-->
        <div class="col-span-12 xl:col-span-6 2xl:col-span-9 card">
            <div class="flex flex-col gap-3 md:flex-row md:items-center card-header">
                <h6 class="card-title grow">Web Analytics</h6>
                <div class="flex items-center gap-2">
                    <router-link v-for="(item, index) in WebAnalyticsNav" :key="index" to="#!" :class="`link link-${item.color}`">
                        <CircleDotDashed data-lucide="circle-dot-dashed" :class="`inline-block text-${item.color}-500 size-4 mr-1`" />
                        <span class="leading-none align-middle">{{ item.label }}</span>
                    </router-link>
                </div>
            </div>
            <div class="card-body">
                <div class="grid grid-cols-12 gap-3">
                    <div class="col-span-12 sm:col-span-6 lg:col-span-3">
                        <p class="text-gray-500 dark:text-dark-500">Page Views</p>
                        <h5>
                            <span>{{ PageViews }}</span>
                            <span class="text-xs text-green-500">
                                <i class="align-baseline ri-arrow-up-line"></i> 4.5%
                            </span>
                        </h5>
                    </div>
                    <div class="col-span-12 sm:col-span-6 lg:col-span-3">
                        <p class="text-gray-500 dark:text-dark-500">Session Duration</p>
                        <h5>
                            <span>{{ PageViewsMinutes }}</span>m
                            <span>{{ PageViewsSecond }}</span>s
                            <span class="text-xs text-red-500">
                                <i class="align-baseline ri-arrow-down-line"></i> 0.9%
                            </span>
                        </h5>
                    </div>
                </div>
                <VueApexCharts type="line" :series="webAnalyticsApp.series" :options="webAnalyticsApp.chartOptions" :height="315" color-classes="[bg-primary-500, bg-green-500, bg-purple-500]"  class="!min-h-full"/>
            </div>
        </div>
        <!--    On Boarding Campaign     -->
        <div class="col-span-12 2xl:col-span-4 card">
            <div class="flex items-center gap-3 card-header">
                <h6 class="card-title grow">On Boarding Campaign</h6>
                <RecentMenuList :title="Ellipsis" :showArrow="false" className="" :list="['Weekly', 'Monthly', 'Yearly']" extraClass="set-position" />
            </div>
            <div class="card-body">
                <div class="mb-5 alert alert-purple">
                    Help new customers appreciate the value they'll receive from your admin.
                </div>
                <div class="grid grid-cols-12 gap-space">
                    <div v-for="stat in stats" :key="stat.label" class="col-span-12 mb-0 md:col-span-6 card">
                        <div class="card-body">
                            <p :class="`badge ${stat.colorCss}`">
                                <i class="align-baseline text-11 ri-circle-fill"></i> {{ stat.label }}
                            </p>
                            <h5 class="mt-3">{{ stat.percentage }}</h5>
                            <p class="text-gray-500 dark:text-dark-500">Last week</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--     Recent Transaction    -->
        <div class="col-span-12 2xl:col-span-4 card">
            <div class="flex items-center gap-3 card-header">
                <h6 class="card-title grow">Recent Transactions</h6>
                <a href="#!" class="link link-primary shrink-0">See all <i class="align-baseline ri-arrow-right-line"></i></a>
            </div>
            <div class="card-body">
                <div class="overflow-x-auto">
                    <RecentTransactionTable />
                </div>
            </div>
        </div>
        <div class="col-span-12 2xl:col-span-4 card">
            <div class="relative flex items-center gap-3 card-header">
                <h6 class="card-title grow">Followers</h6>
                <RecentMenuList :title="Ellipsis" :showArrow="false" className="" :list="['Weekly', 'Monthly', 'Yearly']" extraClass="set-position" />
            </div>
            <div class="card-body">
                <VueApexCharts type="bar" :series="followersAppChart.series" :options="followersAppChart.chartOptions" :height="360" class="!min-h-full -ml-space" color-classes="[bg-primary-500, bg-primary-200]"/>
            </div>
        </div>
        <!-- Visit Browsers Half Pie Chart-->
        <div class="col-span-12 md:col-span-6 2xl:col-span-2 card">
            <div class="card-body">
                <p class="mb-1 text-gray-500 dark:text-dark-500 text-13">Visit Browsers</p>
                <h5>
                    <span x-init="updateCounter">{{ VisitBrowsers }}</span>+ <span class="text-xs text-green-500"><i class="align-baseline ri-arrow-up-line"></i> 1.9%</span>
                </h5>
                <VueApexCharts type="donut" :options="visitBrowsersAppChart.chartOptions" :series="visitBrowsersAppChart.series" :height="125" color-classes="[bg-primary-500,bg-orange-500,bg-yellow-500]" class="!min-h-full"/>
            </div>
        </div>
        <div class="col-span-12 md:col-span-6 2xl:col-span-4 card">
            <div class="flex items-center gap-3 card-header">
                <h6 class="card-title grow">Traffic Source</h6>
                <RecentMenuList :title="Ellipsis" :showArrow="false" className="" :list="['Weekly', 'Monthly', 'Yearly']" extraClass="set-position" />
            </div>
            <div class="card-body">
                <Apexchart :series="trafficSourceChart.series" :options="trafficSourceChart.chartOptions" :height="145" />
            </div>
        </div>
        <div class="col-span-12 md:col-span-6 2xl:col-span-3 card">
            <div class="card-header">
                <h6 class="card-title">Top Users (Contributors)</h6>
            </div>
            <div class="card-body">
                <simplebar data-simplebar class="h-36 -mx-space px-space">
                    <div class="space-y-3">
                        <div v-for="(user, index) in users" :key="index" class="flex items-center gap-3">
                            <img :src="user.avatar" loading="lazy" alt="" class="rounded-full size-10 shrink-0">
                            <div class="grow">
                                <h6 class="mb-0.5">{{ user.name }}</h6>
                                <p class="text-gray-500 dark:text-dark-500 text-13">{{ user.followers }} Followers</p>
                            </div>
                        </div>
                    </div>
                </simplebar>
            </div>
        </div>
        <div class="col-span-12 md:col-span-6 2xl:col-span-3 card">
            <div class="flex items-center gap-3 card-header">
                <h6 class="card-title grow">Top Countries</h6>
                <RecentMenuList :title="Ellipsis" :showArrow="false" className="" :list="['Weekly', 'Monthly', 'Yearly']" extraClass="set-position" />
            </div>
            <div class="card-body">
                <p class="text-gray-500 dark:text-dark-500">Visit</p>
                <h5 class="mb-2">
                    <span>{{ Country }}</span>+
                    <span class="text-xs text-green-500">
                        <i class="align-baseline ri-arrow-up-line"></i> 3.87%
                    </span>
                </h5>
                <div class="space-y-2">
                    <div v-for="(country, index) in countries" :key="index" class="flex items-center gap-2">
                        <img :src="country.flag" loading="lazy" alt="" class="object-cover rounded-full size-5 shrink-0">
                        <h6 class="grow">{{ country.name }}</h6>
                        <p class="shrink-0">{{ country.percentage }}</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- Campaign Performance Table -->
        <CampaignPerformanceTable />
    </div>
</template>