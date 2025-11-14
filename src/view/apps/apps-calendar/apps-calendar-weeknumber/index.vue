<script setup lang="ts">
import PageHeading from '@/components/common/PageHeading.vue';
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction';
const calendarOptions: object = {
    plugins: [dayGridPlugin, interactionPlugin],
    weekNumbers: true,
}
</script>
<template>
    <PageHeading title="Week Number" sub-title="Calendar" />
    <div class="card">
        <div class="card-body">
            <FullCalendar :options="calendarOptions" />
        </div>
    </div>
</template>