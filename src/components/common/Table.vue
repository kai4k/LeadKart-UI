<script lang="ts" setup>
import { computed, ref, } from 'vue';
import { ChevronLeft, ChevronRight } from 'lucide-vue-next';
// set Row in Ascending and Descending Order 
const sortBy = ref<string | null>(null);
const sortDirection = ref<'asc' | 'desc'>('asc');

const sort = (column: string) => {
    // Toggle sort direction if the same column is clicked
    if (sortBy.value === column) {
        sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc';
    }
    else {
        sortBy.value = column;
        sortDirection.value = 'asc'; // Default to ascending for new column
    }
};

// table data
const productStock = ref([
    {
        "product_id": "PEP-1478",
        "product_name": "Blouse Ruffle Tube top",
        "stock": 145,
        "stock_status": "Low Stock",
        "price": "$14.99"
    },
    {
        "product_id": "PEP-1481",
        "product_name": "Sleeve Clothing Leggings",
        "stock": 126,
        "stock_status": "Low Stock",
        "price": "$31.78"
    },
    {
        "product_id": "PEP-1482",
        "product_name": "Yellow women shoes",
        "stock": 0,
        "stock_status": "Out of Stock",
        "price": "$49.99"
    },
    {
        "product_id": "PEP-1483",
        "product_name": "Straw hat Cap Cowboy",
        "stock": 571,
        "stock_status": "In Stock",
        "price": "$49.99"
    },
    {
        "product_id": "PEP-1484",
        "product_name": "Sneakers Shoe Nike Basketball",
        "stock": 0,
        "stock_status": "Out of Stock",
        "price": "$49.99"
    },

    {
        "product_id": "PEP-1485",
        "product_name": "Modern Fashion T shirt",
        "stock": 321,
        "stock_status": "In Stock",
        "price": "$49.99"
    },
    {
        "product_id": "PEP-1486",
        "product_name": "Fashionable T shirt",
        "stock": 321,
        "stock_status": "In Stock",
        "price": "$49.99"
    },
    {
        "product_id": "PEP-1487",
        "product_name": "Intelligent Wooden Ball",
        "stock": 54,
        "stock_status": "Low Stock",
        "price": "$59.79"
    },
    {
        "product_id": "PEP-1488",
        "product_name": "Rustic Soft Computer",
        "stock": 0,
        "stock_status": "Out of Stock",
        "price": "$49.99"
    },

]);

const pageSize = ref(8);
const currentPage = ref(1);
const pages = computed(() => Math.ceil(productStock.value.length / pageSize.value));
const productStar = ref(1)
const ProductEndNum = ref(pageSize)
function setPage(page: number) {
    currentPage.value = page;
}

function nextPage() {
    if (currentPage.value < pages.value) {
        currentPage.value++;
    }
}

function prevPage() {
    if (currentPage.value > 1) {
        currentPage.value--;
    }
}

const paginatedProducts = computed(() => {
    const start = (currentPage.value - 1) * pageSize.value;
    productStar.value = start + 1;
    return productStock.value.slice(start, start + pageSize.value);
});

</script>

<template>
    <div class="pt-0 card-body">
        <div class="overflow-x-auto table-box">
            <table class="table whitespace-nowrap">
                <tbody>
                    <tr class="text-gray-500 bg-gray-100 dark:bg-dark-850 dark:text-dark-500">
                        <th @click="sort('productsID')" class="cursor-pointer !font-medium">
                            Product Code
                            <span v-if="sortBy === 'productsID'">{{ sortDirection === 'asc' ? '↑' : '↓'
                                }}</span>
                        </th>
                        <th @click="sort('productName')" class="cursor-pointer !font-medium">
                            Item
                            <span v-if="sortBy === 'productName'">{{ sortDirection === 'asc' ? '↑' : '↓'
                                }}</span>
                        </th>
                        <th @click="sort('stock')" class="cursor-pointer !font-medium">
                            Qty Left
                            <span v-if="sortBy === 'stock'">{{ sortDirection === 'asc' ? '↑' : '↓' }}</span>
                        </th>
                        <th @click="sort('status')" class="cursor-pointer !font-medium">
                            Status
                            <span v-if="sortBy === 'status'">{{ sortDirection === 'asc' ? '↑' : '↓' }}</span>
                        </th>
                        <th @click="sort('price')" class="cursor-pointer !font-medium">
                            Price
                            <span v-if="sortBy === 'price'">{{ sortDirection === 'asc' ? '↑' : '↓' }}</span>
                        </th>
                    </tr>
                    <tr v-for="(product, index) in paginatedProducts" :key="index">
                        <td>{{ product.product_id }}</td>
                        <td>{{ product.product_name }}</td>
                        <td>{{ product.stock }}</td>
                        <td>
                            <span :class="{
                                'badge badge-red': product.stock_status === 'Out of Stock',
                                'badge badge-yellow': product.stock_status === 'Low Stock',
                                'badge badge-purple': product.stock_status === 'In Stock',
                            }">
                                {{ product.stock_status }}
                            </span>
                        </td>
                        <td>{{ product.price }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="grid items-center grid-cols-12 gap-space mt-space">
            <div class="col-span-12 text-center lg:col-span-6 lg:ltr:text-left lg:rtl:text-right">
                <p class="text-gray-500 dark:text-dark-500">Showing <b>{{ productStar }}</b> - <b x-text="showingEnd">{{
                    ProductEndNum }}</b> of
                    <b x-text="products.length">{{ productStock.length }}</b> Results
                </p>
            </div>
            <div class="col-span-12 pagination lg:col-span-6">
                <div class="flex justify-center w-full gap-2 lg:justify-end pagination pagination-primary">
                    <button @click="prevPage" class="pagination-pre">
                        <ChevronLeft class="mr-1 ltr:inline-block rtl:hidden size-4" />
                        Prev
                        <ChevronRight data-lucide="chevron-right" class="ml-1 rtl:inline-block ltr:hidden size-4">
                        </ChevronRight>
                    </button>
                    <span v-for="(page, index) in pages" :key="index" @click="setPage(index + 1)"
                        class="pagination-item">
                        {{ page }}
                    </span>
                    <button @click="nextPage" class="pagination-next">
                        <ChevronLeft data-lucide="chevron-left" class="mr-1 rtl:inline-block ltr:hidden size-4">
                        </ChevronLeft>
                        Next
                        <ChevronRight data-lucide="chevron-right" class="ml-1 ltr:inline-block rtl:hidden size-4">
                        </ChevronRight>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>