<script setup lang="ts">
import PageHeading from '@/components/common/PageHeading.vue';
import { reactive, computed } from "vue";
import flatPickr from 'vue-flatpickr-component';
// import 'flatpickr/dist/flatpickr.css';

interface LeaveForm {
    leaveType: string;
    contactNumber: string;
    emergencyNumber: string;
    startDate: string;
    endDate: string;
    reason: string;
    totalDays: number;
}

const leaveForm = reactive<LeaveForm>({
    leaveType: "",
    contactNumber: "",
    emergencyNumber: "",
    startDate: "",
    endDate: "",
    reason: "",
    totalDays: 0,
});

const errors = reactive<Record<string, string>>({});

const leaves = reactive({
    "Casual Leave": 11,
    "Sick Leave": 1,
    "Maternity Leave": 1,
    "Emergency Leave": 2,
    "Vacation Leave": 3,
});

const totalLeaves = computed(() => {
    return Object.values(leaves).reduce((sum, val) => sum + val, 0);
});

function validateField(fieldName: string, fieldValue: string | number, errorMessage: string) {
    if (!fieldValue) {
        errors[fieldName] = errorMessage;
    } else {
        delete errors[fieldName];
    }
}

function calculateTotalDays() {
    const startDate = new Date(leaveForm.startDate);
    const endDate = new Date(leaveForm.endDate);
    if (!isNaN(startDate.getTime()) && !isNaN(endDate.getTime())) {
        const diff = endDate.getTime() - startDate.getTime();
        leaveForm.totalDays = diff >= 0 ? Math.ceil(diff / (1000 * 60 * 60 * 24)) + 1 : 0;
    } else {
        leaveForm.totalDays = 0;
    }
}

function validateForm() {
    validateField("leaveType", leaveForm.leaveType, "Leave type is required.");
    validateField("contactNumber", leaveForm.contactNumber, "Contact number is required.");
    validateField("emergencyNumber", leaveForm.emergencyNumber, "Emergency number is required.");
    validateField("startDate", leaveForm.startDate, "Start date is required.");
    validateField("endDate", leaveForm.endDate, "End date is required.");
    validateField("reason", leaveForm.reason, "Reason is required.");

    return Object.keys(errors).length === 0;
}

function resetForm() {
    Object.keys(errors).forEach((key) => delete errors[key]);
    Object.assign(leaveForm, {
        leaveType: "",
        contactNumber: "",
        emergencyNumber: "",
        startDate: "",
        endDate: "",
        reason: "",
        totalDays: 0,
    });
}

function submitForm(event: Event) {
    event.preventDefault();
    if (validateForm()) {
        if (leaveForm.leaveType in leaves) {
            leaves[leaveForm.leaveType as keyof typeof leaves]++;
        }
        resetForm();
    }
}

const leaveOptions = [
    {
        label: 'Casual Leave',
        value: 'casual'
    },
    {
        label: 'Sick Leave',
        value: 'sick'
    },
    {
        label: 'Maternity Leave',
        value: 'maternity'
    },
    {
        label: 'Emergency Leave',
        value: 'emergency'
    },
    {
        label: 'Vacation Leave',
        value: 'vacation'
    },
]
</script>
<template>
    <PageHeading title="Add Leave" sub-title="Staff" />
    <div class="grid grid-cols-12 gap-space">
        <!-- Leave Form -->
        <div class="col-span-12 lg:col-span-8 2xl:col-span-9 card">
            <div class="card-header">
                <h6 class="card-title">Create Leave Request</h6>
            </div>
            <div class="card-body">
                <div class="grid grid-cols-12 gap-space">
                    <div class="col-span-12">
                        <label for="leaveTypeSelect" class="form-label">
                            Leave Type <span class="text-red-500">*</span>
                        </label>
                        <select id="leaveTypeSelect" class="text-sm form-select" v-model="leaveForm.leaveType" @change="validateField('leaveType', leaveForm.leaveType, 'Leave type is required.')">
                            <option value="" class="text-gray-500" disabled>Select Leave Type</option>
                            <template v-for="(options, index) in leaveOptions" :key="index">
                                <option :value="options.value">{{ options.label }}</option>
                            </template>
                        </select>
                        <span v-if="errors.leaveType" class="text-red-500">{{ errors.leaveType }}</span>
                    </div>

                    <div class="col-span-12 md:col-span-6">
                        <label for="contactNumber" class="form-label">
                            Contact Number <span class="text-red-500">*</span>
                        </label>
                        <input type="text" id="contactNumber" class="form-input" placeholder="Enter your contact number" v-model="leaveForm.contactNumber" @input="validateField('contactNumber', leaveForm.contactNumber, 'Contact number is required.')" />
                        <span v-if="errors.contactNumber" class="text-red-500">{{ errors.contactNumber }}</span>
                    </div>

                    <div class="col-span-12 md:col-span-6">
                        <label for="emergencyNumber" class="form-label">
                            Emergency Number <span class="text-red-500">*</span>
                        </label>
                        <input type="text" id="emergencyNumber" class="form-input" placeholder="Enter your emergency number" v-model="leaveForm.emergencyNumber" @input="validateField('emergencyNumber', leaveForm.emergencyNumber, 'Emergency number is required.')" />
                        <span v-if="errors.emergencyNumber" class="text-red-500">{{ errors.emergencyNumber }}</span>
                    </div>

                    <div class="col-span-12 md:col-span-4">
                        <label for="startDateInput" class="form-label">
                            Start Date <span class="text-red-500">*</span>
                        </label>
                        <flat-pickr type="text" id="startDateInput" class="form-input" v-model="leaveForm.startDate" @input="validateField('startDate', leaveForm.startDate, 'Start date is required.'); calculateTotalDays()" placeholder="Select Date" />
                        <span v-if="errors.startDate" class="text-red-500">{{ errors.startDate }}</span>
                    </div>

                    <div class="col-span-12 md:col-span-4">
                        <label for="endDateInput" class="form-label">
                            End Date <span class="text-red-500">*</span>
                        </label>
                        <flat-pickr type="text" id="endDateInput" class="form-input" v-model="leaveForm.endDate" @input="validateField('endDate', leaveForm.endDate, 'End date is required.'); calculateTotalDays()" placeholder="Select Date" />
                        <span v-if="errors.endDate" class="text-red-500">{{ errors.endDate }}</span>
                    </div>

                    <div class="col-span-12 md:col-span-4">
                        <label for="totalDays" class="form-label">
                            Total Days <span class="text-red-500">*</span>
                        </label>
                        <input type="number" id="totalDays" class="form-input" v-model="leaveForm.totalDays" readonly />
                    </div>

                    <div class="col-span-12">
                        <label for="reasonsInput" class="form-label">
                            Reason <span class="text-red-500">*</span>
                        </label>
                        <textarea id="reasonsInput" placeholder="Enter reasons" class="h-auto form-input" rows="3" v-model="leaveForm.reason" @input="validateField('reason', leaveForm.reason, 'Reason is required.')"></textarea>
                        <span v-if="errors.reason" class="text-red-500">{{ errors.reason }}</span>
                    </div>

                    <div class="flex justify-end col-span-12 gap-2">
                        <button type="reset" @click="resetForm" class="btn btn-sub-gray">
                            Reset
                        </button>
                        <button @click="submitForm($event)" class="btn btn-primary">
                            Apply Leave Request
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Leave Summary -->
        <div class="col-span-12 lg:col-span-4 2xl:col-span-3">
            <div class="card">
                <div class="card-header">
                    <h6 class="card-title">Leave Summary</h6>
                </div>
                <div class="card-body">
                    <table class="table flush table-sm">
                        <tbody>
                            <template v-for="(leave, index) in leaves" :key="index">
                                <tr>
                                    <td class="text-gray-500 dark:text-dark-500">{{ index }}</td>
                                    <td class="font-medium">{{ leave }}</td>
                                </tr>
                            </template>
                            <tr>
                                <td class="text-gray-500 dark:text-dark-500">Total Leave</td>
                                <td class="font-medium">{{ totalLeaves }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>