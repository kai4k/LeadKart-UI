<script setup lang="ts">
import PageHeading from '@/components/common/PageHeading.vue';
import { ref } from 'vue';
import multiMonthPlugin from '@fullcalendar/multimonth'
const calendarOptions = ref({
    plugins: [
        multiMonthPlugin,
    ],
    initialView: 'multiMonthYear',
    multiMonthMaxColumns: 1
})
</script>
<template>
    <PageHeading title="Multi-Month Stack" sub-title="Calendar" />
    <div class="card">
        <div class="card-body">
            <FullCalendar :options="calendarOptions" />
        </div>
    </div>
</template>