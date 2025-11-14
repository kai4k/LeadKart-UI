<script setup lang="ts">
import { Upload, X } from 'lucide-vue-next';
import { ref, watch } from 'vue';
import parentsData from './parents-details';
import type { Parent } from './parents-details';
const props = defineProps({
    showAddModule: Boolean,
    setAddModuleValue: Function,
    showEditModule: Boolean,
    setEditModuleValue: Function,
    editData: Object
})
const errors = ref<{ [key: string]: string }>({});
const parentsForm = ref<Parent | any>({
    id: "",
    address: '',
    email: '',
    gender: '',
    image: '',
    occupation: '',
    parentsName: '',
    phone: '',
    relation: '',
    studentID: '',
    studentName: '',
});

const fileChosen = (e: Event) => {
    const file = (e.target as HTMLInputElement).files?.[0];
    if (file) {
        parentsForm.value.image = URL.createObjectURL(file);
    }
};

watch(() => props.editData, (newData) => {
    if (newData) {
        parentsForm.value = { ...newData }
    }
    else {
        parentsForm.value = {}
    }

})

const validateField = (fieldName: string, value: string) => {
    if (!value) {
        errors.value[fieldName] = `${fieldName.replace(/([A-Z])/g, ' $1')} is required.`;
    } else {
        delete errors.value[fieldName];
    }
};

const validatePhone = () => {
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(parentsForm.value.phone)) {
        errors.value.phone = 'Phone number must be 10 digits and numeric.';
    } else {
        delete errors.value.phone;
    }
};

const validateEmailField = () => {
    if (!parentsForm.value.email) {
        errors.value.email = 'Email is required.';
    } else if (!validateEmail(parentsForm.value.email)) {
        errors.value.email = 'Invalid email format.';
    } else {
        delete errors.value.email;
    }
};

const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
};

const resetForm = () => {
    errors.value = {};
    parentsForm.value = {
        address: '',
        email: '',
        gender: '',
        image: '',
        occupation: '',
        parentsName: '',
        phone: '',
        relation: '',
        studentID: '',
        studentName: '',
    };
};

const submitForm = () => {
    if (validateForm()) {
        if (props.showAddModule) {
            addParents();
        } else {
            updateParents();
        }
        resetForm();
        closeModule()
    }
};

const validateForm = () => {
    validateEmailField();
    validateField('studentName', parentsForm.value.studentName);
    validateField('occupation', parentsForm.value.occupation);
    validateField('relation', parentsForm.value.relation);
    validateField('parentsName', parentsForm.value.parentsName);
    validatePhone();
    validateField('phone', parentsForm.value.phone);
    validateField('gender', parentsForm.value.gender);

    return Object.keys(errors.value).length === 0;
};

const addParents = () => {
    parentsData.value.unshift({ ...parentsForm.value, address: "Mexico" })
};

const updateParents = () => {
    // Example logic for updating a parent
    const temIndex = parentsData.value.findIndex((data) => data.id == parentsForm.value.id)
    const index = temIndex
    parentsData.value.splice(index, 1, { ...parentsForm.value })
};

function closeModule() {
    if (props.setAddModuleValue) props.setAddModuleValue(false);
    if (props.setEditModuleValue) props.setEditModuleValue(false);
}
</script>
<template>
    <div id="parentsCreateModal" v-if="showAddModule || showEditModule" class="modal">
        <div class="modal-wrap modal-center">
            <div class="p-2 modal-content">
                <div
                    class="h-24 p-5 rounded-t ltr:bg-gradient-to-r rtl:bg-gradient-to-l from-primary-200 via-pink-500/20 to-green-500/20">
                </div>
                <div class="p-4">
                    <div class="-mt-16">
                        <label for="logo">
                            <div
                                class="inline-flex items-center justify-center overflow-hidden bg-gray-100 border-2 border-white rounded-full cursor-pointer dark:border-dark-900 dark:bg-dark-850 size-24">
                                <img v-if="parentsForm.image" :src="parentsForm.image"
                                    class="object-cover w-full h-full rounded-full" />
                                <div v-else class="flex flex-col items-center text-gray-500 dark:text-dark-500">
                                    <Upload data-lucide="upload"></Upload>
                                </div>
                            </div>
                        </label>
                        <div class="hidden mt-4">
                            <label class="block">
                                <!-- @change="fileChosen" -->
                                <input type="file" @change="fileChosen" id="logo"
                                    class="block w-full text-sm file:rounded-md focus:outline-0 text-slate-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100" />
                            </label>
                        </div>
                    </div>
                    <div class="grid grid-cols-12 gap-4 mt-space">
                        <div class="col-span-12">
                            <label for="parentsInput" class="form-label">Parents Name</label>
                            <input type="text" id="parentsInput" class="form-input" placeholder="Parents Name"
                                v-model="parentsForm.parentsName"
                                @input="validateField('parentsName', parentsForm.parentsName)" />
                            <span v-if="errors.parentsName" class="text-red-500">{{ errors.parentsName }}</span>
                        </div>
                        <div class="col-span-12">
                            <label for="studentNameInput" class="form-label">Student Name</label>
                            <input type="text" id="studentNameInput" class="form-input" placeholder="Student name"
                                v-model="parentsForm.studentName"
                                @input="validateField('studentName', parentsForm.studentName)" />
                            <span v-if="errors.studentName" class="text-red-500">{{ errors.studentName }}</span>
                        </div>
                        <div class="col-span-6">
                            <label for="relationInput" class="form-label">Relation</label>
                            <input type="text" id="relationInput" class="form-input" placeholder="Relation"
                                v-model="parentsForm.relation"
                                @input="validateField('relation', parentsForm.relation)" />
                            <span v-if="errors.relation" class="text-red-500">{{ errors.relation }}</span>
                        </div>
                        <div class="col-span-6">
                            <label for="genderSelect" class="form-label">Gender</label>
                            <select id="genderSelect" class="form-select" v-model="parentsForm.gender"
                                @change="validateField('gender', parentsForm.gender)">
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                            <span v-if="errors.gender" class="text-red-500">{{ errors.gender }}</span>
                        </div>
                        <div class="col-span-12">
                            <label for="occupationInput" class="form-label">Occupation</label>
                            <input type="text" id="occupationInput" class="form-input" placeholder="Occupation"
                                v-model="parentsForm.occupation"
                                @input="validateField('occupation', parentsForm.occupation)" />
                            <span v-if="errors.occupation" class="text-red-500">{{ errors.occupation }}</span>
                        </div>
                        <div class="col-span-6">
                            <label for="emailInput" class="form-label">Email</label>
                            <input type="email" id="emailInput" class="form-input" placeholder="Enter your email"
                                v-model="parentsForm.email" @input="validateEmailField" />
                            <span v-if="errors.email" class="text-red-500">{{ errors.email }}</span>
                        </div>
                        <div class="col-span-6">
                            <label for="phonenumberInput" class="form-label">Phone Number</label>
                            <input type="tel" id="phonenumberInput" class="form-input"
                                placeholder="Enter your phone number" v-model="parentsForm.phone"
                                @input="validatePhone" />
                            <span v-if="errors.phone" class="text-red-500">{{ errors.phone }}</span>
                        </div>
                        <div class="flex items-center justify-end col-span-12 gap-2">
                            <button type="button" class="btn btn-active-red" @click="closeModule"
                                data-modal-close="parentsCreateModal">
                                <X data-lucide="x" class="inline-block size-4"></X> <span
                                    class="align-baseline">Close</span>
                            </button>
                            <button type="button" class="btn btn-primary" @click="submitForm">
                                {{ showAddModule ? 'Add Parents' : 'Update Parents' }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="backdrop-overlay backdrop-blur-xs" @click="closeModule"></div>
    </div>
</template>