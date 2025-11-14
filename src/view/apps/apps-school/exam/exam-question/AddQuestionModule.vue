<script setup lang="ts">
import { X } from 'lucide-vue-next';
import { ref, watch } from 'vue';
import type { Question } from './exam-question-data';

const props = defineProps({
    showModule: Boolean,
    setModuleValue: Function,
    showEditModule: Boolean,
    setEditModuleValue: Function,
    getData: Object
})


const form = ref<Question>({
    id: 0,
    question: '',
    options: ['', '', '', ''],
    checkbox: false,
    type: '',
    difficulty: '',
    status: '',
});

watch(() => props.getData, (newData) => {
    if (newData) {
        form.value = { ...newData } as Question
    }
})

const errors = ref<Record<string, string>>({});

const examQuestions = ref<Question[]>([]);

const validateField = (fieldName: string, fieldValue: string, errorMessage: string) => {
    if (!fieldValue) {
        errors.value[fieldName] = errorMessage;
    } else {
        delete errors.value[fieldName];
    }
};

const validateForm = () => {
    errors.value = {};
    validateField('question', form.value.question, 'Question is required');
    validateField('type', form.value.type, 'Item Type is required');
    validateField('difficulty', form.value.difficulty, 'Difficulty Level is required');
    validateField('status', form.value.status, 'Status is required');
    if (form.value.type === 'MCQ') {
        validateField('option1', form.value.options[0], 'Option 1 is required');
        validateField('option2', form.value.options[1], 'Option 2 is required');
        validateField('option3', form.value.options[2], 'Option 3 is required');
        validateField('option4', form.value.options[3], 'Option 4 is required');
    }
    return Object.keys(errors.value).length === 0;
};

const submitForm = () => {
    if (validateForm()) {
        if (props.showModule) {
            addExam();
        } else {
            updateExam();
        }
    }
};

const addExam = () => {
    form.value.id = examQuestions.value.length + 1;
    examQuestions.value.unshift({ ...form.value });
    resetForm();
    closeModal();
};

const updateExam = () => {
    const index = examQuestions.value.findIndex((item) => item.id === form.value.id);
    if (index !== -1) {
        examQuestions.value[index] = { ...form.value };
    }
    resetForm();
    closeModal();
};

const closeModal = () => {
    if (props.setModuleValue) props.setModuleValue(false)
    if (props.setEditModuleValue) props.setEditModuleValue(false)
    resetForm();
};

const resetForm = () => {
    form.value = {
        id: 0,
        question: '',
        options: ['', '', '', ''],
        checkbox: false,
        type: '',
        difficulty: '',
        status: '',
    };
    errors.value = {};
};
</script>
<template>
    <div v-if="showModule || showEditModule" class="modal">
        <div class="modal-wrap modal-center">
            <div class="modal-header">
                <h6 class="modal-title">{{ showModule ? 'Add Question' : 'Edit Question' }}</h6>
                <button @click="closeModal" class="link link-red">
                    <X data-lucide="x" class="size-5"></X>
                </button>
            </div>
            <div class="modal-content">
                <form @submit.prevent="submitForm">
                    <div class="grid grid-cols-12 gap-4">
                        <div class="col-span-12">
                            <label for="questionInput" class="form-label">Question</label>
                            <input type="text" id="questionInput" class="form-input" placeholder="Enter question"
                                v-model="form.question"
                                @input="validateField('question', form.question, 'Question is required')" />
                            <span class="text-red-500" v-if="errors.question">{{ errors.question }}</span>
                        </div>

                        <div class="col-span-6">
                            <label for="option1Input" class="form-label">Option 1</label>
                            <input type="text" id="option1Input" class="form-input" placeholder="Option one"
                                v-model="form.options[0]" :disabled="form.checkbox || form.type === 'Q & A'"
                                @input="validateField('option1', form.options[0], 'Option 1 is required')" />
                            <span class="text-red-500" v-if="errors.option1">{{ errors.option1 }}</span>
                        </div>

                        <div class="col-span-6">
                            <label for="option2Input" class="form-label">Option 2</label>
                            <input type="text" id="option2Input" class="form-input" placeholder="Option two"
                                v-model="form.options[1]" :disabled="form.checkbox || form.type === 'Q & A'"
                                @input="validateField('option2', form.options[1], 'Option 2 is required')" />
                            <span class="text-red-500" v-if="errors.option2">{{ errors.option2 }}</span>
                        </div>

                        <div class="col-span-6">
                            <label for="option3Input" class="form-label">Option 3</label>
                            <input type="text" id="option3Input" class="form-input" placeholder="Option three"
                                v-model="form.options[2]" :disabled="form.checkbox || form.type === 'Q & A'"
                                @input="validateField('option3', form.options[2], 'Option 3 is required')" />
                            <span class="text-red-500" v-if="errors.option3">{{ errors.option3 }}</span>
                        </div>

                        <div class="col-span-6">
                            <label for="option4Input" class="form-label">Option 4</label>
                            <input type="text" id="option4Input" class="form-input" placeholder="Option four"
                                v-model="form.options[3]" :disabled="form.checkbox || form.type === 'Q & A'"
                                @input="validateField('option4', form.options[3], 'Option 4 is required')" />
                            <span class="text-red-500" v-if="errors.option4">{{ errors.option4 }}</span>
                        </div>

                        <div class="col-span-12">
                            <div class="input-check-group">
                                <input id="optionOffInput" class="input-check input-check-primary" type="checkbox"
                                    v-model="form.checkbox" />
                                <label for="optionOffInput" class="input-check-label">Not a MCQ</label>
                            </div>
                        </div>

                        <div class="col-span-6">
                            <label for="itemTypeSelect" class="form-label">Item Type</label>
                            <select id="itemTypeSelect" class="form-select" v-model="form.type"
                                @change="validateField('type', form.type, 'Item Type is required')">
                                <option value="MCQ">MCQ</option>
                                <option value="Q & A">Q & A</option>
                            </select>
                            <span v-if="errors.type" class="text-red-500">{{ errors.type }}</span>
                        </div>

                        <div class="col-span-6">
                            <label for="difficultLevelSelect" class="form-label">Difficulty Level</label>
                            <select id="difficultLevelSelect" class="form-select" v-model="form.difficulty"
                                @change="validateField('difficulty', form.difficulty, 'Difficulty Level is required')">
                                <option value="Easy">Easy</option>
                                <option value="Medium">Medium</option>
                                <option value="Hard">Hard</option>
                            </select>
                            <span v-if="errors.difficulty" class="text-red-500">{{ errors.difficulty }}</span>
                        </div>

                        <div class="col-span-12">
                            <label for="statusSelect" class="form-label">Status</label>
                            <select id="statusSelect" class="form-select" v-model="form.status"
                                @change="validateField('status', form.status, 'Status is required')">
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
                            </select>
                            <span v-if="errors.status" class="text-red-500">{{ errors.status }}</span>
                        </div>
                    </div>

                    <div class="flex items-center justify-end gap-2 mt-5">
                        <button type="button" class="btn btn-active-red" @click="closeModal">
                            <X data-lucide="x" class="inline-block size-4"></X>
                            <span class="align-baseline">Close</span>
                        </button>
                        <button type="submit" class="btn btn-primary">
                            {{ showModule ? 'Add Question' : 'Edit Question' }}
                        </button>
                    </div>
                </form>
            </div>
        </div>
        <div class="backdrop-overlay backdrop-blur-xs" @click="closeModal"></div>
    </div>
</template>