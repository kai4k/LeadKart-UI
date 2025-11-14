<script setup lang="ts">
import { Plus, Upload, X } from 'lucide-vue-next';
import { ref, watch } from 'vue';
import { contacts, type Contacts } from './contact-details';
const props = defineProps({
    showFormModule: Boolean,
    setFormModuleValue: Function,
    showEditProjectForm: Boolean,
    setEditProjectForm: Function,
    editDetails: Object,

})

interface Errors {
    [key: string]: string;
}

const errors = ref<Errors>({});
let contactForm = ref<Contacts>({
    image: "",
    phoneNumber: "",
    contactName: "",
    company: "",
    role: "",
    email: "",
    website: "",
    status: "",
});

watch(() => props.editDetails, (newData) => {
    if (newData) contactForm.value = { ...newData } as Contacts
    else resetForm()
})
// Methods
const validateForm = (): boolean => {
    errors.value = {};
    validateField('contactName', contactForm.value.contactName, 'Full name is required.');
    validateField('company', contactForm.value.company, 'Company name is required.');
    validateField('role', contactForm.value.role, 'Role is required.');
    validateEmailField();
    formatPhoneNumber();
    validateField('phoneNumber', contactForm.value.phoneNumber, 'Phone number is required.');
    validateField('image', contactForm.value.image, 'Image is required.');
    validateField('status', contactForm.value.status, 'Status is required.');
    validateURLField();
    return Object.keys(errors.value).length === 0;
};

const validateField = (fieldName: string, fieldValue: string, errorMessage: string) => {
    if (!fieldValue) {
        errors.value[fieldName] = errorMessage;
    } else {
        delete errors.value[fieldName];
    }
};

const validateEmailField = () => {
    if (!contactForm.value.email) {
        errors.value.email = "Email is required.";
    } else if (!validateEmail(contactForm.value.email)) {
        errors.value.email = "Invalid email format.";
    } else {
        delete errors.value.email;
    }
};

const validateURLField = () => {
    if (!contactForm.value.website) {
        errors.value.website = "Website is required.";
    } else if (!validateURL(contactForm.value.website)) {
        errors.value.website = "Invalid website URL.";
    } else {
        delete errors.value.website;
    }
};

const validateEmail = (email: string): boolean => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
};

const validateURL = (url: string): boolean => {
    const re = /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(\/\S*)?$/;
    return re.test(url);
};

const formatPhoneNumber = () => {
    let rawNumber = contactForm.value.phoneNumber.replace(/[^\d+]/g, "");
    if (rawNumber.startsWith("+")) {
        rawNumber = rawNumber.substring(1);
    }
    const formattedNumber = rawNumber.replace(/^(\d{3})(\d{0,4})(\d{0,5})$/, "+$1 $2 $3").trim();
    if (!/^\+\d{3} \d{4} \d{5}$/.test(formattedNumber)) {
        errors.value.phoneNumber = "Phone number must be in the format +XXX XXXX XXXXX";
    } else {
        delete errors.value.phoneNumber;
    }
    contactForm.value.phoneNumber = formattedNumber;
};

const resetForm = () => {
    contactForm.value = {
        image: "",
        phoneNumber: "",
        contactName: "",
        company: "",
        role: "",
        email: "",
        website: "",
        status: "",
    };
    errors.value = {};
};

const fileChosen = (event: Event) => {
    const target = event.target as HTMLInputElement;
    if (target.files?.[0]) {
        const reader = new FileReader();
        reader.onload = () => {
            contactForm.value.image = reader.result as string;
        };
        reader.readAsDataURL(target.files[0]);
    }
};

const submitForm = () => {
    if (validateForm()) {
        if (props.showFormModule) {
            addContact();
        } else {
            updateContact();
        }
    }
};

function closeModule() {
    errors.value = {};
    if (props.setFormModuleValue) props.setFormModuleValue(false)
    if (props.setEditProjectForm) props.setEditProjectForm(false)
}
const addContact = () => {
    const contactID = contacts.value.length + 24151
    contacts.value.unshift({ ...contactForm.value, contactID })
    resetForm()
    closeModule()
};

const updateContact = () => {
    // Update contact logic
    const contactIndex = contacts.value.findIndex(contact => contact.contactID === contactForm.value.contactID);
    if (contactIndex !== -1) {
        contacts.value.splice(contactIndex, 1, { ...contactForm.value }); // Remove the contact from the array
        closeModule()
    }
};

const statusOption = [
    { label: "Customer", value: "Customer" },
    { label: "Personal", value: "Personal" },
    { label: "Employee", value: "Employee" },
    { label: "Marketing", value: "Marketing" },
]
</script>
<template>
    <div>
        <!-- Modal for adding/editing contact -->
        <div id="contactCreateModal" class="modal" :class="{ 'd-block': showFormModule || showEditProjectForm }"
            v-show="showFormModule || showEditProjectForm">
            <div class="modal-wrap modal-center">
                <div class="p-2 modal-content">
                    <div
                        class="h-24 p-5 rounded-t bg-gradient-to-r from-primary-500/20 via-pink-500/20 to-green-500/20">
                    </div>
                    <div class="p-4">
                        <div class="-mt-16">
                            <label for="logo">
                                <div
                                    class="inline-flex items-center justify-center overflow-hidden bg-gray-100 border-2 border-white border-solid rounded-full cursor-pointer dark:border-dark-900 dark:bg-dark-850 size-24">
                                    <img v-if="contactForm.image" :src="contactForm.image"
                                        class="object-cover w-full h-full rounded-full" />
                                    <div v-else class="flex flex-col items-center text-gray-500 dark:text-dark-500">
                                        <Upload data-lucide="upload"></Upload>
                                    </div>
                                </div>
                            </label>
                            <div class="hidden mt-4">
                                <label class="block">
                                    <span class="sr-only">Choose profile photo</span>
                                    <input type="file" id="logo" @change="fileChosen"
                                        class="block w-full text-sm file:rounded-md focus:outline-0 text-slate-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100" />
                                </label>
                            </div>
                        </div>
                        <span v-if="errors.image" class="text-red-500">{{ errors.image }}</span>
                        <div class="grid grid-cols-12 gap-4 mt-5">
                            <!-- Full Name -->
                            <div class="col-span-12">
                                <label for="fullNameInput" class="form-label">Full Name</label>
                                <input type="text" id="fullNameInput" class="form-input" placeholder="Full name"
                                    v-model="contactForm.contactName"
                                    @input="validateField('contactName', contactForm.contactName, 'Full name is required.')" />
                                <span v-if="errors.contactName" class="text-red-500">{{ errors.contactName }}</span>
                            </div>

                            <!-- Company Name -->
                            <div class="col-span-12">
                                <label for="companyNameInput" class="form-label">Company Name</label>
                                <input type="text" id="companyNameInput" class="form-input" placeholder="Company name"
                                    v-model="contactForm.company"
                                    @input="validateField('company', contactForm.company, 'Company name is required.')" />
                                <span v-if="errors.company" class="text-red-500">{{ errors.company }}</span>
                            </div>

                            <!-- Role -->
                            <div class="col-span-12">
                                <label for="roleInput" class="form-label">Role</label>
                                <input type="text" id="roleInput" class="form-input" placeholder="Role"
                                    v-model="contactForm.role"
                                    @input="validateField('role', contactForm.role, 'Role is required.')" />
                                <span v-if="errors.role" class="text-red-500">{{ errors.role }}</span>
                            </div>

                            <!-- Email -->
                            <div class="col-span-12">
                                <label for="emailInput" class="form-label">Email</label>
                                <input type="email" id="emailInput" class="form-input" placeholder="support@example.com"
                                    v-model="contactForm.email" @input="validateEmailField" />
                                <span v-if="errors.email" class="text-red-500">{{ errors.email }}</span>
                            </div>

                            <!-- Phone Number -->
                            <div class="col-span-12">
                                <label for="phoneNumberInput" class="form-label">Phone Number</label>
                                <input type="tel" id="phoneNumberInput" class="form-input" placeholder="+(00) 0000 000"
                                    v-model="contactForm.phoneNumber" @input="formatPhoneNumber" />
                                <span v-if="errors.phoneNumber" class="text-red-500">{{ errors.phoneNumber }}</span>
                            </div>

                            <!-- Website -->
                            <div class="col-span-6">
                                <label for="websiteInput" class="form-label">Website</label>
                                <input type="url" id="websiteInput" class="form-input" placeholder="www.example.com"
                                    v-model="contactForm.website" @input="validateURLField" />
                                <span v-if="errors.website" class="text-red-500">{{ errors.website }}</span>
                            </div>

                            <!-- Status -->
                            <div class="col-span-6">
                                <label for="statusSelect" class="form-label">Status</label>
                                <select id="statusSelect" class="form-select" v-model="contactForm.status"
                                    @change="validateField('status', contactForm.status, 'Status is required.')">
                                    <option value="" disabled selected>Select Status</option>
                                    <template v-for="(option, index) in statusOption" :key="index">
                                        <option :value="option.value">{{ option.label }}</option>
                                    </template>
                                </select>
                                <span v-if="errors.status" class="text-red-500">{{ errors.status }}</span>
                            </div>

                            <!-- Submit/Close Buttons -->
                            <div class="flex items-center justify-end col-span-12 gap-2 mt-5">
                                <button type="button" class="btn btn-active-red" @click="closeModule"
                                    data-modal-close="contactCreateModal">
                                    <X data-lucide="x" class="inline-block size-4"></X> Close
                                </button>
                                <button type="button" class="btn btn-primary" @click="submitForm">
                                    <Plus data-lucide="plus" class="inline-block ltr:mr-1 rtl:ml-1 size-4"></Plus>
                                    <span>{{ showFormModule ? 'Add Contact' : 'Update Contact' }}</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="backdrop-overlay backdrop-blur-xs" id="backDropDiv" @click="closeModule"></div>
        </div>
    </div>
</template>