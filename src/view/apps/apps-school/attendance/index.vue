<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import PageHeading from '@/components/common/PageHeading.vue';
import AttendanceList from "./AttendanceLists.vue";
import { Dot, SunMedium } from 'lucide-vue-next';

// Simulate the current date
const today = ref(new Date().toLocaleDateString("en-US", { weekday: "short", month: "long", day: "numeric", year: "numeric" }));

const attendanceHistory = ref([
    {
        title: "On Time",
        percentage: 80,
        css: "text-green-500"
    },
    {
        title: "Late",
        percentage: 10,
        css: "text-red-500"
    },
    {
        title: "Absent",
        percentage: 10,
        css: "text-red-500"
    },
])
// User Data
const user = ref({
    name: "Michael Johnson",
    class: "12 (A)",
});

// Statistics Data
const stats = ref([
    { title: "Total Attendance", target: 21, current: 0 },
    { title: "Absent Attendance", target: 3, current: 0 },
    { title: "Late Attendance", target: 5, current: 0 },
    { title: "Total Hours", target: 178, current: 0 },
]);

// Counter Animation Function
const updateCounter = (target: number, counter: { value: number }) => {
    const duration = 500;
    const start = performance.now();

    const animate = (timestamp: number) => {
        const progress = timestamp - start;
        const increment = Math.min(progress / duration, 1);
        counter.value = Math.round(increment * target);

        if (increment < 1) {
            requestAnimationFrame(animate);
        }
    };

    requestAnimationFrame(animate);
};

// Trigger the animation on mount
onMounted(() => {
    stats.value.forEach((stat) => {
        const counter = ref(stat.current); // Use ref for reactivity
        watch(
            () => counter.value,
            (newValue) => {
                stat.current = newValue; // Update reactive property during animation
            }
        );
        updateCounter(stat.target, counter);
    });
});
</script>
<template>
    <PageHeading title="Students" sub-title="Attendances" />
    <div class="grid grid-cols-12 gap-x-space">
        <div class="col-span-12 md:col-span-7">
            <h6 class="mb-1">Attendance History</h6>
            <p class="mb-5 text-gray-500 dark:text-dark-500">
                <SunMedium class="inline-block size-4 ltr:mr-1 rtl:ml-1"></SunMedium>
                Today {{ today }}
            </p>
            <div class="flex items-center mb-space">
                <template v-for="(item, index) in attendanceHistory" :key="index">
                    <button class="border-gray-200 rounded-none dark:border-dark-800 border-x-0 btn">
                        <Dot data-lucide="dot" class="inline-block ltr:mr-0.5 rtl:ml-0.5  size-6" :class="item.css" /> <strong class="whitespace-nowrap"> {{ item.title }}</strong> <span class="text-gray-500 dark:text-dark-500">{{ item.percentage }}%</span>
                    </button>
                </template>
            </div>
        </div>
        <div class="col-span-12 md:col-span-5">
            <div class="flex justify-end gap-3 mb-space">
                <img src="@/assets/images/avatar/user-14.png" alt="User Avatar" class="rounded-full size-10" />
                <div>
                    <h6>{{ user.name }}</h6>
                    <p class="text-sm text-gray-500 dark:text-dark-500">Class: {{ user.class }}</p>
                </div>
            </div>
        </div>
        <div class="col-span-12 sm:col-span-6 md:col-span-3 card" v-for="stat in stats" :key="stat.title">
            <div class="card-body">
                <p class="mb-2 text-gray-500 dark:text-dark-500">{{ stat.title }}</p>
                <h5>{{ stat.current }}</h5>
            </div>
        </div>
    </div>
    <AttendanceList />
</template>