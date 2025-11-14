<script setup lang="ts">
import { ref, computed } from 'vue';
import PageHeading from '@/components/common/PageHeading.vue';
import CardBody from '../../forms/common-components/CardComponent.vue';
import employeesData from './base-table/base-table-data';
import PaginationOfTable from '@/components/common/PaginationOfTable.vue';
// Define the type for an employee
interface EmployeesData {
    Name: string;
    Position: string;
    Office: string;
    Age: number;
    StartDate: string;
    Salary: string | number;
}



// Pagination state
const searchTerm = ref('');
const currentPage = ref(1);
const itemsPerPage = ref(25); // Items per page (you can change this value as needed)

// Compute the total number of pages based on the number of items per page
const totalPages = computed(() => Math.ceil(employeesData.value.length / itemsPerPage.value));

// Group the data by office
const groupedData = computed(() => {
    return employeesData.value.reduce((result: Record<string, EmployeesData[]>, employee) => {
        if (!result[employee.Office]) {
            result[employee.Office] = [];
        }
        result[employee.Office].push(employee);
        return result;
    }, {});
});

// Flatten the grouped data for pagination (ignoring the office names in the pagination logic)
const flattenedData = computed(() => {
    let flattened: EmployeesData[] = [];
    Object.values(groupedData.value).forEach(officeGroup => {
        flattened = flattened.concat(officeGroup);
    });
    return flattened;
});
function filterParents() {
    currentPage.value = 1;
}
// Compute the paginated employees based on the current page
const paginatedEmployees = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage.value;
    return flattenedData.value.slice(start, start + itemsPerPage.value);
});

// Handle page navigation
function updatePagination(newPage: number) {
    currentPage.value = newPage;
}
</script>
<template>
    <PageHeading title="Row Grouping" sub-title="Datatables" />
    <CardBody title="Row Grouping">
        <div class="grid gap-5">
            <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div class="justify-self-center md:justify-self-start">
                    <select name="" id="" v-model="itemsPerPage" class="form-select inline-block !w-auto ltr:mr-2 rtl:ml-2">
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                    </select>
                    <span>entries per page</span>
                </div>
                <div class="md:col-start-2 justify-self-center md:justify-self-end">
                    <div class="flex items-center gap-x-2">
                        <span>Search:</span>
                        <input v-model="searchTerm" @input="filterParents" type="text" class="form-input" />
                        <button class="absolute inset-y-0 flex items-center ltr:left-3 rtl:right-3 focus:outline-none">
                        </button>
                    </div>
                </div>
            </div>
            <div class="overflow-x-auto table-box whitespace-nowrap">
                <!-- Table Header -->
                <table class="table">
                    <thead>
                        <tr class="bg-gray-100 dark:bg-[#0F172A]">
                            <th>Name</th>
                            <th>Position</th>
                            <th>Age</th>
                            <th>Start Date</th>
                            <th>Salary</th>
                        </tr>
                    </thead>
                    <tbody>
                        <template v-for="(employee, index) in paginatedEmployees" :key="employee.Name">

                            <tr v-if="index === 0 || paginatedEmployees[index - 1].Office !== employee.Office">
                                <td colspan="5" class="font-semibold bg-gray-50  dark:bg-[#0F172A]">{{
                                    employee.Office }}</td>
                            </tr>
                            <!-- Employee Data Row -->
                            <tr>
                                <td>{{ employee.Name }}</td>
                                <td>{{ employee.Position }}</td>
                                <td>{{ employee.Age }}</td>
                                <td>{{ employee.StartDate }}</td>
                                <td>{{ employee.Salary }}</td>
                            </tr>
                        </template>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Age</th>
                            <th>Start date</th>
                            <th>Salary</th>
                        </tr>
                    </tfoot>
                </table>
            </div>

            <PaginationOfTable :tableData="flattenedData" :currentPage="currentPage" :itemsPerPage="itemsPerPage" @update-pagination="updatePagination" />
        </div>
    </CardBody>
</template>