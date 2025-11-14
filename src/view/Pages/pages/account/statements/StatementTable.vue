<script setup lang="ts">
import { Activity, ChevronLeft, ChevronRight, HandCoins } from 'lucide-vue-next';
import { ref, computed } from 'vue';
import products from './statement-data';
import WithdrawPage from './WithdrawPage.vue';
import RecentMenuList from '@/view/dashboards/recent-menu-list.vue';
interface Product {
    statementsID: string;
    date: string;
    name: string;
    details: string;
    totalAmount: string;
}

const sortBy = ref<keyof Product>('statementsID');
const sortDirection = ref<'asc' | 'desc'>('asc');
const currentPage = ref(1);
const itemsPerPage = 10;
const showWithdrawPage = ref(false);
const setWithdrawPageValue = (stats: boolean) => {
    showWithdrawPage.value = stats
}
const totalPages = computed(() => Math.ceil(products.value.length / itemsPerPage));
const showingStart = computed(() => (currentPage.value - 1) * itemsPerPage + 1);
const showingEnd = computed(() => Math.min(currentPage.value * itemsPerPage, products.value.length));

const sortedProducts = computed(() => {
    return [...products.value].sort((a, b) => {
        const valueA = a[sortBy.value];
        const valueB = b[sortBy.value];
        const comparison = valueA > valueB ? 1 : valueA < valueB ? -1 : 0;
        return sortDirection.value === 'asc' ? comparison : -comparison;
    });
});

const paginatedData = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    return sortedProducts.value.slice(start, start + itemsPerPage);
});

function sort(column: keyof Product) {
    if (sortBy.value === column) {
        sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc';
    } else {
        sortBy.value = column;
        sortDirection.value = 'asc';
    }
}

function prevPage() {
    if (currentPage.value > 1) currentPage.value--;
}

function nextPage() {
    if (currentPage.value < totalPages.value) currentPage.value++;
}

function gotoPage(page: number) {
    currentPage.value = page;
}
</script>
<template>
    <div class="mt-5 card">
        <div class="card-header">
            <div class="flex flex-wrap items-center gap-3">
                <h6 class="card-title grow">Earnings</h6>
                <button @click="setWithdrawPageValue(true)" class="btn btn-primary shrink-0">Withdraw $5,879</button>
            </div>
        </div>
        <div class="card-body">
            <p class="mb-3 text-gray-500 dark:text-dark-500">
                Earnings calculated for the last <span class="font-medium text-primary-500">30</span> days.
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-3">
                <div class="card">
                    <div class="text-center card-body">
                        <HandCoins class="mx-auto text-primary-500 fill-primary-100 size-6"></HandCoins>
                        <h6 class="mt-3 mb-1">$5,487</h6>
                        <p class="text-gray-500 dark:text-dark-500">Net Earnings</p>
                    </div>
                </div>
                <div class="card">
                    <div class="text-center card-body">
                        <Activity class="mx-auto text-red-500 fill-red-100 size-6"></Activity>
                        <h6 class="mt-3 mb-1">$296.81</h6>
                        <p class="text-gray-500 dark:text-dark-500">Fees & Charges</p>
                    </div>
                </div>
            </div>

            <div class="flex items-center gap-3 mb-5">
                <h6 class="card-title grow">Statements</h6>
                <RecentMenuList :title="() => 'Filters'" :list="['Date', 'Amount']" className="flex px-3 py-1.5 text-xs border-gray-200 dark:border-dark-800 link link-primary btn" iconCss="ml-1" extraClass="transition-transform duration-300" />
            </div>

            <div>
                <div class="overflow-x-auto table-box">
                    <table class="table">
                        <thead>
                            <tr class="text-gray-500 bg-gray-100 dark:bg-dark-850">
                                <th @click="sort('statementsID')" class="whitespace-nowrap !font-medium text-gray-500 dark:text-dark-500 cursor-pointer">
                                    ID</th>
                                <th @click="sort('date')" class="whitespace-nowrap !font-medium text-gray-500 dark:text-dark-500 cursor-pointer">
                                    Date</th>
                                <th @click="sort('name')" class="whitespace-nowrap !font-medium text-gray-500 dark:text-dark-500 cursor-pointer">
                                    Name</th>
                                <th @click="sort('details')" class="whitespace-nowrap !font-medium text-gray-500 dark:text-dark-500 cursor-pointer">
                                    Details</th>
                                <th @click="sort('totalAmount')" class="cursor-pointer">Amount</th>
                                <th class="!font-medium text-gray-500 dark:text-dark-500 ltr:!text-right rtl:!text-left">
                                    Download Invoice</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(product, index) in paginatedData" :key="index">
                                <td>{{ product.statementsID }}</td>
                                <td>{{ product.date }}</td>
                                <td>{{ product.name }}</td>
                                <td>{{ product.details }}</td>
                                <td>{{ product.totalAmount }}</td>
                                <td class="ltr:text-right rtl:text-left">
                                    <a href="#!" class="btn btn-md btn-primary">
                                        <i class="align-bottom ri-download-2-line"></i> Download
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="grid items-center grid-cols-12 gap-5 mt-5">
                    <div class="flex flex-wrap justify-center col-span-12 md:col-span-6 md:justify-start">
                        <p class="text-gray-500 dark:text-dark-500">
                            Showing <b>{{ showingStart }}</b> - <b>{{ showingEnd }}</b> of <b>{{ products.length }}</b>
                            Results
                        </p>
                    </div>
                    <div class="col-span-12 md:col-span-6">
                        <div class="flex justify-center md:justify-end pagination pagination-primary">
                            <button @click="prevPage" :disabled="currentPage === 1" class="pagination-pre">
                                <ChevronLeft class="mr-1 ltr:inline-block rtl:hidden size-5" />
                                <ChevronRight class="ml-1 ltr:hidden rtl:inline-block size-5" />
                                Prev
                            </button>
                            <button v-for="page in totalPages" :key="page" @click="gotoPage(page)" :class="{ active: currentPage === page }" class="pagination-item">
                                {{ page }}
                            </button>
                            <button @click="nextPage" :disabled="currentPage === totalPages" class="pagination-next">Next
                                <ChevronRight class="ml-1 rtl:hidden size-5 ltr:inline-block" />
                                <ChevronLeft class="mr-1 rtl:inline-block ltr:hidden size-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <WithdrawPage :showModule="showWithdrawPage" :setShowModuleValue="setWithdrawPageValue" />
</template>