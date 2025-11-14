<script setup lang="ts">
import PageHeading from '@/components/common/PageHeading.vue';
import { ref } from 'vue';
import { products, invoiceData } from './table-data';
import RecentMenuList from '@/view/dashboards/recent-menu-list.vue';
const dropdownOptions = ['Amount', 'Revenue', 'Rating']

interface Invoice {
    invoiceID: string
    client: string
    dateDue: string
    totalAmount: string
    status: string
}

const invoiceProducts = ref<Invoice[]>([...invoiceData])
const sortBy = ref<string>('')
const sortDirection = ref<'asc' | 'desc'>('asc')

function sort(column: keyof Invoice) {
    if (sortBy.value === column) {
        sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc'
    } else {
        sortBy.value = column
        sortDirection.value = 'asc'
    }

    invoiceProducts.value.sort((a, b) => {
        if (a[column] < b[column]) return sortDirection.value === 'asc' ? -1 : 1
        if (a[column] > b[column]) return sortDirection.value === 'asc' ? 1 : -1
        return 0
    })
}
</script>
<template>
    <PageHeading title="Data" sub-title="Widgets" />
    <div class="grid grid-cols-12 gap-x-space">
        <div class="col-span-12 xl:col-span-6 card">
            <div class="flex items-center card-header">
                <h6 class="card-title grow">Top Products</h6>
                <DropdownList :listOption="dropdownOptions" title="Filters" buttonCss="px-3 py-1.5 gap-x-2" />
                <RecentMenuList :title="() => 'Filters'" :list="['Amount', 'Revenue', 'Rating']" mainCss=""
                    iconCss="size-4 ml-1" menuIconCss="size-4" />
            </div>
            <div class="card-body">
                <div>
                    <div class="overflow-x-auto">
                        <table class="table flush">
                            <tbody>
                                <tr class="bg-gray-100 dark:bg-dark-850">
                                    <th class="whitespace-nowrap !font-medium text-gray-500 dark:text-dark-500">
                                        Product
                                    </th>
                                    <th class="whitespace-nowrap !font-medium text-gray-500 dark:text-dark-500">
                                        Sales
                                    </th>
                                    <th class="whitespace-nowrap !font-medium text-gray-500 dark:text-dark-500">
                                        Price Unit
                                    </th>
                                    <th class="whitespace-nowrap !font-medium text-gray-500 dark:text-dark-500">
                                        Stock
                                    </th>
                                    <th class="whitespace-nowrap !font-medium text-gray-500 dark:text-dark-500">
                                        Revenue
                                    </th>
                                    <th class="whitespace-nowrap !font-medium text-gray-500 dark:text-dark-500">
                                        Rating
                                    </th>
                                </tr>
                                <tr v-for="(product, index) in products" :key="index" class="*:px-3 *:py-2.5">
                                    <td class="whitespace-nowrap">
                                        <div class="flex items-center gap-2">
                                            <div
                                                class="flex items-center justify-center p-1 border border-gray-200 rounded size-9 dark:border-dark-800">
                                                <img :src="product.image" alt="" class="rounded" />
                                            </div>
                                            <h6>{{ product.productName }}</h6>
                                        </div>
                                    </td>
                                    <td class="whitespace-nowrap">{{ product.salesUnit }}</td>
                                    <td class="whitespace-nowrap">{{ product.price }}</td>
                                    <td class="whitespace-nowrap">{{ product.stock }}</td>
                                    <td class="whitespace-nowrap">{{ product.revenue }}</td>
                                    <td class="whitespace-nowrap">
                                        <i class="mr-1 text-yellow-500 ri-star-line"></i>
                                        <span class="text-gray-500 align-middle dark:text-dark-500">{{
                                            product.rating
                                            }}</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-12 xl:col-span-6 card">
            <div class="flex items-center card-header">
                <h6 class="card-title grow">Recent Invoice</h6>
                <RecentMenuList :title="() => 'Filters'" :list="['Amount', 'Revenue', 'Rating']" mainCss=""
                    iconCss="size-4 ml-1" menuIconCss="size-4" />
            </div>
            <div class="card-body">
                <div>
                    <div class="overflow-x-auto">
                        <table class="table flush">
                            <tbody>
                                <tr class="bg-gray-100 dark:bg-dark-850">
                                    <th @click="sort('invoiceID')"
                                        class="whitespace-nowrap !font-medium text-gray-500 dark:text-dark-500 cursor-pointer">
                                        Invoice ID
                                        <span v-if="sortBy === 'invoiceID'">{{ sortDirection === 'asc' ? '↑' : '↓'
                                            }}</span>
                                    </th>
                                    <th @click="sort('client')"
                                        class="whitespace-nowrap !font-medium text-gray-500 dark:text-dark-500 cursor-pointer">
                                        Client
                                        <span v-if="sortBy === 'client'">{{ sortDirection === 'asc' ? '↑' : '↓'
                                            }}</span>
                                    </th>
                                    <th @click="sort('dateDue')"
                                        class="whitespace-nowrap !font-medium text-gray-500 dark:text-dark-500 cursor-pointer">
                                        Due Date
                                        <span v-if="sortBy === 'dateDue'">{{ sortDirection === 'asc' ? '↑' : '↓'
                                            }}</span>
                                    </th>
                                    <th @click="sort('totalAmount')"
                                        class="whitespace-nowrap !font-medium text-gray-500 dark:text-dark-500 cursor-pointer">
                                        Total
                                        <span v-if="sortBy === 'totalAmount'">{{ sortDirection === 'asc' ? '↑' : '↓'
                                            }}</span>
                                    </th>
                                    <th @click="sort('status')"
                                        class="whitespace-nowrap !font-medium text-gray-500 dark:text-dark-500 cursor-pointer">
                                        Status
                                        <span v-if="sortBy === 'status'">{{ sortDirection === 'asc' ? '↑' : '↓'
                                            }}</span>
                                    </th>
                                </tr>
                                <tr v-for="(product, index) in invoiceProducts" :key="index" class="*:px-3 *:py-2.5">
                                    <td class="whitespace-nowrap">
                                        <a href="#">{{ product.invoiceID }}</a>
                                    </td>
                                    <td class="whitespace-nowrap">{{ product.client }}</td>
                                    <td class="whitespace-nowrap">{{ product.dateDue }}</td>
                                    <td class="whitespace-nowrap">{{ product.totalAmount }}</td>
                                    <td class="whitespace-nowrap">
                                        <span :class="{
                                            'badge badge-yellow': product.status === 'Pending',
                                            'badge badge-green': product.status === 'Successful',
                                            'badge badge-blue': product.status === 'New'
                                        }">
                                            {{ product.status }}
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>