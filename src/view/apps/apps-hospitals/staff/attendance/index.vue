<script setup lang="ts">
import PageHeading from '@/components/common/PageHeading.vue';
import avatar from '@/assets/images/avatar/user-3.png';
import { ref } from 'vue';
import { MessagesSquare, Pencil, Phone } from 'lucide-vue-next';
import AttendanceTAble from './AttendanceTAble.vue';
interface User {
    name: string;
    gender: string;
    job: string;
    location: string;
}

interface Stat {
    value: string | number;
    label: string;
    unit?: string;
}


const user = ref<User>({
    name: 'Linda Sharp',
    gender: 'Female',
    job: 'Merchandiser, retail',
    location: 'California',
});

const stats = ref<Stat[]>([
    { value: '20 ', unit: 'Feb, 2021', label: 'Joining Date' },
    { value: '13 ', unit: 'Dec, 1998', label: 'Birthday Date' },
    { value: '25', label: 'Age', unit: 'Years' },
    { value: 'Radiology', label: 'Department' },
]);

const handlePhoneClick = () => {
};

const handleMessageClick = () => {
};

const handleEditClick = () => {
};

interface MissedAbsence {
    value: string;
    label: string;
    isNegative?: boolean;
}

const summeryOverview = ref<MissedAbsence[]>([
    { value: '208 hr 30 min (292hr)', label: 'Total Working Time (Monthly)' },
    { value: '5 hr 15 min', label: 'Total Delay (Monthly)' },
    { value: '-5 hr 15 min', label: 'Total Delay (Monthly)', isNegative: true },
]);

const missAbsence = [
    {
        label: "Missed Shift",
        value: 3
    },
    {
        label: "Absence",
        value: 2
    },
]

</script>
<template>
    <PageHeading title="Attendance" sub-title="Staff" />
    <div class="grid grid-cols-12 gap-x-space">
        <div class="col-span-12 card">
            <div class="card-body">
                <div class="flex flex-col gap-5 2xl:flex-row">
                    <div class="flex-shrink-0">
                        <img :src="avatar" alt="User Avatar" class="rounded-md size-40" />
                    </div>
                    <div class="mt-5 grow 2xl:mt-0">
                        <h6 class="mb-1 text-16">{{ user.name }}</h6>
                        <div class="flex flex-wrap gap-3 item-center *:flex *:items-center">
                            <p>
                                <i class="ltr:mr-1 rtl:ml-1 ri-user-3-line"></i>
                                <span class="text-gray-500 dark:text-dark-500">{{ user.gender }}</span>
                            </p>
                            <p>
                                <i class="ltr:mr-1 rtl:ml-1 ri-briefcase-line"></i>
                                <span class="text-gray-500 dark:text-dark-500">{{ user.job }}</span>
                            </p>
                            <p>
                                <i class="ltr:mr-1 rtl:ml-1 ri-map-pin-2-line"></i>
                                <span class="text-gray-500 dark:text-dark-500">{{ user.location }}</span>
                            </p>
                        </div>

                        <!-- Loop through stats -->
                        <div class="flex flex-wrap items-center gap-3 mt-5 xl:mr-40 md:gap-space">
                            <div
                                class="p-3 md:p-4 text-center border border-gray-200 dark:border-dark-800 border-dashed rounded-md w-[110px] md:w-36 shrink-0">
                                <h5 class="mb-1 text-base md:text-lg">1 <small
                                        class="text-sm font-normal text-gray-500 dark:text-dark-500">hr</small> 48
                                    <small class="text-sm font-normal text-gray-500 dark:text-dark-500">m</small> 37
                                    <small class="text-sm font-normal text-gray-500 dark:text-dark-500">s</small>
                                </h5>
                                <p class="text-gray-500 dark:text-dark-500">Today Timing</p>
                            </div>
                            <div v-for="(stat, index) in stats" :key="index"
                                class="p-3 md:p-4 text-center border border-gray-200 dark:border-dark-800 border-dashed rounded-md w-[110px] md:w-36 shrink-0">
                                <h5 class="mb-1 text-base md:text-lg">{{ stat.value }}
                                    <small v-if="stat.unit"
                                        class="text-sm font-normal text-gray-500 dark:text-dark-500">{{ stat.unit
                                        }}</small>
                                </h5>
                                <p class="text-gray-500 dark:text-dark-500">{{ stat.label }}</p>
                            </div>
                        </div>
                    </div>
                    <!-- Buttons -->
                    <div class="mt-4 shrink-0 lg:mt-0">
                        <div class="flex items-center gap-2">
                            <button @click="handlePhoneClick" class="btn btn-sub-green btn-icon" title="phone">
                                <Phone class="size-4"></Phone>
                            </button>
                            <button @click="handleMessageClick" class="btn btn-sub-purple btn-icon"
                                title="messages-square">
                                <MessagesSquare class="size-4"></MessagesSquare>
                            </button>
                            <button @click="handleEditClick" type="button" class="btn btn-primary" title="edit">
                                <Pencil class="inline-block mr-1 size-4"></Pencil> Edit
                            </button>
                        </div>
                    </div>
                </div>
                <h6 class="mt-5">Summary Overview</h6>
                <div class="grid grid-cols-12 mt-4 gap-space">
                    <template v-for="(summery, index) in summeryOverview" :key="index">
                        <div class="col-span-12 mb-0 border-dashed md:col-span-6 xl:col-span-4 2xl:col-span-3 card">
                            <div class="card-body">
                                <h6 class="mb-2" :class="summery.isNegative ? 'text-red-500' : ''">{{ summery.value }}
                                </h6>
                                <p class="text-gray-500 dark:text-dark-500">{{ summery.label }}</p>
                            </div>
                        </div>
                    </template>
                    <div class="col-span-12 md:col-span-6 xl:col-span-4 2xl:col-span-3">
                        <div class="grid grid-cols-2 gap-space">
                            <template v-for="(summery, index) in missAbsence" :key="index">
                                <div class="mb-0 border-dashed card">
                                    <div class="card-body">
                                        <h6 class="mb-2">{{ summery.value }}</h6>
                                        <p class="text-gray-500 dark:text-dark-500">{{ summery.label }}</p>
                                    </div>
                                </div>
                            </template>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <AttendanceTAble />
</template>