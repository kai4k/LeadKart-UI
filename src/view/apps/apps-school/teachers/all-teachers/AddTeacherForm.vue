<script setup lang="ts">
import { X } from 'lucide-vue-next';
import { ref, watch } from 'vue';
import { teachersData } from './teacherlist-data';
import flatPickr from 'vue-flatpickr-component';
// import 'flatpickr/dist/flatpickr.css';

const props = defineProps({
    addModuleShow: Boolean,
    setAddModuleValue: Function,
    editModuleShow: Boolean,
    setEditModuleValue: Function,
    editData: Object
})
const errors = ref<Record<string, string>>({});
const teacherForm = ref<any>({
    title: '',
    teacherName: '',
    email: '',
    phone: '',
    salary: '',
    experience: '',
    lastSchool: '',
    date: ''
});

watch(() => props.editData, (newData) => {
    if (newData) teacherForm.value = { ...newData }

})
const validateForm = () => {
    errors.value = {};
    validateField('teacherName', teacherForm.value.teacherName, 'Teacher name is required.');
    validateField('email', teacherForm.value.email, 'Email is required.');
    validatePhone();
    validateField('phone', teacherForm.value.phone, 'Phone is required.');
    validateField('experience', teacherForm.value.experience, 'Experience is required.');
    validateField('lastSchool', teacherForm.value.lastSchool, 'Last school is required.');
    validateField('date', teacherForm.value.date, 'Date is required.');
    validateField('salary', teacherForm.value.salary, 'Salary is required.');
    validateField('title', teacherForm.value.title, 'Title is required.');
    return Object.keys(errors.value).length === 0;
};

const validateField = (fieldName: string, fieldValue: string, errorMessage: string) => {
    if (!fieldValue) {
        errors.value[fieldName] = errorMessage;
    } else {
        delete errors.value[fieldName];
    }
};

const validatePhone = () => {
    const phonePattern = /^[0-9]{10}$/;
    errors.value.phone = !phonePattern.test(teacherForm.value.phone) ? 'Phone number must be 10 digits and numeric' : '';
};

const addTeacher = () => {
    teacherForm.value.teacherID = 'PET-' + (2551 + teachersData.value.length).toString();
    const title = (document.querySelector('#titleSelect') as HTMLSelectElement)?.value;
    const option: any = { day: 'numeric', month: 'short', year: 'numeric' };
    const formattedDate = new Date(teacherForm.value.date).toLocaleDateString('en-GB', option);
    teachersData.value.unshift({ ...teacherForm.value, title, formattedDate });
};

const updateRow = () => {
    const findIndex = teachersData.value.findIndex(data => data.teacherID === teacherForm.value.teacherID);
    teachersData.value.splice(findIndex, 1, { ...teacherForm.value })
}
const submitForm = () => {
    if (validateForm()) {
        if (props.addModuleShow) {
            addTeacher();
        }
        else {
            updateRow()
        }
        resetForm();
        closeModal()
    }
};

const resetForm = () => {
    errors.value = {};
    teacherForm.value = {
        teacherID: '',
        title: '',
        teacherName: '',
        email: '',
        phone: '',
        salary: '',
        experience: '',
        lastSchool: '',
        date: ''
    };
};

const closeModal = () => {
    if (props.setAddModuleValue) props.setAddModuleValue(false)
    if (props.setEditModuleValue) props.setEditModuleValue(false);
};


const teacherTitleOption = [
    {
        Title: "Teacher",
        value: "Teacher",
    },
    {
        Title: "Professor",
        value: "Professor",
    },
    {
        Title: "Assistant",
        value: "Assistant",
    },
    {
        Title: "Lecturer",
        value: "Lecturer",
    },
    {
        Title: "Senior Lecturer	",
        value: "Senior Lecturer	",
    },
    {
        Title: "Associate Professor	",
        value: "Associate Professor	",
    },
    {
        Title: "Instructor",
        value: "Instructor",
    },
]
</script>
<template>
    <div v-if="addModuleShow || editModuleShow" class="modal">
        <div class="modal-wrap modal-center">
            <div class="modal-header">
                <h6 class="modal-title">{{ addModuleShow ? 'Add Teacher' : 'Edit Teacher' }}</h6>
                <button type="button" @click="closeModal" class="link link-red">
                    <X class="size-5" data-lucide="x"></X>
                </button>
            </div>
            <div class="modal-content">
                <div class="grid grid-cols-12 gap-4">
                    <div class="col-span-12">
                        <label for="titleSelect" class="form-label">Title</label>
                        <!-- v-model="teacherForm.title" -->
                        <div>
                        </div>
                        <select id="titleSelect" v-model="teacherForm.title" class="form-select"
                            @change="validateField('title', teacherForm.title, 'Title is required.')">
                            <option value="">Select Title</option>
                            <template v-for="(option, index) in teacherTitleOption" :key="index">
                                <option :value="option.value">{{ option.Title }}</option>
                            </template>
                        </select>
                        <span v-if="errors.title" class="text-red-500">{{ errors.title }}</span>
                    </div>
                    <div class="col-span-12">
                        <label for="teacherNameInput" class="form-label">Teacher Name</label>
                        <input type="text" id="teacherNameInput" class="form-input" placeholder="Teacher name"
                            v-model="teacherForm.teacherName"
                            @input="validateField('teacherName', teacherForm.teacherName, 'Teacher name is required.')" />
                        <span v-if="errors.teacherName" class="text-red-500">{{ errors.teacherName }}</span>
                    </div>
                    <div class="col-span-6">
                        <label for="emailInput" class="form-label">Email</label>
                        <input type="email" id="emailInput" class="form-input" placeholder="name@example.com"
                            v-model="teacherForm.email"
                            @input="validateField('email', teacherForm.email, 'Email is required.')" />
                        <span v-if="errors.email" class="text-red-500">{{ errors.email }}</span>
                    </div>
                    <div class="col-span-6">
                        <label for="phoneInput" class="form-label">Phone</label>
                        <input type="text" id="phoneInput" length="10" class="form-input" placeholder="+1012456789"
                            v-model="teacherForm.phone" @input="validatePhone" />
                        <span v-if="errors.phone" class="text-red-500">{{ errors.phone }}</span>
                    </div>
                    <div class="col-span-6">
                        <label for="salaryInput" class="form-label">Salary ($)</label>
                        <input type="text" id="salaryInput" class="form-input" placeholder="$0"
                            v-model="teacherForm.salary"
                            @input="validateField('salary', teacherForm.salary, 'Salary is required.')" />
                        <span v-if="errors.salary" class="text-red-500">{{ errors.salary }}</span>
                    </div>
                    <div class="col-span-6">
                        <label for="experienceInput" class="form-label">Experience (Years)</label>
                        <input type="text" id="experienceInput" class="form-input" placeholder="0 Years"
                            v-model="teacherForm.experience"
                            @input="validateField('experience', teacherForm.experience, 'Experience is required.')" />
                        <span v-if="errors.experience" class="text-red-500">{{ errors.experience }}</span>
                    </div>
                    <div class="col-span-12">
                        <label for="lastSchoolNameInput" class="form-label">Last School Name</label>
                        <input type="text" id="lastSchoolNameInput" class="form-input" placeholder="School name"
                            v-model="teacherForm.lastSchool"
                            @input="validateField('lastSchool', teacherForm.lastSchool, 'Last school is required.')" />
                        <span v-if="errors.lastSchool" class="text-red-500">{{ errors.lastSchool }}</span>
                    </div>
                    <div class="col-span-12">
                        <label for="joiningDateSelect" class="form-label">Joining Date</label>
                        <flat-pickr type="text" id="joiningDateSelect" class="form-input" placeholder="DD-MM-YYYY"
                            v-model="teacherForm.date"
                            @change="validateField('date', teacherForm.date, 'Date is required.')" />
                        <span v-if="errors.date" class="text-red-500">{{ errors.date }}</span>
                    </div>
                </div>
                <div class="flex items-center justify-end gap-2 mt-5">
                    <button type="button" class="btn btn-active-red" @click="closeModal">
                        <i data-lucide="x" class="inline-block size-4"></i>
                        <span class="align-baseline">Close</span>
                    </button>
                    <button type="button" class="btn btn-primary" @click="submitForm">
                        {{ addModuleShow ? 'Add Teacher' : 'Update Teacher' }}
                    </button>
                </div>
            </div>
        </div>
        <div class="backdrop-overlay backdrop-blur-xs" @click="closeModal"></div>
    </div>
</template>