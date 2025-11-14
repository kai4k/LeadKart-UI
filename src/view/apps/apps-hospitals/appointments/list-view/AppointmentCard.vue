<script setup lang="ts">
import { ref, computed } from 'vue';
import { todayAppointmentData, type Appointment } from './appointment-data';
import { useRouter } from 'vue-router';
import { Ellipsis } from 'lucide-vue-next';
import { dropdownOption } from '@/view/apps/app-ecommerce/products/grid-view/grid-data-list';
import RecentMenuList from '@/view/dashboards/recent-menu-list.vue';
const showAll = ref(false);
// Toggle between showing 4 items and all items
const toggleShowAll = () => {
    showAll.value = !showAll.value;
};

// Compute displayed appointments
const displayedAppointments = computed(() =>
    showAll.value ? todayAppointmentData : todayAppointmentData.slice(0, 4)
);
const router = useRouter()
const handleTableActivity = (option: string, data?: Appointment) => {
    const activity = option.toLowerCase()
    if (activity == 'overview') {
        router.push('/apps-hospital-patients-overview')
    }
    if (activity == 'edit') {
    }
    if (activity == 'delete') {
    }
}
</script>
<template>
    <div>
        <div class="flex mb-3">
            <h6 class="grow">Today Appointments</h6>
            <a href="#" class="underline link link-primary shrink-0" @click.prevent="toggleShowAll">
                {{ showAll ? 'Show Less' : 'Show All' }}
            </a>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-x-space">
            <div v-for="(appointment, index) in displayedAppointments" :key="index" class="card">
                <div class="card-body">
                    <div class="flex">
                        <div class="grow">
                            <img :src="appointment.image" alt="" class="rounded-lg size-12" />
                        </div>
                        <RecentMenuList :title="Ellipsis" :showArrow="false" className="" extraClass="set-position"
                            :arrayList="dropdownOption" mainCss="float-end" iconCss="size-4" menuIconCss="size-4"
                            @handleAction="(option) => handleTableActivity(option, appointment)" />
                    </div>
                    <div class="mt-4">
                        <h6 class="mb-1">
                            <a href="#!">{{ appointment.patientName }}</a>
                        </h6>
                        <p class="text-gray-500 dark:text-dark-500">{{ appointment.treatment }}</p>
                    </div>
                    <div class="flex mt-5 text-gray-500 dark:text-dark-500">
                        <p class="grow">
                            <i class="align-baseline ltr:mr-1 rtl:ml-1 ri-calendar-event-line"></i>
                            {{ appointment.date }}
                        </p>
                        <p>
                            <i class="align-baseline ltr:mr-1 rtl:ml-1 ri-time-line"></i>
                            {{ appointment.time }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>