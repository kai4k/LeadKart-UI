<script setup lang="ts">
import PageHeading from '@/components/common/PageHeading.vue';
import AppointmentCard from './AppointmentCard.vue';
import AppointmentTable from './AppointmentTable.vue';
import { CalendarDays, CalendarPlus, CalendarPlus2, CalendarX2 } from 'lucide-vue-next';
interface Appointment {
    title: string;
    value: number;
    icon: string | object;
    iconBackground: string;
}

const appointments: Appointment[] = [
    {
        title: 'Today Appointment',
        value: 10,
        icon: CalendarPlus2,
        iconBackground:
            'text-green-500 bg-gradient-to-r from-yellow-500/15 to-green-500/15',
    },
    {
        title: 'New Appointment',
        value: 21,
        icon: CalendarPlus,
        iconBackground:
            'text-sky-500 bg-gradient-to-r from-sky-500/15 to-green-500/15',
    },
    {
        title: 'Cancel Appointment',
        value: 9,
        icon: CalendarX2,
        iconBackground:
            'text-red-500 bg-gradient-to-r from-red-500/15 to-pink-500/15',
    },
    {
        title: 'Total Appointment',
        value: 153,
        icon: CalendarDays,
        iconBackground:
            'text-purple-500 bg-gradient-to-r from-purple-500/15 to-pink-500/15',
    },
];
</script>
<template>
    <PageHeading title="List View" sub-title="Appointments" />
    <div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-x-space">
        <div v-for="item in appointments" :key="item.title" class="card">
            <div class="flex items-center gap-3 card-body">
                <div :class="[
                    'flex items-center justify-center rounded-md size-12 shrink-0',
                    item.iconBackground
                ]">
                    <component :is="item.icon" class="size-6"></component>
                </div>
                <div class="grow">
                    <p class="mb-1 text-gray-500 dark:text-dark-500">
                        {{ item.title }}
                    </p>
                    <h6>{{ item.value.toString().padStart(2, '0') }}</h6>
                </div>
            </div>
        </div>
    </div>
    <AppointmentCard />
    <AppointmentTable />
</template>