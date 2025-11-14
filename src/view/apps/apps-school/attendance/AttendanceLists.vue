<script setup lang="ts">
import { attendanceRecords } from "./attendance-data";

// Helper function to determine border class
const borderClass = (status: string): string => {
    switch (status) {
        case "On Time":
            return "border-t-green-300";
        case "Late":
            return "border-t-orange-300";
        case "Holiday":
            return "border-t-gray-400";
        default:
            return "border-t-gray-300";
    }
};

// Helper function to determine badge class
const badgeClass = (status: string): string => {
    switch (status) {
        case "On Time":
            return "badge-green";
        case "Late":
            return "badge-orange";
        case "Holiday":
            return "badge-gray";
        default:
            return "badge-gray";
    }
};
</script>
<template>
    <h6 class="mb-3">Attendance List</h6>
    <div class="grid grid-cols-12 gap-x-space">
        <div v-for="(attendance, index) in attendanceRecords" :key="index"
            :class="['col-span-12 !border-t-2 md:col-span-6 lg:col-span-4 card', borderClass(attendance.status)]">
            <div class="card-body">
                <div class="flex items-center gap-3">
                    <h6 class="grow">{{ attendance.date }}</h6>
                    <span :class="['badge shrink-0', badgeClass(attendance.status)]">
                        {{ attendance.status }}
                    </span>
                </div>
                <div class="grid grid-cols-3 my-4">
                    <div>
                        <p class="mb-1 text-gray-500 dark:text-dark-500">Check In</p>
                        <h6>{{ attendance.checkIn }}</h6>
                    </div>
                    <div>
                        <p class="mb-1 text-gray-500 dark:text-dark-500">Check Out</p>
                        <h6>{{ attendance.checkOut }}</h6>
                    </div>
                    <div>
                        <p class="mb-1 text-gray-500 dark:text-dark-500">Total</p>
                        <h6>{{ attendance.total }}</h6>
                    </div>
                </div>
                <div class="flex items-center gap-3">
                    <p class="grow">Notes:</p>
                    <p class="text-gray-500 dark:text-dark-500 shrink-0">{{ attendance.notes }}</p>
                </div>
            </div>
        </div>
    </div>
</template>