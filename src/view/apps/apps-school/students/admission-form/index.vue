<script setup lang="ts">
import PageHeading from '@/components/common/PageHeading.vue';
import { ref } from 'vue';
import PersonalDetails from './PersonalDetails.vue';
import GuardianDetails from './GuardianDetails.vue';
import EducationBackground from './EducationBackground.vue';
import Documents from './Documents.vue';
import ApplicationOverview from './ApplicationOverview.vue';
// Tabs data
const lastDataOfFees = ref('01 Aug, 2024')
const tabs = ref<string[]>([
    'Personal Details',
    'Guardian Details',
    'Educational Background',
    'Documents',
    'Application Overview',
]);

// Reactive state for the active tab
const openTab = ref<number>(1);

// Classes for active and inactive states
const activeClasses = 'bg-primary-500 text-primary-50';
const inactiveClasses = ' text-gray-500 hover:text-primary-500';

// Function to set the active tab
const setOpenTab = (tab: number) => {
    openTab.value = tab;
};
</script>
<template>
    <PageHeading title="Admission Form" sub-title="Students" />
    <div class="grid grid-cols-12 gap-x-space">
        <div class="col-span-12 xl:col-span-8 2xl:col-span-9">
            <div class="card">
                <div class="card-header">
                    <ul class="overflow-x-auto tabs-pills">
                        <li v-for="(tab, index) in tabs" :key="index" @click="setOpenTab(index + 1)">
                            <a href="javascript:void(0)"
                                :class="openTab === index + 1 ? activeClasses : inactiveClasses"
                                class="nav-item [&.active]:bg-primary-500  [&.active]:text-primary-50">
                                {{ tab }}
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="card-body">
                    <div class="w-full">
                        <PersonalDetails :goNextTag="setOpenTab" v-show="openTab == 1" />
                        <GuardianDetails v-show="openTab == 2" :goNextTag="setOpenTab" />
                        <EducationBackground :goNextTag="setOpenTab" v-show="openTab == 3" />
                        <Documents :goNextTag="setOpenTab" v-show="openTab == 4" />
                        <ApplicationOverview v-show="openTab == 5" />
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-12 xl:col-span-4 2xl:col-span-3">
            <div class="card">
                <div class="card-header">
                    <h6 class="card-title">Fees Structure</h6>
                </div>
                <div class="card-body">
                    <div class="mb-4 alert-red alert">
                        <span>If the fees are not paid before {{ lastDataOfFees }}, the application will be
                            automatically
                            rejected</span>
                    </div>
                    <form action="#!">
                        <div class="grid items-center grid-cols-12 gap-3">
                            <div class="col-span-12 sm:col-span-4">
                                <label for="courseFrees" class="mb-0 form-label">Course Frees</label>
                            </div>
                            <div class="col-span-12 sm:col-span-8">
                                <input type="number" id="courseFrees" class="form-input" placeholder="$0">
                            </div>
                            <div class="col-span-12 sm:col-span-4">
                                <label for="paidAmount" class="mb-0 form-label">Paid Amount</label>
                            </div>
                            <div class="col-span-12 sm:col-span-8">
                                <input type="number" id="paidAmount" class="form-input" placeholder="$0">
                            </div>
                            <div class="col-span-12 sm:col-span-4">
                                <label for="statuSelect" class="mb-0 form-label">Status</label>
                            </div>
                            <div class="col-span-12 sm:col-span-8">
                                <select id="statuSelect" class="form-select">
                                    <option disabled selected hidden>Select Status</option>
                                    <option>Unpaid</option>
                                    <option>Partially Paid</option>
                                    <option>Paid</option>
                                </select>
                            </div>
                            <div class="col-span-12 sm:col-span-4">
                                <label for="paidVia" class="mb-0 form-label">Paid Via</label>
                            </div>
                            <div class="col-span-12 sm:col-span-8">
                                <input type="text" id="paidVia" class="form-input" placeholder="N/A">
                            </div>
                        </div>
                        <div class="flex flex-wrap gap-2 mt-5">
                            <button class="btn btn-sub-gray">View Receive</button>
                            <button class="btn btn-primary">Add Account</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>