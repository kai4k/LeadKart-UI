<script setup lang="ts">
import { ChevronLeft, ChevronRight } from 'lucide-vue-next';
import { computed, ref } from 'vue';
import { productStock } from './ecommorece-data';
const sortBy = ref<string | null>(null);
const sortDirection = ref<'asc' | 'desc'>('asc');
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

const sort = (column: string) => {
    if (sortBy.value === column) {
        // Toggle sort direction
        sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc';
    } else {
        sortBy.value = column;
        sortDirection.value = 'asc';
    }
    productStock.value.sort((a: any, b: any) => {
        const valA = a[column];
        const valB = b[column];

        // Handle both numbers and strings
        if (typeof valA === 'string' && typeof valB === 'string') {
            return sortDirection.value === 'asc'
                ? valA.localeCompare(valB)
                : valB.localeCompare(valA);
        }

        if (typeof valA === 'number' && typeof valB === 'number') {
            return sortDirection.value === 'asc' ? valA - valB : valB - valA;
        }

        return 0; // Default if data types mismatch
    });
};



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
                        <th @click="sort('product_id')" class="cursor-pointer !font-medium">
                            Product Code
                            <span v-if="sortBy === 'product_id'">{{ sortDirection === 'asc' ? '↑' : '↓'
                                }}</span>
                        </th>
                        <th @click="sort('product_name')" class="cursor-pointer !font-medium">
                            Item
                            <span v-if="sortBy === 'product_name'">{{ sortDirection === 'asc' ? '↑' : '↓'
                                }}</span>
                        </th>
                        <th @click="sort('stock')" class="cursor-pointer !font-medium">
                            Qty Left
                            <span v-if="sortBy === 'stock'">{{ sortDirection === 'asc' ? '↑' : '↓' }}</span>
                        </th>
                        <th @click="sort('stock_status')" class="cursor-pointer !font-medium">
                            Status
                            <span v-if="sortBy === 'stock_status'">{{ sortDirection === 'asc' ? '↑' : '↓' }}</span>
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
                        <ChevronLeft class="mr-1 ltr:inline-block rtl:hidden size-4"/>
                        <ChevronRight class="ml-1 rtl:inline-block ltr:hidden size-4"/>
                        Prev
                    </button>
                    <span v-for="(page, index) in pages" :key="index" @click="setPage(index + 1)"
                        class="pagination-item" :class="{ 'active': index + 1 === currentPage }">
                        {{ page }}
                    </span>
                    <button @click="nextPage" class="pagination-next">
                        Next
                        <ChevronRight class="ml-1 ltr:inline-block rtl:hidden size-4"/>
                        <ChevronLeft class="mr-1 rtl:inline-block ltr:hidden size-4"/>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>