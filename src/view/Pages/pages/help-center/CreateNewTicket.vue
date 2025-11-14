<script setup lang="ts">
import { X } from 'lucide-vue-next';
import { ref, reactive, computed } from 'vue';
import ticketsData from './help-center-data';
import newUser from '@/assets/images/avatar/user-1.png'
const props = defineProps({
    showModule: Boolean,
    setModuleValue: Function,
})
// Reactive state for the component
// const showNewTicketsModal = ref(true);
const errors = reactive<{ [key: string]: string }>({});
interface TicketForm {

    id: string;
    title: string;
    description: string;
    projectName: string;
    author: string;
    avatar: string;
    keywords: string | string[]; // Allow both string or array of strings
    assignedTo: string[];
    phone: string;
}

const ticketForm = reactive<TicketForm>({
    id: '',
    title: '',
    description: '',
    projectName: '',
    author: 'Mary Smith',
    avatar: 'user1', // Placeholder for the user avatar
    keywords: [] as string[],
    assignedTo: [] as string[],
    phone: '',
});

// Validation logic
const validateField = (fieldName: string, fieldValue: any, errorMessage: string) => {
    if (!fieldValue || (Array.isArray(fieldValue) && fieldValue.length === 0)) {
        errors[fieldName] = errorMessage;
    } else {
        delete errors[fieldName];
    }
};

const validateForm = () => {
    errors.title = '';
    errors.description = '';
    errors.projectName = '';
    errors.keywords = '';
    errors.assignedTo = '';
    errors.phone = '';

    validateField('title', ticketForm.title, 'Title is required.');
    validateField('description', ticketForm.description, 'Description is required.');
    validateField('projectName', ticketForm.projectName, 'Project Name is required.');
    validateField('keywords', ticketForm.keywords, 'Keywords are required.');
    validateField('assignedTo', ticketForm.assignedTo, 'Assignees are required.');
    validateField('phone', ticketForm.phone, 'Phone is required.');

    return Object.keys(errors).length === 0;
};

const resetForm = () => {
    ticketForm.id = '';
    ticketForm.title = '';
    ticketForm.description = '';
    ticketForm.projectName = '';
    ticketForm.keywords = [];
    ticketForm.assignedTo = [];
    ticketForm.phone = '';
};


function formatNumber(number: number, totalLength: number) {
    return number.toString().padStart(totalLength, '0');
}
const addTicket = () => {
    const data = new Date();

    // Create a new ticket object with the current date and ticket form data
    const tags = Array.isArray(ticketForm.keywords)
        ? [...ticketForm.keywords] // Use as-is if already an array
        : ticketForm.keywords.split(',').map(tag => tag.trim());
    const newTicket: any = {
        ...ticketForm,
        id: `${data.getFullYear()}-${formatNumber(ticketsData.value.length + 1, 4)}`,
        tags: tags, // Copy the keywords into tags
        time: '12:30 AM',
        comments: 0,
        avatar: newUser,
    };

    // Find the category to which the new ticket should be added
    const categoryIndex = ticketsData.value.findIndex(category => category.category === ticketForm.projectName);

    // If the category exists, add the new ticket to it
    if (categoryIndex !== -1) {
        ticketsData.value[categoryIndex].tickets.unshift(newTicket);
    } else {
        // If the category doesn't exist, you might want to create it
        ticketsData.value.unshift({
            category: ticketForm.projectName,
            tickets: [newTicket]
        });
    }

    // Log the updated ticketsData to see the changes
};

const submitForm = () => {
    if (validateForm()) {
        addTicket();
        resetForm();
        // showNewTicketsModal.value = false;
        if (props.setModuleValue) props.setModuleValue(false)
    }
};
const closeModule = () => {
    if (props.setModuleValue) props.setModuleValue(false)
}
</script>
<template>
    <div v-if="showModule" id="newTicketsModal" class="modal">
        <div class="modal-wrap modal-center modal-2xl">
            <div class="modal-header">
                <h6>Create New Ticket</h6>
                <button class="link link-red" @click="closeModule">
                    <X class="size-5" data-lucide="x"></X>
                </button>
            </div>
            <div class="modal-content">
                <div class="grid grid-cols-12 gap-5">
                    <!-- Title -->
                    <div class="col-span-6">
                        <label for="taskTitleInput" class="block mb-2 text-sm font-medium">Task Title</label>
                        <input type="text" id="taskTitleInput" class="form-input" v-model="ticketForm.title" @input="validateField('title', ticketForm.title, 'Title is required.')" />
                        <span v-if="errors.title" class="text-red-500">{{ errors.title }}</span>
                    </div>
                    <!-- Project Name -->
                    <div class="col-span-6">
                        <label for="projectNameInput" class="block mb-2 text-sm font-medium">Project Name</label>
                        <input type="text" id="projectNameInput" class="form-input" v-model="ticketForm.projectName" @input="validateField('projectName', ticketForm.projectName, 'Project Name is required.')" />
                        <span v-if="errors.projectName" class="text-red-500">{{ errors.projectName }}</span>
                    </div>
                    <!-- Description -->
                    <div class="col-span-12">
                        <label for="descriptionInput2" class="block mb-2 text-sm font-medium">Description</label>
                        <textarea id="descriptionInput2" rows="3" class="form-input" v-model="ticketForm.description" @input="validateField('description', ticketForm.description, 'Description is required.')"></textarea>
                        <span v-if="errors.description" class="text-red-500">{{ errors.description }}</span>
                    </div>
                    <!-- Keywords -->
                    <div class="col-span-6">
                        <label for="multipleSelect" class="block mb-2 text-sm font-medium">Keywords</label>
                        <select id="multipleSelect" v-model="ticketForm.keywords" @change="validateField('keywords', ticketForm.keywords, 'Keywords are required.')" class="form-select">
                            <option value="">Select</option>
                            <option value="Keyword1">Keyword1</option>
                            <option value="Keyword2">Keyword2</option>
                        </select>
                        <span v-if="errors.keywords" class="text-red-500">{{ errors.keywords }}</span>
                    </div>
                    <!-- Assigned To -->
                    <div class="col-span-6">
                        <label for="assignedToSelect" class="block mb-2 text-sm font-medium">Assigned To</label>
                        <select id="assignedToSelect" v-model="ticketForm.assignedTo" @change="validateField('assignedTo', ticketForm.assignedTo, 'Assignees are required.')" class="form-select">
                            <option value="">Select</option>
                            <option value="User1">User1</option>
                            <option value="User2">User2</option>
                        </select>
                        <span v-if="errors.assignedTo" class="text-red-500">{{ errors.assignedTo }}</span>
                    </div>
                    <!-- Phone -->
                    <div class="col-span-12">
                        <label for="phomenoInput" class="block mb-2 text-sm font-medium">Phone No</label>
                        <input type="tel" id="phomenoInput" class="form-input" v-model="ticketForm.phone" @input="validateField('phone', ticketForm.phone, 'Phone is required.')" />
                        <span v-if="errors.phone" class="text-red-500">{{ errors.phone }}</span>
                    </div>
                    <!-- Submit Button -->
                    <div class="col-span-12 text-right">
                        <button class="btn btn-primary" @click="submitForm">Send Message</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="backdrop-overlay backdrop-blur-xs"></div>
    </div>

</template>