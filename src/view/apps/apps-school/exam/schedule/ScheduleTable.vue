<script setup lang="ts">
import { ref, computed } from 'vue';
import examListData from './schedule-data';
import type { Schedule } from './schedule-data';
import AddScheduleRow from './AddScheduleRow.vue';
import DeleteModule from '@/view/apps/apps-email/apps-mailbox/DeleteModule.vue';
import { ChevronLeft, ChevronRight, CirclePlus } from 'lucide-vue-next';
import TableDataNotFount from '@/view/apps/app-ecommerce/Orders/list-view/TableDataNotFount.vue';

// Pagination
const currentPage = ref(1);
const itemsPerPage = ref(10);;
const selectedDateFilter = ref<string>("All");
const selectedClass = ref("All")

const displayedSchedules = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage.value;
    const end = start + itemsPerPage.value;
    return filteredSchedules.value.slice(start, end);
});


const filteredSchedules = computed(() => {
    return examListData.value.filter((schedule) => {
        // Filter by class
        const classMatch = selectedClass.value === "All" || schedule.class === selectedClass.value;

        // Filter by date
        const today = new Date();
        let dateMatch = true;

        if (selectedDateFilter.value === "Today") {
            dateMatch = new Date(schedule.startDate).toDateString() === today.toDateString();
        } else if (selectedDateFilter.value === "Tomorrow") {
            const tomorrow = new Date(today);
            tomorrow.setDate(today.getDate() + 1);
            dateMatch = new Date(schedule.startDate).toDateString() === tomorrow.toDateString();
        } else if (selectedDateFilter.value === "Weekly") {
            const weekLater = new Date(today);
            weekLater.setDate(today.getDate() + 7);
            dateMatch = new Date(schedule.startDate) >= today && new Date(schedule.startDate) <= weekLater;
        } else if (selectedDateFilter.value === "Monthly") {
            const monthLater = new Date(today);
            monthLater.setMonth(today.getMonth() + 1);
            dateMatch = new Date(schedule.startDate) >= today && new Date(schedule.startDate) <= monthLater;
        } else if (selectedDateFilter.value === "Yearly") {
            const yearLater = new Date(today);
            yearLater.setFullYear(today.getFullYear() + 1);
            dateMatch = new Date(schedule.startDate) >= today && new Date(schedule.startDate) <= yearLater;
        }

        return classMatch && dateMatch;
    });
});
const totalPages = computed(() => Math.ceil(filteredSchedules.value.length / itemsPerPage.value));
const showingStart = computed(() => Math.min((currentPage.value - 1) * itemsPerPage.value + 1, filteredSchedules.value.length));
const showingEnd = computed(() => Math.min(currentPage.value * itemsPerPage.value, filteredSchedules.value.length));

// Methods


const sortDirection = ref<'asc' | 'desc'>('asc');
const tableHeaders = [
    { label: 'ID', field: 'testId' },
    { label: 'Test Name', field: 'testName' },
    { label: 'Test Category', field: 'testCategory' },
    { label: 'Test Type', field: 'testType' },
    { label: 'Class', field: 'class' },
    { label: 'Start Date', field: 'startDate' },
    { label: 'End Date', field: 'endDate' },
    { label: 'Status', field: 'status' },
];
const sortBy = ref<string | null>(null);
function sort(column: string) {
    if (sortBy.value === column) {
        sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc';
    } else {
        sortBy.value = column;
        sortDirection.value = 'asc';
    }
    examListData.value.sort((a: any, b: any) => {
        const valueA = a[column as keyof Schedule];
        const valueB = b[column as keyof Schedule];
        if (valueA > valueB) return sortDirection.value === 'asc' ? 1 : -1;
        if (valueA < valueB) return sortDirection.value === 'asc' ? -1 : 1;
        return 0;
    });
}

const prevPage = () => {
    if (currentPage.value > 1) currentPage.value--;
};

const nextPage = () => {
    if (currentPage.value < totalPages.value) currentPage.value++;
};

const gotoPage = (page: number) => {
    currentPage.value = page;
};

examListData.value.forEach((data, index) => {
    data.testId = `${498 + index}`
})

const classOption = [
    { label: 'Class 6', value: '6' },
    { label: 'Class 7', value: '7' },
    { label: 'Class 8', value: '8' },
    { label: 'Class 9', value: '9' },
    { label: 'Class 10', value: '10' },
    { label: 'Class 11', value: '11' },
    { label: 'Class 12', value: '12' },
]

// Crud Operation
const showAddScheduleForm = ref(false);
const showEditScheduleForm = ref(false);
const showDeleteScheduleForm = ref<boolean>(false);
const selectedData = ref<Schedule>()
const setShowAddModuleValue = (stats: boolean) => {
    showAddScheduleForm.value = stats
}
const setShowEditModuleValue = (stats: boolean, data?: Schedule) => {
    showEditScheduleForm.value = stats;
    selectedData.value = data;
}
const setShowDeleteModuleValue = (stats: boolean, data?: Schedule) => {
    showDeleteScheduleForm.value = stats
    selectedData.value = data;
}

const deleteSchedule = () => {
    if (selectedData.value) {
        const findIndex = examListData.value.findIndex(
            (data) => data.testId === selectedData.value?.testId
        );

        if (findIndex !== -1) {
            examListData.value.splice(findIndex, 1);
        }
    }
};



</script>
<template>
    <div class="card">
        <div>
            <!-- Header Section -->
            <div class="items-center justify-between gap-5 md:flex card-header">
                <div>
                    <h6 class="card-title">Exam Schedule List</h6>
                </div>
                <div class="flex flex-wrap gap-2 mt-3 md:mt-0">
                    <div>
                        <select id="stdFilterSelect" v-model="selectedClass" placeholder="Select STD" class="form-select">
                            <option value="All">All Classes</option>
                            <template v-for="(option, index) in classOption" :key="index">
                                <option :value="option.value">{{ option.label }}</option>
                            </template>
                        </select>
                    </div>
                    <div>
                        <select id="dateFilterSelect" placeholder="Select Filters" class="form-select">
                            <option value="All">All Dates</option>
                            <option value="Today">Today</option>
                            <option value="Tomorrow">Tomorrow</option>
                            <option value="Weekly">This Week</option>
                            <option value="Monthly">This Month</option>
                            <option value="Yearly">This Year</option>
                        </select>
                    </div>
                    <div>
                        <!-- @click="handleModal('showAddScheduleForm')" -->
                        <button type="button" class="w-full btn btn-primary" @click="setShowAddModuleValue(true)">
                            <CirclePlus class="inline-block ltr:mr-1 rtl:ml-1 size-4"></CirclePlus>
                            Add Exam Schedule
                        </button>
                    </div>
                </div>
            </div>
            <!-- Table Section -->
            <div class="pt-0 card-body">
                <div>
                    <div class="overflow-x-auto table-box whitespace-nowrap">
                        <table class="table flush">
                            <thead>
                                <tr class="text-gray-500 bg-gray-100 dark:bg-dark-850 dark:text-dark-500">
                                    <th v-for="header in tableHeaders" :key="header.field" @click="sort(header.field)" class="!font-medium cursor-pointer">
                                        {{ header.label }}
                                        <span v-if="sortBy === header.field" :class="{ 'text-gray-700': sortDirection === 'asc', 'text-gray-500': sortDirection === 'desc' }">
                                            {{ sortDirection === 'asc' ? '↑' : '↓' }}
                                        </span>
                                    </th>
                                    <th class="!font-medium">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <template v-for="(schedule, index) in displayedSchedules" :key="index">
                                    <tr class="*:px-3 *:py-2.5">
                                        <td>PEE-{{ schedule.testId }}</td>
                                        <td>{{ schedule.testName }}</td>
                                        <td>{{ schedule.testCategory }}</td>
                                        <td>{{ schedule.testType }}</td>
                                        <td>{{ schedule.class }}</td>
                                        <td>{{ schedule.startDate }}</td>
                                        <td>{{ schedule.endDate }}</td>
                                        <td>
                                            <span :class="{
                                                'badge badge-sky': schedule.status === 'New',
                                                'badge badge-yellow': schedule.status === 'Scheduled',
                                                'badge badge-green': schedule.status === 'Completed',
                                            }">
                                                {{ schedule.status }}
                                            </span>
                                        </td>
                                        <td>
                                            <div class="flex items-center gap-2">
                                                <button class="btn btn-sub-gray btn-icon !size-8 rounded-md" @click="setShowEditModuleValue(true, schedule)">
                                                    <i class="ri-pencil-line"></i>
                                                </button>
                                                <button class="btn btn-sub-red btn-icon !size-8 rounded-md" @click="setShowDeleteModuleValue(true, schedule)">
                                                    <i class="ri-delete-bin-line"></i>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                </template>
                                <tr v-if="displayedSchedules.length === 0">
                                    <TableDataNotFount />
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <!-- Pagination -->
                    <div class="grid items-center grid-cols-12 gap-5 mt-5" v-if="displayedSchedules.length > 0">
                        <div class="flex flex-wrap justify-center col-span-12 md:col-span-6 md:justify-start">
                            <p class="text-gray-500 dark:text-dark-500">
                                Showing <b>{{ showingStart }}</b> - <b>{{ showingEnd }}</b> of <b>{{ examListData.length }}</b> Results
                            </p>
                        </div>
                        <div class="col-span-12 md:col-span-6">
                            <div class="flex justify-center md:justify-end pagination pagination-primary">
                                <button @click="prevPage" :disabled="currentPage === 1" class="pagination-pre">
                                    <ChevronLeft class="mr-1 ltr:inline-block rtl:hidden size-4" />
                                    <ChevronRight class="ml-1 ltr:hidden rtl:inline-block size-4" />Prev
                                </button>

                                <button v-for="page in totalPages" :key="page" @click="gotoPage(page)" :class="{ active: currentPage === page }" class="pagination-item">
                                    {{ page }}
                                </button>
                                <button @click="nextPage" :disabled="currentPage === totalPages" class="pagination-next">Next
                                    <ChevronRight class="ml-1 ltr:inline-block rtl:hidden size-4" />
                                    <ChevronLeft class="mr-1 ltr:hidden rtl:inline-block size-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <AddScheduleRow :addModuleShow="showAddScheduleForm" :setAddModuleValue="setShowAddModuleValue" :editModuleShow="showEditScheduleForm" :setEditModuleValue="setShowEditModuleValue" :editData="selectedData" />

            <DeleteModule :showDeletePop="showDeleteScheduleForm" :setDeleteModal="setShowDeleteModuleValue" :deleteRow="deleteSchedule" />
        </div>
    </div>
</template>