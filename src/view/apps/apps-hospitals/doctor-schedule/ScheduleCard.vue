<script setup lang="ts">
import { ref, onMounted } from 'vue';
import scheduleData, { type Appointment } from './schedule-data';

// Reactive state for the selected appointments
const selectedAppointments = ref<Array<Appointment>>(scheduleData);

// Function to format the date in "Month Day, Year" format
const formatDate = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', };
    return date.toLocaleDateString('en-US', options);
};

// Assign the formatted month and year to each appointment
onMounted(() => {
    selectedAppointments.value = selectedAppointments.value.map(appointment => {
        const appointmentDate = new Date(appointment.date);
        const formattedMonthYear = `${appointmentDate.toLocaleString('en-US', { month: 'long' })} ${appointmentDate.getFullYear()}`;
        return { ...appointment, monthYear: formattedMonthYear };
    });
});
</script>
<template>
    <div v-if="selectedAppointments.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-space mt-space">
        <template v-for="(appointment, index) in selectedAppointments" :key="index">
            <div class="relative card before:absolute ltr:before:-left-0.5 rtl:before:-right-0.5 before:rounded-full before:top-5 before:h-12 before:w-[2px]" :class="`before:bg-${appointment.color}`">
                <div class="card-body">
                    <div class="flex items-center gap-2 mb-5">
                        <h3 class="flex items-center justify-center border border-gray-200 rounded-md dark:border-dark-800 size-12">
                            {{ new Date(appointment.date).getDate() }}
                        </h3>
                        <div>
                            <h6 class="mb-0.5">{{ formatDate(new Date(appointment.date)) }}</h6>
                        </div>
                    </div>
                    <h6>{{ appointment.name }}</h6>
                    <p class="mb-2 text-gray-500 dark:text-dark-500">{{ appointment.specialty }}</p>
                    <small class="text-gray-500 dark:text-dark-500">Notes:</small>
                    <p class="mb-2">{{ appointment.notes }}</p>
                    <h6>
                        <i class="text-lg font-normal text-gray-500 align-baseline dark:text-dark-500 ri-time-line"></i> <span> {{ appointment.time }}</span>
                    </h6>
                </div>
            </div>
        </template>
    </div>
</template>