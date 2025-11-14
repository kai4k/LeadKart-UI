<script setup lang="ts">
import { ref, onMounted, } from 'vue';
import { intCodes } from './country-code';
import flatPickr from 'vue-flatpickr-component';
const selectedDialCode = ref('');
const selectedFormat = ref('');
const selectedEmergencyDialCode = ref('');

// Form Data
const form = ref({
    firstName: '',
    middleName: '',
    lastName: '',
    dateOfBirth: '',
    age: '',
    gender: '',
    weight: '',
    height: '',
    bloodPressure: '',
    phoneNumber: '',
    phoneCountryCode: '',
    emergencyNumber: '',
    emergencyCountryCode: '',
    email: '',
    occupation: '',
    city: '',
    state: '',
    country: '',
    zipCode: '',
    familyDoctor: '',
    referringDoctor: '',
    assignedDoctor: '',
    pharmacyDoctor: '',
});

// Select placeholder formatting
const selectedPhoneFormat = ref('+1 (XXX) XXX-XXXX');
const selectedEmergencyFormat = ref('+1 (XXX) XXX-XXXX');

// Handle Form Submit
const onSubmit = () => {
};

// Reset the Form
const resetForm = () => {
    form.value = {
        firstName: '',
        middleName: '',
        lastName: '',
        dateOfBirth: '',
        age: '',
        gender: '',
        weight: '',
        height: '',
        bloodPressure: '',
        phoneNumber: '',
        phoneCountryCode: '',
        emergencyNumber: '',
        emergencyCountryCode: '',
        email: '',
        occupation: '',
        city: '',
        state: '',
        country: '',
        zipCode: '',
        familyDoctor: '',
        referringDoctor: '',
        assignedDoctor: '',
        pharmacyDoctor: '',
    };
};

// Handle phone number select change
const onSelectChangeHandler = () => {
    const selectedCountry = intCodes.value.find(country => country.dial_code === selectedDialCode.value);
    if (selectedCountry) {
        selectedFormat.value = selectedCountry.format;
        applyPhoneMask();
    }
};

// Handle emergency number select change
const onSelectEmergencyChangeHandler = () => {
    const selectedCountry = intCodes.value.find(country => country.dial_code === selectedEmergencyDialCode.value);
    if (selectedCountry) {
        selectedEmergencyFormat.value = selectedCountry.format;
        applyEmergencyMask();
    }
};

// Apply phone mask to the phone number input
const applyPhoneMask = () => {
};

// Apply emergency mask to the emergency number input
const applyEmergencyMask = () => {

};


// Initialize the component by setting default dial codes and formats
onMounted(() => {
    if (intCodes.value.length > 0) {
        selectedDialCode.value = intCodes.value[0].dial_code;
        selectedFormat.value = intCodes.value[0].format;
        selectedEmergencyDialCode.value = intCodes.value[0].dial_code;
        selectedEmergencyFormat.value = intCodes.value[0].format;
        applyPhoneMask();
        applyEmergencyMask();
    }
});
</script>
<template>
    <div class="card">
        <div class="card-header">
            <h6 class="card-title">Patient Personal Details</h6>
        </div>
        <div class="card-body">
            <form @submit.prevent="onSubmit">
                <div class="grid grid-cols-12 gap-space">
                    <!-- First Name -->
                    <div class="col-span-12 md:col-span-6 xl:col-span-4">
                        <label for="firstNameInput" class="form-label">First Name <span class="text-red-500">*</span></label>
                        <input v-model="form.firstName" type="text" id="firstNameInput" class="form-input" placeholder="Enter your first name" pattern="[A-Za-z ]+" title="Only letters and spaces allowed" required />
                    </div>

                    <!-- Middle Name -->
                    <div class="col-span-12 md:col-span-6 xl:col-span-4">
                        <label for="middleNameInput" class="form-label">Middle Name</label>
                        <input v-model="form.middleName" type="text" id="middleNameInput" class="form-input" placeholder="Enter your middle name" pattern="[A-Za-z ]+" title="Only letters and spaces allowed" />
                    </div>

                    <!-- Last Name -->
                    <div class="col-span-12 md:col-span-6 xl:col-span-4">
                        <label for="lastNameInput" class="form-label">Last Name <span class="text-red-500">*</span></label>
                        <input v-model="form.lastName" type="text" id="lastNameInput" class="form-input" placeholder="Enter your last name" pattern="[A-Za-z ]+" title="Only letters and spaces allowed" required />
                    </div>

                    <!-- Date of Birth -->
                    <div class="col-span-12 md:col-span-6 xl:col-span-4">
                        <label for="dateOfBirthInput" class="form-label">Date of Birth <span class="text-red-500">*</span></label>
                        <flat-pickr type="text" placeholder="Select Date" id="orderDateInput" class="form-input" v-model="form.dateOfBirth" />
                    </div>

                    <!-- Age -->
                    <div class="col-span-12 md:col-span-6 xl:col-span-4">
                        <label for="ageInput" class="form-label">Age <span class="text-red-500">*</span></label>
                        <input v-model="form.age" type="number" id="ageInput" class="form-input" placeholder="0" required />
                    </div>

                    <!-- Gender -->
                    <div class="col-span-12 md:col-span-6 xl:col-span-4">
                        <label for="genderSelect" class="form-label">Gender <span class="text-red-500">*</span></label>
                        <select v-model="form.gender" id="genderSelect" class="form-select" required>
                            <option value="" disabled>Select</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <!-- Weight -->
                    <div class="col-span-12 md:col-span-6 xl:col-span-4">
                        <label for="weightInput" class="form-label">Weight (KG) <span class="text-red-500">*</span></label>
                        <input v-model="form.weight" type="text" id="weightInput" class="form-input" placeholder="0 kg" required />
                    </div>

                    <!-- Height -->
                    <div class="col-span-12 md:col-span-6 xl:col-span-4">
                        <label for="heightInput" class="form-label">Height <span class="text-red-500">*</span></label>
                        <input v-model="form.height" type="text" id="heightInput" class="form-input" placeholder="0' 0'" required />
                    </div>

                    <!-- Blood Pressure -->
                    <div class="col-span-12 md:col-span-6 xl:col-span-4">
                        <label for="bloodPressureInput" class="form-label">Blood Pressure <span class="text-red-500">*</span></label>
                        <input v-model="form.bloodPressure" type="text" id="bloodPressureInput" class="form-input" placeholder="Blood pressure" required />
                    </div>

                    <!-- Phone Number -->
                    <div class="col-span-12 md:col-span-6">
                        <label for="phoneNumber" class="form-label">Phone Number <span class="text-red-500">*</span></label>
                        <div class="flex form-input">
                            <!-- Country Code Selector -->
                            <select v-model="selectedDialCode" @change="onSelectChangeHandler" class="bg-transparent cursor-pointer outline-hidden dark:bg-dark-900 ltr:pl-3 rtl:pr-3">
                                <option v-for="country in intCodes" :key="country.code" :value="country.dial_code">
                                    {{ country.name }}
                                </option>
                            </select>
                            <!-- Phone Number Input -->
                            <input v-model="form.phoneNumber" ref="phoneInput" type="text" class="w-full p-3 bg-transparent border-gray-200 outline-hidden ltr:ml-3 rtl:mr-3 ltr:border-l-2 dark:border-dark-800 rtl:border-r-2" :placeholder="selectedFormat" required />
                        </div>
                    </div>
                    <!-- Emergency Number -->
                    <div class="col-span-12 md:col-span-6">
                        <label for="emergencyNumber" class="form-label">Emergency Number <span class="text-red-500">*</span></label>
                        <div class="flex form-input">
                            <!-- Emergency Country Code Selector -->
                            <select v-model="selectedEmergencyDialCode" @change="onSelectEmergencyChangeHandler" class="bg-transparent cursor-pointer outline-hidden dark:bg-dark-900 ltr:pl-3 rtl:pr-3">
                                <option v-for="country in intCodes" :key="country.code" :value="country.dial_code">
                                    {{ country.name }}
                                </option>
                            </select>
                            <!-- Emergency Number Input -->
                            <input v-model="form.emergencyNumber" ref="emergencyInput" type="text" class="w-full p-3 bg-transparent border-gray-200 outline-hidden ltr:ml-3 rtl:mr-3 dark:border-dark-800 ltr:border-l-2 rtl:border-r-2" :placeholder="selectedEmergencyFormat" required />
                        </div>
                    </div>

                    <!-- Email -->
                    <div class="col-span-12 md:col-span-6 xl:col-span-4">
                        <label for="emailInput" class="form-label">Email <span class="text-red-500">*</span></label>
                        <input v-model="form.email" type="email" id="emailInput" class="form-input" placeholder="example@example.com" required />
                    </div>

                    <!-- Occupation -->
                    <div class="col-span-12 md:col-span-6 xl:col-span-4">
                        <label for="occupationInput" class="form-label">Occupation <span class="text-red-500">*</span></label>
                        <input v-model="form.occupation" type="text" id="occupationInput" class="form-input" placeholder="Enter your occupation" pattern="[A-Za-z ]+" title="Only letters and spaces allowed" required />
                    </div>

                    <!-- City -->
                    <div class="col-span-12 md:col-span-6 xl:col-span-4">
                        <label for="cityInput" class="form-label">City <span class="text-red-500">*</span></label>
                        <input v-model="form.city" type="text" id="cityInput" class="form-input" placeholder="Enter city name" pattern="[A-Za-z ]+" title="Only letters and spaces allowed" required />
                    </div>

                    <!-- State -->
                    <div class="col-span-12 md:col-span-6 xl:col-span-4">
                        <label for="stateInput" class="form-label">State Name <span class="text-red-500">*</span></label>
                        <input v-model="form.state" type="text" id="stateInput" class="form-input" placeholder="Enter state name" pattern="[A-Za-z ]+" title="Only letters and spaces allowed" required />
                    </div>

                    <!-- Country -->
                    <div class="col-span-12 md:col-span-6 xl:col-span-4">
                        <label for="countryInput" class="form-label">Country Name <span class="text-red-500">*</span></label>
                        <input v-model="form.country" type="text" id="countryInput" class="form-input" placeholder="Enter country name" pattern="[A-Za-z ]+" title="Only letters and spaces allowed" required />
                    </div>

                    <!-- Zip Code -->
                    <div class="col-span-12 md:col-span-6 xl:col-span-4">
                        <label for="zipCodeInput" class="form-label">Zip Code <span class="text-red-500">*</span></label>
                        <input v-model="form.zipCode" type="number" id="zipCodeInput" class="form-input" placeholder="000 000" required />
                    </div>

                    <!-- Doctor Fields -->
                    <div class="col-span-12 md:col-span-6 xl:col-span-3">
                        <label for="familyDoctorName" class="form-label">Family Doctor</label>
                        <input v-model="form.familyDoctor" type="text" id="familyDoctorName" class="form-input" placeholder="Enter doctor name" pattern="[A-Za-z ]+" title="Only letters and spaces allowed" />
                    </div>

                    <!-- Referring Doctor -->
                    <div class="col-span-12 md:col-span-6 xl:col-span-3">
                        <label for="referringDoctorName" class="form-label">Referring Doctor</label>
                        <input v-model="form.referringDoctor" type="text" id="referringDoctorName" class="form-input" placeholder="Referring doctor" pattern="[A-Za-z ]+" title="Only letters and spaces allowed" />
                    </div>

                    <!-- Assigned Doctor -->
                    <div class="col-span-12 md:col-span-6 xl:col-span-3">
                        <label for="assignedDoctorName" class="form-label">Assigned Doctor</label>
                        <input v-model="form.assignedDoctor" type="text" id="assignedDoctorName" class="form-input" placeholder="Assigned doctor" pattern="[A-Za-z ]+" title="Only letters and spaces allowed" />
                    </div>

                    <!-- Pharmacy Doctor -->
                    <div class="col-span-12 md:col-span-6 xl:col-span-3">
                        <label for="pharmacyDoctorName" class="form-label">Pharmacy Name</label>
                        <input v-model="form.pharmacyDoctor" type="text" id="pharmacyDoctorName" class="form-input" placeholder="Pharmacy Name" pattern="[A-Za-z ]+" title="Only letters and spaces allowed" />
                    </div>

                    <!-- Submit & Reset -->
                    <div class="col-span-12">
                        <div class="flex items-center justify-end gap-2">
                            <button type="submit" class="btn btn-primary">Submit Now</button>
                            <button type="reset" class="btn btn-sub-gray" @click="resetForm">Reset</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>