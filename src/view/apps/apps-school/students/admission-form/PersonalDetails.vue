<script setup lang="ts">
import { MoveLeft, MoveRight } from 'lucide-vue-next';
import { ref, reactive } from 'vue';
const props = defineProps({
    goNextTag: Function
    // openTab: Number
})
// Form data
const personalForm = reactive({
    firstName: '',
    middleName: '',
    lastName: '',
    age: '',
    gender: '',
    dateOfBirth: '',
    Phone: '',
    AlternativePhone: '',
    email: '',
    nationality: '',
    address: '',
    city: '',
    country: '',
    pinCode: '',
});

// Error tracking
const errors = reactive<{ [key: string]: string }>({});

// Validate a specific field
const validateField = (fieldName: string, fieldValue: any, errorMessage: string) => {
    if (!fieldValue) {
        errors[fieldName] = errorMessage;
    } else {
        delete errors[fieldName];
    }
};

// Validate entire form
const validateForm = (): boolean => {
    validateField('firstName', personalForm.firstName, 'First Name is required.');
    validateField('lastName', personalForm.lastName, 'Last Name is required.');
    validateField('age', personalForm.age, 'Age is required.');
    validateField('gender', personalForm.gender, 'Gender is required');
    validateField('dateOfBirth', personalForm.dateOfBirth, 'Date of Birth is required');
    validateField('Phone', personalForm.Phone, 'Mobile Number is required');
    validateField('email', personalForm.email, 'Email is required');
    validateField('nationality', personalForm.nationality, 'Nationality is required');
    validateField('address', personalForm.address, 'Address is required');

    return Object.keys(errors).length === 0;
};

// Form submission
const submitForm = () => {
    if (validateForm()) {
        // Proceed to the next tab or submit the form
        if (props.goNextTag) props.goNextTag(2)
    }
};
</script>
<template>
    <div x-show="openTab === 1">
        <form @submit.prevent="submitForm" id="personalDetailsForm" ref="personalDetailsForm">
            <h6 class="mb-3">Personal Details</h6>
            <div class="grid grid-cols-12 gap-space">
                <div class="col-span-12 sm:col-span-6 2xl:col-span-4">
                    <label for="firstNameInput" class="form-label">First Name</label>
                    <input type="text" id="firstNameInput" class="form-input" placeholder="Enter your first name"
                        v-model="personalForm.firstName" :class="errors.firstName ? 'border-red-500' : ''"
                        @blur="validateField('firstName', personalForm.firstName, 'First Name is required.')" />
                    <span v-if="errors.firstName" class="text-red-500">{{ errors.firstName }}</span>
                </div>

                <div class="col-span-12 sm:col-span-6 2xl:col-span-4">
                    <label for="middleNameInput" class="form-label">Middle Name</label>
                    <input type="text" id="middleNameInput" class="form-input" placeholder="Enter your middle name"
                        v-model="personalForm.middleName" />
                </div>

                <div class="col-span-12 sm:col-span-6 2xl:col-span-4">
                    <label for="lastNameInput" class="form-label">Last Name</label>
                    <input type="text" id="lastNameInput" class="form-input" placeholder="Enter your last name"
                        v-model="personalForm.lastName" :class="errors.lastName ? 'border-red-500' : ''"
                        @blur="validateField('lastName', personalForm.lastName, 'Last Name is required.')" />
                    <span v-if="errors.lastName" class="text-red-500">{{ errors.lastName }}</span>
                </div>

                <!-- Gender input with validation -->
                <div class="col-span-12 sm:col-span-6 2xl:col-span-4">
                    <label for="genderSelect" class="form-label">Gender</label>
                    <select id="genderSelect" class="form-select" v-model="personalForm.gender"
                        :class="errors.gender ? 'border-red-500' : ''"
                        @blur="validateField('gender', personalForm.gender, 'Gender is required')">
                        <option value="" disabled>Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                    <span v-if="errors.gender" class="text-red-500">{{ errors.gender }}</span>
                </div>

                <!-- Other input fields like age, dateOfBirth, etc. -->
                <div class="col-span-12 sm:col-span-6 2xl:col-span-4">
                    <label for="ageInput" class="form-label">Age</label>
                    <input type="number" id="ageInput" class="form-input" placeholder="Enter your age"
                        v-model="personalForm.age" :class="errors.age ? 'border-red-500' : ''"
                        @blur="validateField('age', personalForm.age, 'Age is required.')" />
                    <span v-if="errors.age" class="text-red-500">{{ errors.age }}</span>
                </div>

                <div class="col-span-12 sm:col-span-6 2xl:col-span-4">
                    <label for="dateOfBirthInput" class="form-label">Date of Birth</label>
                    <input type="text" id="dateOfBirthInput" class="form-input" placeholder="Select date"
                        v-model="personalForm.dateOfBirth" :class="errors.dateOfBirth ? 'border-red-500' : ''"
                        @blur="validateField('dateOfBirth', personalForm.dateOfBirth, 'Date of Birth is required.')" />
                    <span v-if="errors.dateOfBirth" class="text-red-500">{{ errors.dateOfBirth }}</span>
                </div>
            </div>

            <h6 class="mt-6 mb-3">Contact Details</h6>
            <div class="grid grid-cols-12 gap-space">
                <div class="col-span-12 md:col-span-6">
                    <label for="mobileNumberInput" class="form-label">Mobile Number</label>
                    <input type="number" id="mobileNumberInput" class="form-input"
                        placeholder="Enter your mobile number" v-model="personalForm.Phone"
                        :class="errors.Phone ? 'border-red-500' : ''"
                        @blur="validateField('Phone', personalForm.Phone, 'Mobile Number is required.')" />
                    <span v-if="errors.Phone" class="text-red-500">{{ errors.Phone }}</span>
                </div>
                <div class="col-span-12 md:col-span-6">
                    <label for="mobileNumberInput" class="form-label">Alternative Mobile Number</label>
                    <input type="number" id="mobileNumberInput" class="form-input"
                        placeholder="Enter your mobile number" v-model="personalForm.AlternativePhone"
                        :class="errors.AlternativePhone ? 'border-red-500' : ''"
                        @blur="validateField('Phone', personalForm.Phone, 'Mobile Number is required.')" />
                    <span v-if="errors.AlternativePhone" class="text-red-500">{{ errors.Phone }}</span>
                </div>

                <div class="col-span-12 md:col-span-6">
                    <label for="emailIDInput" class="form-label">Email ID</label>
                    <input type="email" id="emailIDInput" class="form-input" placeholder="example@example.com"
                        v-model="personalForm.email" :class="errors.email ? 'border-red-500' : ''"
                        @blur="validateField('email', personalForm.email, 'Email is required.')" />
                    <span v-if="errors.email" class="text-red-500">{{ errors.email }}</span>
                </div>

                <div class="col-span-12 md:col-span-6">
                    <label for="nationalityInput" class="form-label">Nationality</label>
                    <input type="text" id="nationalityInput" class="form-input" placeholder="Enter your nationality"
                        v-model="personalForm.nationality" :class="errors.nationality ? 'border-red-500' : ''"
                        @blur="validateField('nationality', personalForm.nationality, 'Nationality is required.')" />
                    <span v-if="errors.nationality" class="text-red-500">{{ errors.nationality }}</span>
                </div>

                <div class="col-span-12">
                    <label for="addressInput" class="form-label">Permanent Address</label>
                    <input type="text" id="addressInput" class="form-input" placeholder="Enter your address"
                        v-model="personalForm.address" :class="errors.address ? 'border-red-500' : ''"
                        @blur="validateField('address', personalForm.address, 'Address is required.')" />
                    <span v-if="errors.address" class="text-red-500">{{ errors.address }}</span>
                </div>
                <div class="col-span-12 md:col-span-4">
                    <label for="ageInput" class="form-label">City</label>
                    <input type="text" id="ageInput" class="form-input" placeholder="Enter your city"
                        v-model="personalForm.city" :class="errors.city ? 'border-red-500' : ''"
                        @blur="validateField('city', personalForm.city, 'City is required.')" />
                    <span v-if="errors.city" class="text-red-500">{{ errors.city }}</span>
                </div>
                <div class="col-span-12 md:col-span-4">
                    <label for="ageInput" class="form-label">Country</label>
                    <input type="text" id="ageInput" class="form-input" placeholder="Enter your country"
                        v-model="personalForm.country" :class="errors.country ? 'border-red-500' : ''"
                        @blur="validateField('country', personalForm.country, 'Country is required.')" />
                    <span v-if="errors.country" class="text-red-500">{{ errors.country }}</span>
                </div>
                <div class="col-span-12 md:col-span-4">
                    <label for="ageInput" class="form-label">Pin Code</label>
                    <input type="number" id="ageInput" class="form-input" placeholder="Enter your pincode"
                        v-model="personalForm.pinCode" :class="errors.pinCode ? 'border-red-500' : ''"
                        @blur="validateField('pinCode', personalForm.pinCode, 'pinCode is required.')" />
                    <span v-if="errors.pinCode" class="text-red-500">{{ errors.pinCode }}</span>
                </div>
            </div>
            <!-- button -->
            <div class="flex flex-wrap items-center gap-2 mt-5 ltr:justify-end rtl:justify-start">
                <!-- openTab = 2 -->
                <button type="button" class="btn btn-primary" @click="submitForm">
                    Save to Next
                    <MoveRight class="ltr:inline-block rtl:hidden ltr:ml-1 rtl:mr-1 size-4"></MoveRight>
                    <MoveLeft class="ltr:hidden rtl:inline-block ltr:ml-1 rtl:mr-1 size-4"></MoveLeft>
                </button>
            </div>
        </form>
    </div>
</template>