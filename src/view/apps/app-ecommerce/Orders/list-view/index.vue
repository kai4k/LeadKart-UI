<script setup lang="ts">
import PageHeading from '@/components/common/PageHeading.vue';
import { ref, computed, watch, onMounted } from 'vue';
import { ChevronLeft, ChevronRight, Ellipsis, Filter, Plus, Trash } from 'lucide-vue-next';
import TableDataNotFount from './TableDataNotFount.vue';
import AddNewRecord from './AddNewRecord.vue';
import DeleteModule from '@/view/apps/apps-email/apps-mailbox/DeleteModule.vue';
import PreviewOrder from './PreviewOrder.vue';
import { orders, products, type Product } from './over-list-data';
import RecentMenuList from '@/view/dashboards/recent-menu-list.vue';
import { dropdownOption } from '../../products/grid-view/grid-data-list';

// Declare reactive state variables
const activeTab = ref<string>('All Orders');
const orderStatuses = ['All Orders', 'New', 'Pending', 'Delivered', 'Shipping', 'Cancelled'];
const selectedItems = ref<Product[]>([]);
const selectAll = ref(false);


// Handle tab click event
const setActiveTab = (status: string) => {
    activeTab.value = status;
    orderStatus(status); // Call any related action to update orders
};

const currentPage = ref(1);
const itemsPerPage = ref(10);
const sortBy = ref<string>('ordersID');
const sortDirection = ref<'asc' | 'desc'>('asc');
const filteredProducts = ref<Product[]>(products.value);
// some change here
const currentTab = ref('orders');  // default tab

const totalPages = computed(() => Math.ceil(filteredProducts.value.length / itemsPerPage.value));
let displayedProducts = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage.value;
    return filteredProducts.value.slice(start, start + itemsPerPage.value);
});


// Delete selected items (dummy function for now)
const deleteSelectedItems = () => {
    // Filter out the selected items from the original products array
    products.value = products.value.filter(product => !selectedItems.value.includes(product));
    // Ensure that filteredProducts reflect the updated products array
    orderStatus(activeTab.value); // Re-apply filtering based on the current tab
    // Reset selection states
    selectedItems.value = [];
    selectAll.value = false;

};
// Dummy order status function (for handling status updates)
const orderStatus = (status: string) => {
    if (status === 'All Orders') {
        filteredProducts.value = products.value; // Show all products
    } else {
        filteredProducts.value = products.value.filter(product => product.status === status); // Filter by status
    }
    currentPage.value = 1;
};

const showingStart = computed(() => (currentPage.value - 1) * itemsPerPage.value + 1);
const showingEnd = computed(() => Math.min(currentPage.value * itemsPerPage.value, filteredProducts.value.length));

// Sorting function
function sort(column: keyof Product) {
    if (sortBy.value === column) {
        sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc';
    } else {
        sortBy.value = column;
        sortDirection.value = 'asc';
    }

    filteredProducts.value.sort((a, b) => {
        const aValue: any = a[column];
        const bValue: any = b[column];
        if (aValue < bValue) return sortDirection.value === 'asc' ? -1 : 1;
        if (aValue > bValue) return sortDirection.value === 'asc' ? 1 : -1;
        return 0;
    });
}

// Pagination functions
function prevPage() {
    if (currentPage.value > 1) currentPage.value--;
}

function nextPage() {
    if (currentPage.value < totalPages.value) currentPage.value++;
}

function gotoPage(page: number) {
    currentPage.value = page;
}

watch(selectAll, (newVal) => {
    if (newVal) {
        selectedItems.value = [...products.value];
    } else {
        selectedItems.value = [];
    }
});

function toggleItem(product: Product) {
    const index = selectedItems.value.indexOf(product);
    if (index === -1) {
        selectedItems.value.push(product);
    } else {
        selectedItems.value.splice(index, 1);
    }
}
// ---------------------------------------------
const selectedData = ref()
const showAddOrderForm = ref(false)
const showDeleteModule = ref(false);
const showEditModule = ref(false);
const previewData = ref(false);
const setAddOrderFormValue = (state: boolean) => {
    showAddOrderForm.value = state
}
const setDeleteModuleValue = (state: boolean, data?: Product) => {
    showDeleteModule.value = state
    selectedData.value = data;
}
const setEditModuleValue = (state: boolean, data?: Product) => {
    showEditModule.value = state
    selectedData.value = data;
}
const setPreviewDataValue = (state: boolean, data?: Product) => {
    previewData.value = state;
    selectedData.value = data;
}

const deleteRow = () => {
    const findIndex = products.value.findIndex(data => data.ordersID === selectedData.value.ordersID)
    products.value.splice(findIndex, 1)
}

const handleTableActivity = (option: string, data?: Product) => {
    const activity = option.toLowerCase()
    if (activity == 'edit') {
        setEditModuleValue(true, data)
    }
    if (activity == 'overview') {
        setPreviewDataValue(true, data)
    }
    if (activity == 'delete') {
        setDeleteModuleValue(true, data!)
    }
}

onMounted(() => {
    sort(sortBy.value as keyof Product);
});
</script>
<template>
    <PageHeading title="Orders List" sub-title="Orders" />
    <div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5">
            <div v-for="(order, index) in orders" :key="index" :class="[order.class, 'card']">
                <div class="card-body">
                    <h6 class="mb-3">{{ order.title }}</h6>
                    <div class="flex items-center divide-x *:px-3 divide-gray-300 dark:divide-dark-800">
                        <h4 class="ltr:pl-0 rtl:pr-0">{{ order.count }}</h4>
                        <p class="text-gray-500">
                            <span class="font-semibold">
                                <i :class="order.icon"></i>
                                <span>{{ order.percentage }}</span>
                            </span>
                            this months
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div>
        <div class="card">
            <div class="card-body">
                <div class="grid grid-cols-12">
                    <!-- Tabs for Order Status -->
                    <div class="col-span-12 xl:col-span-8">
                        <ul class="flex items-center gap-2 overflow-x-auto">
                            <li v-for="status in orderStatuses" :key="status">
                                <a href="#!" @click.prevent="setActiveTab(status)" :class="{ 'active': activeTab === status }" class="whitespace-nowrap relative block px-4 py-2 font-medium text-center transition duration-200 ease-linear rounded-md text-gray-500 [&.active]:bg-gray-100 dark:[&.active]:bg-dark-850 dark:text-dark-500 hover:text-gray-900 dark:hover:text-dark-50 [&.active]:text-gray-900 dark:[&.active]:text-dark-50">
                                    <span class="align-middle">{{ status }}</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <!-- Action Buttons -->
                    <div class="flex col-span-12 gap-3 mt-4 xl:mt-0 xl:justify-end xl:col-span-4">
                        <button class="btn btn-red btn-icon" v-show="selectedItems.length > 0" @click="deleteSelectedItems">
                            <Trash data-lucide="trash" class="size-4"></Trash>
                        </button>
                        <button class="btn btn-primary" data-modal-target="addOrderModal" @click="showAddOrderForm = true">
                            <Plus data-lucide="plus" class="inline-block mr-1 size-4"></Plus> New Order
                        </button>
                        <button class="btn btn-sub-gray" @click="sort('productName')">
                            <Filter data-lucide="filter" class="inline-block mr-1 size-4"></Filter> Filters
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="pt-0 card-body">
                <div>
                    <div class="max-2xl:overflow-x-auto table-box">
                        <table class="table hovered">
                            <thead>
                                <tr class="text-gray-500 bg-gray-100 dark:bg-dark-850 dark:text-dark-500">
                                    <th class="!font-medium whitespace-nowrap">
                                        <div class="input-check-group">
                                            <label for="checkboxAll" class="hidden input-check-label"></label>
                                            <input id="checkboxAll" class="input-check input-check-primary" type="checkbox" v-model="selectAll" />
                                        </div>
                                    </th>
                                    <th @click="sort('ordersID')" class="!font-medium whitespace-nowrap cursor-pointer">
                                        Order ID <span v-if="sortBy === 'ordersID'">{{ sortDirection === 'asc' ? '↑' :
                                            '↓' }}</span>
                                    </th>
                                    <th @click="sort('ordersDate')" class="!font-medium whitespace-nowrap cursor-pointer">
                                        Order Date <span v-if="sortBy === 'ordersDate'">{{ sortDirection === 'asc' ? '↑'
                                            : '↓' }}</span>
                                    </th>
                                    <th @click="sort('deliveredDate')" class="!font-medium whitespace-nowrap cursor-pointer">
                                        Delivered Date <span v-if="sortBy === 'deliveredDate'">{{ sortDirection ===
                                            'asc' ? '↑' : '↓' }}</span>
                                    </th>
                                    <th @click="sort('customersName')" class="!font-medium whitespace-nowrap cursor-pointer">
                                        Customers <span v-if="sortBy === 'customersName'">{{ sortDirection === 'asc' ?
                                            '↑' : '↓' }}</span>
                                    </th>
                                    <th @click="sort('productName')" class="!font-medium whitespace-nowrap cursor-pointer">
                                        Product <span v-if="sortBy === 'productName'">{{ sortDirection === 'asc' ? '↑' :
                                            '↓' }}</span>
                                    </th>
                                    <th @click="sort('payment')" class="!font-medium whitespace-nowrap cursor-pointer">
                                        Payment <span v-if="sortBy === 'payment'">{{ sortDirection === 'asc' ? '↑' : '↓'
                                            }}</span>
                                    </th>
                                    <th @click="sort('total')" class="!font-medium whitespace-nowrap cursor-pointer">
                                        Total <span v-if="sortBy === 'total'">{{ sortDirection === 'asc' ? '↑' : '↓'
                                            }}</span>
                                    </th>
                                    <th @click="sort('qty')" class="!font-medium whitespace-nowrap cursor-pointer">
                                        QTY <span v-if="sortBy === 'qty'">{{ sortDirection === 'asc' ? '↑' : '↓'
                                            }}</span>
                                    </th>
                                    <th @click="sort('status')" class="!font-medium whitespace-nowrap cursor-pointer">
                                        status <span v-if="sortBy === 'status'">{{ sortDirection === 'asc' ? '↑' : '↓'
                                            }}</span>
                                    </th>
                                    <th class="!font-medium whitespace-nowrap">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(product, index) in displayedProducts" :key="product.ordersID">
                                    <td class="whitespace-nowrap">
                                        <div class="input-check-group">
                                            <label :for="`orders${index}`" class="hidden input-check-label"></label>
                                            <input :id="`orders${index}`" class="input-check input-check-primary" type="checkbox" @click="toggleItem(product)" :checked="selectedItems.includes(product)" />
                                        </div>
                                    </td>
                                    <td class="whitespace-nowrap">
                                        <a href="#!" class="link link-primary">PEO-{{ product.ordersID }}</a>
                                    </td>
                                    <td class="whitespace-nowrap">{{ product.ordersDate }}</td>
                                    <td class="whitespace-nowrap">{{ product.deliveredDate }}</td>
                                    <td class="whitespace-nowrap">{{ product.customersName }}</td>
                                    <td class="whitespace-nowrap">{{ product.productName }}</td>
                                    <td class="whitespace-nowrap">
                                        <span :class="{
                                            'badge badge-green': product.payment === 'Paid',
                                            'badge badge-gray': product.payment === 'COD',
                                            'badge badge-red': product.payment === 'Unpaid'
                                        }">{{ product.payment }}</span>
                                    </td>
                                    <td class="whitespace-nowrap">{{ product.total }}</td>
                                    <td class="whitespace-nowrap">{{ product.qty }}</td>
                                    <td class="whitespace-nowrap">
                                        <span :class="{
                                            'badge badge-green': product.status === 'Delivered',
                                            'badge badge-primary': product.status === 'New',
                                            'badge badge-red': product.status === 'Cancelled',
                                            'badge badge-purple': product.status === 'Shipping',
                                            'badge badge-yellow': product.status === 'Pending'
                                        }">{{ product.status }}</span>
                                    </td>
                                    <td class="whitespace-nowrap">
                                        <RecentMenuList :title="Ellipsis" :showArrow="false" className="" extraClass="mange-table-position" :arrayList="dropdownOption" mainCss="" iconCss="rotate-90 size-4" @handleAction="(option) => handleTableActivity(option, product)" />
                                    </td>
                                </tr>
                                <tr v-if="displayedProducts.length === 0">
                                    <TableDataNotFount :colspan="11" />
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <!-- Pagination  -->
                    <div v-if="displayedProducts.length !== 0" class="grid items-center grid-cols-12 gap-5 mt-5">
                        <div class="flex flex-wrap justify-center col-span-12 lg:col-span-6 lg:justify-start">
                            <p class="text-gray-500 dark:text-dark-500 ltr:pr-1 rtl:pl-1">Showing <b>{{ showingStart }}</b> - <b>{{ showingEnd }}</b> of
                                <b>{{ filteredProducts.length }}</b> Results
                            </p>
                            <span v-if="selectedItems.length > 0"><b>{{ selectedItems.length }}</b> Row Selected</span>
                        </div>
                        <div class="col-span-12 md:col-span-6">
                            <div class="flex justify-center lg:justify-end pagination pagination-primary">
                                <button @click="prevPage" :disabled="currentPage === 1" class="pagination-pre">
                                    <ChevronLeft class="mr-1 ltr:inline-block rtl:hidden size-4" />
                                    <ChevronRight class="ml-1 ltr:hidden rtl:inline-block size-4" />
                                    Prev
                                </button>
                                <button v-for="page in totalPages" :key="page" @click="gotoPage(page)" :class="{ 'active': currentPage === page }" class="pagination-item">
                                    {{ page }}
                                </button>
                                <button @click="nextPage" :disabled="currentPage === totalPages" class="pagination-next">Next
                                    <ChevronRight class="ml-1 ltr:inline-block rtl:hidden size-4"/>
                                    <ChevronLeft class="mr-1 ltr:hidden rtl:inline-block size-4"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <AddNewRecord :showAddOrderForm="showAddOrderForm" :setAddOrderFormValue="setAddOrderFormValue" :getFormData="selectedData" :showEditForm="showEditModule" :setEditFormValue="setEditModuleValue" />
    </div>

    <DeleteModule :showDeletePop="showDeleteModule" :setDeleteModal="setDeleteModuleValue" :delete-row="deleteRow" />
    <PreviewOrder :previewData="selectedData" :set-module-value="setPreviewDataValue" :show-module="previewData" />
</template>

<style>
@media screen and (max-width: 1480px) {
    .setPosition {
        position: absolute;
        left: -122px !important;
    }
}
</style>