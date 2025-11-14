<script setup lang="ts">
import flatPickr from 'vue-flatpickr-component';
import PageHeading from '@/components/common/PageHeading.vue';
import DataTimePicker from './common-components/DataTimePicker.vue';
import { ref } from 'vue';
const basicDate = ref<string | null>(null);
const humanFriendlyDate = ref<string | null>(null);
const minMaxDate = ref<string | null>(null);
const defaultDate = ref<string | null>(null);
const disableData = ref<string | null>(null);
const shortData = ref<string | null>(null);
const selectMultipleDate = ref<string | null>(null);
const FullTimeAndDate = ref<string | null>(null);
const RangeDate = ref<string | null>(null);
const WeekDate = ref<string | null>(null);
const basicTime = ref<string | null>(null);
const time24Hours = ref<string | null>(null);
const timeLimit = ref<string | null>(null);
const inlineData = ref<string | null>(null);
const preloadingTime = ref<string | null>(null);

const flatpickrConfig: any = {
    mode: "multiple", // Enables multiple date selection
    dateFormat: "d M, Y", // Display format
}

const dateTimePicker = {
    enableTime: true,
}
const rangePicker: any = {
    mode: "range"
}

const weekPicker: any = {
    weekNumbers: true,
}
const simpleTime: any = {
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i",
}

const time24Picker: any = {
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i",
    time_24hr: true
}
const timeLimitPicker: any = {
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i",
    minTime: "16:00",
    maxTime: "22:30",

}
const preloadingTimePicker: any = {
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i",
    defaultDate: "20:04"
}
// const inlinePicker: any = {
//     inline: true
// }
</script>
<template>
    <PageHeading title="Pickers" sub-title="Forms" />
    <div class="grid grid-cols-12 gap-x-space">
        <DataTimePicker title="Basic">
            <flat-pickr v-model="basicDate" data-date-format="d M, Y" type="text" placeholder="YYYY-MM-DD" class="form-input" />
        </DataTimePicker>

        <DataTimePicker title="Human-friendly Dates">
            <flat-pickr v-model="humanFriendlyDate" data-date-format="F j, Y" type="text" placeholder="YYYY-MM-DD" class="form-input" />
        </DataTimePicker>

        <DataTimePicker title="Date Picker with Min and Max Date">
            <flat-pickr v-model="minMaxDate" data-provider="flatpickr" data-min-date="2024-01-01" data-max-date="2024-02-13" type="text" placeholder="DD MMM, YYYY" class="form-input" />
        </DataTimePicker>

        <DataTimePicker title="Default Date">
            <flat-pickr v-model="defaultDate" data-provider="flatpickr" data-date-format="d M, Y" data-default-date="today" type="text" placeholder="DD MMM, YYYY" class="form-input" />
        </DataTimePicker>

        <DataTimePicker title="Disabling Date">
            <flat-pickr v-model="disableData" data-date-format="Y-m-d" data-disable-date="2024-07-17" type="text" placeholder="DD MMM, YYYY" class="form-input" />
        </DataTimePicker>

        <DataTimePicker title="Short Date">
            <flat-pickr v-model="shortData" data-date-format="m/d/y" type="text" placeholder="MM/DD/YY" class="form-input" />
        </DataTimePicker>

        <DataTimePicker title="Selecting multiple dates">
            <flat-pickr v-model="selectMultipleDate" data-provider="flatpickr" data-date-format="d M, Y" type="text" placeholder="MM/DD/YY" class="form-input" :config="flatpickrConfig" />
        </DataTimePicker>

        <DataTimePicker title="Full Date with Time">
            <flat-pickr v-model="FullTimeAndDate" data-provider="flatpickr" data-date-format="d M, Y H:i" data-enable-time type="text" placeholder="DD MMM, YYYY HH:MM" class="form-input" :config="dateTimePicker" />
        </DataTimePicker>

        <DataTimePicker title="Range Picker">
            <flat-pickr v-model="RangeDate" data-date-format="d M, Y" data-range-date type="text" placeholder="Select Date Range" class="form-input" :config="rangePicker" />
        </DataTimePicker>

        <DataTimePicker title="Week Numbers">
            <flat-pickr v-model="WeekDate" data-date-format="d M, Y" data-week-number="true" type="text" placeholder="Select a date" class="form-input" :config="weekPicker" />
        </DataTimePicker>

        <DataTimePicker title="Timepickr">
            <flat-pickr v-model="basicTime" data-time-basic="true" type="text" placeholder="Select a time" class="form-input" :config="simpleTime" />
        </DataTimePicker>

        <DataTimePicker title="24 Hours Timepickr">
            <flat-pickr v-model="time24Hours" data-date-format="d M, Y" data-range-date type="text" placeholder="Select Date Range" class="form-input" :config="time24Picker" />
        </DataTimePicker>

        <DataTimePicker title="Time Picker w/ Limits ">
            <flat-pickr v-model="timeLimit" type="text" placeholder="Select a time" class="form-input" :config="timeLimitPicker" />
        </DataTimePicker>

        <DataTimePicker title="Preloading Time">
            <flat-pickr v-model="preloadingTime" data-default-time="2024-08-28 12:20" placeholder="Select a time" class="form-input" :config="preloadingTimePicker" />
        </DataTimePicker>

        <DataTimePicker title="Inline">
            <div>
                <flat-pickr v-model="inlineData" type="text" placeholder="Select a time" class="form-input" :config="{ inline: true }" />
            </div>
        </DataTimePicker>

    </div>
</template>