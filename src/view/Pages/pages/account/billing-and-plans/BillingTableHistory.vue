<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { accountBilling } from './billing-history-data';
import { ChevronLeft, ChevronRight, Search } from 'lucide-vue-next';
// Define the accountBilling type and data
type BillingHistory = {
    statementsID: string;
    paymentDate: string;
    plan: string;
    paymentType: string;
    amount: string;
    status: string;
};

const products = ref<BillingHistory[]>(accountBilling);
const sortBy = ref<string>('');
const sortDirection = ref<'asc' | 'desc'>('asc');
const currentPage = ref<number>(1);
const itemsPerPage = ref<number>(10);
const searchQuery = ref<string>('');

const filteredProducts = computed(() => {
    return products.value.filter(product =>
        product.statementsID.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        product.paymentDate.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        product.plan.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        product.paymentType.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        product.amount.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        product.status.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
});

const totalPages = computed(() => Math.ceil(filteredProducts.value.length / itemsPerPage.value));

const displayedProducts = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage.value;
    const end = start + itemsPerPage.value;
    return filteredProducts.value.slice(start, end);
});

const showingStart = computed(() => Math.min((currentPage.value - 1) * itemsPerPage.value + 1, filteredProducts.value.length));
const showingEnd = computed(() => Math.min(currentPage.value * itemsPerPage.value, filteredProducts.value.length));

const sort = (column: keyof BillingHistory) => {
    if (sortBy.value === column) {
        sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc';
    } else {
        sortDirection.value = 'asc';
        sortBy.value = column;
    }

    products.value.sort((a, b) => {
        const valueA = a[column];
        const valueB = b[column];
        let comparison = 0;
        if (valueA > valueB) comparison = 1;
        else if (valueA < valueB) comparison = -1;
        return sortDirection.value === 'desc' ? comparison * -1 : comparison;
    });
};
const prevPage = () => {
    if (currentPage.value > 1) currentPage.value--;
};

const nextPage = () => {
    if (currentPage.value < totalPages.value) currentPage.value++;
};

const gotoPage = (page: number) => {
    currentPage.value = page;
};
</script>
<template>
    <div class="card">
        <div class="card-header">
            <div class="grid items-center grid-cols-12 gap-3">
                <div class="col-span-12 md:col-span-5 xl:col-span-3">
                    <h6 class="card-title">Billing History</h6>
                </div>
                <div class="col-span-12 md:col-span-7 xl:col-span-3 xl:col-start-10">
                    <div class="relative group/form">
                        <input type="email" v-model="searchQuery" class="ltr:pl-9 rtl:pr-9 form-input ltr:group-[&.right]/form:pr-9 rtl:group-[&.right]/form:pl-9 ltr:group-[&.right]/form:pl-4 rtl:group-[&.right]/form:pr-4" placeholder="Search for ..." />
                        <div class="absolute inset-y-0 flex items-center text-gray-500 dark:text-dark-500 ltr:left-3 rtl:right-3">
                            <Search class="size-4"></Search>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-body">
            <div>
                <div class="overflow-x-auto">
                    <table class="table">
                        <thead>
                            <tr class="bg-gray-100 dark:bg-dark-850">
                                <th @click="sort('statementsID')" class="!font-medium text-gray-500 dark:text-dark-500 cursor-pointer whitespace-nowrap">
                                    Billing ID <span v-if="sortBy === 'statementsID'" :class="sortDirection">{{
                                        sortDirection === 'asc' ? '↑' : '↓' }}</span>
                                </th>
                                <th @click="sort('paymentDate')" class="!font-medium text-gray-500 dark:text-dark-500 cursor-pointer whitespace-nowrap">
                                    Payment Date <span v-if="sortBy === 'paymentDate'" :class="sortDirection">{{
                                        sortDirection === 'asc' ? '↑' : '↓' }}</span>
                                </th>
                                <th @click="sort('plan')" class="!font-medium text-gray-500 dark:text-dark-500 cursor-pointer whitespace-nowrap">
                                    Plan <span v-if="sortBy === 'plan'" :class="sortDirection">{{ sortDirection ===
                                        'asc' ? '↑' : '↓' }}</span>
                                </th>
                                <th @click="sort('paymentType')" class="!font-medium text-gray-500 dark:text-dark-500 cursor-pointer whitespace-nowrap">
                                    Payment Type <span v-if="sortBy === 'paymentType'" :class="sortDirection">{{
                                        sortDirection === 'asc' ? '↑' : '↓' }}</span>
                                </th>
                                <th @click="sort('amount')" class="!font-medium text-gray-500 dark:text-dark-500 cursor-pointer whitespace-nowrap">
                                    Amount <span v-if="sortBy === 'amount'" :class="sortDirection">{{ sortDirection ===
                                        'asc' ? '↑' : '↓' }}</span>
                                </th>
                                <th @click="sort('status')" class="!font-medium text-gray-500 dark:text-dark-500 cursor-pointer whitespace-nowrap">
                                    status <span v-if="sortBy === 'status'" :class="sortDirection">{{ sortDirection ===
                                        'asc' ? '↑' : '↓' }}</span>
                                </th>
                                <th class="!font-medium text-gray-500 dark:text-dark-500 ltr:text-right rtl:text-left float-end">
                                    Invoice
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(product, index) in displayedProducts" :key="index">
                                <td><a href="#!" class="link link-primary">{{ product.statementsID }}</a></td>
                                <td>{{ product.paymentDate }}</td>
                                <td>{{ product.plan }}</td>
                                <td>{{ product.paymentType }}</td>
                                <td>{{ product.amount }}</td>
                                <td>
                                    <span :class="{
                                        'badge badge-red': product.status === 'Unpaid',
                                        'badge badge-yellow': product.status === 'Pending',
                                        'badge badge-green': product.status === 'Paid'
                                    }">
                                        {{ product.status }}
                                    </span>
                                </td>
                                <td class="ltr:text-right rtl:text-left">
                                    <a href="#!" title="Download" class="link link-primary"><i class="align-bottom ri-download-2-line"></i></a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="grid items-center grid-cols-12 gap-5 mt-5">
                    <div class="flex flex-wrap justify-center col-span-12 md:col-span-6 md:justify-start">
                        <p class="text-gray-500 dark:text-dark-500">
                            Showing <b>{{ showingStart }}</b> - <b>{{ showingEnd }}</b> of <b>{{ filteredProducts.length
                                }}</b> Results
                        </p>
                    </div>
                    <div class="col-span-12 md:col-span-6">
                        <div class="flex justify-center md:justify-end pagination pagination-primary">
                            <button @click="prevPage" :disabled="currentPage === 1" class="pagination-pre">
                                <ChevronLeft class="mr-1 ltr:inline-block rtl:hidden size-5 ri-chevron-left" />
                                <ChevronRight class="ml-1 ltr:hidden rtl:inline-block size-5 ri-chevron-right" />
                                Prev
                            </button>
                            <button v-for="page in totalPages" :key="page" @click="gotoPage(page)" :class="{ 'active': currentPage === page }" class="pagination-item">
                                <span>{{ page }}</span>
                            </button>
                            <button @click="nextPage" :disabled="currentPage === totalPages" class="pagination-next">
                                Next
                                <ChevronRight class="ml-1 ltr:inline-block rtl:hidden size-5 ri-chevron-right" />
                                <ChevronLeft class="mr-1 ltr:hidden rtl:inline-block size-5 ri-chevron-left" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>