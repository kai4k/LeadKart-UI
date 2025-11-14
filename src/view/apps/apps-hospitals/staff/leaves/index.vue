<script setup lang="ts">
import PageHeading from '@/components/common/PageHeading.vue';
import { computed, ref } from 'vue';
import flatPickr from 'vue-flatpickr-component';
// import 'flatpickr/dist/flatpickr.css';
import { Filter, Search } from 'lucide-vue-next';
import LeaveDetailsTable from './LeaveDetailsTable.vue';
import { leavesData, type Leave } from './leave-data';


const TableData = ref<Leave[]>([])
const pendingCount = computed(() =>
    leavesData.value.filter((e) => e.status.toLowerCase() === 'pending').length
);
const rejectedCount = computed(() =>
    leavesData.value.filter((e) => e.status.toLowerCase() === 'rejected').length
)
const approvedCount = computed(() =>
    leavesData.value.filter((e) => e.status.toLowerCase() === 'approved').length
)

const leaveData = ref([
    {
        label: 'Available Leaves',
        count: approvedCount,
        colorClass: 'text-green-500 bg-green-500/10',
    },
    {
        label: 'Used Leaves',
        count: 5,
        colorClass: 'text-purple-500 bg-purple-500/10',
    },
    {
        label: 'Pending Leaves Request',
        count: pendingCount,
        colorClass: 'text-yellow-500 bg-yellow-500/10',
    },
    {
        label: 'Rejected Leaves',
        count: rejectedCount,
        colorClass: 'text-red-500 bg-red-500/10',
    },
    {
        label: 'Total Leaves',
        count: leavesData.value.length,
        colorClass: 'text-sky-500 bg-sky-500/10',
    }
]);
// Data properties for form inputs
const searchTerm = ref<string>(''); // For Leave Type reason
const dateRange = ref<string | null>(null);
const status = ref<string>(''); // For Status Select

const rangePicker: any = {
    mode: "range"
}

// Method to filter leaves based on form input
const filteredLeaves = () => {
    TableData.value = leavesData.value.filter((e) => {
        return e.status.toLowerCase() === status.value.toLowerCase()
    })
};

</script>
<template>
    <PageHeading title="Leave Management" sub-title="Staff" />
    <div>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-x-space">
            <!-- Loop over the leave data array -->
            <div v-for="(leave, index) in leaveData" :key="index" class="card">
                <div class="flex items-center gap-4 card-body">
                    <div :class="[
                        'flex items-center justify-center text-xl font-medium rounded-md size-14',
                        leave.colorClass
                    ]">
                        {{ leave.count }}
                    </div>
                    <p class="text-gray-500 dark:text-dark-500">{{ leave.label }}</p>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="flex items-center gap-3 card-header">
                <h6 class="card-title grow">Leaves</h6>
                <div class="shrink-0">
                    <a href="apps-hospital-staff-leave-add" class="btn btn-primary">New Request</a>
                </div>
            </div>
            <div class="card-header">
                <div class="grid grid-cols-12 gap-space">
                    <!-- Leave Type Reason Input -->
                    <div class="col-span-12 md:col-span-6 xl:col-span-3 2xl:col-span-4">
                        <div class="relative group/form">
                            <input type="text"
                                class="ltr:pl-9 rtl:pr-9 form-input ltr:group-[&.right]/form:pr-9 rtl:group-[&.right]/form:pl-9 ltr:group-[&.right]/form:pl-4 rtl:group-[&.right]/form:pr-4"
                                placeholder="Leave Type reason" v-model="searchTerm" @input="filteredLeaves" />
                            <div
                                class="absolute inset-y-0 flex items-center text-gray-500 dark:text-dark-500 ltr:left-3 rtl:right-3 ltr:group-[&.right]/form:right-3 rtl:group-[&.right]/form:left-3 ltr:group-[&.right]/form:left-auto rtl:group-[&.right]/form:right-auto focus:outline-none">
                                <Search data-lucide="search" class="size-4"></Search>
                            </div>
                        </div>
                    </div>

                    <!-- Date Range Picker -->
                    <div class="col-span-12 md:col-span-6 xl:col-span-3 2xl:col-span-3">
                        <flat-pickr v-model="dateRange" data-date-format="d M, Y" data-range-date type="text"
                            placeholder="Select Date Range" class="form-input" :config="rangePicker" />
                    </div>

                    <!-- Status Select -->
                    <div class="col-span-12 md:col-span-6 xl:col-span-3 2xl:col-span-3">
                        <select id="statusSelect" class="form-select" v-model="status">
                            <option value="">Select Status</option>
                            <option value="Approved">Approved</option>
                            <option value="Pending">Pending</option>
                            <option value="Rejected">Rejected</option>
                        </select>
                    </div>

                    <!-- Filter Now Button -->
                    <div class="col-span-12 md:col-span-6 xl:col-span-3 2xl:col-span-2">
                        <button type="button" class="w-full btn btn-sub-gray">
                            <Filter class="inline-block align-middle size-4"></Filter> Filter Now
                        </button>
                    </div>
                </div>
            </div>
            <LeaveDetailsTable :tableData="TableData" :status="status" :searchQuery="searchTerm" />
        </div>
    </div>
</template>