<script setup lang="ts">
import PageHeading from '@/components/common/PageHeading.vue';
import { ref } from 'vue';
import listPlugin from '@fullcalendar/list';
const calendarOptions = ref({
    plugins: [
        listPlugin,
    ],
    editable: true,
    initialView: 'listWeek',
    events: [
        { title: 'Meeting', start: new Date() },
        { title: 'Update Weekly', start: new Date() }
    ]
})
</script>
<template>
    <PageHeading title="List View" sub-title="Calendar" />
    <div class="card">
        <div class="card-body">
            <FullCalendar :options="calendarOptions" />
        </div>
    </div>
</template>