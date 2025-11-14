<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import simplebar from 'simplebar-vue';
import PageHeading from '@/components/common/PageHeading.vue';
import ScheduleCard from './ScheduleCard.vue';

interface Appointment {
    date: string;
    formattedDate: string;
    [key: string]: any;
}

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const today = new Date();
const selectedMonth = ref(today.getMonth());
const selectedYear = ref(today.getFullYear());
const todayDay = today.getDate();
const todayMonth = today.getMonth();
const todayYear = today.getFullYear();
const dates = ref<any>([]);
const appointments = ref<Appointment[]>([]);
const selectedAppointments = ref<Appointment[]>([]);
const open = ref(false);
const dropdownId = `dropdown-button-${Math.random().toString(36).substr(2, 9)}`;
const buttonRef = ref<HTMLElement | null>(null);
const panelRef = ref<HTMLElement | null>(null);

const generateDates = () => {
    const year = selectedYear.value;
    const month = selectedMonth.value;
    const date = new Date(year, month, 1);
    dates.value = [];

    while (date.getMonth() === month) {
        dates.value.push({
            day: date.getDate(),
            name: days[date.getDay()],
            formattedDate: formatDate(date),
            isToday: date.getDate() === todayDay && month === todayMonth && year === todayYear,
        });
        date.setDate(date.getDate() + 1);
    }
};

const fetchAppointments = () => {
    const sortedAppointments = [...appointments.value];
    sortedAppointments.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateA.getTime() - dateB.getTime();
    });

    appointments.value = sortedAppointments;
    updateAppointmentsToCurrentMonth();
    filterAppointments();
};

const formatDate = (date: Date) => {
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    return `${months[monthIndex]}, ${year}`;
};

const selectMonth = (index: number) => {
    selectedMonth.value = index;
    generateDates();
    filterAppointments();
    close();
};

const updateAppointmentsToCurrentMonth = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const allDates: any = [];
    for (let day = 1; day <= daysInMonth; day++) {
        allDates.push(new Date(currentYear, currentMonth, day));
    }

    for (let i = allDates.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [allDates[i], allDates[j]] = [allDates[j], allDates[i]];
    }

    appointments.value = appointments.value.map((appointment, index) => {
        return {
            ...appointment,
            date: allDates[index % allDates.length].toISOString(),
        };
    });
};

const scrollDivToActive = () => {
    const scrollableDiv = document.getElementById('scrollTodayDate')?.querySelector(".simplebar-content-wrapper");
    scrollableDiv?.addEventListener('wheel', function (event: any) {
        event.preventDefault();
        scrollableDiv.scrollLeft += event.deltaY;
    });
};

const filterAppointments = () => {
    const selectedDate = new Date(selectedYear.value, selectedMonth.value, 1);
    const filteredAppointments = appointments.value.filter(appointment => {
        const appointmentDate = new Date(appointment.date);
        return appointmentDate.getMonth() === selectedDate.getMonth() && appointmentDate.getFullYear() === selectedDate.getFullYear();
    });
    selectedAppointments.value = filteredAppointments.map(appointment => ({
        ...appointment,
        formattedDate: formatDate(new Date(appointment.date)),
    }));
    scrollDivToActive();
};

const selectDate = (date: any) => {
    selectedYear.value = date.isToday ? todayYear : selectedYear.value;
    selectedMonth.value = date.isToday ? todayMonth : selectedMonth.value;
    filterAppointments();
};

const toggle = () => {
    open.value = !open.value;
    if (open.value) {
        buttonRef.value?.focus();
    }
};

const close = () => {
    open.value = false;
};

onMounted(() => {
    generateDates();
    fetchAppointments();
    window.addEventListener('focusin', (e) => {
        if (panelRef.value && !panelRef.value.contains(e.target as HTMLElement)) {
            close();
        }
    });
});

watch(selectedMonth, () => {
    generateDates();
    filterAppointments();
});
</script>
<template>
    <PageHeading title="Doctor Schedule" sub-title="Hospital" />
    <div>
        <div class="dropdown">
            <button ref="button" @click="toggle" :aria-expanded="open" :aria-controls="dropdownId" type="button" class="flex items-center gap-2 btn-primary btn">
                <span>{{ months[selectedMonth] + ' ' + selectedYear }}</span>
            </button>

            <div ref="panel" v-show="open" @click.outside="close" :id="dropdownId" class="p-2 dropdown-menu">
                <template v-for="(month, index) in months" :key="index">
                    <a href="#" @click.prevent="selectMonth(index)" class="dropdown-item">
                        <span>{{ month }}</span>
                    </a>
                </template>
            </div>
        </div>
        <simplebar data-simplebar class="mt-5">
            <div class="flex gap-5">
                <template v-for="(date, index) in dates" :key="index">
                    <a href="#!" :class="{ 'active-date': date.isToday }" @click="selectDate(date)" class="flex items-center justify-center text-center border border-gray-200 rounded-md dark:border-dark-800 size-16 shrink-0">
                        <div>
                            <h5>{{ date.day }}</h5>
                            <p>{{ date.name }}</p>
                        </div>
                    </a>
                </template>
            </div>
        </simplebar>
        <ScheduleCard />
    </div>
</template>