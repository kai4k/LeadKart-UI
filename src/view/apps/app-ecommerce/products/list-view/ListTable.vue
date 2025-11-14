<script setup lang="ts">
import { ref, computed, defineProps, watch } from 'vue';
import TableDataNotFount from '../../Orders/list-view/TableDataNotFount.vue';
import DeleteModule from '@/view/apps/apps-email/apps-mailbox/DeleteModule.vue';
import productListData from './list-data';
import type { Product } from './list-data';
import { ChevronLeft, ChevronRight, Ellipsis, Filter, Search, Trash } from 'lucide-vue-next';
import RecentMenuList from '@/view/dashboards/recent-menu-list.vue';
import { useRouter } from 'vue-router';
import { dropdownOption } from '../grid-view/grid-data-list';
const props = defineProps({
    setSelectedItems: Function,
});

const selectAll = ref(false);
// State management
const products = ref<Product[]>(productListData.value);
const selectedItems = ref<Product[]>([]);
const sortBy = ref<string>('productID');
const searchTerm = ref('');
const selectProductCategory = ref('')
const sortDirection = ref<string>('asc');
const currentPage = ref<number>(1);
const itemsPerPage = ref(10);
const selectedDetails = ref<Product>()
const showDeleteModule = ref(false);
const setDeleteModuleValue = (state: boolean, data: Product) => {
    showDeleteModule.value = state
    selectedDetails.value = data
}
// Computed properties
const totalPages = computed(() => Math.ceil(filteredProducts.value.length / itemsPerPage.value));
const displayedProducts = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage.value;
    const end = start + itemsPerPage.value;
    return filteredProducts.value.slice(start, end);
});


const filteredProducts = computed(() => {
    let result = productListData.value;

    // Apply search filter
    if (searchTerm.value) {
        const query = searchTerm.value.toLowerCase();
        result = result.filter(
            (product) =>
                product.productName.toLowerCase().includes(query) ||
                product.category.toLowerCase().includes(query) ||
                product.productID.toString().includes(query)
        );
    }

    // Apply category filter
    if (selectProductCategory.value && selectProductCategory.value !== 'All') {
        result = result.filter((product) => product.category === selectProductCategory.value);
    }

    return result;
});

const showingStart = computed(() => (currentPage.value - 1) * itemsPerPage.value + 1);
const showingEnd = computed(() => Math.min(currentPage.value * itemsPerPage.value, filteredProducts.value.length));


watch(selectAll, () => {
    if (selectAll.value) {
        selectedItems.value = [...productListData.value]; // Select all items
    } else {
        selectedItems.value = []; // Deselect all items
    }
})

const toggleItem = (product: Product) => {
    if (selectedItems.value.includes(product)) {
        selectedItems.value = selectedItems.value.filter((item: any) => item !== product);
    } else {
        selectedItems.value.push(product);
    }
};

const sort = (key: string) => {
    sortDirection.value = sortBy.value === key && sortDirection.value === 'asc' ? 'desc' : 'asc';
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

const toggleStatus = (product: Product) => {
    product.status = product.status === 'Published' ? 'Inactive' : 'Published';
};

const deleteItem = () => {
    const findIndex = productListData.value.findIndex(data => data.productID == selectedDetails.value?.productID);
    productListData.value.splice(findIndex, 1)
};

// --------------------Table Activity--------------------------- 

const selectedStatus = ref<string[]>([]);
const isDropdownOpen = ref(false);
const open = ref(false);
const deleteSelectedItems = () => {
    productListData.value = productListData.value.filter(contact => !selectedItems.value.includes(contact));
    selectedItems.value = [];
    selectAll.value = false;

};

const selectOptions = [
    { label: "All", value: "All" },
    { label: "Watch", value: "Watch" },
    { label: "Footwear", value: "Footwear" },
    { label: "Fashion", value: "Fashion" },
    { label: "Bags", value: "Bags" },
    { label: "Accessories", value: "Accessories" }
];

const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value;
};
const submitForm = () => {
    // Implement your form submission logic here
};

const closeDropdown = () => {
    isDropdownOpen.value = false;
};

// ===============================

const router = useRouter()
const handleTableActivity = (option: string, data?: Product) => {
    const activity = option.toLowerCase()
    if (activity == 'overview') {
        router.push('/apps-ecommerce-product-overview')
    }
    if (activity == 'edit') {
        router.push('/apps-ecommerce-create-products')
    }
    if (activity == 'delete') {
        setDeleteModuleValue(true, data!)
    }
}

</script>

<template>
    <div class="card-body">
        <div class="flex flex-wrap justify-between gap-2">
            <div>
                <div class="relative group/form">
                    <input type="text" class="ltr:pl-9 rtl:pr-9 form-input ltr:group-[&.right]/form:pr-9 rtl:group-[&.right]/form:pl-9 ltr:group-[&.right]/form:pl-4 rtl:group-[&.right]/form:pr-4" placeholder="Search for ..." v-model="searchTerm" />
                    <div class="absolute inset-y-0 flex items-center text-gray-500 dark:text-dark-500 ltr:left-3 rtl:right-3 ltr:group-[&.right]/form:right-3 rtl:group-[&.right]/form:left-3 ltr:group-[&.right]/form:left-auto rtl:group-[&.right]/form:right-auto focus:outline-none">
                        <Search data-lucide="search" class="size-4"></Search>
                    </div>
                </div>
            </div>
            <div>
                <div class="flex items-center gap-3">
                    <button class="btn btn-red btn-icon shrink-0" v-if="selectedItems.length > 0" @click="deleteSelectedItems">
                        <Trash data-lucide="trash" class="inline-block size-4"></Trash>
                    </button>
                    <select name="" id="" class="form-select grow" placeholder="Select..." v-model="selectProductCategory">
                        <option value="" selected disabled hidden>Select</option>
                        <template v-for="(option, index) in selectOptions" :key="index">
                            <option :value="option.value">{{ option.label }}</option>
                        </template>
                    </select>
                    <div x-data="dropdown()" @keydown.escape.prevent.stop="closeDropdown()" class="dropdown shrink-0">
                        <button x-ref="button" :aria-expanded="open" type="button" class="btn btn-sub-gray" @click="toggleDropdown">
                            <Filter data-lucide="filter" class="inline-block ltr:mr-1 rtl:ml-1 align-center size-4">
                            </Filter>
                            Filters
                        </button>
                        <div v-if="isDropdownOpen" class="p-3 dropdown-menu dropdown-right !w-64 absolute z-10 bg-white shadow-lg">
                            <h6 class="mb-4">Filter Options</h6>
                            <form @submit.prevent="submitForm">
                                <h6 class="mb-2 text-sm">Status</h6>
                                <div class="grid grid-cols-2 gap-4">
                                    <div class="input-check-group">
                                        <input id="publishedCheckboxFilter" class="input-check input-check-primary" type="checkbox" v-model="selectedStatus" value="Published" />
                                        <label for="publishedCheckboxFilter" class="input-check-label">Published</label>
                                    </div>
                                    <div class="input-check-group">
                                        <input id="inactiveCheckboxFilter" class="input-check input-check-primary" type="checkbox" v-model="selectedStatus" value="Inactive" />
                                        <label for="inactiveCheckboxFilter" class="input-check-label">Inactive</label>
                                    </div>
                                    <div class="col-span-2">
                                        <label class="mb-3 form-label">Price Range</label>
                                        <div id="priceFilter"></div>
                                    </div>
                                </div>

                                <div class="flex items-center justify-end gap-2 pt-1 mt-5">
                                    <button type="reset" class="btn-sm btn btn-sub-gray">Reset</button>
                                    <button type="submit" class="btn-sm btn btn-primary">Apply</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="pt-0 card-body">
        <div>
            <div class="overflow-x-scroll table-box">
                <table class="relative table hovered">
                    <tbody>
                        <tr class="text-gray-500 bg-gray-100 dark:bg-dark-850 dark:text-dark-500">
                            <th class="!font-medium">
                                <div class="input-check-group">
                                    <label for="checkboxAll" class="hidden input-check-label"></label>
                                    <input id="checkboxAll" class="input-check input-check-primary" type="checkbox" v-model="selectAll" />
                                </div>
                            </th>
                            <th @click="sort('productID')" class="!font-medium cursor-pointer">
                                Product ID
                                <span v-show="sortBy === 'productID'" v-text="sortDirection === 'asc' ? '↑' : '↓'"></span>
                            </th>
                            <th @click="sort('productName')" class="!font-medium cursor-pointer">
                                Product
                                <span v-show="sortBy === 'productName'" v-text="sortDirection === 'asc' ? '↑' : '↓'"></span>
                            </th>
                            <th @click="sort('category')" class="!font-medium cursor-pointer">
                                Category
                                <span v-show="sortBy === 'category'" v-text="sortDirection === 'asc' ? '↑' : '↓'"></span>
                            </th>
                            <th class="!font-medium cursor-pointer">Stock</th>
                            <th @click="sort('price')" class="!font-medium cursor-pointer">
                                Price
                                <span v-show="sortBy === 'price'" v-text="sortDirection === 'asc' ? '↑' : '↓'"></span>
                            </th>
                            <th @click="sort('qty')" class="!font-medium cursor-pointer">
                                QTY
                                <span v-show="sortBy === 'qty'" v-text="sortDirection === 'asc' ? '↑' : '↓'"></span>
                            </th>
                            <th @click="sort('revenue')" class="!font-medium cursor-pointer">
                                Revenue
                                <span v-show="sortBy === 'revenue'" v-text="sortDirection === 'asc' ? '↑' : '↓'"></span>
                            </th>
                            <th @click="sort('status')" class="!font-medium cursor-pointer">
                                status
                                <span v-show="sortBy === 'status'" v-text="sortDirection === 'asc' ? '↑' : '↓'"></span>
                            </th>
                            <th class="!font-medium">Action</th>
                        </tr>

                        <template v-for="(product, index) in displayedProducts" :key="index" v-if="productListData.length > 0">
                            <tr>
                                <td class="whitespace-nowrap">
                                    <div class="input-check-group">
                                        <label :for="`product${index}`" class="hidden input-check-label"></label>
                                        <input :id="`product${index}`" class="input-check input-check-primary" type="checkbox" @click="toggleItem(product)" :checked="selectedItems.includes(product)" />
                                    </div>
                                </td>
                                <td class="whitespace-nowrap">
                                    <a href="#" class="link link-primary">PEP-{{ product.productID }}</a>
                                </td>
                                <td class="whitespace-nowrap">
                                    <div class="flex items-center gap-2">
                                        <div class="flex items-center justify-center p-1 border border-gray-200 rounded dark:border-dark-800 size-9">
                                            <img :src="product.image" alt="" class="rounded" />
                                        </div>
                                        <h6>
                                            <router-link to="apps-ecommerce-product-overview" v-text="product.productName"></router-link>
                                        </h6>
                                    </div>
                                </td>
                                <td v-text="product.category"></td>
                                <td class="whitespace-nowrap">
                                    <label :for="'toggleStatus_' + index" class="switch-group switch-soft">
                                        <div class="relative">
                                            <input type="checkbox" :id="'toggleStatus_' + index" class="sr-only peer" v-bind:checked="product.status === 'Published'" @click="toggleStatus(product)" />
                                            <div class="switch-wrapper peer-checked:!bg-purple-500/15"></div>
                                            <div class="switch-dot peer-checked:translate-x-full rtl:peer-checked:-translate-x-full peer-checked:!bg-purple-500">
                                            </div>
                                        </div>
                                    </label>
                                </td>
                                <td v-text="product.price"></td>
                                <td v-text="product.qty"></td>
                                <td v-text="product.revenue"></td>
                                <td class="whitespace-nowrap">
                                    <span v-text="product.status" :class="{
                                        'badge badge-green': product.status === 'Published',
                                        'badge badge-gray': product.status === 'Inactive',
                                    }"></span>
                                </td>
                                <td class="whitespace-nowrap">
                                    <RecentMenuList :title="Ellipsis" :showArrow="false" className="" extraClass="set-position" :arrayList="dropdownOption" mainCss="" iconCss="rotate-90 size-4" menuIconCss="size-4" @handleAction="(option) => handleTableActivity(option, product)" />
                                </td>
                            </tr>
                        </template>

                        <tr>
                            <template v-if="productListData.length == 0 && displayedProducts.length == 0">
                                <TableDataNotFount />
                            </template>
                        </tr>
                    </tbody>
                </table>
            </div>
            <!-- Pagination -->
            <div class="grid grid-cols-12 gap-5 mt-5" v-show="productListData.length !== 0">
                <div class="flex col-span-12 gap-2 md:col-span-6">
                    <p class="text-gray-500 dark:text-dark-500">
                        Showing <b>{{ showingStart }}</b> - <b>{{ showingEnd }}</b> of <b>{{ filteredProducts.length
                            }}</b> Results
                    </p>
                    <span v-show="selectedItems.length > 0">
                        <b>{{ selectedItems.length }}</b> Row Selected
                    </span>
                </div>
                <div class="col-span-12 md:col-span-6">
                    <div class="flex md:justify-end pagination pagination-primary">
                        <button @click="prevPage()" :disabled="currentPage === 1" class="pagination-pre">
                            <ChevronLeft class="mr-1 ltr:inline-block rtl:hidden size-4">
                            </ChevronLeft>
                            <ChevronRight class="ml-1 ltr:hidden rtl:inline-block size-4">
                            </ChevronRight>
                            Prev
                        </button>
                        <template v-for="page in totalPages" :key="page">
                            <button @click="gotoPage(page)" :class="{ active: currentPage === page }" class="pagination-item">
                                <span>{{ page }}</span>
                            </button>
                        </template>
                        <button @click="nextPage()" :disabled="currentPage === totalPages" class="pagination-next">
                            Next
                            <ChevronRight class="ml-1 ltr:inline-block rtl:hidden size-4"></ChevronRight>
                            <ChevronLeft class="mr-1 ltr:hidden rtl:inline-block size-4"></ChevronLeft>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <DeleteModule :showDeletePop="showDeleteModule" :setDeleteModal="setDeleteModuleValue" :deleteRow="deleteItem" />
</template>
