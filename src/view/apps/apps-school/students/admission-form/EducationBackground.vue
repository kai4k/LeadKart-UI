<script setup lang="ts">
import { MoveLeft, MoveRight } from 'lucide-vue-next';
import { reactive } from 'vue';
const props = defineProps({
    goNextTag: Function
})
// Form Data for Educational Background
const educationalBackgroundForm = reactive<any>({
    highSchoolName: '',
    graduationYear: '',
    gpa: '',
    majorFocus: '',
    instituteName: '',
    underGraduationYear: '',
    underGpa: '',
    underMajorFocus: '',
    honorsAwards: '',
    extracurricularActivities: '',
    leadershipRoles: '',
    publicationsResearch: ''
});

// Error messages reactive object
const errors = reactive<any>({
    highSchoolName: '',
    graduationYear: '',
    gpa: '',
    majorFocus: '',
    instituteName: '',
    underGraduationYear: '',
    underGpa: '',
    underMajorFocus: ''
});


// Form Validation
const validateField = (field: string, value: string, errorMessage: string) => {
    if (!value.trim()) {
        errors[field] = errorMessage;
    } else {
        errors[field] = '';
    }
};

const validateEducationalBackground = () => {
    let isValid = true;

    Object.keys(educationalBackgroundForm).forEach(field => {
        validateField(field, educationalBackgroundForm[field], `${field} is required`);
        if (errors[field]) isValid = false;
    });

    return isValid;
};

// Form Submission (for now, just log the data)
const submitEducationalBackgroundForm = () => {
    if (validateEducationalBackground()) {
        if (props.goNextTag) props.goNextTag(4)
    }
};
</script>
<template>
    <div>
        <form @submit.prevent="submitEducationalBackgroundForm" id="educationalBackgroundForm"
            ref="educationalBackgroundForm">

            <!-- High School Section -->
            <h6 class="mb-3">High School</h6>
            <div class="grid grid-cols-12 gap-space">
                <!-- High School Name -->
                <div class="col-span-12 sm:col-span-4">
                    <label for="highSchoolNameInput" class="form-label">Name</label>
                    <input type="text" id="highSchoolNameInput" class="form-input" placeholder="High school name"
                        v-model="educationalBackgroundForm.highSchoolName"
                        :class="errors.highSchoolName ? 'border-red-500' : ''"
                        @blur="validateField('highSchoolName', educationalBackgroundForm.highSchoolName, 'High School Name is required')" />
                    <span v-if="errors.highSchoolName" class="text-red-500">{{ errors.highSchoolName }}</span>
                </div>

                <!-- Graduation Year -->
                <div class="col-span-12 sm:col-span-4">
                    <label for="graduationYearInput" class="form-label">Graduation Year</label>
                    <input type="number" id="graduationYearInput" class="form-input" placeholder="Years"
                        v-model="educationalBackgroundForm.graduationYear"
                        :class="errors.graduationYear ? 'border-red-500' : ''"
                        @blur="validateField('graduationYear', educationalBackgroundForm.graduationYear, 'Graduation Year is required')" />
                    <span v-if="errors.graduationYear" class="text-red-500">{{ errors.graduationYear }}</span>
                </div>

                <!-- GPA -->
                <div class="col-span-12 sm:col-span-4">
                    <label for="gpaInput" class="form-label">GPA</label>
                    <input type="number" id="gpaInput" class="form-input" placeholder="GPA"
                        v-model="educationalBackgroundForm.gpa" :class="errors.gpa ? 'border-red-500' : ''"
                        @blur="validateField('gpa', educationalBackgroundForm.gpa, 'GPA is required')" />
                    <span v-if="errors.gpa" class="text-red-500">{{ errors.gpa }}</span>
                </div>

                <!-- Major/Focus -->
                <div class="col-span-12">
                    <label for="majorFocusInput" class="form-label">Major/Focus</label>
                    <input type="text" id="majorFocusInput" class="form-input" placeholder="Major/Focus"
                        v-model="educationalBackgroundForm.majorFocus"
                        :class="errors.majorFocus ? 'border-red-500' : ''"
                        @blur="validateField('majorFocus', educationalBackgroundForm.majorFocus, 'Major/Focus is required')" />
                    <span v-if="errors.majorFocus" class="text-red-500">{{ errors.majorFocus }}</span>
                </div>
            </div>

            <!-- Undergraduate Institution Section -->
            <h6 class="mt-5 mb-3">Undergraduate Institution</h6>
            <div class="grid grid-cols-12 gap-space">
                <!-- Institute Name -->
                <div class="col-span-12 sm:col-span-4">
                    <label for="instituteNameInput" class="form-label">Institute Name</label>
                    <input type="text" id="instituteNameInput" class="form-input" placeholder="Institute name"
                        v-model="educationalBackgroundForm.instituteName"
                        :class="errors.instituteName ? 'border-red-500' : ''"
                        @blur="validateField('instituteName', educationalBackgroundForm.instituteName, 'Institute Name is required')" />
                    <span v-if="errors.instituteName" class="text-red-500">{{ errors.instituteName }}</span>
                </div>

                <!-- Undergraduate Graduation Year -->
                <div class="col-span-12 sm:col-span-4">
                    <label for="underGraduationYearInput" class="form-label">Graduation Year</label>
                    <input type="number" id="underGraduationYearInput" class="form-input" placeholder="Years"
                        v-model="educationalBackgroundForm.underGraduationYear"
                        :class="errors.underGraduationYear ? 'border-red-500' : ''"
                        @blur="validateField('underGraduationYear', educationalBackgroundForm.underGraduationYear, 'Undergraduate Graduation Year is required')" />
                    <span v-if="errors.underGraduationYear" class="text-red-500">{{ errors.underGraduationYear }}</span>
                </div>

                <!-- Undergraduate GPA -->
                <div class="col-span-12 sm:col-span-4">
                    <label for="underGpaInput" class="form-label">GPA</label>
                    <input type="number" id="underGpaInput" class="form-input" placeholder="GPA"
                        v-model="educationalBackgroundForm.underGpa" :class="errors.underGpa ? 'border-red-500' : ''"
                        @blur="validateField('underGpa', educationalBackgroundForm.underGpa, 'Undergraduate GPA is required')" />
                    <span v-if="errors.underGpa" class="text-red-500">{{ errors.underGpa }}</span>
                </div>

                <!-- Undergraduate Major/Focus -->
                <div class="col-span-12">
                    <label for="underMajorFocusInput" class="form-label">Major/Focus</label>
                    <input type="text" id="underMajorFocusInput" class="form-input" placeholder="Major/Focus"
                        v-model="educationalBackgroundForm.underMajorFocus"
                        :class="errors.underMajorFocus ? 'border-red-500' : ''"
                        @blur="validateField('underMajorFocus', educationalBackgroundForm.underMajorFocus, 'Undergraduate Major/Focus is required')" />
                    <span v-if="errors.underMajorFocus" class="text-red-500">{{ errors.underMajorFocus }}</span>
                </div>
            </div>

            <!-- Academic Achievements Section -->
            <h6 class="mt-5 mb-3">Academic Achievements</h6>
            <div class="grid grid-cols-12 gap-space">
                <!-- Honors/Awards -->
                <div class="col-span-12 sm:col-span-4">
                    <label for="honorsAwardsInput" class="form-label">Honors/Awards</label>
                    <input type="text" id="honorsAwardsInput" class="form-input"
                        v-model="educationalBackgroundForm.honorsAwards" />
                </div>

                <!-- Extracurricular Activities -->
                <div class="col-span-12 sm:col-span-4">
                    <label for="extracurricularActivitiesInput" class="form-label">Extracurricular Activities</label>
                    <input type="text" id="extracurricularActivitiesInput" class="form-input"
                        v-model="educationalBackgroundForm.extracurricularActivities" />
                </div>

                <!-- Leadership Roles -->
                <div class="col-span-12 sm:col-span-4">
                    <label for="leadershipRolesInput" class="form-label">Leadership Roles</label>
                    <input type="text" id="leadershipRolesInput" class="form-input"
                        v-model="educationalBackgroundForm.leadershipRoles" />
                </div>

                <!-- Publications/Research -->
                <div class="col-span-12">
                    <label for="publicationsResearchInput" class="form-label">Publications/Research</label>
                    <input type="text" id="publicationsResearchInput" class="form-input"
                        v-model="educationalBackgroundForm.publicationsResearch" />
                </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex flex-wrap items-center justify-end gap-2 mt-5">
                <button type="button" class="btn btn-sub-gray">
                    <MoveLeft class="mr-1 ltr:inline-block rtl:hidden size-4"></MoveLEFt>
                    Previous
                </button>
                <button type="submit" class="btn btn-primary">
                    Save to Next
                    <MoveRight class="ml-1 ltr:inline-block rtl:hidden size-4"></MoveRight>
                </button>
            </div>
        </form>
    </div>
</template>