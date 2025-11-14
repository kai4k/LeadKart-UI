<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { appointmentsData } from './appointment-data';
import OverviewPopup from './OverviewPopup.vue';
import CallingPage from '@/view/apps/apps-crm/deal/CallingPage.vue';
import { ChevronLeft, ChevronRight } from 'lucide-vue-next';

const sortBy = ref("");
const sortDirection = ref("asc");
const currentPage = ref(1);
const itemsPerPage = 10;
const overViewPatient = ref(false);
const PatientOVerviewData = ref()
const callingModule = ref(false);
const setCallModuleValue = (state: boolean) => {
    callingModule.value = state
}
function setOverviewValue(state: boolean, data?: any) {
    overViewPatient.value = state
    PatientOVerviewData.value = data
}

// Sort function
const sort = (column: string) => {
    if (sortBy.value === column) {
        sortDirection.value = sortDirection.value === "asc" ? "desc" : "asc";
    } else {
        sortBy.value = column;
        sortDirection.value = "asc";
    }

    appointmentsData.value.sort((a: any, b: any) => {
        const valA = a[column];
        const valB = b[column];
        if (valA > valB) return sortDirection.value === "asc" ? 1 : -1;
        if (valA < valB) return sortDirection.value === "asc" ? -1 : 1;
        return 0;
    });
};

// Pagination logic
const totalPages = computed(() => Math.ceil(appointmentsData.value.length / itemsPerPage));
const paginatedAppointments = computed(() =>
    appointmentsData.value.slice((currentPage.value - 1) * itemsPerPage, currentPage.value * itemsPerPage)
);
const showingStart = computed(() => (currentPage.value - 1) * itemsPerPage + 1);
const showingEnd = computed(() => Math.min(currentPage.value * itemsPerPage, appointmentsData.value.length));

const prevPage = () => {
    if (currentPage.value > 1) currentPage.value--;
};
const nextPage = () => {
    if (currentPage.value < totalPages.value) currentPage.value++;
};
const gotoPage = (page: number) => {
    currentPage.value = page;
};

// Utility functions
const statusClass = (status: string) => {
    switch (status) {
        case "New":
            return "badge badge-primary";
        case "Cancel":
            return "badge badge-red";
        case "Confirmed":
            return "badge badge-green";
        case "Completed":
            return "badge badge-purple";
        case "Pending":
            return "badge badge-gray";
        default:
            return "";
    }
};

const deleteAppointment = (appointment: any) => {
    const findindex = appointmentsData.value.findIndex(data => data.id === appointment.id);
    appointmentsData.value.splice(findindex, 1)
};
onMounted(() => {
    appointmentsData.value.forEach((data, index) => {
        data.id = 1 + index;
    })
})
</script>
<template>
    <div>
        <div class="card">
            <div class="flex items-center gap-5 card-header">
                <h6 class="card-title grow">Appointments (<span>{{
                    appointmentsData.length }})</span></h6>
                <button type="button" class="btn btn-primary shrink-0"><a href="apps-hospital-appointments-book">Book
                        Appointment</a></button>
            </div>
            <div class="pt-0 card-body">
                <div>
                    <div class="overflow-x-auto table-box">
                        <table class="table whitespace-nowrap">
                            <thead>
                                <tr class="text-gray-500 bg-gray-100 dark:bg-dark-850 dark:text-dark-500">
                                    <th @click="sort('patientName')" class="!font-medium cursor-pointer">
                                        Patient Name
                                        <span v-if="sortBy === 'patientName'">{{ sortDirection === 'asc' ? '↑' : '↓'
                                            }}</span>
                                    </th>
                                    <th @click="sort('date')" class="!font-medium cursor-pointer">
                                        Date
                                        <span v-if="sortBy === 'date'">{{ sortDirection === 'asc' ? '↑' : '↓' }}</span>
                                    </th>
                                    <th @click="sort('time')" class="!font-medium cursor-pointer">
                                        Time
                                        <span v-if="sortBy === 'time'">{{ sortDirection === 'asc' ? '↑' : '↓' }}</span>
                                    </th>
                                    <th @click="sort('treatmentType')" class="!font-medium cursor-pointer">
                                        Treatment
                                        <span v-if="sortBy === 'treatmentType'">{{ sortDirection === 'asc' ? '↑' : '↓'
                                            }}</span>
                                    </th>
                                    <th @click="sort('doctor')" class="!font-medium cursor-pointer">
                                        Doctor
                                        <span v-if="sortBy === 'doctor'">{{ sortDirection === 'asc' ? '↑' : '↓'
                                            }}</span>
                                    </th>
                                    <th @click="sort('status')" class="!font-medium cursor-pointer">
                                        Status
                                        <span v-if="sortBy === 'status'">{{ sortDirection === 'asc' ? '↑' : '↓'
                                            }}</span>
                                    </th>
                                    <th class="!font-medium">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(appointment, index) in paginatedAppointments" :key="index" class="*:px-3 *:py-2.5">
                                    <td>
                                        <div class="flex items-center gap-3">
                                            <div class="relative text-gray-500 bg-gray-100 rounded-full dark:bg-dark-850 dark:text-dark-500 size-8">
                                                <img v-if="appointment.image" :src="appointment.image" alt="" class="rounded-full">
                                                <span v-else class="absolute inset-0 flex items-center justify-center text-xs font-semibold text-gray-500 bg-gray-100 rounded-full dark:bg-dark-850 dark:text-dark-500">
                                                    {{ appointment.patientName[0] }}
                                                </span>
                                            </div>
                                            <div>
                                                <h6><a href="apps-hospital-patients-overview">{{
                                                    appointment.patientName }}</a></h6>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{{ appointment.date }}</td>
                                    <td>{{ appointment.time }}</td>
                                    <td>{{ appointment.treatmentType }}</td>
                                    <td>{{ appointment.doctor }}</td>
                                    <td>
                                        <span :class="statusClass(appointment.status)">{{ appointment.status }}</span>
                                    </td>
                                    <td>
                                        <div class="flex items-center gap-2">
                                            <button class="btn btn-sub-gray btn-icon !size-8" title="overview" @click="setOverviewValue(true, appointment)">
                                                <i class="ri-eye-line"></i>
                                            </button>
                                            <button class="btn btn-sub-gray btn-icon !size-8" title="edit">
                                                <i class="ri-pencil-line"></i>
                                            </button>
                                            <button class="btn btn-sub-red btn-icon !size-8" title="delete" @click="deleteAppointment(appointment)">
                                                <i class="ri-delete-bin-line"></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="grid items-center grid-cols-12 gap-5 mt-5">
                        <div class="col-span-12 text-center lg:col-span-6 ltr:lg:text-left rtl:lg:text-right">
                            <p class="text-gray-500 dark:text-dark-500">
                                Showing <b>{{ showingStart }}</b> - <b>{{ showingEnd }}</b> of <b>{{ appointmentsData.length }}</b> Results
                            </p>
                        </div>
                        <div class="col-span-12 md:col-span-6">
                            <div class="flex justify-center lg:justify-end pagination pagination-primary">
                                <button @click="prevPage" :disabled="currentPage === 1" class="pagination-pre">
                                    <ChevronLeft class="mr-1 ltr:inline-block rtl:hidden size-4" />
                                    <ChevronRight class="ml-1 ltr:hidden rtl:inline-block size-4" />
                                    Prev
                                </button>
                                <button v-for="page in totalPages" :key="page" @click="gotoPage(page)" :class="{ 'active': currentPage === page }" class="pagination-item">
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
                </div>
            </div>
            <OverviewPopup :moduleVisible="overViewPatient" :setModuleVisibleValue="setOverviewValue" :overviewData="PatientOVerviewData" :setCallingModuleValue="setCallModuleValue" />
            <CallingPage :showModule="callingModule" :setModuleValue="setCallModuleValue" :callingTo="PatientOVerviewData" />
        </div>
    </div>
</template>