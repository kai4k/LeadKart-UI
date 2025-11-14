<script setup lang="ts">
import PageHeading from '@/components/common/PageHeading.vue';
import { ref } from 'vue';
import interactionPlugin from '@fullcalendar/interaction'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
const calendarOptions = ref({
    plugins: [
        interactionPlugin,
        dayGridPlugin,
        timeGridPlugin
    ],
    selectable: true,
    headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    dateClick: function (info: { dateStr: string }) {
        alert('clicked ' + info.dateStr);
    },
    select: function (info: any) {
        alert('selected ' + info.startStr + ' to ' + info.endStr);
    }
})
</script>
<template>
    <PageHeading title="Date Clicking & Selecting" sub-title="Calendar" />
    <div class="card">
        <div class="card-body">
            <FullCalendar :options="calendarOptions" />
        </div>
    </div>
</template>