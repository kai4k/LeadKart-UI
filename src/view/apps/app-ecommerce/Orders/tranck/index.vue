<script setup lang="ts">
import 'jsvectormap/dist/maps/world-merc'
// import VueVectorMap from 'vuevectormap'
import 'jsvectormap/src/scss/jsvectormap.scss'
import PageHeading from '@/components/common/PageHeading.vue';
import { ref, computed, onMounted } from 'vue'
import { ChevronLeft, ChevronRight, MoveLeft, MoveRight } from 'lucide-vue-next';
import { orderData } from './tranck-data';

// Define the reactive state for the active tab
const openTab = ref(2)

// Define the class names for active and inactive tabs
const activeClasses = 'active'
const inactiveClasses = 'text-gray-500 hover:text-primary-500 dark:text-dark-500 dark:hover:text-primary-500'

// Define the reactive state for the openTab and progress
const progress = ref(33);


// Tracking Product details table

// Define the data structure
interface Product {
    ordersID?: string | number;
    productName: string;
    image: string;
    status: string;
    deliveredDate: string;
    ordersDate: string;
    customersName: string;
}

// Define the table logic
const products = ref<Product[]>([]);
const sortBy = ref<string>('');
const sortDirection = ref<'asc' | 'desc'>('asc');
const selectAll = ref<boolean>(false);
const selectedItems = ref<Product[]>([]);
const currentPage = ref<number>(1);
const itemsPerPage = ref<number>(4);



// Computed properties
const totalPages = computed(() => Math.ceil(products.value.length / itemsPerPage.value));
const displayedProducts = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage.value;
    const end = start + itemsPerPage.value;
    return products.value.slice(start, end);
});
const showingStart = computed(() => Math.min((currentPage.value - 1) * itemsPerPage.value + 1, products.value.length));
const showingEnd = computed(() => Math.min(currentPage.value * itemsPerPage.value, products.value.length));

// Methods
function getBadgeClass(status: string): string {
    switch (status) {
        case 'Delivered':
            return 'badge badge-green';
        case 'New':
            return 'badge badge-primary';
        case 'Cancelled':
            return 'badge badge-red';
        case 'Shipping':
            return 'badge badge-purple';
        case 'Pending':
            return 'badge badge-yellow';
        default:
            return '';
    }
}

function toggleAll() {
    selectedItems.value = selectAll.value ? [...products.value] : [];
}

function prevPage() {
    if (currentPage.value > 1) {
        currentPage.value--;
    }
}

function nextPage() {
    if (currentPage.value < totalPages.value) {
        currentPage.value++;
    }
}

function gotoPage(page: number) {
    currentPage.value = page;
}

// Initialize products data
onMounted(() => {
    products.value = orderData;
});
</script>
<template>
    <PageHeading title="Order Track" sub-title="Orders" />
    <div class="card">
        <div class="tabs-pills card-header">
            <h6 class="card-title grow">Order Tracking</h6>
            <div class="shrink-0">
                <ul class="flex gap-2">
                    <li @click="openTab = 1">
                        <a href="javascript:void(0)" :class="openTab === 1 ? activeClasses : inactiveClasses" class="nav-item [&.active]:bg-gray-100 dark:[&.active]:bg-dark-800 [&.active]:text-gray-800 dark:[&.active]:text-dark-50">
                            Overview
                        </a>
                    </li>
                    <li @click="openTab = 2">
                        <a href="javascript:void(0)" :class="openTab === 2 ? activeClasses : inactiveClasses" class="nav-item [&.active]:bg-gray-100 dark:[&.active]:bg-dark-800 [&.active]:text-gray-800 dark:[&.active]:text-dark-50">
                            Map View
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="card-body">
            <div class="w-full mt-4">
                <div v-show="openTab === 1">
                    <div class="grid grid-cols-12 gap-space">
                        <div class="col-span-12 md:col-span-3 xl:col-span-2">
                            <p class="mb-1 text-gray-500 dark:text-dark-500">Order ID</p>
                            <h6>
                                <a href="#!" class="!text-current link link-primary">PEO-14521</a>
                            </h6>
                        </div>
                        <div class="col-span-12 md:col-span-3 xl:col-span-2">
                            <p class="mb-1 text-gray-500 dark:text-dark-500">Delivery Date</p>
                            <h6>08 Sep, 2024</h6>
                        </div>
                        <div class="col-span-12 md:col-span-3 xl:col-span-2">
                            <p class="mb-1 text-gray-500 dark:text-dark-500">Payment Method</p>
                            <span class="badge badge-green">Paid</span>
                        </div>
                        <div class="col-span-12 md:col-span-3 xl:col-span-3">
                            <p class="mb-1 text-gray-500 dark:text-dark-500">Courier Partner</p>
                            <h6>SRBThemes Express</h6>
                        </div>
                        <div class="col-span-12 md:col-span-6 xl:col-span-3">
                            <p class="mb-1 text-gray-500 dark:text-dark-500">Delivery Address</p>
                            <h6>0588 Macey Ranch, Port Blake, China - 96153-1460</h6>
                        </div>
                    </div>

                    <div class="p-5 bg-gray-100 rounded-md mt-space dark:bg-dark-850" dir="ltr">
                        <div class="relative h-32">
                            <!-- Left progress line -->
                            <div class="absolute left-5 inset-y-0 h-32 w-[2px] bg-gray-200 dark:bg-dark-800 before:absolute before:size-3 before:border-4 before:border-white dark:before:border-dark-900 before:bg-green-500 before:rounded-full before:-left-[5px]">
                            </div>

                            <!-- Right progress line -->
                            <div class="absolute right-5 inset-y-0 h-32 w-[2px] bg-gray-200 dark:bg-dark-800 before:absolute before:size-3 before:border-4 before:border-white dark:before:border-dark-900 before:bg-gray-100 dark:before:bg-dark-800 before:rounded-full before:-left-[5px]">
                            </div>

                            <!-- Truck Image with Dynamic Progress -->
                            <div class="relative mx-10">
                                <img src="@/assets/images/others/truck.png" alt="" class="absolute h-24 animate-pulse md:h-auto" :style="'left:' + (progress - 11) + '%'" />
                            </div>

                            <!-- Progress Bar -->
                            <div class="absolute inset-x-0 bottom-0 bg-gray-200 dark:bg-dark-800 progress-bar progress-2">
                                <div :style="'width:' + progress + '%'" class="text-white rounded-full progress-bar-wrap bg-primary-500"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-show="openTab === 2">
                    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-space">
                        <div>
                            <p class="mb-1 text-gray-500 dark:text-dark-500">Order ID</p>
                            <h6><a href="#!" class="!text-current link link-primary">PEO-14521</a></h6>
                        </div>
                        <div>
                            <p class="mb-1 text-gray-500 dark:text-dark-500">Order Status</p>
                            <span class="badge badge-purple">Shipping</span>
                        </div>
                        <div>
                            <p class="mb-1 text-gray-500 dark:text-dark-500">Delivery Date</p>
                            <h6>08 Sep, 2024</h6>
                        </div>
                        <div>
                            <p class="mb-1 text-gray-500 dark:text-dark-500">Courier Partner</p>
                            <h6>SRBThemes Express</h6>
                        </div>
                        <div>
                            <p class="mb-1 text-gray-500 dark:text-dark-500">Delivery Address</p>
                            <h6>China</h6>
                        </div>
                    </div>
                    <div class="flex justify-center mt-5">
                        <vuevectormap width="" height="288" class="mx-auto mt-space min-h-72" :options="{
                            lineStyle: {
                                stroke: '#676767',
                                strokeWidth: 1.5,
                                fill: '#ff5566',
                                fillOpacity: 1,
                                strokeDasharray: '6 3 6', // OR: [6, 2, 6]
                                animation: true, // Enables animation
                            },
                            markers: [
                                {
                                    name: 'Brazil',
                                    coords: [-14.235, -51.9253],
                                    style: { fill: 'red' },
                                },
                                {
                                    name: 'China',
                                    coords: [34.9727, 105.0324],
                                    style: { fill: 'purple' },
                                }
                            ],
                            lines: [
                                { from: 'Brazil', to: 'China' },]
                        }">
                        </vuevectormap>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="flex items-center mb-5">
        <h6 class="text-16 grow">Recent Orders</h6>
        <div class="shrink-0">
            <RouterLink to="apps-ecommerce-orders-list" class="btn btn-green">
                <span class="align-center">View All Orders </span>
                <MoveRight class="ml-1 ltr:inline-block rtl:hidden size-5" />
                <MoveLeft class="mr-1 rtl:inline-block ltr:hidden size-5" />
            </RouterLink>
        </div>
    </div>

    <div>
        <!-- Orders Table -->
        <div class="grid grid-cols-12 gap-x-5">
            <div v-for="(product, index) in displayedProducts" :key="index" class="col-span-12 md:col-span-6 xl:col-span-3">
                <div class="card">
                    <div class="card-body">
                        <div class="flex items-center gap-2">
                            <p class="text-gray-500 dark:text-dark-500 grow">
                                Orders ID:
                                <a href="#!" class="link link-primary">PEO-{{ product.ordersID }}</a>
                            </p>
                            <div>
                                <span :class="getBadgeClass(product.status)">
                                    {{ product.status }}
                                </span>
                            </div>
                        </div>

                        <div class="flex items-center gap-3 mt-4">
                            <div class="p-1 border border-gray-200 rounded-md dark:border-dark-800 size-16 shrink-0">
                                <img :src="product.image" alt="" />
                            </div>
                            <div class="overflow-hidden grow">
                                <h6 class="mb-1 truncate">
                                    <RouterLink to="apps-ecommerce-product-overview">{{ product.productName }}
                                    </RouterLink>
                                </h6>
                                <RouterLink to="apps-ecommerce-orders-overview" class="underline link link-red">
                                    Show Details
                                    <MoveRight class="ltr:inline-block rtl:hidden size-4"></MoveRight>
                                    <MoveLeft class="rtl:inline-block ltr:hidden size-4"></MoveLeft>
                                </RouterLink>
                            </div>
                        </div>

                        <p class="mt-3 text-gray-500 dark:text-dark-500">Order Expected Date</p>
                        <h6>{{ product.deliveredDate }}</h6>

                        <div class="flex flex-wrap items-center gap-2 mt-4 2xl:flex-nowrap">
                            <a href="apps-ecommerce-orders-overview" class="w-full btn btn-sub-gray">
                                <i class="ltr:mr-0.5 rtl:ml-0.5 align-bottom ri-eye-line"></i> Overview
                            </a>
                            <button class="w-full btn btn-primary">Track Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Pagination -->
        <div class="grid items-center grid-cols-12 gap-5 mb-5">
            <div class="col-span-12 md:col-span-6">
                <p class="text-gray-500 dark:text-dark-500">
                    Showing <b>{{ showingStart }}</b> - <b>{{ showingEnd }}</b> of <b>{{ products.length }}</b> Results
                </p>
            </div>
            <div class="col-span-12 md:col-span-6">
                <div class="flex justify-start md:justify-end pagination pagination-primary">
                    <button @click="prevPage" :disabled="currentPage === 1" class="pagination-pre">
                        <ChevronLeft class="mr-1 ltr:inline-block rtl:hidden size-4"/>
                        <ChevronRight class="ml-1 rtl:inline-block ltr:hidden size-4"/>
                        Prev
                    </button>

                    <button v-for="page in totalPages" :key="page" @click="gotoPage(page)" :class="{ 'active': currentPage === page }" class="pagination-item">
                        <span>{{ page }}</span>
                    </button>

                    <button @click="nextPage" :disabled="currentPage === totalPages" class="pagination-next">
                        Next
                        <ChevronRight class="ml-1 ltr:inline-block rtl:hidden size-4"/>
                        <ChevronLeft class="mr-1 rtl:inline-block ltr:hidden size-4"/>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>