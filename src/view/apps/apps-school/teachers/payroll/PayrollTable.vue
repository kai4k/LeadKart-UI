<script setup lang="ts">
import { ref, computed } from 'vue';
import { payrollData } from './payroll-data';
import { ChevronLeft, ChevronRight, Search } from 'lucide-vue-next';
import TableDataNotFount from '@/view/apps/app-ecommerce/Orders/list-view/TableDataNotFount.vue';
const searchTerm = ref('');
const sortBy = ref('');
const selectedOption = ref("")
const sortDirection = ref<'asc' | 'desc'>('asc');
const currentPage = ref(1);
const itemsPerPage = ref(10);

const filteredPayrolls = computed(() => {
    let data = payrollData.filter((item) =>
        Object.values(item).some((val) =>
            String(val).toLowerCase().includes(searchTerm.value.toLowerCase())
        )
    );

    if (sortBy.value) {
        data.sort((a, b) => {
            const valueA = a[sortBy.value as keyof typeof a];
            const valueB = b[sortBy.value as keyof typeof b];
            return sortDirection.value === 'asc'
                ? String(valueA).localeCompare(String(valueB))
                : String(valueB).localeCompare(String(valueA));
        });
    }
    return data;
});

const totalPages = computed(() => Math.ceil(filteredPayrolls.value.length / itemsPerPage.value));
const displayedPayrolls = computed(() =>
    filteredPayrolls.value.slice(
        (currentPage.value - 1) * itemsPerPage.value,
        currentPage.value * itemsPerPage.value
    )
);
const showingStart = computed(() => {
    return (currentPage.value - 1) * itemsPerPage.value + 1;
});
const showingEnd = computed(() => {
    return Math.min(currentPage.value * itemsPerPage.value, payrollData.length);
});
const sort = (field: string) => {
    if (sortBy.value === field) {
        sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc';
    } else {
        sortBy.value = field;
        sortDirection.value = 'asc';
    }
};

const generateAvatarText = (name: string) => {
    const parts = name.split(' ');
    return parts.length > 1 ? parts[0][0] + parts[1][0] : name[0];
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

const sortIcon = computed(() => (sortDirection.value === 'asc' ? '↑' : '↓'));
</script>
<template>
    <div class="grid grid-cols-12 gap-x-space">
        <div class="col-span-12 card">
            <div class="card-header">
                <div class="flex flex-wrap justify-between gap-4">
                    <div>
                        <div class="relative">
                            <input type="text" class="ltr:pl-9 rtl:pr-9 form-input" placeholder="Search for ..." v-model="searchTerm" />
                            <button class="absolute inset-y-0 flex items-center ltr:left-3 rtl:right-3 focus:outline-none">
                                <Search data-lucide="search" class="text-gray-500 size-4"></Search>
                            </button>
                        </div>
                    </div>
                    <div>
                        <select name="" id="" v-model="selectedOption" v-on:change="sort(selectedOption)" class="form-select">
                            <option value="">Shoring By</option>
                            <option value="">All</option>
                            <option value="status">Status</option>
                            <option value="taxes">Taxes</option>
                            <option value="teacherName">Teachers</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <div class="overflow-x-auto whitespace-nowrap">
                    <table class="table flush">
                        <thead>
                            <tr class="text-gray-500 bg-gray-100 dark:bg-dark-850 dark:text-dark-500">
                                <th @click="sort('teacherName')" class="cursor-pointer !font-medium">
                                    Teacher Name <span v-if="sortBy === 'teacherName'">{{ sortIcon }}</span>
                                </th>
                                <th @click="sort('email')" class="cursor-pointer !font-medium">
                                    Email <span v-if="sortBy === 'email'">{{ sortIcon }}</span>
                                </th>
                                <th @click="sort('gross')" class="cursor-pointer !font-medium">
                                    Gross <span v-if="sortBy === 'gross'">{{ sortIcon }}</span>
                                </th>
                                <th @click="sort('taxes')" class="cursor-pointer !font-medium">
                                    Taxes <span v-if="sortBy === 'taxes'">{{ sortIcon }}</span>
                                </th>
                                <th @click="sort('netSalary')" class="cursor-pointer !font-medium">
                                    Salary <span v-if="sortBy === 'netSalary'">{{ sortIcon }}</span>
                                </th>
                                <th @click="sort('performance')" class="cursor-pointer !font-medium">
                                    Performance <span v-if="sortBy === 'performance'">{{ sortIcon }}</span>
                                </th>
                                <th @click="sort('status')" class="cursor-pointer !font-medium">
                                    Status <span v-if="sortBy === 'status'">{{ sortIcon }}</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(payroll, index) in displayedPayrolls" :key="index">
                                <td>
                                    <div class="flex items-center gap-3">
                                        <div class="relative text-gray-500 bg-gray-100 rounded-full size-6 dark:bg-dark-850 dark:text-dark-500">
                                            <img v-if="payroll.image" :src="payroll.image" alt="" class="rounded-full" @error="payroll.image = ''" />
                                            <span v-else class="absolute inset-0 flex items-center justify-center font-semibold text-gray-500 bg-gray-100 rounded-full dark:bg-dark-850 dark:text-dark-500 text-11">
                                                {{ generateAvatarText(payroll.teacherName) }}
                                            </span>
                                        </div>
                                        <div>
                                            <h6>{{ payroll.teacherName }}</h6>
                                        </div>
                                    </div>
                                </td>
                                <td>{{ payroll.email }}</td>
                                <td>{{ payroll.gross }}</td>
                                <td>{{ payroll.taxes }}</td>
                                <td>{{ payroll.netSalary }}</td>
                                <td>
                                    <span :class="{
                                        'badge badge-orange': payroll.performance === 'Excellent',
                                        'badge badge-purple': payroll.performance === 'Good',
                                        'badge badge-sky': payroll.performance === 'Satisfactory',
                                    }">
                                        {{ payroll.performance }}
                                    </span>
                                </td>
                                <td>
                                    <span :class="{
                                        'badge badge-green': payroll.status === 'Active',
                                        'badge badge-yellow': payroll.status === 'Inactive',
                                    }">
                                        {{ payroll.status }}
                                    </span>
                                </td>
                            </tr>
                            <tr v-if="filteredPayrolls.length === 0">
                                <TableDataNotFount />
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div v-if="filteredPayrolls.length > 0" class="grid items-center grid-cols-12 gap-5 mt-5">
                    <div class="flex flex-wrap justify-center col-span-12 md:col-span-6 md:justify-start">
                        <p class="text-gray-500 dark:text-dark-500">
                            Showing <b x-text="showingStart">{{ showingStart }} </b> - <b> {{ showingEnd }}</b> of <b x-text="filterPayrolls.length">{{ payrollData.length }}</b> Results
                        </p>
                    </div>
                    <div class="col-span-12 md:col-span-6">
                        <div class="flex justify-center md:justify-end pagination pagination-primary">
                            <button @click="prevPage" class="pagination-pre" :disabled="currentPage === 1">
                                <ChevronLeft class="mr-1 ltr:inline-block rtl:hidden size-4" />
                                <ChevronRight class="ml-1 ltr:hidden rtl:inline-block size-4" />
                                Prev
                            </button>
                            <span v-for="page in totalPages" :key="page" class="pagination-item" :class="{ 'active': currentPage == page }" @click="gotoPage(page)">
                                {{ page }}
                            </span>
                            <button @click="nextPage" :disabled="currentPage === totalPages" class="pagination-next">Next
                                <ChevronRight class="ml-1 ltr:inline-block rtl:hidden size-4" />
                                <ChevronLeft class="mr-1 ltr:hidden rtl:inline-block size-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>