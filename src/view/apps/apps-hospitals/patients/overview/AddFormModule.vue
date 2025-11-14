<script setup lang="ts">
import flatPickr from 'vue-flatpickr-component';
// import 'flatpickr/dist/flatpickr.css';
import { Plus, X } from 'lucide-vue-next';
import { ref } from 'vue';

const props = defineProps({
    showAddForm: Boolean,
    setModuleValue: Function,
    addRow: Function
})
// Form state
const reportForm = ref({
    name: '',
    date: '',
    doctor: '',
    clientDetails: '',
    impressions: '',
    recommendations: '',
    status: ''
});

// Errors object to store validation errors
const errors = ref<Record<string, string>>({});

// Close the modal
function closeModal() {
    if (props.setModuleValue) props.setModuleValue(false)
}

// Validate a single form field
function validateField(fieldName: string, fieldValue: string, errorMessage: string) {
    if (!fieldValue) {
        errors.value[fieldName] = errorMessage;
    } else {
        delete errors.value[fieldName];
    }
}

// Validate the entire form
function validateForm(): boolean {
    errors.value = {}; // Clear previous errors

    validateField('date', reportForm.value.date, 'Date is required.');
    validateField('reportType', reportForm.value.name, 'Report type is required.');
    validateField('recommendations', reportForm.value.recommendations, 'Recommendations are required.');
    validateField('doctor', reportForm.value.doctor, 'Doctor name is required.');
    validateField('clientDetails', reportForm.value.clientDetails, 'Client details are required.');
    validateField('status', reportForm.value.status, 'Status is required.');
    validateField('impressions', reportForm.value.impressions, 'Impressions are required.');

    return Object.keys(errors.value).length === 0; // Return true if no errors
}

// Submit the form and add the report if valid
function submitReport() {
    if (validateForm()) {
        if (props.addRow) props.addRow(reportForm.value)
        closeModal();
        resetForm();

    }
}

function resetForm() {
    reportForm.value = {
        name: '',
        date: '',
        doctor: '',
        clientDetails: '',
        impressions: '',
        recommendations: '',
        status: ''
    };
}
</script>
<template>

    <div class="modal" v-if="showAddForm">
        <div class="modal-wrap modal-center">
            <div class="modal-header">
                <h6 class="modal-title">Add Report</h6>
                <button class="link link-red" @click="closeModal">
                    <X class="size-5"></X>
                </button>
            </div>
            <div class="modal-content">
                <form @submit.prevent="submitReport">
                    <div class="grid grid-cols-12 gap-space">
                        <!-- Report Type -->
                        <div class="col-span-12">
                            <label for="reportTypeSelect" class="form-label">Report Type <span
                                    class="text-red-500">*</span></label>
                            <input type="text" id="reportTypeSelect" class="form-input" v-model="reportForm.name"
                                placeholder="Select Report Type"
                                @input="validateField('reportType', reportForm.name, 'Report type is required.')" />
                            <span v-if="errors.name" class="text-red-500">{{ errors.name }}</span>
                        </div>

                        <!-- Date -->
                        <div class="col-span-12">
                            <label for="dateInput" class="form-label">Date <span class="text-red-500">*</span></label>

                            <flat-pickr type="text" placeholder="Select Date" id="orderDateInput" class="form-input"
                                v-model="reportForm.date"
                                @input="validateField('date', reportForm.date, 'Date is required.')" />
                            <span v-if="errors.date" class="text-red-500">{{ errors.date }}</span>
                        </div>

                        <!-- Doctor -->
                        <div class="col-span-12">
                            <label for="doctorNameInput" class="form-label">Doctor <span
                                    class="text-red-500">*</span></label>
                            <input type="text" id="doctorNameInput" class="form-input" v-model="reportForm.doctor"
                                placeholder="Enter doctor name"
                                @input="validateField('doctor', reportForm.doctor, 'Doctor name is required.')" />
                            <span v-if="errors.doctor" class="text-red-500">{{ errors.doctor }}</span>
                        </div>

                        <!-- Client Details -->
                        <div class="col-span-12">
                            <label for="textareaInput2" class="form-label">Clinical Details</label>
                            <textarea id="textareaInput2" class="h-auto form-input" v-model="reportForm.clientDetails"
                                placeholder="Enter your description"
                                @input="validateField('clientDetails', reportForm.clientDetails, 'Client details are required.')"></textarea>
                            <span v-if="errors.clientDetails" class="text-red-500">{{ errors.clientDetails }}</span>
                        </div>

                        <!-- Impressions -->
                        <div class="col-span-6">
                            <label for="impressionsInput" class="form-label">Impressions</label>
                            <input type="text" id="impressionsInput" class="form-input" v-model="reportForm.impressions"
                                placeholder="Impressions"
                                @input="validateField('impressions', reportForm.impressions, 'Impressions are required.')" />
                            <span v-if="errors.impressions" class="text-red-500">{{ errors.impressions }}</span>
                        </div>

                        <!-- Recommendations -->
                        <div class="col-span-6">
                            <label for="recommendationsSelect" class="form-label">Recommendations</label>
                            <input type="text" id="recommendationsSelect" class="form-input"
                                v-model="reportForm.recommendations" placeholder="Select Recommendations"
                                @input="validateField('recommendations', reportForm.recommendations, 'Recommendations are required.')" />
                            <span v-if="errors.recommendations" class="text-red-500">{{ errors.recommendations }}</span>
                        </div>

                        <!-- Status -->
                        <div class="col-span-12">
                            <label for="statusSelect" class="form-label">Status <span
                                    class="text-red-500">*</span></label>
                            <select name="" id="" v-model="reportForm.status" class="form-select"
                                @change="validateField('status', reportForm.status, 'Status is required.')">
                                <option value="">Select Status</option>
                                <option value="Pending">Pending</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Completed">Completed</option>
                            </select>
                            <span v-if="errors.status" class="text-red-500">{{ errors.status }}</span>
                        </div>

                        <!-- Buttons -->
                        <div class="col-span-12">
                            <div class="flex items-center justify-end gap-2">
                                <button type="button" class="btn btn-active-red" @click="closeModal">
                                    <X data-lucide="x" class="inline-block size-4"></X> <span>Close</span>
                                </button>
                                <button type="submit" class="btn btn-primary">
                                    <Plus data-lucide="plus" class="inline-block mr-1 size-4"></Plus> Add Report
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="backdrop-overlay backdrop-blur-xs" @click="closeModal"></div>
    </div>
</template>