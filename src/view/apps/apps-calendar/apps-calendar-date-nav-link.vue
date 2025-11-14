<script setup lang="ts">
import PageHeading from '@/components/common/PageHeading.vue';
import interactionPlugin from '@fullcalendar/interaction'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import { ref } from 'vue';
const calendarOptions = ref({
    plugins: [
        interactionPlugin,
        dayGridPlugin,
        timeGridPlugin
    ],
    editable: true,
    navLinks: true,
    headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    events: 'https://fullcalendar.io/api/demo-feeds/events.json?single-day&for-resource-timeline'
})
</script>
<template>
    <PageHeading title="Date Nav Link" sub-title="Calendar" />
    <div class="card">
        <div class="card-body">
            <FullCalendar :options="calendarOptions" />
        </div>
    </div>
</template>