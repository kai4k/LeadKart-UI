<script setup lang="ts">
import { ref } from 'vue';
import flatPickr from 'vue-flatpickr-component';
// Define reactive form data
const form = ref({
    insuranceProvider: '',
    policyNumber: '',
    startDate: '',
    effectiveDate: ''
});

// Handle form submission
const onSubmit = () => {
    // Handle form submission, validation happens via the 'required' attributes
    if (form.value.insuranceProvider && form.value.policyNumber && form.value.startDate && form.value.effectiveDate) {
        // Optionally reset the form after submission
        resetForm();
    } else {
        alert('Please fill in all required fields');
    }
};

// Reset the form
const resetForm = () => {
    form.value = {
        insuranceProvider: '',
        policyNumber: '',
        startDate: '',
        effectiveDate: ''
    };
};
</script>
<template>
    <div class="card">
        <div class="card-header">
            <h6 class="card-title">Insurance Information</h6>
        </div>
        <div class="card-body">
            <form @submit.prevent="onSubmit">
                <div class="grid grid-cols-12 gap-space">
                    <!-- Insurance Provider -->
                    <div class="col-span-12 md:col-span-6 xl:col-span-4">
                        <label for="insuranceProviderInput" class="form-label">
                            Insurance Provider <span class="text-red-500">*</span>
                        </label>
                        <input v-model="form.insuranceProvider" type="text" id="insuranceProviderInput"
                            class="form-input" placeholder="Insurance provider" pattern="[A-Za-z ]+"
                            title="Only letters and spaces allowed" required />
                    </div>

                    <!-- Policy Number -->
                    <div class="col-span-12 md:col-span-6 xl:col-span-4">
                        <label for="policyNumberInput" class="form-label">
                            Policy Number <span class="text-red-500">*</span>
                        </label>
                        <input v-model="form.policyNumber" type="text" id="policyNumberInput" class="form-input"
                            placeholder="000 0000 0000 0000 000" pattern="^[A-Za-z0-9]+$"
                            title="Policy number can only contain letters and numbers" required />
                    </div>

                    <!-- Start Date -->
                    <div class="col-span-12 md:col-span-6 xl:col-span-4">
                        <label for="startDateInput" class="form-label">
                            Start Date <span class="text-red-500">*</span>
                        </label>
                        <flat-pickr type="text" placeholder="Select Date" id="orderDateInput" class="form-input"
                            v-model="form.startDate" />
                    </div>

                    <!-- Effective Date -->
                    <div class="col-span-12 md:col-span-6 xl:col-span-4">
                        <label for="effectiveDateInput" class="form-label">
                            Effective Date <span class="text-red-500">*</span>
                        </label>
                        <flat-pickr type="text" placeholder="Select Date" id="orderDateInput" class="form-input"
                            v-model="form.effectiveDate" />
                    </div>

                    <!-- Submit and Reset Buttons -->
                    <div class="col-span-12">
                        <div class="flex items-center justify-end gap-2">
                            <button type="submit" class="btn btn-primary">Save Now</button>
                            <button type="reset" class="btn btn-sub-gray" @click="resetForm">Reset</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>