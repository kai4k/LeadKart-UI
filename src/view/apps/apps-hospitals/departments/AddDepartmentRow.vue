<script setup lang="ts">
import { Plus, Upload, X } from "lucide-vue-next";
import { reactive, ref, watch } from "vue";
import { departmentData } from "./department-data";

const props = defineProps({
    moduleShow: Boolean,
    setShowModuleValue: Function,
    showEditModule: Boolean,
    setEditModuleValue: Function,
    editFunction: Function,
    editData: Object
})
// Define department form structure and validation errors
let departmentForm = ref<any>({
    departmentID: "",
    departmentName: "",
    doctor: "",
    image: "",
    headOfDepartment: "",
    totalEmployee: "",
    status: "",
    avatarText: "",
});

watch(() => props.editData, (newData) => {
    if (newData) {
        departmentForm.value = { ...newData }
    }
    else {
        departmentForm.value = {}
    }
})

const errors = reactive<{ [key: string]: string }>({});

// Form fields mapping
const formFields = {
    departmentName: "Department Name",
    doctor: "Doctor",
    totalEmployee: "Total Employee",
    headOfDepartment: "Head of Dept.",
    status: "Status",
};

const fileChosen = (e: Event) => {
    const file = (e.target as HTMLInputElement).files?.[0];
    if (file) {
        departmentForm.value.image = URL.createObjectURL(file);
    }
};
// Validation functions
const validateField = (fieldName: string, fieldValue: any, errorMessage: string) => {
    if (!fieldValue) {
        errors[fieldName] = errorMessage;
    } else {
        delete errors[fieldName];
    }
};

const validateForm = (): boolean => {
    Object.entries(formFields).forEach(([field, label]) =>
        validateField(field, departmentForm.value[field], `${label} is required.`)
    );
    return Object.keys(errors).length === 0;
};

// Modal and form handling
const resetForm = () => {
    Object.keys(departmentForm).forEach((key) => (departmentForm.value[key] = ""));
};

const closeModal = () => {
    if (props.setShowModuleValue) props.setShowModuleValue(false)
    if (props.setEditModuleValue) props.setEditModuleValue(false)
    resetForm();
};

const submitForm = () => {
    if (!validateForm()) return;
    if (props.moduleShow) {
        departmentForm.value.departmentID = `PED-${departmentData.value.length + 1}`;
        departmentData.value.unshift({ ...departmentForm.value });
    } else if (props.showEditModule) {
        const index = departmentData.value.findIndex((d) => d.departmentID === departmentForm.value.departmentID);
        departmentData.value.splice(index, 1, { ...departmentForm.value })

    }
    closeModal();
};
</script>
<template>
    <div id="addDepartmentModal" class="modal" :class="{ ' d-block': moduleShow || showEditModule }" v-show="moduleShow || showEditModule">
        <div class="modal-wrap modal-center">
            <div class="p-2 modal-content">
                <div class="h-24 p-5 rounded-t bg-gradient-to-r from-primary-500/20 via-pink-500/20 to-green-500/20">
                </div>
                <div class="p-4">
                    <div class="-mt-16">
                        <label for="logo">
                            <div class="inline-flex items-center justify-center overflow-hidden bg-gray-100 border-2 border-white rounded-full cursor-pointer dark:border-dark-900 dark:bg-dark-850 size-24">
                                <img v-if="departmentForm.image" :src="departmentForm.image" class="object-cover w-full h-full rounded-full" />
                                <div v-else class="flex flex-col items-center text-gray-500 dark:text-dark-500">
                                    <Upload data-lucide="upload"></Upload>
                                </div>
                            </div>
                        </label>
                        <div class="hidden mt-4">
                            <input type="file" @change="fileChosen" name="logo" id="logo" class="block w-full text-sm file:rounded-md focus:outline-0 text-slate-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100" />
                        </div>
                    </div>
                    <div class="grid grid-cols-12 gap-4 mt-4">
                        <div class="col-span-12" v-for="(label, field) in formFields" :key="field">
                            <label :for="`${field}Input`" class="form-label">{{ label }}</label>
                            <input v-if="field !== 'status'" :type="field === 'totalEmployee' ? 'number' : 'text'" :id="`${field}Input`" class="form-input" :placeholder="`Enter ${label}`" v-model="departmentForm[field]" @input="validateField(field, departmentForm[field], `${label} is required.`)" />
                            <select v-else id="statusSelect" class="form-select" v-model="departmentForm.status" @change="validateField('status', departmentForm.status, 'Status is required.')">
                                <option value="" disabled>Select Status</option>
                                <option value="Active">Active</option>
                                <option value="Unactive">Un Active</option>
                            </select>
                            <span v-if="errors[field]" class="text-red-500">{{ errors[field] }}</span>
                        </div>
                    </div>
                    <div class="flex items-center justify-end gap-2 mt-5">
                        <button type="button" class="btn btn-active-red" @click="closeModal">
                            <X class="inline-block size-4"></X> Close
                        </button>
                        <button type="button" class="btn btn-primary" @click="submitForm">
                            <Plus class="inline-block mr-1 size-4"></Plus>
                            {{ moduleShow ? "Add Department" : "Update Department" }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="backdrop-overlay backdrop-blur-xs" @click="closeModal"></div>
    </div>
</template>