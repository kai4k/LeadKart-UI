<script setup lang="ts">
import { ref, computed } from 'vue';
import appointmentsData, { type Appointment } from './appointment-history-data';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-vue-next';
import DeleteModule from '@/view/apps/apps-email/apps-mailbox/DeleteModule.vue';
import simplebar from 'simplebar-vue';


const appointments = ref<Appointment[]>(appointmentsData);
const currentPage = ref(1);
const itemsPerPage = ref(5);
const deleteAppointmentModel = ref(false);
const deleteAppointmentIndex = ref<number | null>(null);

// Pagination Computed Properties
const totalPages = computed(() => Math.ceil(appointments.value.length / itemsPerPage.value));
const displayedAppointments = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage.value;
    return appointments.value.slice(start, start + itemsPerPage.value);
});

const showingStart = computed(() => Math.min((currentPage.value - 1) * itemsPerPage.value + 1, appointments.value.length));
const showingEnd = computed(() => Math.min(currentPage.value * itemsPerPage.value, appointments.value.length));

// Methods for pagination
const prevPage = () => {
    if (currentPage.value > 1) currentPage.value--;
};

const nextPage = () => {
    if (currentPage.value < totalPages.value) currentPage.value++;
};

const gotoPage = (page: number) => {
    currentPage.value = page;
};

// Methods for deleting appointment
const openAppointmentDeleteModel = (index: number) => {
    deleteAppointmentModel.value = true;
    deleteAppointmentIndex.value = index;
};

const deleteAppointment = () => {
    if (deleteAppointmentIndex.value !== null) {
        appointments.value.splice(deleteAppointmentIndex.value, 1);
        closeDeleteModal();
    }
};

const closeDeleteModal = () => {
    deleteAppointmentModel.value = false;
    deleteAppointmentIndex.value = null;
};
</script>
<template>
    <div class="col-span-12 overflow-hidden card">
        <div class="flex items-center gap-3 card-header">
            <h6 class="card-title grow">Appointments History</h6>
            <a href="#!" class="font-medium shrink-0 !text-primary-500 link hover:!text-primary-600">
                <Plus class="inline-block mb-1 align-middle size-4" />
                New Appointment
            </a>
        </div>

        <div class="pt-0 card-body">
            <div>
                <simplebar data-simplebar class="table-box">
                    <table class="table whitespace-nowrap">
                        <tbody>
                            <tr v-for="(appointment, index) in displayedAppointments" :key="appointment.appointmentID" class="*:px-3 *:py-2.5">
                                <td>{{ appointment.date }}</td>
                                <td>{{ appointment.treatmentType }}</td>
                                <td>{{ appointment.time }}</td>
                                <td>{{ appointment.reasonCondition }}</td>
                                <td>{{ appointment.notes }}</td>
                                <td>{{ appointment.doctor }}</td>
                                <td>
                                    <span :class="{
                                        'badge badge-green': appointment.status === 'Completed',
                                        'badge badge-red': appointment.status === 'Expired',
                                        'badge badge-sky': appointment.status === 'New',
                                        'badge badge-purple': appointment.status === 'Confirmed',
                                        'badge badge-yellow': appointment.status === 'Pending'
                                    }">{{ appointment.status }}</span>
                                </td>
                                <td>
                                    <div class="flex items-center gap-2">
                                        <button class="btn btn-sub-gray btn-icon !size-8" title="overview">
                                            <i class="ri-eye-line"></i>
                                        </button>
                                        <button class="btn btn-sub-gray btn-icon !size-8" title="edit">
                                            <i class="ri-pencil-line"></i>
                                        </button>
                                        <button class="btn btn-sub-red btn-icon !size-8" title="delete" @click="openAppointmentDeleteModel(index)">
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
                        <p class="text-gray-500 dark:text-dark-500">Showing <b>{{ showingStart }}</b> - <b>{{ showingEnd
                                }}</b> of <b>{{ appointments.length }}</b> Results</p>
                    </div>
                    <div class="col-span-12 md:col-span-6">
                        <div class="flex justify-end pagination pagination-primary">
                            <button @click="prevPage" :disabled="currentPage === 1" class="pagination-pre">
                                <ChevronLeft class="mr-1 ltr:inline-block rtl:hidden size-4" />
                                <ChevronRight class="ml-1 ltr:hidden rtl:inline-block size-4" />
                                Prev
                            </button>
                            <button v-for="page in totalPages" :key="page" @click="gotoPage(page)" :class="{ 'active': currentPage === page }" class="pagination-item">
                                <span>{{ page }}</span>
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

        <!-- Delete modal -->
        <DeleteModule :showDeletePop="deleteAppointmentModel" :deleteRow="deleteAppointment" />
    </div>
</template>