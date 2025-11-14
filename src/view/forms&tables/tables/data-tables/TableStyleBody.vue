<script setup lang="ts">
import { computed, ref } from 'vue';
import employeesData from './base-table/base-table-data';
import TableDataNotFount from '@/view/apps/app-ecommerce/Orders/list-view/TableDataNotFount.vue';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-vue-next';
const props = defineProps({
    tableCss: String,
    tableHeadCss: String,
    perPageItem: {
        type: Number,
        default: 10
    },
    setPagination: {
        type: Boolean,
        default: true,
    }
})

interface EmployeesData {
    Name: string;
    Position: string;
    Office: string;
    Age: number;
    StartDate: string;
    Salary: string | number;
}
const searchTerm = ref('');
const currentPage = ref(1);
const sortBy = ref<string | null>(null);
const itemsPerPage = ref(props.perPageItem);
const sortDirection = ref<'asc' | 'desc'>('asc');
function filterParents() {
    currentPage.value = 1;
}
const tableHeaders = [
    { label: 'Name', field: 'Name' },
    { label: 'Position', field: 'Position' },
    { label: 'Office', field: 'Office' },
    { label: 'Age', field: 'Age' },
    { label: 'Start date', field: 'StartDate' },
    { label: 'Salary', field: 'Salary' },
];

const filteredParentsList = computed(() =>
    searchTerm.value
        ? employeesData.value.filter((employee) =>
            Object.values(employee).some((val) =>
                String(val).toLowerCase().includes(searchTerm.value.toLowerCase())
            )
        )
        : employeesData.value
);

function sort(column: string) {
    if (sortBy.value === column) {
        sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc';
    } else {
        sortBy.value = column;
        sortDirection.value = 'asc';
    }
    employeesData.value.sort((a: any, b: any) => {
        const valueA = a[column as keyof EmployeesData];
        const valueB = b[column as keyof EmployeesData];
        if (valueA > valueB) return sortDirection.value === 'asc' ? 1 : -1;
        if (valueA < valueB) return sortDirection.value === 'asc' ? -1 : 1;
        return 0;
    });
}
const paginatedParents = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage.value;
    if (!props.setPagination) {
        return filteredParentsList.value
    }
    return filteredParentsList.value.slice(start, start + itemsPerPage.value);

});

const showingStart = computed(
    () => (currentPage.value - 1) * itemsPerPage.value + 1
);

const showingEnd = computed(
    () =>
        Math.min(
            currentPage.value * itemsPerPage.value,
            filteredParentsList.value.length
        )
);
const totalPages = computed(() =>
    Math.ceil(filteredParentsList.value.length / itemsPerPage.value)
);
function prevPage() {
    if (currentPage.value > 1) currentPage.value--;
}

function nextPage() {
    if (currentPage.value < totalPages.value) currentPage.value++;
}

function gotoPage(page: number) {
    currentPage.value = page;
}

</script>
<template>
    <div class="flex flex-col gap-5 dt-container dt-tailwindcss">
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div class="justify-self-center md:justify-self-start " v-if="setPagination">
                <select name="" id="" v-model="itemsPerPage" class="form-select inline-block !w-auto ltr:mr-2 rtl:ml-2">
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                </select>
                <span>entries per page</span>
            </div>
            <div class="md:col-start-2 justify-self-center md:justify-self-end ">
                <div class="flex items-center gap-x-2">
                    <label>Search:</label>
                    <input v-model="searchTerm" @input="filterParents" type="text" class="form-input" />
                    <button class="absolute inset-y-0 flex items-center ltr:left-3 rtl:right-3 focus:outline-none">
                    </button>
                </div>
            </div>
        </div>

        <div class="!pt-0 !pb-0 card-body">
            <div>
                <div class="overflow-x-auto table-box whitespace-nowrap">
                    <table class="table display group" :class="tableCss">
                        <thead>
                            <tr class="bg-gray-100 dark:bg-dark-850 dark:text-dark-500">
                                <th v-for="header in tableHeaders" :class="tableHeadCss" :key="header.field" @click="sort(header.field)" class="!font-medium cursor-pointer padding-none">
                                    {{ header.label }}
                                    <!-- <span v-if="sortBy === header.field"
                                    :class="{ 'text-gray-700': sortDirection === 'asc', 'text-gray-500': sortDirection === 'desc' }">
                                    {{ sortDirection === 'asc' ? '↑' : '↓' }}
                                </span> -->
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(employee, index) in paginatedParents" :key="index" class="text-start">
                                <td class="pl-2! padding-none">{{ employee.Name }}</td>
                                <td class="">{{ employee.Position }}</td>
                                <td class="">{{ employee.Office }}</td>
                                <td class="">{{ employee.Age }}</td>
                                <td class="">{{ employee.StartDate }}</td>
                                <td class="">{{ employee.Salary }}</td>
                            </tr>
                            <tr v-if="paginatedParents.length === 0">
                                <TableDataNotFount />
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr class="">
                                <th class="padding-none">Name</th>
                                <th>Position</th>
                                <th>Office</th>
                                <th>Age</th>
                                <th>Start date</th>
                                <th>Salary</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
        <!-- Pagination of the Table -->
        <div v-if="paginatedParents.length > 0 && setPagination" class="grid items-center grid-cols-12 gap-space mt-space">
            <div class="col-span-12 text-center md:col-span-6 ltr:md:text-left rtl:md:text-right">
                <p class="text-gray-500 dark:text-dark-500">
                    Showing <b>{{ showingStart }}</b> to <b>{{ showingEnd }}</b> of
                    <b>{{ filteredParentsList.length }}</b> entries
                </p>
            </div>
            <div class="col-span-12 md:col-span-6">
                <div class="flex justify-center md:justify-end pagination pagination-primary">
                    <button class="pagination-pre" :disabled="currentPage === 1" @click="currentPage = 1">
                        <ChevronsLeft class="ltr:inline-block rtl:hidden size-3" />
                        <ChevronsRight class="ltr:hidden rtl:inline-block size-3" />
                    </button>
                    <button class="pagination-pre" :disabled="currentPage === 1" @click="prevPage">
                        <ChevronLeft class="ltr:inline-block rtl:hidden size-3" />
                        <ChevronRight class="ltr:hidden rtl:inline-block size-3" />
                    </button>
                    <button v-for="page in totalPages" :key="page" @click="gotoPage(page)" :class="{ active: currentPage === page }" class="pagination-item">
                        {{ page }}
                    </button>
                    <button class="pagination-next" :disabled="currentPage === totalPages" @click="nextPage">
                        <ChevronRight class="ltr:inline-block rtl:hidden size-3" />
                        <ChevronLeft class="ltr:hidden rtl:inline-block size-3" />
                    </button>
                    <button class="pagination-next" :disabled="currentPage === totalPages" @click="currentPage = totalPages">
                        <ChevronsRight class="ltr:inline-block rtl:hidden size-3" />
                        <ChevronsLeft class="ltr:hidden rtl:inline-block size-3" />
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.padding-none {
    padding-left: 0.75rem !important;
}
</style>