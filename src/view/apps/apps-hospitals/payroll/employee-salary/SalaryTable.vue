<script setup lang="ts">
import { ref, computed } from 'vue';
import employeeSalaryData, { type Employee } from './salary-data'
import DeleteModule from '@/view/apps/apps-email/apps-mailbox/DeleteModule.vue';
import { ChevronLeft, ChevronRight } from 'lucide-vue-next';

const employees = ref([...employeeSalaryData]);
const sortBy = ref<string>('');
const sortDirection = ref<'asc' | 'desc'>('asc');
const currentPage = ref(1);
const itemsPerPage = 10;
const showDeleteModal = ref(false);
const deleteEmployee = ref<string>('');

function setDeleteModalValue(state: boolean) {
    showDeleteModal.value = state
}
const totalPages = computed(() => Math.ceil(employees.value.length / itemsPerPage));
const displayedEmployees = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    return employees.value.slice(start, start + itemsPerPage);
});
const showingStart = computed(() => Math.min((currentPage.value - 1) * itemsPerPage + 1, employees.value.length));
const showingEnd = computed(() => Math.min(currentPage.value * itemsPerPage, employees.value.length));

function sort(column: keyof Employee) {
    if (sortBy.value === column) {
        sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc';
    } else {
        sortBy.value = column;
        sortDirection.value = 'asc';
    }
    employees.value.sort((a, b) => {
        const valueA = a[column];
        const valueB = b[column];
        const comparison = valueA > valueB ? 1 : valueA < valueB ? -1 : 0;
        return sortDirection.value === 'desc' ? -comparison : comparison;
    });
}

function prevPage() {
    if (currentPage.value > 1) currentPage.value--;
}

function nextPage() {
    if (currentPage.value < totalPages.value) currentPage.value++;
}

function gotoPage(page: number) {
    currentPage.value = page;
}

function openDeleteModal(employeeName: string) {
    deleteEmployee.value = employeeName;
    showDeleteModal.value = true;
}

function closeDeleteModal() {
    showDeleteModal.value = false;
}

function deleteSalary() {
    employees.value = employees.value.filter((employee) => employee.employeeName !== deleteEmployee.value);
    closeDeleteModal();
}
</script>
<template>
    <div class="card">
        <div class="flex items-center gap-3 card-header">
            <h6 class="card-title grow">Employee</h6>
            <button type="button" class="btn btn-primary shrink-0">Download</button>
        </div>
        <div class="pt-0 card-body">
            <div class="overflow-x-auto table-box">
                <table class="table flush">
                    <thead>
                        <tr class="text-gray-500 bg-gray-100 dark:bg-dark-850 dark:text-dark-500">
                            <th @click="sort('employeeName')" class="!font-medium cursor-pointer">
                                Employee Name
                                <span v-if="sortBy === 'employeeName'">{{ sortDirection === 'asc' ? '↑' : '↓' }}</span>
                            </th>
                            <th @click="sort('email')" class="!font-medium cursor-pointer">
                                Email
                                <span v-if="sortBy === 'email'">{{ sortDirection === 'asc' ? '↑' : '↓' }}</span>
                            </th>
                            <th @click="sort('phoneNumber')" class="!font-medium cursor-pointer">
                                Phone Number
                                <span v-if="sortBy === 'phoneNumber'">{{ sortDirection === 'asc' ? '↑' : '↓' }}</span>
                            </th>
                            <th @click="sort('department')" class="!font-medium cursor-pointer">
                                Department
                                <span v-if="sortBy === 'department'">{{ sortDirection === 'asc' ? '↑' : '↓' }}</span>
                            </th>
                            <th @click="sort('monthlySalary')" class="!font-medium cursor-pointer">
                                Monthly Salary
                                <span v-if="sortBy === 'monthlySalary'">{{ sortDirection === 'asc' ? '↑' : '↓' }}</span>
                            </th>
                            <th @click="sort('status')" class="!font-medium cursor-pointer">
                                Status
                                <span v-if="sortBy === 'status'">{{ sortDirection === 'asc' ? '↑' : '↓' }}</span>
                            </th>
                            <th class="!font-medium">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(employee, index) in displayedEmployees" :key="index" class="*:px-3 *:py-2.5">
                            <td>{{ employee.employeeName }}</td>
                            <td>{{ employee.email }}</td>
                            <td>{{ employee.phoneNumber }}</td>
                            <td>{{ employee.department }}</td>
                            <td>{{ employee.monthlySalary }}</td>
                            <td>
                                <span :class="{
                                    'badge badge-green': employee.status === 'Successful',
                                    'badge badge-yellow': employee.status === 'Pending',
                                    'badge badge-red': employee.status === 'Failed',
                                }">
                                    {{ employee.status }}
                                </span>
                            </td>
                            <td>
                                <div class="flex items-center gap-2">
                                    <button class="btn btn-sub-primary btn-icon !size-8" title="edit">
                                        <i class="ri-pencil-line"></i>
                                    </button>
                                    <button class="btn btn-sub-red btn-icon !size-8" title="delete" @click="openDeleteModal(employee.employeeName)">
                                        <i class="ri-delete-bin-line"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="grid items-center grid-cols-12 gap-5 mt-5">
                <div class="flex flex-wrap justify-center col-span-12 md:col-span-6 md:justify-start">
                    <p class="text-gray-500 dark:text-dark-500">
                        Showing <b>{{ showingStart }}</b> - <b>{{ showingEnd }}</b> of <b>{{ employees.length }}</b> Results
                    </p>
                </div>
                <div class="col-span-12 md:col-span-6">
                    <div class="flex justify-center md:justify-end pagination pagination-primary">
                        <button @click="prevPage" :disabled="currentPage === 1" class="pagination-pre">
                            <ChevronLeft class="mr-1 ltr:inline-block rtl:hidden size-4" />
                            <ChevronRight class="ml-1 ltr:hidden rtl:inline-block size-4" />
                            Prev
                        </button>
                        <button v-for="page in totalPages" :key="page" @click="gotoPage(page)" :class="{ active: currentPage === page }" class="pagination-item">
                            {{ page }}
                        </button>
                        <button @click="nextPage" :disabled="currentPage === totalPages" class="pagination-next">
                            Next
                            <ChevronRight class="ml-1 ltr:inline-block rtl:hidden size-4" />
                            <ChevronLeft class="mr-1 ltr:hidden rtl:inline-block size-4" />
                        </button>
                    </div>
                </div>
            </div>
            <!-- Delete Modal -->
            <DeleteModule :showDeletePop="showDeleteModal" :setDeleteModal="setDeleteModalValue" :title="deleteEmployee" :deleteRow="deleteSalary" />

        </div>
    </div>
</template>