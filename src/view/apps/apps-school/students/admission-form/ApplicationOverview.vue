<script setup lang="ts">
import { MoveLeft, MoveRight } from 'lucide-vue-next';
import { ref } from 'vue';

// Reactive state variables
const applicationID = "#PEA-1478A5487956236"; // This would usually come from a dynamic source
const referenceNumber = ref<string>("");  // Reference number entered by user
const submissionDate = "23 June, 2024"; // This would also be dynamic in a real scenario
const status = "Submitted";  // Status of the application

// Function to handle the submission of the form
const submitAdmissionForm = () => {
    // You can add any submission logic here, for example:
};
</script>
<template>
    <div>
        <form @submit.prevent="submitAdmissionForm">

            <!-- Application Overview Section -->
            <h6 class="mb-3">Application Overview</h6>
            <div class="grid grid-cols-12 gap-space">
                <div class="col-span-12 sm:col-span-6">
                    <label for="applicationIDInput" class="form-label">Application ID</label>
                    <input type="text" id="applicationIDInput" class="form-input" :value="applicationID" readonly />
                </div>
                <div class="col-span-12 sm:col-span-6">
                    <label for="referenceNumberInput" class="form-label">Reference Number</label>
                    <input type="text" id="referenceNumberInput" class="form-input" v-model="referenceNumber"
                        placeholder="#PEA-000A0000000000" />
                </div>
                <div class="col-span-12 sm:col-span-6">
                    <label for="dateOfApplicationSelect" class="form-label">Date of Application Submission</label>
                    <input type="text" id="dateOfApplicationSelect" class="form-input" :value="submissionDate"
                        readonly />
                </div>
                <div class="col-span-12 sm:col-span-6">
                    <label for="currentStatusSelect" class="form-label">Current Status</label>
                    <span class="badge badge-green">{{ status }}</span>
                </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex flex-wrap items-center gap-2 mt-5 ltr:justify-end rtl:justify-start">
                <button type="button" class="btn btn-sub-gray">
                    <MoveLeft class="mr-1 ltr:inline-block rtl:hidden size-4"></MoveLeft>
                    Previous
                </button>
                <button type="button" class="btn btn-primary" @click="submitAdmissionForm">
                    Submitted Form
                    <MoveRight class="ml-1 ltr:inline-block rtl:hidden size-4"></MoveRight>
                </button>
            </div>
        </form>
    </div>
</template>