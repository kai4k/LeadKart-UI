<script setup lang="ts">
import { Plus, X } from 'lucide-vue-next';
import { holidayData, type HolidayForm } from './holiday-list-data';
import flatPickr from 'vue-flatpickr-component';
// import 'flatpickr/dist/flatpickr.css';

import { ref, watch } from 'vue';
const props = defineProps({
    moduleShow: Boolean,
    setModuleVisibleValue: Function,
    showDeleteModule: Function,
    showEditModule: Boolean,
    setEditModuleVisibleValue: Function,
    editData: Object
})

const errors = ref<Record<string, string>>({});
const holidayForm = ref<HolidayForm>({
    name: '',
    date: '',
    day: ''
});

watch(() => props.editData, (newData) => {
    if (newData) {
        holidayForm.value = { ...newData } as HolidayForm
    }
})

// Method to handle modal visibility
const handleModal = (modal: 'showAddHolidayForm' | 'showEditHolidayForm') => {
    if (modal === 'showAddHolidayForm') {
        if (props.setModuleVisibleValue) props.setModuleVisibleValue(true)
        if (props.setEditModuleVisibleValue) props.setEditModuleVisibleValue(false)
        resetForm();
    } else if (modal === 'showEditHolidayForm') {
        if (props.setEditModuleVisibleValue) props.setEditModuleVisibleValue(true)
        if (props.setModuleVisibleValue) props.setModuleVisibleValue(false)
        resetForm();
    } else {
        if (props.setModuleVisibleValue) props.setModuleVisibleValue(false)
        if (props.setEditModuleVisibleValue) props.setEditModuleVisibleValue(false)
    }
};

// Validate the form fields
const validateField = (fieldName: string, fieldValue: string, errorMessage: string) => {
    if (!fieldValue) {
        errors.value[fieldName] = errorMessage;
    } else {
        delete errors.value[fieldName];
    }
};

// Form validation
const validateForm = () => {
    errors.value = {};
    validateField('name', holidayForm.value.name, 'Holiday name is required.');
    validateField('date', holidayForm.value.date, 'Date is required.');
    validateField('day', holidayForm.value.day, 'Day is required.');

    return Object.keys(errors.value).length === 0;
};

// Submit form data
const submitForm = () => {
    if (validateForm()) {
        if (props.moduleShow) {
            addHoliday();

        } else {
            updateHoliday();
        }
        resetForm();
        closeModal();
    }
};

// Close modal
const closeModal = () => {
    errors.value = {};
    if (props.setModuleVisibleValue) props.setModuleVisibleValue(false)
    if (props.setEditModuleVisibleValue) props.setEditModuleVisibleValue(false)
};

// Add new holiday
const addHoliday = () => {
    const newHolidayID = `PEH-${14521 + (holidayData.value.length + 1)}`;
    holidayData.value.push({ ...holidayForm.value, holidayID: newHolidayID });
    if (props.setModuleVisibleValue) props.setModuleVisibleValue(false)
};


// Update existing holiday
const updateHoliday = () => {
    const index = holidayData.value.findIndex(holiday => holiday.id === holidayForm.value.id);

    if (index !== -1) {
        holidayData.value[index] = { ...holidayForm.value };
    }
    if (props.setEditModuleVisibleValue) props.setEditModuleVisibleValue(false)
    if (props.setModuleVisibleValue) props.setModuleVisibleValue(false)
};

// Reset form
const resetForm = () => {
    errors.value = {};
    holidayForm.value = { name: '', date: '', day: '' };
};

</script>
<template>
    <div id="addHolidayModal" class="modal" :class="{ 'd-block': moduleShow || showEditModule }"
        v-show="moduleShow || showEditModule">
        <div class="modal-wrap modal-center">
            <div class="modal-header">
                <h6 class="modal-title">{{ moduleShow ? 'Add Holiday' : 'Edit Holiday' }}</h6>
                <button @click="closeModal" class="link link-red">
                    <X class="size-5"></X>
                </button>
            </div>
            <div class="modal-content">
                <form @submit.prevent="submitForm">
                    <div class="grid grid-cols-12 gap-space">
                        <div class="col-span-12">
                            <label for="holidayInput" class="form-label">Holiday <span
                                    class="text-red-500">*</span></label>
                            <input type="text" id="holidayInput" class="form-input" placeholder="Enter holiday name"
                                v-model="holidayForm.name"
                                @input="validateField('name', holidayForm.name, 'Holiday name is required.')" />
                            <span v-if="errors.name" class="text-red-500">{{ errors.name }}</span>
                        </div>
                        <div class="col-span-12">
                            <label for="dateInput" class="form-label">Date <span class="text-red-500">*</span></label>
                            <flat-pickr type="text" id="dateInput" class="form-input" placeholder="Select date"
                                v-model="holidayForm.date"
                                @input="validateField('date', holidayForm.date, 'Date is required.')" />
                            <span v-if="errors.date" class="text-red-500">{{ errors.date }}</span>
                        </div>
                        <div class="col-span-12">
                            <label for="daysInput" class="form-label">Day Name <span
                                    class="text-red-500">*</span></label>
                            <input type="text" id="daysInput" class="form-input" placeholder="Enter day name"
                                v-model="holidayForm.day"
                                @input="validateField('day', holidayForm.day, 'Day is required.')" />
                            <span v-if="errors.day" class="text-red-500">{{ errors.day }}</span>
                        </div>
                        <div class="col-span-12">
                            <div class="flex items-center justify-end gap-2">
                                <button type="button" class="btn btn-active-red" @click="closeModal">
                                    <X class="inline-block size-4"></X> <span class="align-baseline">Close</span>
                                </button>
                                <button type="submit" class="btn btn-primary">
                                    <Plus class="inline-block mr-1 size-4"></Plus>
                                    {{ moduleShow ? 'Add Holiday' : 'Update Holiday' }}
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="backdrop-overlay backdrop-blur-xs" @click="closeModal"></div>
    </div>
</template>