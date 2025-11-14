<script setup lang="ts">
import { ref, computed, defineProps, onMounted } from 'vue';
import { categoryData, type CategoryType } from './category-data';
import TableDataNotFount from '../../Orders/list-view/TableDataNotFount.vue';
import DeleteModule from '@/view/apps/apps-email/apps-mailbox/DeleteModule.vue';
import { ChevronLeft, ChevronRight, Ellipsis } from 'lucide-vue-next';
import RecentMenuList from '@/view/dashboards/recent-menu-list.vue';
import { dropdownOption } from '../grid-view/grid-data-list';
const props = defineProps({
    setSelectedItems: Function,
    setDeleteModule: Function,
    searchQuery: {
        type: String,
        default: '',
    },
    sendData: {
        type: Function,
        default: () => ({}),
    }
});

const selectAll = ref(false);

// State management
const products = ref(categoryData);
const selectedItems = ref<CategoryType[]>([]);
const sortBy = ref<string>('productID');
const sortDirection = ref<'asc' | 'desc'>('asc');
const currentPage = ref<number>(1);
const itemsPerPage = 10;

// Computed properties
const totalPages = computed(() => Math.ceil(filteredProducts.value.length / itemsPerPage));
const displayedProducts = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return filteredProducts.value.slice(start, end);
});
const filteredProducts = computed(() => {
    if (props.searchQuery) {
        return products.value.filter(product =>
            product.category.toLowerCase().includes(props.searchQuery.toLowerCase()) ||
            product.products.toString().toLowerCase().includes(props.searchQuery.toLowerCase())
        );
    }
    return products.value;
});
const showingStart = computed(() => (currentPage.value - 1) * itemsPerPage + 1);
const showingEnd = computed(() => Math.min(currentPage.value * itemsPerPage, products.value.length));

// Methods
const toggleAll = () => {
    if (selectedItems.value.length === products.value.length) {
        selectedItems.value = [];
        selectAll.value = false;
        if (props.setSelectedItems) props.setSelectedItems(selectedItems.value);
    } else {
        selectedItems.value = [...products.value];
        selectAll.value = true;
        if (props.setSelectedItems) props.setSelectedItems(selectedItems.value);
    }
};

const toggleItem = (product: CategoryType) => {
    if (selectedItems.value.includes(product)) {
        selectedItems.value = selectedItems.value.filter(item => item !== product);
        if (props.setSelectedItems) props.setSelectedItems(selectedItems.value);
    } else {
        selectedItems.value.push(product);
        if (props.setSelectedItems) props.setSelectedItems(selectedItems.value);
    }
};

const sort = (key: string) => {
    sortDirection.value = (sortBy.value === key && sortDirection.value === 'asc') ? 'desc' : 'asc';
    sortBy.value = key;
    products.value.sort((a: any, b: any) => {
        const modifier = sortDirection.value === 'asc' ? 1 : -1;
        return a[key] > b[key] ? modifier : -modifier;
    });
};

const nextPage = () => {
    if (currentPage.value < totalPages.value) currentPage.value++;
};

const prevPage = () => {
    if (currentPage.value > 1) currentPage.value--;
};

const gotoPage = (page: number) => {
    currentPage.value = page;
};
// ----------------------- Table Activity --------------
const selectedDetails = ref()
const showDeleteModule = ref(false);
const setDeleteModuleValue = (state: boolean, data?: CategoryType) => {
    showDeleteModule.value = state;
    selectedDetails.value = data
}

const deleteCategoryRow = () => {
    const index = categoryData.value.findIndex(data => data.productID == selectedDetails.value.productID);
    categoryData.value.splice(index, 1);
}

const handleTableActivity = (option: string, data?: CategoryType) => {
    const activity = option.toLowerCase()
    if (activity == 'edit') {
        props.sendData(false, data)
    }
    if (activity == 'delete') {
        setDeleteModuleValue(true, data!)
    }
}

onMounted(() => {
    sort(sortBy.value);
})
</script>

<template>
    <div class="pt-0 card-body">
        <div>
            <!-- Search Input -->
            <div class=" table-box">
                <table class="table hovered">
                    <tbody>
                        <tr class="text-gray-500 bg-gray-100 dark:bg-dark-850 dark:text-dark-500">
                            <th class="!font-medium">
                                <div class="input-check-group">
                                    <label for="checkboxAll" class="hidden input-check-label"></label>
                                    <input id="checkboxAll" class="input-check input-check-primary" type="checkbox" v-model="selectAll" @click="toggleAll" />
                                </div>
                            </th>
                            <th @click="sort('productID')" class="!font-medium cursor-pointer">Category ID <span v-show="sortBy === 'productID'" v-text="sortDirection === 'asc' ? '↑' : '↓'"></span>
                            </th>
                            <th @click="sort('productName')" class="!font-medium cursor-pointer">Category Name <span v-show="sortBy === 'productName'" v-text="sortDirection === 'asc' ? '↑' : '↓'"></span></th>
                            <th @click="sort('qty')" class="!font-medium cursor-pointer">Products <span v-show="sortBy === 'qty'" v-text="sortBy === 'asc' ? '↑' : '↓'"></span></th>
                            <th @click="sort('status')" class="!font-medium cursor-pointer">status <span v-show="sortBy === 'status'" v-text="sortDirection === 'asc' ? '↑' : '↓'"></span>
                            </th>
                            <th class="!font-medium">Action</th>
                        </tr>

                        <template v-if="displayedProducts.length > 0">
                            <template v-for="(product, index) in displayedProducts" :key="index">
                                <tr>
                                    <td class="whitespace-nowrap">
                                        <div class="input-check-group">
                                            <label :for="`product${index}`" class="hidden input-check-label"></label>
                                            <input :id="`product${index}`" class="input-check input-check-primary" type="checkbox" @click="toggleItem(product)" :checked="selectedItems.includes(product)" />
                                        </div>
                                    </td>
                                    <td class="whitespace-nowrap">
                                        <a href="#!" class="link link-primary">PEC-{{ product.productID }}</a>
                                    </td>
                                    <td class="whitespace-nowrap">
                                        <div class="flex items-center gap-2">
                                            <div class="flex items-center justify-center p-1 border border-gray-200 rounded size-9 dark:border-dark-800 shrink-0">
                                                <img :src="product.image" alt="" class="rounded" />
                                            </div>
                                            <h6><a href="apps-ecommerce-product-overview" v-text="product.category"></a>
                                            </h6>
                                        </div>
                                    </td>
                                    <td v-text="product.products"></td>
                                    <td class="whitespace-nowrap">
                                        <span v-text="product.status" :class="{
                                            'badge badge-green': product.status === 'Active',
                                            'badge badge-gray': product.status === 'Inactive'
                                        }"></span>
                                    </td>
                                    <td class="whitespace-nowrap">
                                        <RecentMenuList :title="Ellipsis" :showArrow="false" className="" extraClass="mange-table-position" :arrayList="dropdownOption" mainCss="" iconCss="rotate-90 size-4" @handleAction="(option) => handleTableActivity(option, product)" />
                                    </td>
                                </tr>
                            </template>
                        </template>

                        <tr>
                            <template v-if="categoryData.length == 0">
                                <TableDataNotFount />
                            </template>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- pagination -->
            <div class="grid items-center grid-cols-12 mt-3 gap-space" v-show="categoryData.length !== 0">
                <div class="flex flex-wrap justify-center col-span-12 xl:col-span-5 ltr:xl:justify-start">
                    <p class="text-gray-500 dark:text-dark-500 ltr:pr-1 rtl:pl-1">Showing <b>{{ showingStart }}</b> - <b>{{ showingEnd
                            }}</b> of <b>{{
                                filteredProducts.length }}</b> Results</p>
                    <span v-show="selectedItems.length > 0"><b>{{ selectedItems.length }}</b> Row Selected</span>
                </div>
                <div class="col-span-12 md:col-span-7">
                    <div class="flex justify-center xl:justify-end pagination pagination-primary">
                        <button @click="prevPage()" :disabled="currentPage === 1" class="pagination-pre">
                            <ChevronLeft class="mr-1 ltr:inline-block rtl:hidden size-4" />
                            <ChevronRight class="ml-1 ltr:hidden rtl:inline-block size-4" />
                            Prev
                        </button>
                        <template v-for="page in totalPages" :key="page">
                            <button @click="gotoPage(page)" :class="{ 'active': currentPage === page }" class="pagination-item">
                                <span>{{ page }}</span>
                            </button>
                        </template>
                        <button @click="nextPage()" :disabled="currentPage === totalPages" class="pagination-next">Next
                            <ChevronRight class="ml-1 ltr:inline-block rtl:hidden size-4" />
                            <ChevronLeft class="mr-1 ltr:hidden rtl:inline-block size-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <DeleteModule :showDeletePop="showDeleteModule" :setDeleteModal="setDeleteModuleValue" :deleteRow="deleteCategoryRow" />
</template>
