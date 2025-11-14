<script setup lang="ts">
import { MoveLeft, MoveRight } from 'lucide-vue-next';
import { reactive } from 'vue';
const props = defineProps({
    goNextTag: Function
})
// Form Data for Guardian Details
const guardianForm = reactive({
    fatherName: '',
    motherName: '',
    otherRelativeName: '',
    mobileNumber: '',
    alternativeMobileNumber: '',
});

// Error Tracking
const errors = reactive<{ [key: string]: string }>({});

// Validation function for fields
const validateField = (fieldName: string, fieldValue: any, errorMessage: string) => {
    if (!fieldValue) {
        errors[fieldName] = errorMessage;
    } else {
        delete errors[fieldName];
    }
};

// Validate Guardian Form
const validateGuardianForm = (): boolean => {
    validateField('fatherName', guardianForm.fatherName, 'Father Name is required');
    validateField('motherName', guardianForm.motherName, 'Mother Name is required');
    validateField('otherRelativeName', guardianForm.otherRelativeName, 'Relative Name is required');
    validateField('mobileNumber', guardianForm.mobileNumber, 'Mobile Number is required');

    return Object.keys(errors).length === 0;
};

// Placeholder for the submit function (will be used to submit the form data)
const submitGuardianForm = () => {
    if (validateGuardianForm()) {
        // Proceed with form submission or next tab
        if (props.goNextTag) props.goNextTag(2)
    }
};

const previousPage = () => {
    if (props.goNextTag) props.goNextTag(1)
}
</script>
<template>
    <div>
        <form @submit.prevent="submitGuardianForm" id="guardianDetailsForm" ref="guardianDetailsForm">
            <div class="grid grid-cols-12 gap-space">
                <!-- Father Name -->
                <div class="col-span-12 sm:col-span-4">
                    <label for="fatherNameInput" class="form-label">Father Name</label>
                    <input type="text" id="fatherNameInput" class="form-input" placeholder="Enter your father name"
                        v-model="guardianForm.fatherName" :class="errors.fatherName ? 'border-red-500' : ''"
                        @blur="validateField('fatherName', guardianForm.fatherName, 'Father Name is required')" />
                    <span v-if="errors.fatherName" class="text-red-500">{{ errors.fatherName }}</span>
                </div>

                <!-- Mother Name -->
                <div class="col-span-12 sm:col-span-4">
                    <label for="motherNameInput" class="form-label">Mother Name</label>
                    <input type="text" id="motherNameInput" class="form-input" placeholder="Enter your mother name"
                        v-model="guardianForm.motherName" :class="errors.motherName ? 'border-red-500' : ''"
                        @blur="validateField('motherName', guardianForm.motherName, 'Mother Name is required')" />
                    <span v-if="errors.motherName" class="text-red-500">{{ errors.motherName }}</span>
                </div>

                <!-- Other Relative Name -->
                <div class="col-span-12 sm:col-span-4">
                    <label for="otherRelativeNameInput" class="form-label">Others Relative Name</label>
                    <input type="text" id="otherRelativeNameInput" class="form-input"
                        placeholder="Enter your relative name" v-model="guardianForm.otherRelativeName"
                        :class="errors.otherRelativeName ? 'border-red-500' : ''"
                        @blur="validateField('otherRelativeName', guardianForm.otherRelativeName, 'Relative Name is required')" />
                    <span v-if="errors.otherRelativeName" class="text-red-500">{{ errors.otherRelativeName }}</span>
                </div>

                <!-- Guardian Mobile Number -->
                <div class="col-span-12 sm:col-span-6">
                    <label for="gdmobileNumberInput" class="form-label">Mobile Number</label>
                    <input type="number" id="gdmobileNumberInput" class="form-input" placeholder="Enter your mobile number"
                        v-model="guardianForm.mobileNumber" :class="errors.mobileNumber ? 'border-red-500' : ''"
                        @blur="validateField('mobileNumber', guardianForm.mobileNumber, 'Mobile Number is required')" />
                    <span v-if="errors.mobileNumber" class="text-red-500">{{ errors.mobileNumber }}</span>
                </div>

                <!-- Alternative Guardian Mobile Number -->
                <div class="col-span-12 sm:col-span-6">
                    <label for="alternativegdMobileNumberInput" class="form-label">Alternative Mobile Number</label>
                    <input type="number" id="alternativegdMobileNumberInput" class="form-input"
                        placeholder="Enter your mobile number" v-model="guardianForm.alternativeMobileNumber" />
                </div>
            </div>

            <!-- Form Action Buttons -->
            <div class="flex flex-wrap items-center gap-2 mt-5 ltr:justify-end rtl:justify-start">
                <!-- @click="openTab = 1" -->
                <button type="button" class="btn btn-sub-gray" @click="previousPage">
                    <MoveLeft class="inline-block ltr:mr-1 rtl:ml-1 size-4"></MoveLeft> Previous
                </button>
                <!-- @click="openTab = 2" -->
                <button type="submit" class="btn btn-primary">
                    Save to Next
                    <MoveRight class="inline-block ltr:ml-1 rtl:mr-1 size-4"></MoveRight>
                </button>
            </div>
        </form>
    </div>
</template>