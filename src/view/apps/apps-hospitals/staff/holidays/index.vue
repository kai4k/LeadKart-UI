<script setup lang="ts">
import PageHeading from '@/components/common/PageHeading.vue';
import HolidayListTable from './HolidayListTable.vue';
import { reactive } from "vue";

interface Event {
    dateText: string;
    title: string;
    color: string; // e.g., primary, yellow, red
}

const events = reactive<Event[]>([
    { dateText: "Today - 21 Jan, 2024", title: "World Religion Day", color: "before:bg-primary-500" },
    { dateText: "Upcoming - 04 Feb, 2024", title: "World Cancer Day", color: "before:bg-yellow-500" },
    { dateText: "Upcoming - 25 May, 2024", title: "African Liberation Day", color: "before:bg-red-500" },
    { dateText: "Upcoming - 29 Sep, 2024", title: "World Heart Day", color: "before:bg-red-500" },
]);
</script>
<template>
    <PageHeading title="Holidays" sub-title="Staff" />
    <div class="grid grid-cols-12 gap-x-space">
        <div class="col-span-12 xl:col-span-4 2xl:col-span-3">
            <div class="bg-gray-100 card dark:bg-dark-850">
                <div class="card-body">
                    <!-- Image Section -->
                    <div class="mx-5 mb-4">
                        <img src="@/assets/images/hospital/img-01.png" alt="Event Image" />
                    </div>

                    <!-- Events Section -->
                    <div class="space-y-4">
                        <div v-for="(event, index) in events" :key="index"
                            class="relative pl-5 before:absolute before:left-0 before:top-1.5 before:size-2"
                            :class="`${event.color} before:rounded-full`">
                            <p class="mb-2 badge badge-gray">{{ event.dateText }}</p>
                            <h6>{{ event.title }}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <HolidayListTable />
    </div>
</template>