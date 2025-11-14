<script setup lang="ts">
import PageHeading from '@/components/common/PageHeading.vue';
import multiMonthPlugin from '@fullcalendar/multimonth'
import { ref } from 'vue';
const calendarOption = ref({
    plugins: [
        multiMonthPlugin,
    ],
    themeSystem: 'sketchy',
    initialView: 'multiMonthYear',
})
</script>
<template>
    <PageHeading title="Multi-Month grid" sub-title="Calendar" />
    <div class="card">
        <div class="card-body">
            <FullCalendar :options="calendarOption" />
        </div>
    </div>
</template>