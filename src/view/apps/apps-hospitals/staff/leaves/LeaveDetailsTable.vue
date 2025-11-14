<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import TableDataNotFount from '@/view/apps/app-ecommerce/Orders/list-view/TableDataNotFount.vue';
import simplebar from 'simplebar-vue';
import { ChevronLeft, ChevronRight, } from 'lucide-vue-next';
import { leavesData, type Leave } from './leave-data';
const props = defineProps({
    status: {
        type: String,
        default: "",
    },
    searchQuery: {
        type: String,
        default: ""
    }
})

const leaves = ref(leavesData);
const searchTerm = ref(props.searchQuery);
const sortBy = ref("leaveID");
const sortDirection = ref("asc");
const currentPage = ref(1);
const itemsPerPage = ref(10);
const dateRange = ref([null, null]);
const filterLeaves = ref([...leavesData.value]);
const selectedStatus = ref(props.status);

watch(() => props.status, (newStatus) => {
    selectedStatus.value = newStatus
})
watch(() => props.searchQuery, (newQuery) => {
    searchTerm.value = newQuery
})
// Computed properties for pagination and sorting

const totalPages = computed(() => {
    let filtered = leaves.value;

    // Apply filters for consistent pagination count
    if (searchTerm.value) {
        const searchLower = searchTerm.value.toLowerCase();
        filtered = filtered.filter(leave =>
            Object.values(leave).some(value =>
                value.toString().toLowerCase().includes(searchLower)
            )
        );
    }

    if (dateRange.value[0] || dateRange.value[1]) {
        const [startDate, endDate] = dateRange.value;
        filtered = filtered.filter(leave => {
            const leaveStartDate = new Date(leave.startDate);
            return (!startDate || leaveStartDate >= new Date(startDate)) &&
                (!endDate || leaveStartDate <= new Date(endDate));
        });
    }

    if (selectedStatus.value) {
        filtered = filtered.filter(leave => leave.status === selectedStatus.value);
    }

    return Math.ceil(filtered.length / itemsPerPage.value);
});
const displayedLeaves = computed(() => {
    let filtered = leaves.value;
    // Filter by search term
    if (searchTerm.value) {
        const searchLower = searchTerm.value.toLowerCase();
        filtered = filtered.filter(leave =>
            Object.values(leave).some(value =>
                value.toString().toLowerCase().includes(searchLower)
            )
        );
    }

    // Filter by date range
    if (dateRange.value[0] || dateRange.value[1]) {
        const [startDate, endDate] = dateRange.value;
        filtered = filtered.filter(leave => {
            const leaveStartDate = new Date(leave.startDate);
            return (!startDate || leaveStartDate >= new Date(startDate)) &&
                (!endDate || leaveStartDate <= new Date(endDate));
        });
    }

    // Filter by status
    if (selectedStatus.value) {
        filtered = filtered.filter(leave => leave.status === selectedStatus.value);
    }

    // Pagination logic
    const start = (currentPage.value - 1) * itemsPerPage.value;
    const end = start + itemsPerPage.value;
    return filtered.slice(start, end);
});

// Sorting function
function sort(column: string) {
    if (sortBy.value === column) {
        sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc';
    } else {
        sortBy.value = column;
        sortDirection.value = 'asc';
    }
    filterLeaves.value.sort((a: any, b: any) => {
        const valueA = a[column];
        const valueB = b[column];
        let comparison = 0;
        if (valueA > valueB) comparison = 1;
        if (valueA < valueB) comparison = -1;
        return sortDirection.value === 'desc' ? comparison * -1 : comparison;
    });
}

// Handling pagination
function prevPage() {
    if (currentPage.value > 1) currentPage.value--;
}

function nextPage() {
    if (currentPage.value < totalPages.value) currentPage.value++;
}

function gotoPage(page: number) {
    currentPage.value = page;
}

// Leave actions
function approveLeave(leave: Leave) {
    const index = leaves.value.findIndex(l => l === leave);
    if (index !== -1) {
        leaves.value[index].status = 'Approved';
    }
}

function rejectedLeave(leave: Leave) {
    const index = leaves.value.findIndex(l => l === leave);
    if (index !== -1) {
        leaves.value[index].status = 'Rejected';
    }
}
function pendingLeave(leave: Leave) {
    const index = leaves.value.findIndex(l => l === leave);
    if (index !== -1) {
        leaves.value[index].status = 'Pending';
    }
}
// Filtering leaves
function filteredLeaves() {
    let filtered = leaves.value;
    const searchLower = searchTerm.value.toLowerCase();

    // Filter by search term
    if (searchTerm.value) {
        filtered = filtered.filter(leave =>
            Object.values(leave).some(value => value.toString().toLowerCase().includes(searchLower))
        );
    }

    // Filter by date range
    if (dateRange.value[0] || dateRange.value[1]) {
        const [startDate, endDate] = dateRange.value;
        filtered = filtered.filter(leave => {
            const leaveStartDate = new Date(leave.startDate);
            return (!startDate || leaveStartDate >= new Date(startDate)) &&
                (!endDate || leaveStartDate <= new Date(endDate));
        });
    }

    watch(selectedStatus, () => {
        filteredLeaves();
    });
    // Filter by status
    if (selectedStatus.value) {
        filtered = filtered.filter(leave => leave.status === selectedStatus.value);
    }

    filterLeaves.value = filtered;
}
function calculateTotalDays(startDate: string, endDate: string): number {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const timeDiff = end.getTime() - start.getTime();
    const days = timeDiff / (1000 * 3600 * 24); // Convert time difference to days
    return days + 1; // Adding 1 to include both start and end date
}

// Showing current page range
const showingStart = computed(() => Math.min((currentPage.value - 1) * itemsPerPage.value + 1, leaves.value.length));
const showingEnd = computed(() => Math.min(currentPage.value * itemsPerPage.value, leaves.value.length));
</script>
<template>
    <div class="pt-0 card-body">
        <simplebar class="table-box">
            <table class="table whitespace-nowrap">
                <thead>
                    <tr class="text-gray-500 bg-gray-100 dark:bg-dark-850 dark:text-dark-500">
                        <th @click="sort('leaveID')" class="!font-medium cursor-pointer">
                            ID <span v-if="sortBy === 'leaveID'" :text="sortDirection === 'asc' ? '↑' : '↓'"></span>
                        </th>
                        <th @click="sort('leaveType')" class="!font-medium cursor-pointer">
                            Leave Type <span v-if="sortBy === 'leaveType'"
                                :text="sortDirection === 'asc' ? '↑' : '↓'"></span>
                        </th>
                        <th @click="sort('startDate')" class="!font-medium cursor-pointer">
                            Start Date <span v-if="sortBy === 'startDate'"
                                :text="sortDirection === 'asc' ? '↑' : '↓'"></span>
                        </th>
                        <th @click="sort('endDate')" class="!font-medium cursor-pointer">
                            End Date <span v-if="sortBy === 'endDate'"
                                :text="sortDirection === 'asc' ? '↑' : '↓'"></span>
                        </th>
                        <th @click="sort('totalDays')" class="!font-medium cursor-pointer">
                            Days <span v-if="sortBy === 'totalDays'" :text="sortDirection === 'asc' ? '↑' : '↓'"></span>
                        </th>
                        <th @click="sort('reason')" class="!font-medium cursor-pointer">
                            Reason <span v-if="sortBy === 'reason'" :text="sortDirection === 'asc' ? '↑' : '↓'"></span>
                        </th>
                        <th @click="sort('approvedBy')" class="!font-medium cursor-pointer">
                            Approved By <span v-if="sortBy === 'approvedBy'"
                                :text="sortDirection === 'asc' ? '↑' : '↓'"></span>
                        </th>
                        <th @click="sort('dateRequested')" class="!font-medium cursor-pointer">
                            Request Date <span v-if="sortBy === 'dateRequested'"
                                :text="sortDirection === 'asc' ? '↑' : '↓'"></span>
                        </th>
                        <th @click="sort('dateApproved')" class="!font-medium cursor-pointer">
                            Approved Date <span v-if="sortBy === 'dateApproved'"
                                :text="sortDirection === 'asc' ? '↑' : '↓'"></span>
                        </th>
                        <th @click="sort('status')" class="!font-medium cursor-pointer">
                            Status <span v-if="sortBy === 'status'" :text="sortDirection === 'asc' ? '↑' : '↓'"></span>
                        </th>
                        <th class="!font-medium">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(leave, index) in displayedLeaves" :key="index" class="*:px-3 *:py-2.5">
                        <td>PEA-{{ leave?.leaveID }}</td>
                        <td>{{ leave.leaveType }}</td>
                        <td>{{ leave.startDate }}</td>
                        <td>{{ leave.endDate }}</td>
                        <td>{{ calculateTotalDays(leave.startDate, leave.endDate) }}</td>
                        <td>{{ leave.reason }}</td>
                        <td>{{ leave.approvedBy }}</td>
                        <td>{{ leave.dateRequested }}</td>
                        <td>{{ leave.dateApproved }}</td>
                        <td>
                            <span :class="{
                                'badge badge-green': leave.status === 'Approved',
                                'badge badge-red': leave.status === 'Rejected',
                                'badge badge-yellow': leave.status === 'Pending'
                            }">{{ leave.status }}</span>
                        </td>
                        <td>
                            <div class="flex items-center gap-2">
                                <button title="Approved" @click="approveLeave(leave)"
                                    class="btn btn-sub-green btn-icon !size-8"><i class="ri-check-line"></i></button>
                                <button title="Edit" class="btn btn-sub-gray btn-icon !size-8"
                                    @click="pendingLeave(leave)"><i class="ri-pencil-line"></i></button>
                                <button title="Rejected" @click="rejectedLeave(leave)"
                                    class="btn btn-sub-red btn-icon !size-8"><i class="ri-close-line"></i></button>
                            </div>
                        </td>
                    </tr>
                    <tr v-if="displayedLeaves.length === 0">
                        <TableDataNotFount />
                    </tr>
                </tbody>
            </table>
        </simplebar>

        <div class="grid items-center grid-cols-12 gap-5 mt-5" v-if="displayedLeaves.length !== 0">
            <div class="flex flex-wrap justify-center col-span-12 md:col-span-6 md:justify-start">
                <p class="text-gray-500 dark:text-dark-500">Showing <b>{{ showingStart }}</b> - <b>{{ showingEnd }}</b>
                    of <b>{{ leaves.length }}</b> Results</p>
            </div>
            <div class="col-span-12 md:col-span-6">
                <div class="flex justify-center md:justify-end pagination pagination-primary">
                    <button @click="prevPage" :disabled="currentPage === 1" class="pagination-pre">
                        <ChevronLeft class="mr-1 ltr:inline-block rtl:hidden size-4"/>
                        <ChevronRight class="ml-1 ltr:hidden rtl:inline-block size-4"/>
                        Prev
                    </button>
                    <button v-for="page in totalPages" :key="page" @click="gotoPage(page)"
                        :class="{ 'active': currentPage === page }" class="pagination-item">
                        <span>{{ page }}</span>
                    </button>
                    <button @click="nextPage" :disabled="currentPage === totalPages" class="pagination-next">
                        Next
                        <ChevronRight class="ml-1 ltr:inline-block rtl:hidden size-4"/>
                        <ChevronLeft class="mr-1 ltr:hidden rtl:inline-block size-4"/>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>