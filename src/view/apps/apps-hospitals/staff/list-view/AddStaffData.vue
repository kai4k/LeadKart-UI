<script setup lang="ts">
import { Upload } from 'lucide-vue-next';
import { ref, watch } from 'vue';
import { staffData } from './staff-data';
import type { Staff } from './staff-data';
const props = defineProps({
    showModule: Boolean,
    setShowModuleValue: Function,
    addRow: Function,
    showUpdateModule: Boolean,
    setShowUpdateModuleValue: Function,
    updateData: Object
})
const staffForm = ref<Staff | any>({
    staffID: '',
    image: '',
    department: '',
    email: '',
    name: '',
    phone: '',
    role: '',
    date: '',
});

const errors = ref<any>({
    name: '',
    role: '',
    department: '',
    email: '',
    phone: '',
    date: '',
});

// Functions for validation
const validateField = (field: string, value: string, errorMessage: string) => {
    errors.value[field] = value ? '' : errorMessage;
};

const validateEmailField = () => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    errors.value.email = staffForm.value.email && emailPattern.test(staffForm.value.email)
        ? ''
        : 'Please enter a valid email address.';
};

const formatPhoneNumber = () => {
    // Implement phone number formatting if needed
};

// Modal handling functions
const closeModal = () => {
    if (props.setShowModuleValue) props.setShowModuleValue(false)
    if (props.setShowUpdateModuleValue) props.setShowUpdateModuleValue(false)
    resetForm();
};

// Watch for changes to updateData prop and update the form
watch(() => props.updateData, (newData) => {
    if (newData) {
        staffForm.value = { ...newData }; // Update the form data
    }
});
const resetForm = () => {
    staffForm.value = {
        image: '',
        name: '',
        role: '',
        department: '',
        email: '',
        phone: '',
        date: '',
    };
    errors.value = {
        name: '',
        role: '',
        department: '',
        email: '',
        phone: '',
        date: '',
    };
};

const fileChosen = (event: Event) => {
    const fileInput = event.target as HTMLInputElement;
    const file = fileInput?.files?.[0];
    if (file) {
        staffForm.value.image = URL.createObjectURL(file);
    }
};

// Form submission
const submitForm = () => {
    if (validateForm()) {
        if (props.showModule) {
            if (props.addRow) props.addRow(staffForm.value)
            resetForm()
            closeModal()
        } else {
            updateData()
        }
    }
};

function updateData() {
    const findIndex = staffData.value.findIndex((item) => item.staffID === staffForm.value.staffID);
    staffData.value.splice(findIndex, 1, { ...staffForm.value })
    closeModal()
}

// Validation for all fields
const validateForm = () => {
    const fields = ['name', 'role', 'department', 'email', 'phone', 'date'];
    fields.forEach(field => validateField(field, staffForm.value[field], `${field} is required.`));
    return Object.values(errors.value).every(error => !error);
};

</script>
<template>
    <div v-if="showModule || showUpdateModule" class="modal d-block"
        :class="{ 'd-block': showModule || showUpdateModule }">
        <div class="modal-wrap modal-center">
            <div class="p-2 modal-content">
                <!-- Header Gradient -->
                <div class="h-24 p-5 rounded-t bg-gradient-to-r from-primary-500/20 via-pink-500/20 to-green-500/20">
                </div>

                <!-- Modal Content -->
                <div class="p-4">
                    <div class="-mt-16">
                        <label for="logo">
                            <div
                                class="inline-flex items-center justify-center overflow-hidden bg-gray-100 border-2 border-white border-solid rounded-full cursor-pointer dark:border-dark-900 dark:bg-dark-850 size-24">
                                <img v-if="staffForm.image" :src="staffForm.image"
                                    class="object-cover w-full h-full rounded-full" />
                                <div v-else class="flex flex-col items-center text-gray-500 dark:text-dark-500">
                                    <Upload></Upload>
                                </div>
                            </div>
                        </label>
                        <div class="hidden mt-4">
                            <label class="block">
                                <span class="sr-only">Choose profile photo</span>
                                <input type="file" id="logo" @change="fileChosen"
                                    class="block w-full text-sm file:rounded-md focus:outline-0 text-slate-500 dark:text-dark-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100" />
                            </label>
                        </div>
                    </div>

                    <!-- Form Fields -->
                    <div class="grid grid-cols-12 gap-4 mt-4">
                        <div class="col-span-12">
                            <label for="fullNameInput" class="form-label">Full Name</label>
                            <input type="text" id="fullNameInput" class="form-input" placeholder="Full name"
                                v-model="staffForm.name"
                                @input="validateField('name', staffForm.name, 'Full name is required.')" />
                            <span v-if="errors.name" class="text-red-500">{{ errors.name }}</span>
                        </div>
                        <div class="col-span-12">
                            <label for="roleInput" class="form-label">Role</label>
                            <input type="text" id="roleInput" class="form-input" placeholder="Role"
                                v-model="staffForm.role"
                                @input="validateField('role', staffForm.role, 'Role is required.')" />
                            <span v-if="errors.role" class="text-red-500">{{ errors.role }}</span>
                        </div>
                        <div class="col-span-12">
                            <label for="departmentSelect" class="form-label">Department</label>
                            <input type="text" id="departmentSelect" class="form-input" v-model="staffForm.department"
                                @input="validateField('department', staffForm.department, 'Department is required.')" />
                            <span v-if="errors.department" class="text-red-500">{{ errors.department }}</span>
                        </div>
                        <div class="col-span-12">
                            <label for="emailInput" class="form-label">Email</label>
                            <input type="email" id="emailInput" class="form-input" placeholder="support@example.com"
                                v-model="staffForm.email" @input="validateEmailField()" />
                            <span v-if="errors.email" class="text-red-500">{{ errors.email }}</span>
                        </div>
                        <div class="col-span-12">
                            <label for="phoneNumberInput" class="form-label">Phone Number</label>
                            <input type="text" id="phoneNumberInput" class="form-input" placeholder="+(00) 0000 000"
                                v-model="staffForm.phone" @input="formatPhoneNumber()" />
                            <span v-if="errors.phone" class="text-red-500">{{ errors.phone }}</span>
                        </div>
                        <div class="col-span-12">
                            <label for="joiningDateInput" class="form-label">Joining Date</label>
                            <input type="text" id="joiningDateInput" class="form-input" placeholder="Select date"
                                v-model="staffForm.date"
                                @input="validateField('date', staffForm.date, 'Date is required.')" />
                            <span v-if="errors.date" class="text-red-500">{{ errors.date }}</span>
                        </div>
                    </div>

                    <!-- Action Buttons -->
                    <div class="flex items-center justify-end gap-2 mt-5">
                        <button type="button" class="btn btn-active-red" @click="closeModal">
                            <i data-lucide="x" class="inline-block size-4"></i>
                            <span>Close</span>
                        </button>
                        <button type="button" class="btn btn-primary" @click="submitForm">
                            <i data-lucide="plus" class="inline-block size-4"></i>
                            {{ showModule ? 'Add Staff' : 'Update Staff' }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="backdrop-overlay backdrop-blur-xs" @click="closeModal()"></div>

    </div>
</template>