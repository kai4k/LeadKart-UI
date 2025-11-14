<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { holidayData } from './holiday-list-data';
import type { HolidayForm } from './holiday-list-data';
import { ChevronLeft, ChevronRight, CirclePlus, } from 'lucide-vue-next';
import AddHoliday from './AddHoliday.vue';
import DeleteModule from '@/view/apps/apps-email/apps-mailbox/DeleteModule.vue';
import simplebar from 'simplebar-vue';

const showAddHolidayForm = ref(false);
const deleteModuleShow = ref(false)
const selectedData = ref<HolidayForm | null>(null)
const showEditHolidayForm = ref(false);
const editHolidayData = ref<any>({});
const setAddFormValue = (state: boolean) => {
    showAddHolidayForm.value = state
}
const setDeleteModuleValue = (state: boolean, data?: HolidayForm) => {
    deleteModuleShow.value = state;
    selectedData.value = data as HolidayForm
}
const setEditHolidayFormValue = (state: boolean, data: HolidayForm) => {
    showEditHolidayForm.value = state;
    editHolidayData.value = data
}


const holidays = computed(() => {
    return holidayData.value.map((holiday, index) => ({
        ...holiday,
        holidayID: `PEH-${1595 + index}`, // Generate unique holiday ID
        formattedDate: formatDate(holiday.date), // Assuming formatDate is a function to format the date
    }));
});

const currentPage = ref(1);
const itemsPerPage = ref(10);
const sortBy = ref('');
const sortDirection = ref<'asc' | 'desc'>('asc');
const holidayForm = ref<Partial<HolidayForm>>({});
const showModal = ref(false);

// Computed properties
const totalPages = computed(() => Math.ceil(holidays.value.length / itemsPerPage.value));
const displayedHolidays = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage.value;
    const end = start + itemsPerPage.value;
    return holidays.value.slice(start, end);
});
const showingStart = computed(() => (currentPage.value - 1) * itemsPerPage.value + 1);
const showingEnd = computed(() => Math.min(currentPage.value * itemsPerPage.value, holidays.value.length));

// Utility functions
function formatDate(date: string): string {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-GB', options);
}

// Methods
function sort(column: keyof HolidayForm) {
    if (sortBy.value === column) {
        sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc';
    } else {
        sortBy.value = column;
        sortDirection.value = 'asc';
    }
    holidays.value.sort((a, b) => {
        const valueA = a[column] as string;
        const valueB = b[column] as string;
        return sortDirection.value === 'asc' ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
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

function handleModal(mode: 'add' | 'edit') {
    showModal.value = true;
    if (mode === 'add') {
        holidayForm.value = {};
    }
}

function editHoliday(index: number) {
    holidayForm.value = { ...holidays.value[index] };
    handleModal('edit');
}

function deleteHoliday() {
    const deletedIndex = holidayData.value.findIndex(data => data.id === selectedData.value?.id);
    holidayData.value.splice(deletedIndex, 1)

}
onMounted(() => {
    holidayData.value.forEach((data, index) => {
        data.id = 1 + index
    })
})
</script>
<template>
    <div class="col-span-12 xl:col-span-8 2xl:col-span-9 card">
        <div class="flex items-center gap-3 card-header">
            <h6 class="card-title grow">Holiday</h6>
            <button type="button" class="btn btn-primary shrink-0" @click="showAddHolidayForm = true">
                <CirclePlus class="inline-block w-4 mr-1 size-4" /> Add Holiday
            </button>
        </div>
        <div class="pt-0 card-body">
            <div>
                <simplebar data-simplebar class="table-box whitespace-nowrap">
                    <table class="table flush">
                        <thead>
                            <tr class="text-gray-500 bg-gray-100 dark:bg-dark-850 dark:text-dark-500">
                                <th @click="sort('name')" class="cursor-pointer">Holiday Name
                                    <span v-if="sortBy === 'name'">{{ sortDirection === 'asc' ? '↑' : '↓' }}</span>
                                </th>
                                <th @click="sort('date')" class="cursor-pointer">Date
                                    <span v-if="sortBy === 'date'">{{ sortDirection === 'asc' ? '↑' : '↓' }}</span>
                                </th>
                                <th @click="sort('day')" class="cursor-pointer">Day
                                    <span v-if="sortBy === 'day'">{{ sortDirection === 'asc' ? '↑' : '↓' }}</span>
                                </th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(holiday, index) in displayedHolidays" :key="index" class="*:px-3 *:py-2.5">
                                <td>{{ holiday.name }}</td>
                                <td>{{ holiday.formattedDate }}</td>
                                <td>{{ holiday.day }}</td>
                                <td>
                                    <div class="flex items-center gap-2">
                                        <button class="btn btn-sub-gray btn-icon !size-8 rounded-md" @click="setEditHolidayFormValue(true, holiday)" title="Edit">
                                            <i class="ri-pencil-line"></i>
                                        </button>
                                        <button class="btn btn-sub-red btn-icon !size-8 rounded-md" @click="setDeleteModuleValue(true, holiday)" title="Delete">
                                            <i class="ri-delete-bin-line"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </simplebar>
                <div class="grid items-center grid-cols-12 gap-5 mt-5">
                    <div class="flex flex-wrap justify-center col-span-12 md:col-span-6 md:justify-start">
                        <p class="text-gray-500 dark:text-dark-500">
                            Showing <b>{{ showingStart }}</b> - <b>{{ showingEnd }}</b> of <b>{{ holidays.length }}</b>
                            Results
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
    </div>
    <AddHoliday :moduleShow="showAddHolidayForm" :setModuleVisibleValue="setAddFormValue" :showEditModule="showEditHolidayForm" :setEditModuleVisibleValue="setEditHolidayFormValue" :editData="editHolidayData" />

    <DeleteModule :showDeletePop="deleteModuleShow" :setDeleteModal="setDeleteModuleValue" :deleteRow="deleteHoliday" />
</template>