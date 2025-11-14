<script setup lang="ts">
import user12 from "@/assets/images/avatar/user-12.png";
import user13 from "@/assets/images/avatar/user-13.png";
import user14 from "@/assets/images/avatar/user-14.png";
import user15 from "@/assets/images/avatar/user-15.png";
import user16 from "@/assets/images/avatar/user-16.png";
import user17 from "@/assets/images/avatar/user-17.png";
import user18 from "@/assets/images/avatar/user-18.png";
import brand1 from "@/assets/images/brands/img-01.png";
import { X } from 'lucide-vue-next';
import { ref, defineProps, computed, reactive, watch } from 'vue';
import { projectListData } from './list-data';
import flatPickr from 'vue-flatpickr-component';
// import 'flatpickr/dist/flatpickr.css';

const props = defineProps({
    isModuleShow: Boolean,
    setModuleValue: Function,
    showEditProjectForm: Boolean,
    setEditProjectForm: Function,
    editDetails: Object,
});

// Reactive states
const showAddProjectForm = computed(() => props.isModuleShow); // To display Add Project form
// Form data
interface ProjectForm {
    projectID?: string;
    projectName: string;
    clientName: string;
    dueDate: string;
    totalAmount: string | number;
    progress: number | null;
    assignee: any;
    status: string;
}
let projectForm = reactive<ProjectForm | any>({
    projectName: "",
    clientName: "",
    dueDate: "",
    totalAmount: "",
    progress: null,
    assignee: [] as { image: string; name: string }[],
    status: "",
});
const selectedAssignees = ref<string[]>([]);
watch(() => props.editDetails, (newData) => {
    if (newData) projectForm = { ...newData }
})


// Error state
const errors = reactive<Record<string, string> | any>({});

// Assignee options
const assigneeData: any = {
    "Max Boucaut": user14,
    "Poppy Dalley": user17,
    "Ethan Zahel": user16,
    "Lucas Griffin": user12,
    "Ryan Frazer": user18,
    "Natasha Tegg": user15,
};

// Status options
const statusOptions = [
    { label: "Active", value: "Active" },
    { label: "On Hold", value: "On Hold" },
    { label: "Pending", value: "Pending" },
    { label: "Completed", value: "Completed" },
];


// Validation function
function validateField(fieldName: keyof typeof projectForm, fieldValue: any, errorMessage: string) {
    if (!fieldValue) {
        errors[fieldName] = errorMessage;
    } else if (fieldName === "progress" && (fieldValue < 0 || fieldValue > 100)) {
        errors[fieldName] = "Progress must be between 0 and 100.";
    } else {
        delete errors[fieldName];
    }
}

function validateForm(): boolean {
    validateField("projectName", projectForm.projectName, "Project name is required.");
    validateField("clientName", projectForm.clientName, "Client name is required.");
    validateField("dueDate", projectForm.dueDate, "Due date is required.");
    validateField("totalAmount", projectForm.totalAmount, "Total amount is required.");
    validateField("progress", projectForm.progress, "Progress is required.");
    // validateField("assignee", projectForm.assignee, "Assignee is required.");
    validateField("status", projectForm.status, "Status is required.");

    return Object.keys(errors).length === 0;
}

// Submit form handler
function submitForm() {
    if (validateForm()) {
        if (showAddProjectForm.value) {
            addRowData()
        } else {
            updateRow()
        }
        closeModal();
    }
}

function addRowData() {
    projectForm.projectID = `${22697 + projectListData.value.length}`;
    let projectImage = brand1
    const assignees = [
        { image: user14, name: "Max Boucaut" },
        { image: user16, name: "Ethan Zahel" },
    ]
    projectListData.value.unshift({ ...projectForm, projectImage, assignees });
}

function updateRow() {
    const findIndex = projectListData.value.findIndex((item) => item.projectID === projectForm.projectID);
    projectListData.value.splice(findIndex, 1, { ...projectForm })
}
// Close modal
function closeModal() {
    if (props.setModuleValue) props.setModuleValue(false);
    if (props.setEditProjectForm) props.setEditProjectForm(false)
    resetForm();
}

// Reset form
function resetForm() {
    // Object.keys(projectForm).forEach((key) => (projectForm[key as keyof ProjectForm] = ""));
    projectForm.projectName = "";
    projectForm.clientName = "";
    projectForm.dueDate = "";
    projectForm.totalAmount = "";
    projectForm.progress = 0;
    projectForm.assignee = "";
    projectForm.status = "";
    Object.keys(errors).forEach((key) => delete errors[key]);
}
</script>
<template>
    <div v-if="showAddProjectForm || showEditProjectForm" id="addProjectModal" class="modal d-block">
        <div class="modal-wrap modal-center">
            <div class="modal-header">
                <h6 class="modal-title">{{ showAddProjectForm ? 'Add Project' : 'Edit Project' }}</h6>
                <button class="link link-red" @click="closeModal">
                    <X data-lucide="x" class="size-5"></X>
                </button>
            </div>
            <div class="modal-content">
                <div class="grid grid-cols-12 gap-4">
                    <!-- Project Title -->
                    <div class="col-span-12">
                        <label for="projectTitleInput" class="form-label">Project Title</label>
                        <input type="text" id="projectTitleInput" class="form-input" placeholder="Project title"
                            v-model="projectForm.projectName"
                            @input="validateField('projectName', projectForm.projectName, 'Project name is required.')" />
                        <span v-if="errors.projectName" class="text-red-500">{{ errors.projectName }}</span>
                    </div>

                    <!-- Client Name -->
                    <div class="col-span-12">
                        <label for="clientName" class="form-label">Client Name</label>
                        <input type="text" id="clientName" class="form-input" placeholder="Enter name"
                            v-model="projectForm.clientName"
                            @input="validateField('clientName', projectForm.clientName, 'Client name is required.')" />
                        <span v-if="errors.clientName" class="text-red-500">{{ errors.clientName }}</span>
                    </div>

                    <!-- Due Date -->
                    <div class="col-span-6">
                        <label for="dueDateInput" class="form-label">Due Date</label>
                        <flat-pickr type="text" id="dueDateInput" class="form-input" v-model="projectForm.dueDate"
                            @input="validateField('dueDate', projectForm.dueDate, 'Due date is required.')" />
                        <span v-if="errors.dueDate" class="text-red-500">{{ errors.dueDate }}</span>
                    </div>

                    <!-- Total Amount -->
                    <div class="col-span-6">
                        <label for="totalAmountInput" class="form-label">Total Amount ($)</label>
                        <input type="number" id="totalAmountInput" class="form-input" placeholder="$00.00"
                            v-model.number="projectForm.totalAmount"
                            @input="validateField('totalAmount', projectForm.totalAmount, 'Total amount is required.')" />
                        <span v-if="errors.totalAmount" class="text-red-500">{{ errors.totalAmount }}</span>
                    </div>

                    <!-- Progress -->
                    <div class="col-span-12">
                        <label for="progressInput" class="form-label">% Complete</label>
                        <input type="number" id="progressInput" class="form-input" placeholder="0"
                            v-model.number="projectForm.progress" max="100" length="3"
                            @input="validateField('progress', projectForm.progress, 'Progress is required.')" />
                        <span v-if="errors.progress" class="text-red-500">{{ errors.progress }}</span>
                        <div class="mt-3 overflow-hidden progress-bar progress-1">
                            <div class="text-white progress-bar-wrap bg-gradient-to-r from-primary-500 to-pink-500 via-purple-500"
                                :style="{ width: projectForm.progress + '%' }"></div>
                        </div>
                    </div>

                    <!-- Assignee -->
                    <div class="col-span-12">
                        <label for="assignedSelect" class="form-label">Assignee To</label>
                        <select id="assignedSelect" class="form-select" v-model="selectedAssignees"
                            @change="validateField('assignee', projectForm.assignee, 'Assignee is required.')">
                            <option value="" disabled>Select Assignee</option>
                            <option v-for="(image, name) in assigneeData" :key="name" :value="name">
                                {{ name }}
                            </option>
                        </select>
                        <span v-if="errors.assignee" class="text-red-500">{{ errors.assignee }}</span>
                    </div>

                    <!-- Status -->
                    <div class="col-span-12">
                        <label for="statusSelect" class="form-label">Status</label>
                        <select id="statusSelect" class="form-select" v-model="projectForm.status"
                            @change="validateField('status', projectForm.status, 'Status is required.')">
                            <option value="" disabled>Select Status</option>
                            <option v-for="status in statusOptions" :key="status.value" :value="status.value">
                                {{ status.label }}
                            </option>
                        </select>
                        <span v-if="errors.status" class="text-red-500">{{ errors.status }}</span>
                    </div>
                </div>

                <!-- Modal Actions -->
                <div class="flex items-center justify-end gap-2 mt-5">
                    <button class="btn btn-active-red" @click="closeModal">
                        <X data-lucide="x" class="inline-block size-4"></X>
                        Close
                    </button>
                    <button class="btn btn-primary" @click="submitForm">
                        {{ showAddProjectForm ? 'Add Project' : 'Update Project' }}
                    </button>
                </div>
            </div>
        </div>
        <div class="backdrop-overlay backdrop-blur-xs" id="backDropDiv" @click="closeModal"></div>
    </div>
</template>