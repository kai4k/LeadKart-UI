<script setup lang="ts">
import { ref, watch } from 'vue';
import { Plus, Upload, X } from 'lucide-vue-next';
import type { ContactForm } from './lead-data';
import leadsData from './lead-data';
import userImage from '@/assets/images/avatar/user-1.png'
const props = defineProps({
    isShowModule: Boolean,
    setShowModuleValue: Function,
    showEditModule: Boolean,
    setEditModuleValue: Function,
    getData: Object,
})

interface Errors {
    [key: string]: string | null;
}

// Reactive data
const allLeads = ref<ContactForm[]>([]);
const errors = ref<Errors>({});
const date = new Date()
const contactForm = ref<ContactForm>({
    image: null,
    name: '',
    email: '',
    phoneNumber: '',
    status: '',
    date: `${date.getDate()} ${date.getMonth()},${date.getFullYear()}`,
    time: `${date.getHours()}:${date.getMinutes()} AM`,
});

watch(() => props.getData, (newData) => {
    if (newData) contactForm.value = { ...newData } as ContactForm
    else contactForm.value = {
        image: null,
        name: '',
        email: '',
        phoneNumber: '',
        status: '',
        date: `${date.getDate()} ${date.getMonth()},${date.getFullYear()}`,
        time: `${date.getHours()}:${date.getMinutes()} AM`,
    }
})

// Form validation methods
const validateField = (fieldName: string, fieldValue: string, errorMessage: string, validationFunction?: Function) => {
    if (!fieldValue || (Array.isArray(fieldValue) && fieldValue.length === 0)) {
        errors.value[fieldName] = errorMessage;
    } else if (validationFunction && !validationFunction(fieldValue)) {
        errors.value[fieldName] = `Invalid ${fieldName} format.`;
    } else {
        delete errors.value[fieldName];
    }
};

const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
};

const formatPhone = () => {
    let rawNumber = contactForm.value.phoneNumber.replace(/[^\d]/g, '');
    let formattedNumber = rawNumber
        .replace(/^(\d{1,3})(\d{0,4})(\d{0,4})$/, '+($1) $2 $3')
        .trim();
    const phonePattern = /^\+\(\d{3}\) \d{4} \d{4}$/;
    if (!phonePattern.test(formattedNumber)) {
        errors.value.phoneNumber = 'Phone number must be in the format +(XXX) YYYY ZZZZ';
    } else {
        errors.value.phoneNumber = '';
    }
    contactForm.value.phoneNumber = formattedNumber;
};

const validateForm = () => {
    errors.value = {};
    validateField('name', contactForm.value.name, 'Full name is required.');
    validateField('email', contactForm.value.email, 'Email is required.', validateEmail);
    formatPhone();
    validateField('phoneNumber', contactForm.value.phoneNumber, 'Phone number is required.');
    validateField('status', contactForm.value.status, 'Status is required.');
    return Object.keys(errors.value).length === 0;
};

// Form submission methods
const submitForm = () => {
    if (validateForm()) {
        if (props.isShowModule) {
            addContact()
        } else {
            updateContact();
        }
        resetForm();
        closeModule()
    }
};

const resetForm = () => {
    errors.value = {};
    contactForm.value = ({
        id: '',
        image: null,
        name: '',
        email: '',
        phoneNumber: '',
        status: '',
        date: `${date.getDate()} ${date.getMonth()},${date.getFullYear()}`,
        time: `${date.getHours()}:${date.getMinutes()} AM`,
    })
};
const closeModule = () => {
    errors.value = {};
    if (props.setShowModuleValue) props.setShowModuleValue(false)
    if (props.setEditModuleValue) props.setEditModuleValue(false)
}
const addContact = () => {
    const id = leadsData.value.length + 1;
    const image = userImage;
    leadsData.value.unshift({ id, ...contactForm.value, image });
    closeModule()
};

const updateContact = () => {
    const index = allLeads.value.findIndex(lead => lead.id === contactForm.value.id);
    if (index !== -1) {
        allLeads.value[index] = { ...contactForm.value, status: contactForm.value.status };
    }
};

// File upload handling
const fileChosen = (event: Event) => {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput && fileInput.files) {
        const file = fileInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                if (e.target && e.target.result) {
                    contactForm.value.image = e.target.result as string;
                }
            };
            reader.readAsDataURL(file);
        }
    }
};

</script>
<template>
    <div id="leadCreateModal" class="modal" :class="{ 'd-block': isShowModule || showEditModule }"
        v-show="isShowModule || showEditModule">

        <div class="modal-wrap modal-center">
            <div class="p-2 modal-content">
                <!-- Modal Header with Gradient -->
                <div class="h-24 p-5 rounded-t bg-gradient-to-r from-primary-500/20 via-pink-500/20 to-green-500/20">
                </div>

                <!-- Modal Body -->
                <div class="p-4">
                    <!-- Image Upload Section -->
                    <div class="-mt-16">
                        <label for="logo">
                            <div
                                class="inline-flex items-center justify-center overflow-hidden bg-gray-100 border-2 border-white border-solid rounded-full cursor-pointer dark:border-dark-900 dark:bg-dark-850 size-24">
                                <img v-if="contactForm.image" :src="contactForm.image"
                                    class="object-cover w-full h-full rounded-full">
                                <div v-else class="flex flex-col items-center text-gray-500 dark:text-dark-500">
                                    <Upload data-lucide="upload"></Upload>
                                </div>
                            </div>
                        </label>
                        <div class="hidden mt-4">
                            <label class="block">
                                <span class="sr-only">Choose profile photo</span>
                                <input type="file" name="logo" id="logo" @change="fileChosen"
                                    class="block w-full text-sm file:rounded-md focus:outline-0 text-slate-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100" />
                            </label>
                        </div>
                    </div>

                    <span v-if="errors.image" class="text-red-500">{{ errors.image }}</span>

                    <!-- Form Fields -->
                    <div class="grid grid-cols-12 gap-4 mt-5">
                        <div class="col-span-12">
                            <label for="fullNameInput" class="form-label">Full Name</label>
                            <input type="text" id="fullNameInput" class="form-input" placeholder="Full name"
                                v-model="contactForm.name"
                                @input="validateField('name', contactForm.name, 'Full name is required.')" />
                            <span v-if="errors.name" class="text-red-500">{{ errors.name }}</span>
                        </div>

                        <div class="col-span-12">
                            <label for="emailInput" class="form-label">Email</label>
                            <input type="email" id="emailInput" class="form-input" placeholder="support@example.com"
                                v-model="contactForm.email"
                                @input="validateField('email', contactForm.email, 'Email is required.', validateEmail)" />
                            <span v-if="errors.email" class="text-red-500">{{ errors.email }}</span>
                        </div>

                        <div class="col-span-12">
                            <label for="phoneNumberInput" class="form-label">Phone Number</label>
                            <input type="tel" id="phoneNumberInput" class="form-input" placeholder="+(00) 0000 000"
                                v-model="contactForm.phoneNumber" @input="formatPhone()" />
                            <span v-if="errors.phoneNumber" class="text-red-500">{{ errors.phoneNumber }}</span>
                        </div>

                        <div class="col-span-6">
                            <label for="statusSelect2" class="form-label">Status</label>
                            <select id="statusSelect2" v-model="contactForm.status" class="form-select"
                                @change="validateField('status', contactForm.status, 'Status is required.')">
                                <option value="" disabled selected>Select Status</option>
                                <option value="New">New</option>
                                <option value="Hot">Hot</option>
                                <option value="Pending">Pending</option>
                                <option value="Lost">Lost</option>
                            </select>
                            <span v-if="errors.status" class="text-red-500">{{ errors.status }}</span>
                        </div>

                        <!-- Action Buttons -->
                        <div class="flex items-center justify-end col-span-12 gap-2 mt-5">
                            <button type="button" class="btn btn-active-red" @click="closeModule"
                                data-modal-close="leadCreateModal">
                                <X data-lucide="x" class="inline-block size-4"></X> <span
                                    class="align-baseline">Close</span>
                            </button>
                            <button type="button" class="btn btn-primary" @click="submitForm">
                                <Plus data-lucide="plus" class="inline-block ltr:mr-1 rtl:ml-1 size-4"></Plus>
                                {{ setShowModuleValue ? 'Add Lead' : 'Update Lead' }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="backdrop-overlay backdrop-blur-xs" id="backDropDiv" @click="closeModule"></div>
    </div> 
</template>
here when i try to add image it show showing the image why please check