<script setup lang="ts">
import { ref, computed } from 'vue';
import { invoicesListData } from '../list-view/list-data';
import type { Invoice } from '../list-view/list-data';
import DeleteModule from '../../apps-email/apps-mailbox/DeleteModule.vue';
import { ChevronLeft, ChevronRight, Ellipsis } from 'lucide-vue-next';
import { dropdownOption } from '../../app-ecommerce/products/grid-view/grid-data-list';
import RecentMenuList from '@/view/dashboards/recent-menu-list.vue';
import { useRouter } from 'vue-router';
const invoices = ref<Invoice[]>(invoicesListData.value);
const selectedFilter = ref<string>('');
const currentPage = ref<number>(1);
const itemsPerPage = 8;

// Computed properties
const totalPages = computed(() => Math.ceil(invoicesListData.value.length / itemsPerPage));
const displayedInvoices = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    return invoicesListData.value.slice(start, start + itemsPerPage);
});
const showingStart = computed(() => (currentPage.value - 1) * itemsPerPage + 1);
const showingEnd = computed(() => Math.min(currentPage.value * itemsPerPage, invoicesListData.value.length));

// Methods
function filterInvoices() {
    invoicesListData.value = invoices.value.filter(invoice => !selectedFilter.value || invoice.status === selectedFilter.value);
    currentPage.value = 1;
}

function statusClass(status: string) {
    return {
        'badge-green': status === 'Paid',
        'badge-pink': status === 'Unpaid',
        'badge-yellow': status === 'Pending',
        'badge-red': status === 'Overdue',
    };
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

// Initialize filteredInvoices
filterInvoices();

invoicesListData.value.forEach((data, i) => {
    return data.invoicesID = `PEI-${15475 + i}`
})

// delete module
const showDeleteModule = ref(false);
const selectedDetails = ref()
const setDeleteModuleValue = (state: boolean, data?: any) => {
    showDeleteModule.value = state
    selectedDetails.value = data
}

const deleteRow = () => {
    const findIndex = invoicesListData.value.findIndex(item => item.invoicesID === selectedDetails.value.invoicesID);
    invoicesListData.value.splice(findIndex, 1)

}

const router = useRouter()
const handleTableActivity = (option: string, data?: Invoice) => {
    const activity = option.toLowerCase()
    if (activity == 'overview') {
        router.push('/apps-invoice-overview-1')
    }
    if (activity == 'edit') {

    }
    if (activity == 'delete') {
        setDeleteModuleValue(true, data)
    }
}

</script>
<template>
    <div>
        <!-- Header Section -->
        <div class="flex flex-col gap-3 mb-4 space-y-3 md:items-center md:flex-row md:space-y-0">
            <div class="grow">
                <h6 class="mb-1">All Invoices</h6>
                <p class="text-gray-500 dark:text-dark-500">Manage your invoice</p>
            </div>
            <div class="w-44 shrink-0">
                <select id="sampleSelect" v-model="selectedFilter" class="form-select" @change="filterInvoices">
                    <option value="">All</option>
                    <option value="Paid">Paid</option>
                    <option value="Unpaid">Unpaid</option>
                    <option value="Pending">Pending</option>
                    <option value="Overdue">Overdue</option>
                </select>
            </div>
            <!-- @click="openFilters" -->
            <button class="btn btn-sub-gray shrink-0">Filters</button>
            <router-link to="apps-invoice-create" class="btn btn-primary shrink-0">Create Invoice</router-link>
        </div>

        <!-- Invoice Cards Section -->
        <div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-x-5">
            <div v-for="(invoice, index) in displayedInvoices" :key="index" class="card">
                <div class="card-body">
                    <div class="flex items-center mb-4">
                        <h6 class="grow">Invoice <span>{{ invoice.invoicesID }}</span></h6>
                        <RecentMenuList :title="Ellipsis" :showArrow="false" className="" extraClass="set-position" :arrayList="dropdownOption" mainCss="" iconCss="size-4" menuIconCss="size-4" @handleAction="(option) => handleTableActivity(option, invoice)" />
                    </div>

                    <div class="p-3 border border-gray-200 rounded-md dark:border-dark-800">
                        <p class="mb-2 text-gray-500 dark:text-dark-500">{{ invoice.content }}</p>
                        <div class="grid grid-cols-2">
                            <div class="p-2 text-center border-r border-gray-200 dark:border-dark-800">
                                <h6 class="mb-1">{{ invoice.amount }}</h6>
                                <p class="text-gray-500 dark:text-dark-500">Total Amount</p>
                            </div>
                            <div class="p-2 text-center">
                                <h6 class="mb-1">{{ invoice.dueDate }}</h6>
                                <p class="text-gray-500 dark:text-dark-500">Due Date</p>
                            </div>
                        </div>
                    </div>

                    <div class="mt-4">
                        <div class="flex items-center gap-2">
                            <img :src="invoice.image" alt="" class="rounded-full shrink-0 size-8" />
                            <a href="#!" class="!font-medium !text-current link link-primary grow">
                                {{ invoice.clientName }}
                            </a>
                            <span class="badge" :class="statusClass(invoice.status)">{{ invoice.status }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Pagination Section -->
        <div class="grid items-center grid-cols-12 gap-5 mb-5" v-if="displayedInvoices.length > 0">
            <div class="col-span-12 text-center lg:col-span-5 ltr:lg:text-left rtl:lg:text-right">
                <p class="text-gray-500 dark:text-dark-500">
                    Showing <b>{{ showingStart }}</b> - <b>{{ showingEnd }}</b> of <b>{{ invoicesListData.length }}</b>
                    Results
                </p>
            </div>
            <div class="col-span-12 lg:col-span-7">
                <div class="flex justify-center lg:justify-end pagination pagination-primary">
                    <button @click="prevPage" :disabled="currentPage === 1" class="pagination-pre">
                        <ChevronLeft class="mr-1 ltr:inline-block rtl:hidden size-4" />
                        <ChevronRight class="ml-1 ltr:hidden rtl:inline-block size-4" />
                        Prev
                    </button>
                    <button v-for="page in totalPages" :key="page" @click="gotoPage(page)" :class="{ active: currentPage === page }" class="pagination-item">{{ page }}</button>
                    <button @click="nextPage" :disabled="currentPage === totalPages" class="pagination-next">Next
                        <ChevronRight class="ml-1 ltr:inline-block rtl:hidden size-4" />
                        <ChevronLeft class="mr-1 ltr:hidden rtl:inline-block size-4" />
                    </button>
                </div>
            </div>
        </div>

        <DeleteModule :showDeletePop="showDeleteModule" :setDeleteModal="setDeleteModuleValue" :deleteRow="deleteRow" />
    </div>
</template>