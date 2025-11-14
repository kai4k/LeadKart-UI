<script setup lang="ts">
import flatPickr from 'vue-flatpickr-component';
// import 'flatpickr/dist/flatpickr.css';

import { X } from "lucide-vue-next";
import { reactive, watch } from "vue";
import examListData from './schedule-data';
const props = defineProps({
    addModuleShow: Boolean,
    setAddModuleValue: Function,
    editModuleShow: Boolean,
    setEditModuleValue: Function,
    editData: Object

})

interface Schedule {
    testId?: number | string;
    testName: string;
    testCategory: string;
    testType: string;
    class: string;
    startDate: string | null;
    endDate: string | null;
    status: string;
}

let form = reactive<any | Schedule>({
    scheduleID: "",
    testName: "",
    testCategory: "",
    testType: "",
    class: "",
    startDate: null,
    endDate: null,
    status: "",
});

watch(() => props.editData, (newData) => {
    if (newData) form = { ...newData }
    else form = {}
})

const errors = reactive<any>({});
const categories = [{ label: "Final Test", value: "Final Test" },
{ label: "Practice Test", value: "Practice Test" },
{ label: "Midterm Test", value: "Midterm Test" },
{ label: "Quarterly Test", value: "Quarterly Test" },];
const types = [
    { label: "General", value: "General" },
    { label: "Formative", value: "Formative" },
    { label: "Summative", value: "Summative" },
    { label: "Online", value: "Online" },
    { label: "Rejoining", value: "Rejoining" },
];
const classes = [
    { label: "STD 6", value: "6" },
    { label: "STD 7", value: "7" },
    { label: "STD 8", value: "8" },
    { label: "STD 9", value: "9" },
    { label: "STD 10", value: "10" },
    { label: "STD 11", value: "11" },
    { label: "STD 12", value: "12" }
];
const statuses = [
    { label: "New", value: "New" },
    { label: "Scheduled", value: "Scheduled" },
    { label: "Completed", value: "Completed" }
];

const validateField = (fieldName: any, fieldValue: any, errorMessage: any) => {
    if (!fieldValue) {
        errors[fieldName] = errorMessage;
    } else {
        delete errors[fieldName];
    }
};

const validateForm = () => {
    validateField("testName", form.testName, "Test name is required.");
    validateField("testCategory", form.testCategory, "Test category is required.");
    validateField("testType", form.testType, "Test type is required.");
    validateField("class", form.class, "Class is required.");
    validateField("startDate", form.startDate, "Start date is required.");
    validateField("endDate", form.endDate, "End date is required.");
    validateField("status", form.status, "Status is required.");
    return Object.keys(errors).length === 0;
};

const submitForm = () => {
    if (validateForm()) {
        if (props.addModuleShow) {
            addSchedule();
        } else {
            updateSchedule();
        }
        closeModal();
    }
};

const addSchedule = () => {
    const testId = `${498 + examListData.value.length}`;
    examListData.value.unshift({ ...form, testId });
    resetForm();
};

const updateSchedule = () => {
    const index = examListData.value.findIndex((s) => s.testId === form.testId);
    if (index !== -1) {
        examListData.value[index] = { ...form };
        resetForm();
    }
};

const resetForm = () => {
    Object.keys(form).forEach((key) => (form[key] = ""));
};

const closeModal = () => {
    if (props.setAddModuleValue) props.setAddModuleValue(false)
    if (props.setEditModuleValue) props.setEditModuleValue(false)
};
</script>
<template>
    <div id="addExamModal" class="modal " :class="{ 'd-block': addModuleShow || editModuleShow }"
        v-show="addModuleShow || editModuleShow">
        <div class="modal-wrap modal-center">
            <div class="modal-header">
                <h6 class="modal-title">
                    {{ editModuleShow ? "Edit Exam" : "Add Exam" }}
                </h6>
                <button @click="closeModal" class="link link-red">
                    <X data-lucide="x" class="size-5"></X>
                </button>
            </div>
            <div class="modal-content">
                <form @submit.prevent="submitForm">
                    <div class="grid grid-cols-12 gap-4">
                        <div class="col-span-12">
                            <label for="testNameInput" class="form-label">Test Name</label>
                            <input type="text" id="testNameInput" class="form-input" placeholder="Test name"
                                v-model="form.testName" />
                            <span v-if="errors.testName" class="text-red-500">
                                {{ errors.testName }}
                            </span>
                        </div>

                        <div class="col-span-12">
                            <label for="testCategorySelect" class="form-label">Test Category</label>
                            <select id="testCategorySelect" class="form-select" v-model="form.testCategory">
                                <option value="" disabled>Select Category</option>
                                <option v-for="category in categories" :key="category.value" :value="category.value">
                                    {{ category.label }}
                                </option>
                            </select>
                            <span v-if="errors.testCategory" class="text-red-500">
                                {{ errors.testCategory }}
                            </span>
                        </div>

                        <div class="col-span-12">
                            <label for="testTypeSelect" class="form-label">Test Type</label>
                            <select id="testTypeSelect" class="form-select" v-model="form.testType">
                                <option value="" disabled>Select Type</option>
                                <option v-for="type in types" :key="type.value" :value="type.value">
                                    {{ type.label }}
                                </option>
                            </select>
                            <span v-if="errors.testType" class="text-red-500">
                                {{ errors.testType }}
                            </span>
                        </div>

                        <div class="col-span-12">
                            <label for="classSelect" class="form-label">Class</label>
                            <select id="classSelect" class="form-select" v-model="form.class">
                                <option value="" disabled>Select Class</option>
                                <option v-for="className in classes" :key="className.value" :value="className.value">
                                    {{ className.label }}
                                </option>
                            </select>
                            <span v-if="errors.class" class="text-red-500">
                                {{ errors.class }}
                            </span>
                        </div>

                        <div class="col-span-6">
                            <label for="startDateSelect" class="form-label">Start Date</label>
                            <flat-pickr type="text" id="startDateSelect" class="form-input" v-model="form.startDate"
                                placeholder="DD-MM-YY" />
                            <span v-if="errors.startDate" class="text-red-500">
                                {{ errors.startDate }}
                            </span>
                        </div>

                        <div class="col-span-6">
                            <label for="endDateSelect" class="form-label">End Date</label>
                            <flat-pickr type="text" id="endDateSelect" class="form-input" v-model="form.endDate"
                                placeholder="DD-MM-YY" />
                            <span v-if="errors.endDate" class="text-red-500">
                                {{ errors.endDate }}
                            </span>
                        </div>

                        <div class="col-span-12">
                            <label for="statusSelect" class="form-label">Status</label>
                            <select id="statusSelect" class="form-select" v-model="form.status">
                                <option value="" disabled>Select Status</option>
                                <option v-for="status in statuses" :key="status.value" :value="status.value">
                                    {{ status.label }}
                                </option>
                            </select>
                            <span v-if="errors.status" class="text-red-500">
                                {{ errors.status }}
                            </span>
                        </div>
                    </div>
                    <div class="flex items-center justify-end gap-2 mt-5">
                        <button type="button" class="btn btn-active-red" @click="closeModal">
                            <X data-lucide="x" class="inline-block size-4"></X>
                            <span class="align-baseline">Close</span>
                        </button>
                        <button type="submit" class="btn btn-primary">
                            {{ editModuleShow ? "Update Exam Schedule" : "Add Exam Schedule" }}
                        </button>
                    </div>
                </form>
            </div>
        </div>
        <div class="backdrop-overlay backdrop-blur-xs" @click="closeModal"></div>
    </div>
</template>