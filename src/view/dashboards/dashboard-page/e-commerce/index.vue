<script lang="ts" setup>
//@ts-ignore
import { useStore } from 'vuex'
const store = useStore()
import { computed, ref, watch, } from 'vue';
import { ShoppingCart, Video, TrendingUp, Ellipsis, } from 'lucide-vue-next';
import PageHeading from '@/components/common/PageHeading.vue';
import { productSalesChart, donutChart, trafficChart, topLocation, barDemo } from './ecommorece-data'
import Apexchart from '@/components/common/Apexchart.vue';
import RecentMenuList from '../../recent-menu-list.vue';
import WorldMap from '@/components/common/WorldMap.vue';
import ProductStockTable from './ProductStockTable.vue';
import TopSellingProductsTable from './TopSellingProductsTable.vue';
import MyMessagesList from './MyMessagesList.vue';

// for Chart color change
const barChart = ref(barDemo());
const chartKey = ref(0)
watch(() => store.getters.primaryColor, () => {
    // chartKey.value++
    barChart.value = barDemo()
})

// Function to simulate animated counter
const currentSale = ref<number>(4878);
const performanceTarget = computed(() => {
    return Math.round((currentSale.value * 100) / 10000);
});
const expense = ref<number>(18725);
const expenseRate = ref<number>(2.87);
const salesProfit = ref<number>(25874);
const salesProfitRate = ref<number>(2.87);

interface userType {
    name: string;
    avatar: string | any;
}
const users = ref<userType[]>([
    { name: 'Leal Bureau', avatar: new URL('@/assets/images/avatar/user-20.png', import.meta.url) },
    { name: 'Julie Seltzer', avatar: new URL('@/assets/images/avatar/user-18.png', import.meta.url) },
    { name: 'Julie Seltzer', avatar: new URL('@/assets/images/avatar/user-8.png', import.meta.url) }
]);

const ordersCount = ref(8956);
const growthPercentage = ref(2.87);

// Compute the progress bar width based on some logic (example: a percentage of orders)
const progressBarWidth = computed(() => {
    // Example calculation: For demonstration purposes
    const totalOrdersGoal = 17000; // Define a total goal
    return `${(ordersCount.value / totalOrdersGoal) * 100}%`;
});


// ------------------- Countries List----------------------

interface Country {
    name: string;
    percentage: string; // e.g., '91%'
    bgColor: string;
}

const countries = ref<Country[]>([
    { name: 'Brazil', percentage: '91%', bgColor: 'bg-primary-500' },
    { name: 'Russia', percentage: '77%', bgColor: 'bg-green-500' },
    { name: 'China', percentage: '54%', bgColor: 'bg-purple-500' },
    { name: 'Turkey', percentage: '26%', bgColor: 'bg-orange-500' },
    { name: 'Philippines', percentage: '40%', bgColor: 'bg-yellow-500' },
    { name: 'Denmark', percentage: '58%', bgColor: 'bg-sky-500' },
    { name: 'New Zealand', percentage: '19%', bgColor: 'bg-red-500' },
]);

const mapLabels = computed(() => {
    const markers = topLocation.markers;
    return {
        markers: {
            render(index: number) {
                return markers[index].name
            }
        },
        regions: {
            render(code: string | null) {
                return code === 'EG' ? code : null
            }
        }
    }
})

</script>
<template>
    <PageHeading title="Ecommerce" sub-title="Dashboards" />
    <div class="grid grid-cols-12 gap-x-space">
        <div class="relative order-1 col-span-12 2xl:col-span-8 card">
            <div class="card-body">
                <h6 class="mb-2 card-title">Welcome Back Shopia Mia</h6>
                <p class="text-gray-500 dark:text-dark-500">
                    You have earned 49% more than last month which is great thing.
                </p>
                <div class="grid grid-cols-12 mt-12 mb-5 md:mb-0">
                    <div
                        class="col-span-6 border-gray-200 md:col-span-4 lg:col-span-2 ltr:border-r rtl:border-l dark:border-dark-800">
                        <h6 class="mb-1.5">
                            $<span>{{ currentSale }}</span>
                            <TrendingUp class="inline-block ml-1.5 text-green-500 size-4" />

                        </h6>
                        <p class="text-gray-500 dark:text-dark-500">Today's Sales</p>
                    </div>
                    <div class="col-span-6 md:col-span-4 lg:col-span-3 ltr:pl-5 rtl:pr-5">
                        <h6 class="mb-1.5">
                            <span>{{ performanceTarget }}</span>%
                            <TrendingUp class="inline-block ml-1 text-green-500 size-4" />

                        </h6>
                        <p class="text-gray-500 dark:text-dark-500">Overall Performance</p>
                    </div>
                </div>

                <div class="absolute bottom-0 hidden ltr:right-0 rtl:left-0 lg:block">
                    <div
                        class="absolute inset-0 ltr:bg-gradient-to-r rtl:bg-gradient-to-l from-white dark:from-dark-900">
                    </div>
                    <img src="@/assets/images/dashboards/ecommerce/pattern.png" alt="" loading="lazy" class="h-32">
                </div>
                <img src="@/assets/images/dashboards/ecommerce/img-01.png" alt="" loading="lazy"
                    class="mx-auto md:absolute bottom-2 ltr:right-5 rtl:left-5">
            </div>
        </div>
        <div class="order-2 col-span-12 md:col-span-6 xl:col-span-3 2xl:col-span-2 card">
            <div class="card-body">
                <p class="mb-1 text-gray-500 dark:text-dark-500">Expense</p>
                <h6 class="text-16">${{ expense }}</h6>
                <p class="mb-4 text-sm text-gray-500 dark:text-dark-500">
                    <span class="font-medium text-green-500">{{ expenseRate }}</span> This month
                </p>
                <Apexchart :series="donutChart.series" :options="donutChart.options" :height="90" />
            </div>
        </div>
        <div class="order-3 col-span-12 md:col-span-6 xl:col-span-3 2xl:col-span-2 card">
            <div class="card-body">
                <div class="flex items-center justify-center mb-4 text-orange-500 rounded-md bg-orange-500/10 size-12">
                    <ShoppingCart data-lucide="shopping-cart" class="size-5"></ShoppingCart>
                </div>
                <p class="mb-3 text-gray-500 dark:text-dark-500">Sales Profit</p>
                <h6 class="mb-1 text-16">${{ salesProfit }}</h6>
                <p class="text-sm text-gray-500 dark:text-dark-500">
                    <span class="font-medium text-green-500">{{ salesProfitRate }}</span> This month
                </p>
            </div>
        </div>
        <div class="order-6 col-span-12 2xl:order-4 2xl:row-span-2 2xl:col-span-8 card">
            <div class="flex flex-col md:items-center md:flex-row gap-space card-header">
                <h6 class="card-title grow">Product Sales</h6>
                <div class="flex flex-wrap items-center gap-2 shrink-0">
                    <button type="button" class="py-1.5 px-3 btn btn-primary">All</button>
                    <button type="button"
                        class="py-1.5 px-3 btn btn-outline-gray border-gray-200 dark:border-dark-800">Weekly</button>
                    <button type="button"
                        class="py-1.5 px-3 btn btn-outline-gray border-gray-200 dark:border-dark-800">Monthly</button>
                    <button type="button"
                        class="py-1.5 px-3 btn btn-outline-gray border-gray-200 dark:border-dark-800">Yearly</button>
                </div>
            </div>
            <div class="card-body" dir="ltr">
                <Apexchart :key="chartKey" :series="productSalesChart.series" :options="productSalesChart.options"
                    :height="280" />
            </div>
        </div>
        <div class="order-4 col-span-12 md:col-span-6 xl:col-span-3 2xl:col-span-2 2xl:order-5 card">
            <div class="card-body">
                <div class="flex gap-2">
                    <Video data-lucide="video" class="size-5 fill-primary-500/10 text-primary-500"></Video>
                    <div>
                        <h6 class="mb-1">Daily Meeting</h6>
                        <p class="text-xs text-gray-500 dark:text-dark-500">10+ Person</p>
                    </div>
                </div>
                <div class="flex mt-5 -space-x-3 rtl:space-x-reverse">
                    <router-link to="#!" v-for="(user, index) in users" :key="index"
                        class="transition duration-300 ease-linear hover:z-10" :title="user.name">
                        <img class="border-2 border-white rounded-full dark:border-dark-900 size-7" :src="user.avatar"
                            alt="" loading="lazy">
                    </router-link>
                    <router-link to="#!" title="4"
                        class="flex items-center justify-center text-xs transition duration-300 ease-linear bg-gray-100 rounded-full dark:bg-dark-850 hover:z-10 size-7">4+</router-link>
                </div>
                <p class="mt-3 mb-2 text-gray-500 dark:text-dark-500">They will product the meeting</p>
                <button type="button" class="w-full btn btn-primary">Click to meeting</button>
            </div>
        </div>
        <div class="order-5 col-span-12 md:col-span-6 xl:col-span-3 2xl:col-span-2 2xl:order-6 card">
            <div class="card-body">
                <p class="mb-3 text-gray-500 dark:text-dark-500">Net Profit</p>
                <h6 class="mb-1 text-16">$<span>245</span>M</h6>
                <Apexchart :key="chartKey" :series="barChart.series" :options="barChart.options" :height="130"/>
            </div>
        </div>
        <div class="order-7 col-span-12 2xl:col-span-4 card">
            <div class="card-body">
                <RecentMenuList mainCss="float-end" />
                <h5 class="flex items-center gap-2 mb-1.5">
                    {{ ordersCount.toLocaleString() }}
                    <span class="leading-4 badge badge-sub-green">
                        <TrendingUp data-lucide="trending-up"
                            class="inline-block text-green-500 ltr:mr-1 rtl:ml-1 size-4"></TrendingUp>
                        {{ growthPercentage }}
                    </span>
                </h5>
                <p class="mb-8 text-gray-500 dark:text-dark-500">Orders this month</p>
                <div class="progress-bar progress-2">
                    <div :style="{ width: progressBarWidth }" class="w-1/2 text-white bg-green-500 progress-bar-wrap">
                    </div>
                </div>
            </div>
        </div>
        <div class="order-8 col-span-12 2xl:col-span-8 2xl:row-span-2 card">
            <div class="flex items-center gap-3 card-header">
                <h6 class="card-title grow">Product Stock</h6>
                <RecentMenuList />
            </div>
            <ProductStockTable />
        </div>
        <div class="order-9 col-span-12 xl:col-span-6 2xl:col-span-4 card">
            <div class="flex items-center gap-3 card-header">
                <h6 class="card-title grow">Top Location</h6>
                <RecentMenuList :title="Ellipsis" :showArrow="false" className="" :list="['Weekly', 'Monthly', 'Yearly']"
                    extraClass="set-position" />
            </div>
            <div class="card-body">
                <WorldMap :markers="topLocation.markers" :selected-mark="1" :labels="mapLabels" />
            </div>
        </div>
        <div class="order-10 col-span-12 xl:col-span-6 2xl:col-span-4 card">
            <div class="flex items-center gap-5 card-header">
                <h6 class="card-title grow">Top selling Products</h6>
                <router-link to="#!" class="underline link link-primary">View All <i
                        class="ri-arrow-right-line"></i></router-link>
            </div>
            <div class="card-body">
                <TopSellingProductsTable />
            </div>
        </div>
        <div class="order-11 col-span-12 2xl:col-span-4 card">
            <div class="flex items-center gap-3 card-header">
                <h6 class="card-title grow">Top Countries</h6>
                <RecentMenuList />
            </div>
            <div class="card-body">
                <div class="flex flex-col gap-4">
                    <div v-for="country in countries" :key="country.name">
                        <div class="flex items-center gap-3 mb-2">
                            <h6 class="text-xs grow">{{ country.name }}</h6>
                            <h6 class="text-xs font-semibold text-red-500">{{ country.percentage }}</h6>
                        </div>
                        <div class="progress-bar progress-1">
                            <div :class="['w-full text-white progress-bar-wrap', country.bgColor]"
                                :style="{ width: country.percentage }"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="order-11 col-span-12 2xl:col-span-4 card">
            <div class="flex items-center gap-3 card-header">
                <h6 class="card-title grow">Traffic</h6>
                <RecentMenuList />
            </div>
            <div class="card-body">
                <Apexchart :series="trafficChart.series" :options="trafficChart.chartOptions" :height="320" />
            </div>
        </div>
        <div class="col-span-12 xl:col-span-6 2xl:col-span-4 order-13 card">
            <div class="flex items-center gap-3 card-header">
                <h6 class="card-title grow">My Message</h6>
                <router-link to="#!"
                    class="flex px-3 py-1.5 text-xs border-gray-200 font-medium dark:border-dark-800 link link-primary btn">
                    <i class="ri-add-line ltr:mr-1 rtl:ml-1"></i> New Chat
                </router-link>
            </div>
            <div class="card-body">
                <MyMessagesList />
            </div>
        </div>
    </div>
</template>
