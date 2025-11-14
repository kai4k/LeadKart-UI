<script setup lang="ts">
import { ref } from 'vue';
import PageHeading from '@/components/common/PageHeading.vue';
import ReportsTable from './ReportsTable.vue';
import MedicineTable from './medicine-table/MedicineTable.vue';
import AppointmentTable from './appointments-table/AppointmentTable.vue';
import userImage from '@/assets/images/avatar/user-5.png'
import { HeartHandshake, MessagesSquare, Pencil, Phone } from 'lucide-vue-next';
import simplebar from 'simplebar-vue';
// Define the user data
const user = ref({
    avatar: userImage,
    name: 'Alice Johnson',
    gender: 'Female',
    occupation: 'Accountant',
    location: 'California',
    dob: '13 Dec, 1998',
    age: 25,
    healthInfo: [
        { label: 'Appo. Date', value: '26', unit: 'May, 2024' },
        { label: 'Blood Pressure', value: '115/50' },
        { label: 'Blood Group', value: 'B+' },
        { label: 'Weight', value: '86', unit: 'kg' },
        { label: 'Height', value: '178', unit: 'cm' }
    ]
});

// Function to handle profile edit (placeholder for now)
const editProfile = () => {
    // Logic for editing profile can be added here
};
// Define the information for doctors, pharmacy, and phone numbers
const infoList = ref([
    { label: 'Family Doctor', value: 'Dr. Vernon Locklin' },
    { label: 'Assigned Doctor', value: 'Dr. Ellie Maggie' },
    { label: 'Referring Doctor', value: 'Dr. Jasper Liewald' },
    { label: 'Pharmacy Name', value: 'ABC Pharmacy' },
    { label: 'Full Address', value: 'Apt. 757 866 Truman Ridge, Bashirianside, OH 34623-2200' },
    { label: 'Phone Number', value: '+33 1 42 68 53 00' },
    { label: 'Emergency Number', value: '+34 91 123 45 67' }
]);

// Define the structure of each event in the timeline
interface TimelineEvent {
    date: string;
    title: string;
    description: string;
}

// Reactive array for the timeline events
const timelineEvents = ref<TimelineEvent[]>([
    {
        date: "19 June, 2024 - 11:15 AM",
        title: "Follow Up",
        description: "Follow-up for rash, prescribed antihistamine",
    },
    {
        date: "25 May, 2024 - 09:00 AM",
        title: "Appointment",
        description: "Annual physical check-up",
    },
    {
        date: "21 May, 2024 - 03:30 PM",
        title: "Lab Test",
        description: "Blood test: Complete Blood Count (CBC)",
    },
    {
        date: "05 May, 2024 - 10:00 AM",
        title: "Medication Start",
        description: "Prescribed Atorvastatin 20mg for high cholesterol",
    },
]);

const insurance = ref({
    name: 'HealthCare Insurance',
    policyNumber: '#157-PE9871-541',
});

// Method to handle the "Buy Insurance" button click
const buyInsurance = () => {
    // Logic to handle the purchase action (e.g., redirecting or showing a form)
    alert('Redirecting to buy insurance...');
};
</script>
<template>
    <PageHeading title="Overview" sub-title="Patients" />
    <div class="grid grid-cols-12 gap-x-space">
        <div class="col-span-12 card">
            <div class="card-body">
                <div class="flex flex-wrap gap-5">
                    <!-- Avatar Section -->
                    <div class="shrink">
                        <img :src="user.avatar" alt="User Avatar" class="rounded-md size-40" />
                    </div>

                    <!-- User Information Section -->
                    <div class="grow">
                        <h6 class="mb-1 text-16">{{ user.name }}</h6>
                        <div class="overflow-x-auto">
                            <div class="flex flex-wrap gap-3 item-center *:flex *:items-center">
                                <p><i class="ltr:mr-1 rtl:ml-1 ri-user-3-line"></i> <span class="text-gray-500 dark:text-dark-500">{{ user.gender }}</span></p>
                                <p><i class="ltr:mr-1 rtl:ml-1 ri-briefcase-line"></i> <span class="text-gray-500 dark:text-dark-500">{{ user.occupation }}</span></p>
                                <p><i class="ltr:mr-1 rtl:ml-1 ri-map-pin-2-line"></i> <span class="text-gray-500 dark:text-dark-500">{{ user.location }}</span></p>
                                <p><i class="ltr:mr-1 rtl:ml-1 ri-calendar-event-line"></i> <span class="text-gray-500 dark:text-dark-500">{{ user.dob }} ({{ user.age }}
                                        Years)</span></p>
                            </div>
                        </div>

                        <!-- Health and Appointment Information Section -->
                        <div>
                            <div class="flex flex-wrap items-center mt-5 gap-space">
                                <div v-for="(item, index) in user.healthInfo" :key="index" class="p-4 text-center border border-gray-200 border-dashed rounded-md dark:border-dark-800 w-36 shrink-0">
                                    <h4 class="mb-1">{{ item.value }} <small v-if="item.unit" class="text-sm font-normal text-gray-500 dark:text-dark-500">{{ item.unit
                                            }}</small></h4>
                                    <p class="text-gray-500 dark:text-dark-500">{{ item.label }}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Actions Section -->
                    <div class="shrink-0">
                        <div class="flex items-center gap-2">
                            <button class="btn btn-sub-green btn-icon" title="phone">
                                <Phone class="size-4"></Phone>
                            </button>
                            <button class="btn btn-sub-purple btn-icon" title="messages-square">
                                <MessagesSquare class="size-4"></MessagesSquare>
                            </button>
                            <button type="button" class="btn btn-primary" title="edit" @click="editProfile">
                                <Pencil data-lucide="pencil" class="inline-block ltr:mr-1 rtl:ml-1 size-4"></Pencil>
                                Edit
                            </button>
                        </div>
                    </div>
                </div>
                <div class="mt-5">
                    <div class="grid grid-cols-12 gap-6">
                        <div class="col-span-12 lg:col-span-6 xl:col-span-3" v-for="(info, index) in infoList" :key="index">
                            <p class="mb-1 text-gray-500 dark:text-dark-500">{{ info.label }}</p>
                            <h6>{{ info.value }}</h6>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="col-span-12 row-span-2 md:col-span-6 xl:col-span-3 card">
            <div class="card-header">
                <h6 class="card-title">Timeline</h6>
            </div>
            <div class="card-body">
                <simplebar data-simplebar class="h-[20.8rem] -mx-space px-space">
                    <ul class="timeline">
                        <li class="timeline-primary" v-for="(event, index) in timelineEvents" :key="index">
                            <span class="badge badge-gray">{{ event.date }}</span>
                            <h6 class="mt-3 mb-1">{{ event.title }}</h6>
                            <p class="text-sm text-gray-500 dark:text-dark-500">{{ event.description }}</p>
                        </li>
                    </ul>
                </simplebar>
            </div>
        </div>
        <div class="col-span-12 md:col-span-6 xl:col-span-3">
            <!-- Insurance Overview Card -->
            <div class="card">
                <div class="card-header">
                    <h6 class="card-title">Insurance Overview</h6>
                </div>
                <div class="card-body">
                    <div class="flex items-center gap-3">
                        <!-- Icon Section -->
                        <div class="flex items-center justify-center rounded-full text-primary-500 bg-primary-500/10 size-12">
                            <HeartHandshake class="size-5"></HeartHandshake>
                        </div>
                        <div class="grow">
                            <h6 class="mb-1">{{ insurance.name }}</h6>
                            <p class="text-gray-500 dark:text-dark-500">{{ insurance.policyNumber }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Offer Insurance Card -->
            <div class="bg-green-500/10 border-green-500/20 card">
                <div class="card-body">
                    <div class="flex items-center gap-3">
                        <!-- Image Section -->
                        <div class="grow">
                            <img src="@/assets/images/others/insurance.png" alt="Insurance Image" class="size-14">
                            <h6 class="mt-5 mb-1">Get peace of mind with the right insurance coverage.</h6>
                            <p class="mb-3 text-gray-500 dark:text-dark-500">Receive your personalized quote in just a
                                few clicks!</p>
                            <!-- Button to Buy Insurance -->
                            <button type="button" class="btn btn-green" @click="buyInsurance">Buy Insurance</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ReportsTable />
        <MedicineTable />
        <AppointmentTable />
    </div>
</template>