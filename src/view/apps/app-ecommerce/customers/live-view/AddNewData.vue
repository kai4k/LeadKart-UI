<script setup lang="ts">
import { reactive, defineProps, watch } from 'vue';
import { customers, } from './customer-data';
// import 
const props = defineProps({
    setShowAddCustomerForm: {
        type: Function,
    },
    showAddCustomerForm: {
        type: Boolean,
    },
    showEditCustomerForm: Boolean,
    setEditCustomerForm: Function,
    getData: Object
})


interface CustomerType {
    image: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    gender: string;
    subscriber: string;
    location: string;
    status: string;
    customersID?: number | string;
    customersName?: string;
}


let customerForm = reactive<CustomerType>({
    image: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    gender: '',
    subscriber: '',
    location: '',
    status: '',
});

watch(() => props.getData, (newData) => {
    if (newData) {
        const nameParts = newData.customersName.split(" ");
        const lastName = nameParts.pop()!;
        const firstName = nameParts.join(" ")
        customerForm = { ...newData, firstName, lastName } as CustomerType
    }
    else {
        resetForm()
    }
})
let errors = reactive<any>({
    image: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    gender: '',
    subscriber: '',
    location: '',
    status: '',
});

const fileChosen = (event: any) => {
    const file = event.target.files[0];
    if (file) {
        customerForm.image = URL.createObjectURL(file);
    }
};

const validateField = (field: string, value: number | string, errorMessage: string) => {
    if (!value) {
        errors[field] = errorMessage;
    } else {
        delete errors[field];
    }
};

const validateEmailField = () => {
    if (!customerForm.email) {
        errors.email = 'Email is required.';
    } else if (!validateEmail(customerForm.email)) {
        errors.email = 'Invalid email format.';
    } else {
        delete errors.email;
    }
};

const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
};

const validatePhone = () => {
    const phoneWithoutPlus = customerForm.phoneNumber.replace('+', ''); // Remove '+' if present
    const phoneLength = phoneWithoutPlus.length;
    if (customerForm.phoneNumber === '') {
        errors.phone = 'Phone number is required.';
    } else if (phoneLength !== 10) {
        errors.phone = 'Phone number must be digits';
    } else if (!/^\+?\d{10}$/.test(customerForm.phoneNumber)) { // Allow 10 digits with optional '+' at the start
        errors.phone = 'Invalid phone number format.';
    } else {
        delete errors.phone;
    }
};


const validateForm = () => {
    errors.image = !customerForm.image ? 'Image is required.' : '';
    errors.firstName = !customerForm.firstName ? 'Full name is required.' : '';
    errors.lastName = !customerForm.lastName ? 'Last name is required.' : '';
    errors.email = !customerForm.email ? 'Email is required.' : '';
    errors.phoneNumber = !customerForm.phoneNumber ? 'phoneNumber is required.' : '';
    errors.gender = !customerForm.gender ? 'gender is required.' : '';
    errors.subscriber = !customerForm.subscriber ? 'subscriber is required.' : '';
    errors.location = !customerForm.location ? 'location is required.' : '';
    errors.status = !customerForm.status ? 'status is required.' : '';

    // Return whether the form is valid
    return Object.values(errors).every((error) => !error);
};


const submitForm = () => {
    if (validateForm()) {
        if (props.showAddCustomerForm) {
            addCustomer()
        } else {
            updateCustomer()
        }
        document.body.classList.toggle('overflow-hidden', false);
        resetForm();
        errors = null; // Reset errors
        closeModal()
    }
};

const addCustomer = () => {
    const customersID = customers.value.length + 24151
    const customersName = customerForm.firstName + ' ' + customerForm.lastName;
    customers.value.unshift({ ...customerForm, customersID, customersName })
};

const updateCustomer = () => {
    const findIndex = customers.value.findIndex(data => data.customersID == customerForm.customersID)
    const customersName = `${customerForm.firstName}  ${customerForm.lastName}`;
    customers.value.splice(findIndex, 1, { ...customerForm, customersName });
};

const resetForm = () => {
    customerForm.firstName = '';
    customerForm.lastName = '';
    customerForm.email = '';
    customerForm.phoneNumber = '';
    customerForm.gender = '';
    customerForm.subscriber = '';
    customerForm.location = '';
    customerForm.status = '';
    customerForm.image = '';
};


const closeModal = () => {
    if (props.setShowAddCustomerForm) props.setShowAddCustomerForm(false);
    if (props.setEditCustomerForm) props.setEditCustomerForm(false)
};

const subscriberSelectOptions = [
    { label: "Yes", value: "Yes" },
    { label: "No", value: "No" },
]
const statusSelectOption = [
    { label: "Active", value: "Active" },
    { label: "In Active", value: "Inactive" },
]
</script>
<template>
    <div v-if="showAddCustomerForm || showEditCustomerForm" class="modal ">
        <div class="modal-wrap modal-center">
            <div class="p-0 modal-content">
                <div class="h-20 bg-gray-100 rounded-t-md dark:bg-dark-850"></div>
                <div class="modal-content">
                    <div class="-mt-16">
                        <label for="logo">
                            <div class="inline-flex items-center justify-center overflow-hidden bg-gray-100 border border-gray-200 rounded-full cursor-pointer dark:bg-dark-850 dark:border-dark-800 size-24">
                                <img v-if="customerForm.image" :src="customerForm.image" class="object-cover w-full h-full rounded-full" />
                                <div v-else class="flex flex-col items-center text-gray-500 dark:text-dark-500">
                                    <i class="ri-upload-line"></i>
                                </div>
                            </div>
                        </label>
                        <div class="hidden mt-4">
                            <label class="block">
                                <span class="sr-only">Choose profile photo</span>
                                <input type="file" name="logo" id="logo" @change="fileChosen" class="block w-full text-sm file:rounded-md focus:outline-0 text-slate-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100" />
                            </label>
                        </div>
                        <span v-if="errors.image" class="text-red-500" v-text="errors.image"></span>
                    </div>

                    <div class="mt-5">
                        <div class="grid grid-cols-12 gap-5">
                            <div class="col-span-6">
                                <label for="firstNameInput" class="form-label">First Name <span class="text-red-500">*</span></label>
                                <input type="text" id="firstNameInput" class="form-input" placeholder="Enter your first name" v-model="customerForm.firstName" @input="validateField('firstName', customerForm.firstName, 'First name is required.')" />
                                <span v-if="errors.firstName" class="text-red-500" v-text="errors.firstName"></span>
                            </div>

                            <div class="col-span-6">
                                <label for="lastNameInput" class="form-label">Last Name <span class="text-red-500">*</span></label>
                                <input type="text" id="lastNameInput" class="form-input" placeholder="Enter your last name" v-model="customerForm.lastName" @input="validateField('lastName', customerForm.lastName, 'Last name is required.')" />
                                <span v-if="errors.lastName" class="text-red-500" v-text="errors.lastName"></span>
                            </div>

                            <div class="col-span-12">
                                <label for="emailInput" class="form-label">Email <span class="text-red-500">*</span></label>
                                <input type="email" id="emailInput" class="form-input" placeholder="Enter your email" v-model="customerForm.email" @input="validateEmailField" />
                                <span v-if="errors.email" class="text-red-500" v-text="errors.email"></span>
                            </div>

                            <div class="col-span-12">
                                <label for="phoneNumberInput" class="form-label">Phone Number <span class="text-red-500">*</span></label>
                                <input type="text" id="phoneNumberInput" class="form-input" placeholder="000 000 0000" v-model="customerForm.phoneNumber" @input="validatePhone" />
                                <span v-if="errors.phoneNumber" class="text-red-500" v-text="errors.phoneNumber"></span>
                            </div>

                            <div class="col-span-6">
                                <label for="genderInput" class="form-label">Gender <span class="text-red-500">*</span></label>
                                <div class="flex items-center gap-3">
                                    <div class="input-radio-group">
                                        <input id="maleRadio" name="gender" class="input-radio input-radio-primary" type="radio" value="Male" v-model="customerForm.gender" @change="validateField('gender', customerForm.gender, 'Gender is required.')" />
                                        <label for="maleRadio" class="input-radio-label">Male</label>
                                    </div>
                                    <div class="input-radio-group">
                                        <input id="femaleRadio" name="gender" class="input-radio input-radio-primary" type="radio" value="Female" v-model="customerForm.gender" @change="validateField('gender', customerForm.gender, 'Gender is required.')" />
                                        <label for="femaleRadio" class="input-radio-label">Female</label>
                                    </div>
                                </div>
                                <span v-if="errors.gender" class="text-red-500" v-text="errors.gender"></span>
                            </div>

                            <div class="col-span-6">
                                <label for="subscriberSelect" class="form-label">Subscriber <span class="text-red-500">*</span></label>

                                <select name="" id="subscriberSelect" class="form-select" v-model="customerForm.subscriber" @change="validateField('subscriber', customerForm.subscriber, 'Subscriber is required.')">
                                    <template v-for="(option, index) in subscriberSelectOptions" :key="index">
                                        <option :value="option.value">{{ option.label }}</option>
                                    </template>
                                </select>
                                <span v-if="errors.subscriber" class="text-red-500" v-text="errors.subscriber"></span>
                            </div>

                            <div class="col-span-6">
                                <label for="locationInput" class="form-label">Location <span class="text-red-500">*</span></label>
                                <input type="text" id="locationInput" class="form-input" placeholder="Location" v-model="customerForm.location" @input="validateField('location', customerForm.location, 'Location is required.')" />
                                <span v-if="errors.location" class="text-red-500" v-text="errors.location"></span>
                            </div>

                            <div class="col-span-6">
                                <label for="statusSelect" class="form-label">Status <span class="text-red-500">*</span></label>

                                <select name="" id="statusSelect" class="form-select" v-model="customerForm.status">
                                    <template v-for="(option, index) in statusSelectOption" :key="index">
                                        <option :value="option.value">{{ option.label }}</option>
                                    </template>
                                </select>
                                <!-- Implement select dropdown logic here -->
                                <span v-if="errors.status" class="text-red-500" v-text="errors.status"></span>
                            </div>

                            <div class="col-span-12">
                                <div class="flex justify-end gap-2">
                                    <button type="button" class="btn btn-sub-gray" @click="closeModal">Cancel</button>
                                    <button class="btn btn-primary" @click="submitForm">{{ showAddCustomerForm ?
                                        'Add Customer' : 'Update Customer' }}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="backdrop-overlay backdrop-blur-xs" id="backDropDiv" @click="closeModal"></div>
    </div>
</template>