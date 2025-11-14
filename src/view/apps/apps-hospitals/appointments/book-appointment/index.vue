<script setup lang="ts">
import PageHeading from '@/components/common/PageHeading.vue';
import { reactive } from "vue";
import flatPickr from 'vue-flatpickr-component';
// import 'flatpickr/dist/flatpickr.css';

interface Form {
    name: string;
    email: string;
    phone: string;
    date: string;
    startTime: string;
    endTime: string
    doctorName: string;
    treatment: string;
}

interface Errors {
    [key: string]: string;
}

const form = reactive<Form>({
    name: "",
    email: "",
    phone: "",
    date: "",
    startTime: "",
    endTime: "",
    doctorName: "",
    treatment: "",
});

const errors = reactive<Errors>({});

function validateField(fieldName: string, fieldValue: string, errorMessage: string): void {
    if (!fieldValue) {
        errors[fieldName] = errorMessage;
    } else {
        delete errors[fieldName];
    }
}

function onSubmit(): void {
    validateForm();
    if (Object.keys(errors).length === 0) {
        // resetForm();
    }
}

function reset(): void {
    Object.keys(form).forEach((key) => (form[key as keyof Form] = ""));
    Object.keys(errors).forEach((key) => delete errors[key]);
}

function validateForm(): void {
    validateField("name", form.name, "Patient name is required.");
    validateField("email", form.email, "Email is required.");
    validateField("phone", form.phone, "Phone number is required.");
    validateField("date", form.date, "Date is required.");
    validateField("doctorName", form.doctorName, "Doctor name is required.");
    validateField("treatment", form.treatment, "Treatment is required.");
    validateField("startTime", form.startTime, "Start time is required.");
    validateField("endTime", form.endTime, "end time is required.");
}

// Define the time slots
const timeSlots = [
    { label: '09:00 AM', value: '09:00 AM', disabled: false },
    { label: '09:30 AM', value: '09:30 AM', disabled: false },
    { label: '10:00 AM', value: '10:00 AM', disabled: true },
    { label: '10:30 AM', value: '10:30 AM', disabled: false },
    { label: '11:00 AM', value: '11:00 AM', disabled: false },
    { label: '11:30 AM', value: '11:30 AM', disabled: false },
    { label: '12:00 PM', value: '12:00 PM', disabled: false },
    { label: '12:30 PM', value: '12:30 PM', disabled: false },
    { label: '01:00 PM', value: '01:00 PM', disabled: false },
    { label: '01:30 PM', value: '01:30 PM', disabled: false },
    { label: '02:00 PM', value: '02:00 PM', disabled: false },
    { label: '02:30 PM', value: '02:30 PM', disabled: false },
    { label: '03:00 PM', value: '03:00 PM', disabled: true },
    { label: '03:30 PM', value: '03:30 PM', disabled: false },
    { label: '04:00 PM', value: '04:00 PM', disabled: false },
    { label: '04:30 PM', value: '04:30 PM', disabled: false },
    { label: '05:00 PM', value: '05:00 PM', disabled: false },
    { label: '05:30 PM', value: '05:30 PM', disabled: false },
    { label: '06:00 PM', value: '06:00 PM', disabled: false },
];

const doctorOptionList = [
    { label: "Dr. Michael Johnson", value: "Dr. Michael Johnson" },
    { label: "Dr. Sarah Evans", value: "Dr. Sarah Evans" },
    { label: "Dr. Emily Carter", value: "Dr. Emily Carter" },
    { label: "Dr. Robert Harris", value: "Dr. Robert Harris" },
]

</script>
<template>
    <PageHeading title="Book" sub-title="Appointments" />
    <div class="grid grid-cols-12 gap-x-space" x-data="bookForm">
        <div class="col-span-12 xl:col-span-8 2xl:col-span-9 card">
            <div class="card-header">
                <h6 class="card-title">Appointment Book</h6>
            </div>
            <div class="card-body">
                <form @submit.prevent="onSubmit" @reset="reset">
                    <div class="grid grid-cols-12 gap-space">
                        <!-- Patient Name -->
                        <div class="col-span-12">
                            <label for="patientNameInput" class="form-label">Patient Name</label>
                            <input type="text" id="patientNameInput" class="form-input" placeholder="Enter your patient name" v-model="form.name" @input="validateField('name', form.name, 'Patient name is required.')" />
                            <span v-if="errors.name" class="text-red-500">{{ errors.name }}</span>
                        </div>

                        <!-- Email -->
                        <div class="col-span-12 sm:col-span-6 xl:col-span-4">
                            <label for="emailInput" class="form-label">Email</label>
                            <input type="email" id="emailInput" class="form-input" placeholder="Enter your email" v-model="form.email" @input="validateField('email', form.email, 'Email is required.')" />
                            <span v-if="errors.email" class="text-red-500">{{ errors.email }}</span>
                        </div>

                        <!-- Phone -->
                        <div class="col-span-12 sm:col-span-6 xl:col-span-4">
                            <label for="phoneNumberInput" class="form-label">Phone Number</label>
                            <input type="number" id="phoneNumberInput" class="form-input" placeholder="(00) 000 00 0000" v-model="form.phone" @input="validateField('phone', form.phone, 'Phone number is required.')" />
                            <span v-if="errors.phone" class="text-red-500">{{ errors.phone }}</span>
                        </div>

                        <!-- Date -->
                        <div class="col-span-12 sm:col-span-6 xl:col-span-4">
                            <label for="selectDateInput" class="form-label">Select Date</label>
                            <flat-pickr type="text" id="selectDateInput" class="form-input" placeholder="Select date" data-provider="flatpickr" data-date-format="d M, Y" v-model="form.date" @input="validateField('date', form.date, 'Date is required.')" />
                            <span v-if="errors.date" class="text-red-500">{{ errors.date }}</span>
                        </div>
                        <div class="col-span-12">
                            <label class="form-label">Start Time</label>
                            <div class="flex flex-wrap gap-2 md:gap-5">
                                <div v-for="(time, index) in timeSlots" :key="index" class="input-radio-group">
                                    <input :id="'timeRadio' + index" class="hidden input-radio peer" name="startTime" type="radio" v-model="form.startTime" :disabled="time.disabled" />
                                    <label :for="'timeRadio' + index" class="px-3 py-1.5 border border-gray-200 rounded-md inline-block input-radio-label dark:border-dark-800 peer-checked:border-primary-500 dark:peer-checked:border-primary-500 peer-disabled:bg-gray-100 dark:peer-disabled:bg-dark-850 peer-disabled:text-gray-500 dark:peer-disabled:text-dark-500">
                                        {{ time.label }}
                                    </label>
                                </div>
                            </div>
                            <span v-if="errors.startTime" class="text-red-500">{{ errors.startTime }}</span>
                        </div>

                        <!-- End Time -->
                        <div class="col-span-12">
                            <label class="form-label">End Time</label>
                            <div class="flex flex-wrap gap-2 md:gap-5">
                                <div v-for="(time, index) in timeSlots" :key="index" class="input-radio-group">
                                    <input :id="'timeRadio' + index" class="hidden input-radio peer" name="endTime" type="radio" v-model="form.endTime" :disabled="time.disabled" />
                                    <label :for="'timeRadio' + index" class="px-3 py-1.5 border border-gray-200 rounded-md inline-block input-radio-label dark:border-dark-800 peer-checked:border-primary-500 dark:peer-checked:border-primary-500 peer-disabled:bg-gray-100 dark:peer-disabled:bg-dark-850 peer-disabled:text-gray-500 dark:peer-disabled:text-dark-500">
                                        {{ time.label }}
                                    </label>
                                </div>
                            </div>
                            <span v-if="errors.endTime" class="text-red-500">{{ errors.endTime }}</span>
                        </div>
                        <!-- Doctor -->
                        <div class="col-span-12">
                            <label for="doctorSelect" class="form-label">Doctor Name</label>
                            <select id="doctorSelect" v-model="form.doctorName" @change="validateField('doctorName', form.doctorName, 'Doctor name is required.')" class="form-select">
                                <option value="" disabled>Select Doctor</option>
                                <template v-for="(options, index) in doctorOptionList" :key="index">
                                    <option :value="options.value">{{ options.label }}</option>
                                </template>
                            </select>
                            <span v-if="errors.doctorName" class="text-red-500">{{ errors.doctorName }}</span>
                        </div>

                        <!-- Treatment -->
                        <div class="col-span-12">
                            <label for="treatmentInput" class="form-label">Treatment</label>
                            <textarea id="treatmentInput" class="h-auto form-input" rows="3" v-model="form.treatment" @input="validateField('treatment', form.treatment, 'Treatment is required.')"></textarea>
                            <span v-if="errors.treatment" class="text-red-500">{{ errors.treatment }}</span>
                        </div>

                        <!-- Actions -->
                        <div class="col-span-12">
                            <div class="flex flex-wrap items-center justify-end gap-2">
                                <button type="reset" class="btn btn-sub-gray">Reset</button>
                                <button type="submit" class="btn btn-primary">Book Appointment</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="col-span-12 xl:col-span-4 2xl:col-span-3">
            <div class="bg-green-100 !border-green-500/20 dark:bg-green-500/15 card">
                <div class="card-body">
                    <h6 class="mb-3">Hospital Hours</h6>

                    <p class="mb-2 text-gray-500 dark:!text-dark-400">Monday - Friday 09:00AM - 06:00PM</p>
                    <p class="mb-4 text-gray-500 dark:!text-dark-400">Saturday 09:00AM - 03:00PM</p>

                    <h6 class="mb-3">Sunday Closed</h6>
                    <p class="text-red-500">* Every 2nd, 4th Saturday and all govt holidays are closed.</p>
                </div>
            </div>
        </div>
    </div>
</template>