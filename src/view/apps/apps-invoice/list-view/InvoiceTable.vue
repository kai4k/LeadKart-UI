<script setup lang="ts">
import { ref, computed, watch, onMounted } from "vue";
import { invoicesListData } from './list-data';
import type { Invoice } from "./list-data";
import { ChevronLeft, ChevronRight, Ellipsis, Search } from "lucide-vue-next";
import simplebar from "simplebar-vue";
import TableDataNotFount from "../../app-ecommerce/Orders/list-view/TableDataNotFount.vue";
import DeleteModule from "../../apps-email/apps-mailbox/DeleteModule.vue";
import RecentMenuList from "@/view/dashboards/recent-menu-list.vue";
import { dropdownOption } from "../../app-ecommerce/products/grid-view/grid-data-list";
import { useRouter } from "vue-router";

const tableData = ref<Invoice[]>(invoicesListData.value)
const searchTerm = ref("");
const selectedItems = ref<any>([]);
const selectAll = ref(false);
const currentPage = ref(1);
const itemsPerPage = 10;
const sortBy = ref<string>("");
const sortDirection = ref<"asc" | "desc">("asc");

const filteredInvoices = computed(() => {
    if (!searchTerm.value) return tableData.value;
    return tableData.value.filter((invoice) =>
        Object.values(invoice).some((value) =>
            value.toString().toLowerCase().includes(searchTerm.value.toLowerCase())
        )
    );
});

const displayedInvoices = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return filteredInvoices.value.slice(start, end);
});

invoicesListData.value.forEach((data, i) => {
    data.invoicesID = `PEI-${15475 + i}`
})
const showingStart = computed(() => Math.min((currentPage.value - 1) * itemsPerPage + 1, filteredInvoices.value.length));
const showingEnd = computed(() => Math.min(currentPage.value * itemsPerPage, filteredInvoices.value.length));
const totalPages = computed(() => Math.ceil(filteredInvoices.value.length / itemsPerPage));

// Methods
function sortTable(column: string) {
    if (sortBy.value === column) {
        sortDirection.value = sortDirection.value === "asc" ? "desc" : "asc";
    } else {
        sortBy.value = column;
        sortDirection.value = "asc";
    }
    tableData.value.sort((a: any, b: any) => {
        const valueA = a[column as keyof typeof a];
        const valueB = b[column as keyof typeof b];
        if (valueA > valueB) return sortDirection.value === "asc" ? 1 : -1;
        if (valueA < valueB) return sortDirection.value === "asc" ? -1 : 1;
        return 0;
    });
}

function toggleItem(item: any) {
    if (selectedItems.value.includes(item)) {
        selectedItems.value = selectedItems.value.filter((i: any) => i !== item);
    } else {
        selectedItems.value.push(item);
    }
}

function toggleAll() {
    if (selectAll.value) {
        selectedItems.value = [...filteredInvoices.value];
    } else {
        selectedItems.value = [];
    }
}

function deleteSelectedItems() {
    selectedItems.value.forEach((item: any) => {
        const index = tableData.value.findIndex(
            (invoice) => invoice.invoicesID === item.invoicesID
        );
        tableData.value.splice(index, 1);
    });
    selectedItems.value = [];
    selectAll.value = false;
}

function deleteItem(item: any) {
    const index = tableData.value.findIndex(
        (invoice) => invoice?.invoicesID === item.invoicesID
    );
    tableData.value.splice(index, 1);
}

function prevPage() {
    if (currentPage.value > 1) currentPage.value--;
}
const gotoPage = (page: number) => {
    currentPage.value = page;
};

function nextPage() {
    if (currentPage.value < totalPages.value) currentPage.value++;
}

function getSortIndicator(column: string) {
    return sortBy.value === column ? (sortDirection.value === "asc" ? "↑" : "↓") : "";
}
const showDeleteModule = ref(false)
const selectedDetails = ref()
const setDeleteModuleValue = (state: boolean, data?: any) => {
    showDeleteModule.value = state
    selectedDetails.value = data
}
function deleteInvoiceRow() {
    const findIndex = invoicesListData.value.findIndex((item) => item.invoicesID === selectedDetails.value.invoicesID)
    if (findIndex !== -1) {
        invoicesListData.value.splice(findIndex, 1)
    }

}
// Watchers
watch(searchTerm, () => {
    currentPage.value = 1; // Reset to the first page on search
});


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
onMounted(() => {
    invoicesListData.value.forEach((data, index) => data.invoicesID = `	PEI-${index + 15475}`)
})
</script>
<template>
    <div>
        <!-- Header -->
        <div class="justify-between md:flex">
            <div>
                <h6 class="mb-1">All Invoices</h6>
                <p class="text-gray-500 dark:text-dark-500">Manage your invoice</p>
            </div>
            <div>
                <div class="flex flex-wrap items-center gap-5 mt-3 md:mt-0">
                    <!-- Search Input -->
                    <div class="relative group/form grow">
                        <input type="text" class="ltr:pl-9 rtl:pr-9 form-input ltr:group-[&.right]/form:pr-9 rtl:group-[&.right]/form:pl-9 ltr:group-[&.right]/form:pl-4 rtl:group-[&.right]/form:pr-4" placeholder="Search invoice ..." v-model="searchTerm" />
                        <button class="absolute inset-y-0 flex items-center ltr:left-3 rtl:right-3 ltr:group-[&.right]/form:right-3 rtl:group-[&.right]/form:left-3 ltr:group-[&.right]/form:left-auto rtl:group-[&.right]/form:right-auto focus:outline-none">
                            <Search class="text-gray-500 dark:text-dark-500 size-4 fill-gray-100 dark:fill-dark-850" />
                        </button>
                    </div>

                    <!-- Create Invoice Button -->
                    <router-link to="apps-invoice-create" class="btn btn-primary shrink-0">Create Invoice</router-link>
                    <!-- Delete Selected Items Button -->
                    <button class="btn btn-red btn-icon" v-show="selectedItems.length > 0" @click="deleteSelectedItems">
                        <i class="ri-delete-bin-line"></i>
                    </button>
                </div>
            </div>
        </div>

        <!-- Table -->
        <simplebar>
            <table class="table !border-separate hovered flush !border-spacing-y-2 whitespace-nowrap">
                <thead>
                    <tr class="text-gray-500 bg-gray-100 dark:bg-dark-850 dark:text-dark-500">
                        <th class="!font-medium">
                            <div class="input-check-group">
                                <label for="checkboxAll" class="hidden input-check-label"></label>
                                <input type="checkbox" class="input-check input-check-primary" v-model="selectAll" @change="toggleAll" />
                            </div>
                        </th>
                        <th @click="sortTable('invoicesID')" class="!font-medium cursor-pointer">
                            ID <span>{{ getSortIndicator('invoicesID') }}</span>
                        </th>
                        <th @click="sortTable('clientName')" class="!font-medium cursor-pointer">
                            Client <span>{{ getSortIndicator('clientName') }}</span>
                        </th>
                        <th @click="sortTable('country')" class="!font-medium cursor-pointer">
                            Country <span>{{ getSortIndicator('country') }}</span>
                        </th>
                        <th @click="sortTable('invoiceDate')" class="!font-medium cursor-pointer">
                            Invoice Date <span>{{ getSortIndicator('invoiceDate') }}</span>
                        </th>
                        <th @click="sortTable('dueDate')" class="!font-medium cursor-pointer">
                            Due Date <span>{{ getSortIndicator('dueDate') }}</span>
                        </th>
                        <th @click="sortTable('amount')" class="!font-medium cursor-pointer">
                            Amount <span>{{ getSortIndicator('amount') }}</span>
                        </th>
                        <th @click="sortTable('status')" class="!font-medium cursor-pointer">
                            status <span>{{ getSortIndicator('status') }}</span>
                        </th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(invoice, index) in displayedInvoices" :key="index">
                        <td>
                            <div class="input-check-group">
                                <label for="checkbox" class="hidden input-check-label"></label>
                                <input type="checkbox" class="input-check input-check-primary" :checked="selectedItems.includes(invoice)" @change="toggleItem(invoice)" />
                            </div>
                        </td>
                        <td>{{ invoice.invoicesID }}</td>
                        <td>
                            <div class="flex items-center gap-2">
                                <img :src="invoice.image" alt="user" class="rounded-full shrink-0 size-7">
                                <a href="#!" class="!text-current link link-primary grow" x-text="invoice.clientName">{{
                                    invoice.clientName }}</a>
                            </div>
                        </td>
                        <td>{{ invoice.country }}</td>
                        <td>{{ invoice.invoiceDate }}</td>
                        <td>{{ invoice.dueDate }}</td>
                        <td>{{ invoice.amount }}</td>
                        <td>
                            <span class="badge" :class="{
                                ' badge-green': invoice.status === 'Paid',
                                'badge-pink': invoice.status === 'Unpaid',
                                'badge-yellow': invoice.status === 'Pending',
                                'badge-red': invoice.status === 'Overdue',
                            }">
                                {{ invoice.status }}
                            </span>
                        </td>
                        <td>
                            <RecentMenuList :title="Ellipsis" :showArrow="false" className="" extraClass="set-position" :arrayList="dropdownOption" mainCss="" iconCss="rotate-90 size-4" menuIconCss="size-4" @handleAction="(option) => handleTableActivity(option, invoice)" />
                        </td>
                    </tr>

                    <tr v-if="displayedInvoices.length === 0">
                        <TableDataNotFount />
                    </tr>
                </tbody>
            </table>
        </simplebar>

        <!-- Pagination -->
        <div v-show="displayedInvoices.length > 0" class="grid items-center grid-cols-12 gap-5 mt-3 mb-5">
            <div class="flex flex-wrap justify-center col-span-12 md:col-span-6 md:justify-start">
                <p class="text-gray-500 dark:text-dark-500 ltr:pr-1 rtl:pl-1">
                    Showing <b> {{ showingStart }}</b> - <b> {{ showingEnd }} </b> of <b> {{ filteredInvoices.length }}</b> Results
                </p>
            </div>
            <div class="col-span-12 md:col-span-6">
                <div class="flex justify-center md:justify-end pagination pagination-primary">
                    <button @click="prevPage" :disabled="currentPage === 1" class="pagination-pre">
                        <ChevronLeft class="mr-1 ltr:inline-block rtl:hidden size-4" />
                        <ChevronRight class="ml-1 ltr:hidden rtl:inline-block size-4" />Prev
                    </button>
                    <template v-for="page in totalPages" :key="page">
                        <button :class="{ 'active': currentPage === page }" class="pagination-item" @click="gotoPage(page)">
                            <span>{{ page }}</span>
                        </button>
                    </template>
                    <button class="pagination-next" @click="nextPage" :disabled="currentPage === totalPages">
                        Next
                        <ChevronRight class="ml-1 ltr:inline-block rtl:hidden size-4" />
                        <ChevronLeft class="mr-1 ltr:hidden rtl:inline-block size 4" />
                    </button>
                </div>
            </div>
        </div>
    </div>
    <DeleteModule :show-delete-pop="showDeleteModule" :set-delete-modal="setDeleteModuleValue" :delete-row="deleteInvoiceRow" />
</template>