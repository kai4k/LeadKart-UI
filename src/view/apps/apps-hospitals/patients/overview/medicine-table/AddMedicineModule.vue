<script setup lang="ts">
import { X } from 'lucide-vue-next';
import { reactive, watch } from 'vue';
import flatPickr from 'vue-flatpickr-component';
// import 'flatpickr/dist/flatpickr.css';
import { medicineData } from './medicine-data';
const props = defineProps({
    moduleShow: Boolean,
    setModuleShowValue: Function,
    editModuleShow: Boolean,
    setEditModuleValue: Function,
    editDetails: Object,
})
// Define types for medicine form and error object
type MedicineForm = {
    medicineID: string;
    medicineName: string;
    dosage: string;
    frequency: string;
    startDate: string;
    endDate: string;
    prescribingDoctor: string;
    reasonCondition: string;
    notes: string;
};

type Errors = {
    [key in keyof MedicineForm]?: string;
};

let medicineForm = reactive<MedicineForm | any>({
    medicineName: '',
    dosage: '',
    frequency: '',
    startDate: '',
    endDate: '',
    prescribingDoctor: '',
    reasonCondition: '',
    notes: '',
});

watch(() => props.editDetails, (newData) => {
    medicineForm = { ...newData }
})

const errors = reactive<Errors>({});
function validateField(fieldName: keyof MedicineForm, fieldValue: string): boolean {
    let errorMessage = '';

    if (!fieldValue) {
        errorMessage = `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required.`;
    } else if (fieldName === 'dosage' && !/^(1000|[1-9][0-9]{0,2}|[1-9])mg$/.test(fieldValue)) {
        errorMessage = 'Dosage must be a number (0-1000) followed by "mg".';
    }

    errors[fieldName] = errorMessage;
    return !errorMessage; // Return true if no error
}

function validateForm(): boolean {
    let isValid = true;

    const fields: (keyof MedicineForm)[] = [
        'medicineName', 'dosage', 'frequency', 'reasonCondition',
        'prescribingDoctor', 'startDate', 'endDate', 'notes'
    ];

    fields.forEach(field => {
        const isFieldValid = validateField(field, medicineForm[field]);
        if (!isFieldValid) isValid = false; // If any field is invalid, mark the form as invalid
    });

    return isValid; // Return true if all fields are valid
}

function submitForm() {
    if (validateForm()) {
        if (props.moduleShow) {
            addNewData()
        } else {
            updateMedicine();
        }
        closeModal();
    }
}

function addNewData() {
    const date = new Date();
    const formattedDate = date.toISOString().split('T')[0];
    const time = date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    })
    const id = medicineData.value.length + 1;
    medicineData.value.unshift({ ...medicineForm, id, date: formattedDate, time })
}

function updateMedicine() {
    const index = medicineData.value.findIndex(medicine => medicine.id === medicineForm.id);
    if (index !== -1) {
        medicineData.value[index] = { ...medicineForm };
    }
}

function closeModal() {
    if (props.setModuleShowValue) props.setModuleShowValue(false)
    if (props.setEditModuleValue) props.setEditModuleValue(false)
}

function resetForm() {
    Object.assign(medicineForm, {
        medicineID: '',
        medicineName: '',
        dosage: '',
        frequency: '',
        startDate: '',
        endDate: '',
        prescribingDoctor: '',
        reasonCondition: '',
        notes: '',
    });
    Object.keys(errors).forEach(key => { errors[key as keyof Errors] = ''; });
}
</script>
<template>
    <div class="modal" v-if="moduleShow || editModuleShow">
        <div class="modal-wrap modal-center">
            <div class="modal-header">
                <h6 class="modal-title">{{ moduleShow ? 'Add Medicine' : 'Edit Medicine' }}</h6>
                <button @click="closeModal" class="link link-red">
                    <X class="size-5"></X>
                </button>
            </div>
            <div class="modal-content">
                <form @submit.prevent="submitForm">
                    <div class="grid grid-cols-12 gap-space">
                        <div class="col-span-12">
                            <label for="medicineNameInput" class="form-label">Medicine Name <span
                                    class="text-red-500">*</span></label>
                            <input type="text" id="medicineNameInput" class="form-input"
                                v-model="medicineForm.medicineName" placeholder="Enter medicine name"
                                @input="validateField('medicineName', medicineForm.medicineName)" />
                            <span v-if="errors.medicineName" class="text-red-500">{{ errors.medicineName }}</span>
                        </div>

                        <div class="col-span-6">
                            <label for="dosageInput" class="form-label">Dosage <span
                                    class="text-red-500">*</span></label>
                            <input type="text" id="dosageInput" class="form-input" v-model="medicineForm.dosage"
                                placeholder="0mg" @input="validateField('dosage', medicineForm.dosage)" />
                            <span v-if="errors.dosage" class="text-red-500">{{ errors.dosage }}</span>
                        </div>

                        <div class="col-span-6">
                            <label for="frequencyInput" class="form-label">Frequency <span
                                    class="text-red-500">*</span></label>
                            <input type="text" id="frequencyInput" class="form-input" v-model="medicineForm.frequency"
                                placeholder="Enter frequency"
                                @input="validateField('frequency', medicineForm.frequency)" />
                            <span v-if="errors.frequency" class="text-red-500">{{ errors.frequency }}</span>
                        </div>

                        <div class="col-span-6">
                            <label for="medicineStartDateInput" class="form-label">Start Date <span
                                    class="text-red-500">*</span></label>
                            <flat-pickr type="date" id="medicineStartDateInput" class="form-input"
                                v-model="medicineForm.startDate"
                                @input="validateField('startDate', medicineForm.startDate)" placeholder="Select date" />
                            <span v-if="errors.startDate" class="text-red-500">{{ errors.startDate }}</span>
                        </div>

                        <div class="col-span-6">
                            <label for="medicineEndDateInput" class="form-label">End Date <span
                                    class="text-red-500">*</span></label>
                            <flat-pickr type="date" id="medicineEndDateInput" class="form-input"
                                v-model="medicineForm.endDate" @input="validateField('endDate', medicineForm.endDate)"
                                placeholder="Select date" />
                            <span v-if="errors.endDate" class="text-red-500">{{ errors.endDate }}</span>
                        </div>

                        <div class="col-span-12">
                            <label for="prescribingDoctorNameInput" class="form-label">Prescribing Doctor <span
                                    class="text-red-500">*</span></label>
                            <input type="text" id="prescribingDoctorNameInput" class="form-input"
                                v-model="medicineForm.prescribingDoctor" placeholder="Enter prescribing doctor"
                                @input="validateField('prescribingDoctor', medicineForm.prescribingDoctor)" />
                            <span v-if="errors.prescribingDoctor" class="text-red-500">{{ errors.prescribingDoctor
                                }}</span>
                        </div>

                        <div class="col-span-12">
                            <label for="reasonConditionInput" class="form-label">Reason/Condition <span
                                    class="text-red-500">*</span></label>
                            <input type="text" id="reasonConditionInput" class="form-input"
                                v-model="medicineForm.reasonCondition" placeholder="Reason/Condition"
                                @input="validateField('reasonCondition', medicineForm.reasonCondition)" />
                            <span v-if="errors.reasonCondition" class="text-red-500">{{ errors.reasonCondition }}</span>
                        </div>

                        <div class="col-span-12">
                            <label for="textareaInput2" class="form-label">Notes</label>
                            <textarea id="textareaInput2" rows="2" class="h-auto form-input"
                                v-model="medicineForm.notes" @input="validateField('notes', medicineForm.notes)"
                                placeholder="Enter notes"></textarea>
                            <span v-if="errors.notes" class="text-red-500">{{ errors.notes }}</span>
                        </div>

                        <div class="col-span-12">
                            <div class="flex items-center justify-end gap-2">
                                <button type="button" @click="closeModal" class="btn btn-active-red">
                                    <X class="inline-block mr-1 size-4"></X><span class="align-baseline">Close</span>
                                </button>
                                <button type="submit" class="btn btn-primary">{{ moduleShow ? 'Add Medicine' :
                                    'Edit Medicine' }}</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="backdrop-overlay backdrop-blur-xs" @click="closeModal"></div>
    </div>
</template>
