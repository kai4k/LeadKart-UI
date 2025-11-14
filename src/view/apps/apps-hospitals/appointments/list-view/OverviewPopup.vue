<script setup lang="ts">
import { CalendarPlus2 } from 'lucide-vue-next';
import { ref, watch } from 'vue';
const props = defineProps({
    moduleVisible: Boolean,
    setModuleVisibleValue: Function,
    overviewData: Object,
    setCallingModuleValue: Function,
})
export interface Appointment {
    image?: string;
    patientName: string;
    treatmentType: string;
    date: string;
    time: string;
    doctor: string;
    status: string;
}

// const isModalVisible = ref(true); // Controls modal visibility
const selectedAppointment = ref<Appointment | any>(props.overviewData); // Stores the selected appointment
watch(() => props.overviewData, (newData) => {
    selectedAppointment.value = newData;
})
// Status badge class mapping
const statusClass = (status?: string) => {
    switch (status) {
        case 'New':
            return 'badge badge-primary';
        case 'Cancel':
            return 'badge badge-red';
        case 'Confirmed':
            return 'badge badge-green';
        case 'Completed':
            return 'badge badge-purple';
        case 'Pending':
            return 'badge badge-gray';
        default:
            return '';
    }
};

// Methods
const callPatient = () => {
    if (props.setCallingModuleValue) props.setCallingModuleValue(true)
    if (props.setModuleVisibleValue) props.setModuleVisibleValue(false)
};

const cancelAppointment = () => {
    if (props.setModuleVisibleValue) props.setModuleVisibleValue(false)

};

function closePopup() {
    if (props.setModuleVisibleValue) props.setModuleVisibleValue(false)
}
</script>
<template>
    <div v-if="moduleVisible" class="modal">
        <div class="modal-wrap modal-center">
            <div class="modal-header">
                <h6>Appointment Overview</h6>
                <span :class="statusClass(selectedAppointment?.status)" v-text="selectedAppointment?.status"></span>
            </div>
            <div class="modal-content">
                <!-- Patient Info -->
                <p class="mb-2 text-gray-500 dark:text-dark-500">Patient Info</p>
                <div class="flex gap-3 mb-5">
                    <div
                        class="relative items-center justify-center overflow-hidden text-gray-500 bg-gray-100 rounded-full dark:bg-dark-850 dark:text-dark-500 size-10">
                        <img v-if="selectedAppointment?.image" :src="selectedAppointment.image" alt="Patient Image"
                            class="rounded-full" />
                        <span v-else
                            class="absolute inset-0 flex items-center justify-center text-xs font-semibold text-gray-500 bg-gray-100 rounded-full dark:bg-dark-850 dark:text-dark-500">
                            {{ selectedAppointment?.patientName?.[0] || '' }}
                        </span>
                    </div>
                    <div>
                        <h6 v-text="selectedAppointment?.patientName"></h6>
                        <p class="text-gray-500 dark:text-dark-500" v-text="selectedAppointment?.treatmentType"></p>
                    </div>
                </div>

                <!-- Date & Time -->
                <p class="mb-2 text-gray-500 dark:text-dark-500">Date & Time</p>
                <div class="flex gap-3 mb-5">
                    <div
                        class="flex items-center justify-center overflow-hidden text-gray-500 bg-gray-100 rounded-full dark:bg-dark-850 dark:text-dark-500 size-10">
                        <CalendarPlus2 class="size-5"></CalendarPlus2>
                    </div>
                    <div>
                        <h6 v-text="selectedAppointment?.date"></h6>
                        <p class="text-gray-500 dark:text-dark-500" v-text="selectedAppointment?.time"></p>
                    </div>
                </div>

                <!-- Doctor Info -->
                <div class="flex gap-3">
                    <p class="text-gray-500 dark:text-dark-500">Doctor Name:</p>
                    <div>
                        <h6 v-text="selectedAppointment?.doctor"></h6>
                    </div>
                </div>
            </div>

            <!-- Modal Footer -->
            <div class="gap-2 modal-footer">
                <button type="button" class="w-full btn btn-primary" @click="callPatient">
                    <i class="ri-phone-line"></i> Call Patient
                </button>
                <button type="button" class="w-full btn btn-red" @click="cancelAppointment">
                    <i class="ri-close-line"></i> Cancel Appointment
                </button>
            </div>
        </div>
        <div class="backdrop-overlay backdrop-blur-xs" id="backDropDiv" @click="closePopup"></div>
    </div>
</template>