<script setup lang="ts">
import PageHeading from '@/components/common/PageHeading.vue';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline'
import { ref } from 'vue';
import eventsData from './tileline-data';
const calendarOptions = ref({
    plugins: [
        resourceTimelinePlugin,
    ],
    timeZone: 'UTC',
    headerToolbar: {
        left: 'today prev,next',
        center: 'title',
        right: 'resourceTimelineDay,resourceTimelineTenDay,resourceTimelineMonth,resourceTimelineYear'
    },
    initialView: 'resourceTimelineDay',
    scrollTime: '08:00',
    aspectRatio: 1.5,
    views: {
        resourceTimelineDay: {
            buttonText: ':15 slots',
            slotDuration: '00:15'
        },
        resourceTimelineTenDay: {
            type: 'resourceTimeline',
            duration: { days: 10 },
            buttonText: '10 days'
        }
    },
    editable: true,
    resourceAreaHeaderContent: 'Rooms',
    resources: eventsData,
    events: 'https://fullcalendar.io/api/demo-feeds/events.json?single-day&for-resource-timeline'
})
</script>
<template>
    <PageHeading title="Timeline" sub-title="Calendar" />
    <div class="card">
        <div class="card-body">
            <FullCalendar :options="calendarOptions" />
        </div>
    </div>
</template>