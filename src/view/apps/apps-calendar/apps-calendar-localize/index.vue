<script setup lang="ts">
import PageHeading from '@/components/common/PageHeading.vue';
import { ref, watch, reactive } from 'vue';
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction';
import allLocales from '@fullcalendar/core/locales-all';
const selected = ref('en');
const calendarOptions = reactive<any>({
    timeZone: 'America/New_York',
    plugins: [dayGridPlugin, interactionPlugin],
    locales: allLocales,
    locale: selected.value || 'en'
})
const selectOptions = [
    { label: "English (EN-AU)", value: "en-au" },
    { label: "Arabic (AR)", value: "ar" },
    { label: "German (DE)", value: "de" },
    { label: "Russian (RU)", value: "ru" },
    { label: "French (FR)", value: "fr" },
    { label: "Italian (IT)", value: "it" },
    { label: "Danish (DA)", value: "da" },
    { label: "Chinese (ZH)", value: "zh" },
    { label: "Korean (KO)", value: "ko" },
    { label: "Greek (EL)", value: "el" },
    { label: "Finnish (FI)", value: "fi" },
    { label: "Persian (FA)", value: "fa" },
    { label: "Catalan, Valencian (CA)", value: "ca" },
];
watch(selected, (newLocale: any) => {
    calendarOptions.locale = newLocale;
});
</script>
<template>
    <PageHeading title="Localize" sub-title="Calendar" />
    <div class="card">
        <div class="card-header">
            <select v-model="selected" class="form-select">
                <option v-for="option in selectOptions" :key="option.value" :value="option.value">
                    {{ option.label }}
                </option>
            </select>
        </div>
        <div class="card-body">
            <FullCalendar :options="calendarOptions" />
        </div>
    </div>
</template>