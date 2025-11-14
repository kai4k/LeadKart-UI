<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { staffData, type Staff } from './staff-data';
import { ChevronLeft, ChevronRight } from 'lucide-vue-next';
import { formatDate } from '@/utils/helper-function';

const props = defineProps({
    setShowDeleteModuleValue: Function,
    setUpdateModuleValue: Function,
})


// Reactive data
const staffs = ref<Staff[]>(staffData.value);
const sortBy = ref<string>('');
const sortDirection = ref<'asc' | 'desc'>('asc');
const currentPage = ref<number>(1);
const itemsPerPage = ref<number>(10);
const showingStart = computed(() => Math.min((currentPage.value - 1) * itemsPerPage.value + 1, staffs.value.length));
const showingEnd = computed(() => Math.min(currentPage.value * itemsPerPage.value, staffs.value.length));

// Computed properties for pagination
const totalPages = computed(() => Math.ceil(staffs.value.length / itemsPerPage.value));
const displayedStaff = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage.value;
    const end = start + itemsPerPage.value;
    return staffs.value.slice(start, end).map((staff: Staff) => ({
        ...staff,
        formattedDate: formatDate(staff.date),
        avatarText: staff.name ? staff.name[0] : '', // Use first letter of name for avatar
    }));
});

// Sorting function
function sort(column: string) {
    if (column === sortBy.value) {
        sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc';
    } else {
        sortBy.value = column;
        sortDirection.value = 'asc';
    }

    staffs.value.sort((a: any, b: any) => {
        const valueA = a[column as keyof Staff];
        const valueB = b[column as keyof Staff];
        let comparison = 0;

        if (valueA > valueB) comparison = 1;
        if (valueA < valueB) comparison = -1;

        return sortDirection.value === 'desc' ? comparison * -1 : comparison;
    });
}

// Pagination functions
function prevPage() {
    if (currentPage.value > 1) {
        currentPage.value--;
    }
}

function nextPage() {
    if (currentPage.value < totalPages.value) {
        currentPage.value++;
    }
}

function gotoPage(page: number) {
    currentPage.value = page;
}

// Image error handling
function removeImage(event: Event) {
    const image = event.target as HTMLImageElement;
    image.style.display = 'none';
    const container = image.parentNode as HTMLElement;
    const span = container.querySelector('span')!;
    span.style.display = 'flex';
}

function deleteRow(index: number) {
    if (props.setShowDeleteModuleValue) props.setShowDeleteModuleValue(index, true)
}
function updateRow(data: Staff) {
    if (props.setUpdateModuleValue) props.setUpdateModuleValue(true, data)
}
</script>
<template>
    <div class="pt-0 card-body">
        <div>
            <div class="table-box whitespace-nowrap" data-simplebar>
                <table class="table flush">
                    <tbody>
                        <tr class="text-gray-500 bg-gray-100 dark:bg-dark-850 dark:text-dark-500">
                            <th @click="sort('staffID')" class="!font-medium cursor-pointer">ID
                                <span v-if="sortBy === 'staffID'">{{ sortDirection === 'asc' ? '↑' : '↓' }}</span>
                            </th>
                            <th @click="sort('name')" class="!font-medium cursor-pointer">Staff Name
                                <span v-if="sortBy === 'name'">{{ sortDirection === 'asc' ? '↑' : '↓' }}</span>
                            </th>
                            <th @click="sort('department')" class="!font-medium cursor-pointer">Department
                                <span v-if="sortBy === 'department'">{{ sortDirection === 'asc' ? '↑' : '↓' }}</span>
                            </th>
                            <th @click="sort('email')" class="!font-medium cursor-pointer">Email
                                <span v-if="sortBy === 'email'">{{ sortDirection === 'asc' ? '↑' : '↓' }}</span>
                            </th>
                            <th @click="sort('phone')" class="!font-medium cursor-pointer">Phone
                                <span v-if="sortBy === 'phone'">{{ sortDirection === 'asc' ? '↑' : '↓' }}</span>
                            </th>
                            <th @click="sort('date')" class="!font-medium cursor-pointer">Joining Date
                                <span v-if="sortBy === 'date'">{{ sortDirection === 'asc' ? '↑' : '↓' }}</span>
                            </th>
                            <th class="!font-medium">Action</th>
                        </tr>
                        <template v-for="(staff, index) in displayedStaff" :key="index">
                            <tr class="*:px-3 *:py-2.5">
                                <td>PES-{{ staff.staffID }}</td>
                                <td>
                                    <div class="flex items-center gap-3">
                                        <div class="relative text-gray-500 bg-gray-100 rounded-full dark:text-dark-500 dark:bg-dark-850 size-10">
                                            <img v-if="staff.image" :src="staff.image" alt="" class="rounded-full" @error="removeImage" />
                                            <span v-if="!staff.image" class="absolute inset-0 flex items-center justify-center text-sm font-semibold text-gray-500 bg-gray-100 rounded-full dark:text-dark-500 dark:bg-dark-850">
                                                {{ staff.avatarText }}
                                            </span>
                                        </div>
                                        <div>
                                            <h6 class="mb-1"><a href="#!">{{ staff.name }}</a></h6>
                                            <p class="text-sm text-gray-500 dark:text-dark-500">{{ staff.role }}</p>
                                        </div>
                                    </div>
                                </td>
                                <td>{{ staff.department }}</td>
                                <td>{{ staff.email }}</td>
                                <td>{{ staff.phone }}</td>
                                <td>{{ staff.formattedDate }}</td>
                                <td>
                                    <div class="flex items-center gap-2">
                                        <button class="btn btn-sub-gray btn-icon !size-8 rounded-md" title="edit" @click="updateRow(staff)">
                                            <i class="ri-pencil-line"></i>
                                        </button>
                                        <button class="btn btn-sub-red btn-icon !size-8 rounded-md" title="delete" @click="deleteRow(index)">
                                            <i class="ri-delete-bin-line"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </template>
                    </tbody>
                </table>
            </div>

            <!-- Pagination -->
            <div class="grid items-center grid-cols-12 gap-5 mt-5">
                <div class="flex flex-wrap justify-center col-span-12 md:col-span-6 md:justify-start">
                    <p class="text-gray-500 dark:text-dark-500">Showing <b>{{ showingStart }}</b> - <b>{{ showingEnd }}</b> of <b>{{ staffs.length }}</b> Results</p>
                </div>
                <div class="col-span-12 md:col-span-6">
                    <div class="flex justify-center md:justify-end pagination pagination-primary">
                        <button @click="prevPage" :disabled="currentPage === 1" class="pagination-pre">
                            <ChevronLeft class="mr-1 rtl:hidden ltr:inline-block size-4" />
                            <ChevronRight class="ml-1 ltr:hidden rtl:inline-block size-4" />
                            Prev
                        </button>
                        <template v-for="page in totalPages" :key="page">
                            <button @click="gotoPage(page)" :class="{ active: currentPage === page }" class="pagination-item">{{ page }}</button>
                        </template>
                        <button @click="nextPage" :disabled="currentPage === totalPages" class="pagination-next">
                            Next
                            <ChevronRight class="ml-1 ltr:inline-block rtl:hidden size-4" />
                            <ChevronLeft class="mr-1 ltr:hidden rtl:inline-block size-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>