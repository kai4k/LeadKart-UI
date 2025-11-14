<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import PageHeading from '@/components/common/PageHeading.vue';
import TableHead from '../TableHead.vue';
import DeleteModule from '@/view/apps/apps-email/apps-mailbox/DeleteModule.vue';
import TableDataNotFount from '../../Orders/list-view/TableDataNotFount.vue';
import { displayedProducts, dropdownOption } from './grid-data-list';
import type { Product } from './grid-data-list';
import { SlidersHorizontal, Plus, ChevronRight, ChevronLeft, X, Search, Ellipsis } from 'lucide-vue-next'
import RecentMenuList from '@/view/dashboards/recent-menu-list.vue';
import { useRouter } from 'vue-router';
const currentPage = ref(1);
const itemsPerPage = 8;

const filteredProducts = computed(() => {
    return displayedProducts.value; // Add any filtering logic here if needed
});
const totalPages = computed(() => {
    return Math.ceil(filteredProducts.value.length / itemsPerPage);
});

const showingStart = computed(() => {
    return (currentPage.value - 1) * itemsPerPage + 1;
});

const showingEnd = computed(() => {
    return Math.min(currentPage.value * itemsPerPage, filteredProducts.value.length);
});

const displayedProductsPage = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return filteredProducts.value.slice(start, end);
});

const prevPage = () => {
    if (currentPage.value > 1) {
        currentPage.value--;
    }
};

const nextPage = () => {
    if (currentPage.value < totalPages.value) {
        currentPage.value++;
    }
};

const gotoPage = (page: number) => {
    currentPage.value = page;
};

// Reactive reference to store the product that is selected for deletion
const selectedDetails = ref<any>(null);
const showDeleteModule = ref(false)
const setDeleteModuleValue = (state: boolean, product: Product) => {
    showDeleteModule.value = state;
    selectedDetails.value = product;
};

// Method to handle the deletion of the product
const deleteProduct = () => {
    if (selectedDetails.value) {
        const index = displayedProducts.value.findIndex(data => data.productId == selectedDetails.value.productId);
        displayedProducts.value.splice(index, 1)

    }
};
// --------Filter Module------
const showFilterModal = ref(false);
const searchTerm = ref('');
const selectedFilters = ref<string[]>([]);

const setShowFilterModal = (state: boolean) => {
    showFilterModal.value = state;
}
// Categories
const categories = ['Fashion', 'Footwear', 'Bags', 'Watch', 'Accessories'];
const selectedCategories = ref<string[]>([]);
// Colors
const colors = ['Blue', 'Green', 'Red', 'Yellow', 'Sky', 'Pink', 'Black', 'Gray'];
const selectedColors = ref<string[]>([]);
// Sort Options
const sortOptions = ['Best Sellers', 'New Arrivals', 'Trading', 'Price (Low to High)', 'Price (High to Low)'];
const selectedSortOption = ref('');

// Computed values for counts
const selectedCategoryCount = computed(() => selectedCategories.value.length);
const selectedColorCount = computed(() => selectedColors.value.length);
// Methods
const clearFilters = () => {
    searchTerm.value = '';
    selectedFilters.value = [];
    selectedCategories.value = [];
    selectedColors.value = [];
    selectedSortOption.value = '';
};

const applyFilters = () => {
    // Apply filter logic (e.g., send filters to parent or make an API call)
    console.log('Applying filters:', {
        searchTerm: searchTerm.value,
        selectedCategories: selectedCategories.value,
        selectedColors: selectedColors.value,
        selectedSortOption: selectedSortOption.value,
    });
    closeDrawer();
};

const closeDrawer = () => {
    showFilterModal.value = false;
};

const clearAllFilters = () => {
    selectedFilters.value = [];
};

const removeFilter = (index: number) => {
    selectedFilters.value.splice(index, 1);
};
const addFilterToArray = (filter: string) => {
    if (!selectedFilters.value.includes(filter)) {
        selectedFilters.value.push(filter);
    }
};
const updateSelectedFilters = (type: string, value: string) => {
    // Add category, color, or sort option to the selected filters array
    const filterLabel = `${value}`;

    // Handle category filters
    if (type === 'category') {
        if (selectedCategories.value.includes(value)) {
            addFilterToArray(filterLabel);
        } else {
            removeFilterFromArray(filterLabel);
        }
    }

    // Handle color filters
    if (type === 'color') {
        if (selectedColors.value.includes(value)) {
            addFilterToArray(filterLabel);
        } else {
            removeFilterFromArray(filterLabel);
        }
    }

    // Handle sort option filters
    if (type === 'sort') {
        if (selectedSortOption.value === value) {
            addFilterToArray(filterLabel);
        } else {
            removeFilterFromArray(filterLabel);
        }
    }
};
const removeFilterFromArray = (filter: string) => {
    const index = selectedFilters.value.indexOf(filter);
    if (index > -1) {
        selectedFilters.value.splice(index, 1);
    }
};

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
onMounted(() => {
    displayedProducts.value.forEach((data, index) => {
        data.productId = 1 + index
    })
})
</script>
<template>
    <div class="relative min-h-screen">
        <PageHeading title="Products Grid" sub-title="Ecommerce" />
        <TableHead title="Popular Products" :firstIcon="SlidersHorizontal" :secondIcon="Plus" buttonTitle="Filters"
            extraClass="mb-5" :setShowFilterModal="setShowFilterModal" />
        <div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5">
                <template v-if="displayedProducts.length > 0">
                    <div v-for="(product, index) in displayedProductsPage" :key="index" class="card hovered">
                        <div class="p-2 card-body">
                            <div :class="`relative p-5 ${product.color}`">
                                <div class="absolute right-2 top-2 dropdown">
                                    <RecentMenuList :title="Ellipsis" :showArrow="false" className=""
                                        extraClass="mange-table-position" :arrayList="dropdownOption"
                                        mainCss="flex items-center justify-center bg-white rounded-full size-10 link link-red dark:bg-dark-850"
                                        iconCss="rotate-90 size-4"
                                        @handleAction="(option) => handleTableActivity(option, product)" />
                                </div>
                                <img :src="product.image" alt="" />
                            </div>
                            <div class="p-1 mt-2">
                                <h5 class="mb-2">{{ product.price }}</h5>
                                <h6 class="mb-1">
                                    <a href="apps-ecommerce-product-overview">{{ product.productName }}</a>
                                </h6>
                                <p class="text-gray-500 dark:text-dark-500">{{ product.category }}</p>
                                <div class="flex gap-2 mt-3">
                                    <button type="button" class="w-full btn btn-primary">Add to Cart</button>
                                    <a href="#!" class="btn btn-sub-gray btn-icon shrink-0">
                                        <i class="text-lg ri-heart-line"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
            </div>
            <template v-if="displayedProducts.length === 0">
                <div class="place-items-center">
                    <TableDataNotFount />
                </div>
            </template>
            <div v-else class="grid items-center grid-cols-12 gap-5 mb-5">
                <div class="flex flex-wrap justify-center col-span-12 md:col-span-6 md:justify-start">
                    <p class="text-gray-500 dark:text-dark-500">
                        Showing <b>{{ showingStart }}</b> - <b>{{ showingEnd }}</b> of <b>{{
                            filteredProducts.length
                            }}</b> Results
                    </p>
                </div>
                <div class="col-span-12 md:col-span-6">
                    <div class="flex justify-center md:justify-end pagination pagination-primary">
                        <button @click="prevPage" :disabled="currentPage === 1" class="pagination-pre">
                            <ChevronLeft class="mr-1 ltr:inline-block rtl:hidden size-4"/>
                            <ChevronRight class="ml-1 ltr:hidden rtl:inline-block size-4"/>
                            Prev
                        </button>

                        <button v-for="page in totalPages" :key="page" @click="gotoPage(page)"
                            :class="{ 'active': currentPage === page }" class="pagination-item">
                            <span>{{ page }}</span>
                        </button>

                        <button @click="nextPage" :disabled="currentPage === totalPages" class="pagination-next">
                            Next
                            <ChevronRight class="ml-1 ltr:inline-block rtl:hidden size-4"/>
                            <ChevronLeft class="mr-1 ltr:hidden rtl:inline-block size-4"/>
                        </button>
                    </div>
                </div>
            </div>


            <!--start filter aside-->
            <div v-if="showFilterModal" id="filterAside" class="rtl:left-0 drawer drawer-lg ltr:right-0">
                <div class="drawer-header">
                    <h6 class="text-15">Filter & Sorting</h6>
                    <button @click="closeDrawer">
                        <i data-lucide="x" class="link link-red"></i>
                    </button>
                </div>
                <div class="drawer-content">
                    <div class="relative group/form">
                        <input type="text"
                            class="ltr:pl-9 rtl:pr-9 form-input ltr:group-[&.right]/form:pr-9 rtl:group-[&.right]/form:pl-9 ltr:group-[&.right]/form:pl-4 rtl:group-[&.right]/form:pr-4"
                            placeholder="Search products, price etc..." v-model="searchTerm" />
                        <button
                            class="absolute inset-y-0 flex items-center text-gray-500 dark:text-dark-500 ltr:left-3 rtl:right-3 rtl ltr:group-[&.right]/form:right-3 rtl:group-[&.right]/form:left-3 ltr:group-[&.right]/form:left-auto rtl:group-[&.right]/form:right-auto focus:outline-none">
                            <Search data-lucide="search" class="size-4"></Search>
                        </button>
                    </div>

                    <!-- Selected Filters -->
                    <div class="mt-5">
                        <div class="flex items-center gap-4 mb-3">
                            <h6 class="grow">Selected Filters</h6>
                            <a href="javascript:void(0)" class="text-sm link link-primary" @click="clearAllFilters">
                                Clear All <X data-lucide="x" class="inline-block size-4"></X>
                            </a>
                        </div>
                        <div class="flex flex-wrap items-center gap-2">
                            <span v-for="(filter, index) in selectedFilters" :key="index" class="badge badge-gray">
                                <span>{{ filter }}</span>
                                <a href="javascript:void(0)" @click="removeFilter(index)">
                                    <i class="align-bottom ri-close-fill"></i>
                                </a>
                            </span>
                        </div>
                    </div>

                    <!-- Product Category -->
                    <div class="mt-5">
                        <h6 class="mb-3">Product Category (<span>{{ selectedCategoryCount }}</span>)</h6>
                        <div class="space-y-2">
                            <div v-for="(category, index) in categories" :key="index" class="input-check-group">
                                <input :id="`productCategory${index}`" class="input-check input-check-primary"
                                    type="checkbox" :value="category" v-model="selectedCategories"
                                    @change="updateSelectedFilters('category', category)" />
                                <label :for="`productCategory${index}`" class="input-check-label">{{ category
                                    }}</label>
                            </div>
                        </div>
                    </div>

                    <!-- Color Filters -->
                    <div class="mt-5">
                        <h6 class="mb-3">Colors (<span>{{ selectedColorCount }}</span>)</h6>
                        <div class="space-y-2">
                            <div v-for="(color, index) in colors" :key="index" class="input-check-group">
                                <input :id="`productColor${index}`" class="input-check input-check-primary"
                                    type="checkbox" :value="color" v-model="selectedColors"
                                    @change="updateSelectedFilters('color', color)" />
                                <label :for="`productColor${index}`" class="input-check-label">{{ color
                                    }}</label>
                            </div>
                        </div>
                    </div>

                    <!-- Price Range -->
                    <div class="mt-5">
                        <h6 class="mb-4">Price Range</h6>
                        <div class="flex items-center justify-center h-20 px-5">
                            <div id="arbitrary-values-slider" class="w-full"></div>
                        </div>
                    </div>

                    <!-- Sort By -->
                    <div class="mt-5">
                        <h6 class="mb-3">Sort By</h6>
                        <div class="space-y-2">
                            <div v-for="(sortOption, index) in sortOptions" :key="index" class="input-radio-group">
                                <input :id="`sortBy${index}`" class="input-radio input-radio-primary" type="radio"
                                    name="sortBy" v-model="selectedSortOption" :value="sortOption"
                                    @change="updateSelectedFilters('sort', sortOption)" />
                                <label :for="`sortBy${index}`" class="input-radio-label">{{ sortOption
                                    }}</label>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Buttons -->
                <div class="flex items-center justify-end gap-2 p-4 border-t border-slate-200">
                    <button class="btn btn-sub-gray" @click="clearFilters">
                        <X data-lucide="x" class="inline-block ltr:mr-1 rtl:ml-1 align-center size-4"></X>Reset
                    </button>
                    <button class="btn btn-primary" @click="applyFilters">
                        <SlidersHorizontal data-lucide="sliders-horizontal"
                            class="inline-block ltr:mr-1 rtl:ml-1 align-center size-4"></SlidersHorizontal>
                        <span class="align-middle">Filter</span>
                    </button>
                </div>

            </div>
            <div class="backdrop-overlay backdrop-blur-xs" v-if="showFilterModal" @click="closeDrawer" id="backDropDiv"></div>
        </div>
    </div>
    <DeleteModule :showDeletePop="showDeleteModule" :setDeleteModal="setDeleteModuleValue" :deleteRow="deleteProduct" />
</template>