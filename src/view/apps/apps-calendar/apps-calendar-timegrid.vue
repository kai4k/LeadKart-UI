<script setup lang="ts">
import PageHeading from '@/components/common/PageHeading.vue';
import timeGridPlugin from '@fullcalendar/timegrid'
import { ref } from 'vue';
const calendarOption = ref({
    timeZone: 'America/New_York',
    plugins: [
        timeGridPlugin,
    ],
    initialView: 'timeGridWeek',
    headerToolbar: {
        left: 'prev,next',
        center: 'title',
        right: 'timeGridWeek,timeGridDay' // user can switch between the two
    }
})
</script>
<template>
    <PageHeading title="Time Grid View" sub-title="Calendar" />
    <div class="card">
        <div class="card-body">
            <FullCalendar :options="calendarOption" />
        </div>
    </div>
</template>