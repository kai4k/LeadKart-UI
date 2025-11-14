<script setup lang="ts">
import { nextTick, onMounted, ref, watch } from 'vue';
import simplebar from 'simplebar-vue';
import PageHeading from '@/components/common/PageHeading.vue';
import Apexchart from '@/components/common/Apexchart.vue';
import RecentMenuList from '../../recent-menu-list.vue';
import { updateCounter } from '@/view/dashboards/dashboard-page/email/email-data'
import LeadsTable from './LeadsTable.vue';
import {
    salesAnalyticsChart,
    basicDonutChart,
    cardData,
    dealDataList,
    goals,
    avatars,
} from './crm-data'
import {
    ChevronRight,
    Ellipsis,
    TrendingDown,
    TrendingUp,
} from 'lucide-vue-next';

//@ts-ignore
import { useStore } from 'vuex'
const store = useStore()
const salesAnalyChart = ref(salesAnalyticsChart())
watch(() => store.getters.primaryColor, () => {
    salesAnalyChart.value = salesAnalyticsChart()
})

const VisitCustomers = ref(0)
const premiumCharge = ref(19.99);

// Reactive values to animate
const animatedValues = ref<number[]>(Array(cardData.value.length).fill(0));

// Function to animate counter
const animateCounter = (index: number, targetValue: number) => {
    let start = 0;
    let duration = 1000; // Animation duration in milliseconds
    let startTime: number | null = null;

    const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        let progress = Math.min((timestamp - startTime) / duration, 1);
        animatedValues.value[index] = Math.floor(progress * targetValue);
        if (progress < 1) {
            requestAnimationFrame(step);
        } else {
            animatedValues.value[index] = targetValue; // Ensure the final value matches exactly
        }
    };

    requestAnimationFrame(step);
};
// Trigger animations when the component is mounted
onMounted(() => {
    nextTick(() => {
        cardData.value.forEach((item, index) => {
            if (typeof item.value === "number") {
                animateCounter(index, item.value);
            }
        });
    });
    updateCounter(345121, VisitCustomers)
});

// Watch for any changes to re-trigger the animation
watch(cardData, (newData) => {
    newData.forEach((item, index) => {
        if (typeof item.value === "number") {
            animateCounter(index, item.value);
        }
    });
});
</script>
<template>
    <PageHeading title="CRM" sub-title="Dashboards" />
    <div class="grid grid-cols-12 gap-x-space">
        <div class="col-span-12">
            <div class="" dir="ltr">
                <div>
                    <h6 class="mb-1">Sales Analytics</h6>
                    <p class="text-gray-500 dark:text-dark-500">Unlocking Insights and Driving Growth Through
                        Data-Driven Sales Strategies</p>
                </div>
                <div class="mt-5 lg:-mt-8" dir="ltr">
                    <Apexchart :series="salesAnalyChart.series" :options="salesAnalyChart.chartOptions" :height="300" />
                </div>
            </div>
        </div>
        <div class="col-span-12 card bg-[url('../images/dashboards/dashboard-patterm.png')] dark:bg-none">
            <div class="grid grid-cols-12 gap-0">
                <div class="col-span-12 border-b border-gray-200 dark:border-dark-800 md:col-span-6 xl:col-span-3 md:ltr:border-r md:rtl:border-l"
                    v-for="(item, index) in cardData" :key="index">
                    <div class="card-body">
                        <div class="flex items-center gap-3 mb-8">
                            <p class="text-gray-500 dark:text-dark-500 grow">
                                <component :is="item.icon" class="inline-block size-4"/>
                                 {{ item.title }}
                            </p>
                            <RecentMenuList :title="Ellipsis" :showArrow="false" :list="['Weekly', 'Monthly', 'Yearly']"
                            className="flex text-xs font-medium dark:border-dark-800 link link-primary"
                                extraClass="set-position" />
                        </div>
                        <div class="flex items-center gap-3">
                            <h5 class="grow"><span x-init="updateCounter">{{ typeof item.value === "number" ?
                                animatedValues[index] : item.value }}</span></h5>
                            <p class="text-gray-500 dark:text-dark-500 shrink-0"><span class="badge"
                                    :class="item.percentageChange > 0 ? 'badge-green' : 'badge-red'">
                                    <component :is="item.percentageChange > 0 ? TrendingUp : TrendingDown"
                                        data-lucide="trending-up" class="inline-block size-4">
                                    </component>
                                    {{ Math.abs(item.percentageChange) }}%
                                </span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-12 2xl:col-span-5 card">
            <div class="flex items-center gap-3 card-header">
                <h6 class="card-title grow">Deal Revenue Forecast</h6>
                <router-link to="#!" class="link link-primary shrink-0">View All <i
                        class="align-baseline ri-arrow-right-line"></i></router-link>
            </div>
            <div class="card-body">
                <div class="grid grid-cols-12 gap-x-space">
                    <div class="col-span-12 md:col-span-5">
                        <Apexchart :series="basicDonutChart.series" :options="basicDonutChart.chartOptions"
                            :height="170" />
                    </div>
                    <div class="col-span-12 md:col-span-7">
                        <h6 class="mb-2">Team Goal</h6>
                        <div class="space-y-4">
                            <div v-for="(goal, index) in goals" :key="index">
                                <div class="flex items-center gap-3 mb-2">
                                    <h6 class="text-xs grow">{{ goal.name }}</h6>
                                    <h6 class="text-xs text-gray-500 dark:text-dark-500">
                                        ${{ goal.current.toLocaleString() }} / ${{ goal.target.toLocaleString() }}
                                    </h6>
                                </div>
                                <div class="overflow-hidden progress-bar progress-1">
                                    <div class="text-white progress-bar-wrap bg-sky-400"
                                        :style="{ width: goal.current * 100 / goal.target + '%' }"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-12 xl:col-span-6 2xl:col-span-4 card">
            <div class="flex items-center gap-3 card-header">
                <h6 class="card-title grow">Deal Open</h6>
                <router-link to="#!" class="link link-primary shrink-0">View More 
                    <ChevronRight class="inline-block ltr:ml-0.5 rtl:mr-0.5 size-4" />
                </router-link>
            </div>
            <div class="card-body">
                <simplebar class="xl:h-52 -mx-space px-space" data-simplebar-scroll="grey">
                    <div class="flex flex-col gap-3">
                        <div v-for="(item, index) in dealDataList" :key="index" class="mb-0 card">
                            <div class="card-body">
                                <div class="flex flex-col gap-3 md:flex-row">
                                    <div class="grow">
                                        <p class="mb-1 text-gray-500 dark:text-dark-500">
                                            Closing Date: {{ item.closingDate }}
                                        </p>
                                        <h6><a>{{ item.title }}</a></h6>
                                        <div class="flex items-center gap-2 mt-3">
                                            <img :src="item.avatar" loading="lazy" alt="User Images"
                                                class="rounded-full size-6" />
                                            <p>{{ item.user }}</p>
                                        </div>
                                    </div>
                                    <div class="md:ltr:text-right md:rtl:text-left shrink-0">
                                        <h6 class="mb-1">{{ item.amount }}</h6>
                                        <span class="badge badge-sub-primary">{{ item.status }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </simplebar>
            </div>
        </div>
        <div class="col-span-12 xl:col-span-6 2xl:col-span-3 card">
            <div class="card-body">
                <p class="mb-3 font-medium text-primary-500">Upgrade to Premium</p>
                <h3 class="mb-2 capitalize">Make the best with the premium</h3>
                <div class="flex -space-x-2 grow rtl:space-x-reverse">
                    <router-link v-for="(avatar, index) in avatars" :key="index" to="#!"
                        class="transition duration-300 ease-linear hover:z-10">
                        <img :src="avatar" alt="User Images" loading="lazy"
                            class="border-2 border-white rounded-full dark:border-dark-900 size-7" />
                    </router-link>
                </div>
                <div class="flex mt-16 mb-3">
                    <p class="text-gray-500 dark:!text-dark-500 grow text-13">Pay Monthly</p>
                    <h6 class="shrink-0">${{ premiumCharge }}</h6>
                </div>
                <router-link to="pages-pricing"
                    class="w-full border-gray-200 dark:border-dark-800 btn btn-outline-gray">Upgrade
                    Now</router-link>
            </div>
        </div>
        <!--   Table   -->
        <LeadsTable />
    </div>
</template>