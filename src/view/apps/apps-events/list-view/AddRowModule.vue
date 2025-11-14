<script setup lang="ts">
import { Upload, X } from 'lucide-vue-next';
import { ref, watch } from 'vue';
import { eventsListData } from './event-data';
import flatPickr from 'vue-flatpickr-component';
// import 'flatpickr/dist/flatpickr.css';
const props = defineProps({
    showModule: Boolean,
    setModuleValue: Function,
    showEditModule: Boolean,
    setEditModuleValue: Function,
    editDetails: Object,
})

export interface EventType {
    ID?: string | number;
    image: string;
    eventName: string;
    eventDate: string;
    time: string;
    peopleSize: string;
    location: string;
    eventType: string;
    price: string;
    status: string;
}
interface Errors {
    [key: string]: string | null;
}

let eventForm = ref<EventType>({
    ID: '',
    eventDate: '',
    time: '',
    eventName: '',
    eventType: '',
    image: '',
    location: '',
    peopleSize: '',
    price: '',
    status: '',
});

watch(() => props.editDetails, (newData) => {
    if (newData) eventForm.value = { ...newData } as EventType
})
const errors = ref<Errors | any>({}); // To store field validation errors

const validateField = (fieldName: string, fieldValue: string | number, errorMessage: string = '') => {
    if (!fieldValue || fieldValue.toString().trim() === '') {
        errors.value[fieldName] = errorMessage;
    } else {
        delete errors.value[fieldName]; // Remove error if field is valid
    }
};

const validateForm = () => {
    errors.value = {}; // Clear errors before validation
    validateField('eventName', eventForm.value.eventName, 'Event name is required.');
    validateField('eventDate', eventForm.value.eventDate, 'Date is required.');
    validateField('location', eventForm.value.location, 'Location is required.');
    validateField('peopleSize', eventForm.value.peopleSize, 'People size is required.');
    validateField('price', eventForm.value.price, 'Price is required.');
    validateField('time', eventForm.value.time, 'Time is required.');
    validateField('status', eventForm.value.status, 'Status is required.');
    validateField('eventType', eventForm.value.eventType, 'Event type is required.');
    validateField('image', eventForm.value.image, 'Image is required.');
    return Object.keys(errors.value).length === 0; // Ensure no errors
};

const fileChosen = (e: Event) => {
    const file = (e.target as HTMLInputElement).files?.[0];
    if (file) {
        eventForm.value.image = URL.createObjectURL(file);
    }
};

const submitForm = () => {
    // Trigger validation before submitting
    if (validateForm()) {
        // Add or update event based on showModule state
        if (props.showModule) {
            addContact()
        } else {
            updateEvent();
        }

        closeModal();
    } else {
    }
};

const addContact = () => {
    const ID = eventsListData.value.length + 1
    eventsListData.value.unshift({ ...eventForm.value, ID })
};


const updateEvent = () => {
    const index = eventsListData.value.findIndex((event) => event.ID === eventForm.value.ID);
    if (index !== -1) {
        eventsListData.value[index] = { ...eventForm.value };
    }
    resetForm();
};

const resetForm = () => {
    Object.assign(eventForm, {
        ID: '',
        eventDate: '',
        time: '',
        eventName: '',
        eventType: '',
        image: '',
        location: '',
        peopleSize: '',
        price: '',
        status: '',
    });
    errors.value = {};
};

const closeModal = () => {
    if (props.setModuleValue) props.setModuleValue(false)
    if (props.setEditModuleValue) props.setEditModuleValue(false)
    resetForm();
};
const timePickerConfig = {
    enableTime: true,
    noCalendar: true,
    dateFormat: 'H:i',
    time_24hr: true
};
</script>
<template>
    <div v-if="showModule || showEditModule" id="addEventModal" class="modal">
        <div class="modal-wrap modal-center">
            <div class="modal-header">
                <h6>{{ showModule ? 'Add New Event' : 'Edit Event' }}</h6>
                <button type="button" @click="closeModal" class="link link-red ltr:float-end rtl:float-start">
                    <X data-lucide="x" class="size-5"></X>
                </button>
            </div>
            <div class="modal-content">
                <div class="grid grid-cols-12 gap-5">
                    <!-- Event Logo -->
                    <div class="col-span-12">
                        <h6 class="form-label">Event Logo</h6>
                        <div>
                            <label for="logo">
                                <span
                                    class="inline-flex items-center justify-center w-full h-32 overflow-hidden bg-gray-100 border border-gray-200 rounded-md cursor-pointer dark:bg-dark-850 dark:border-dark-800">
                                    <img v-if="eventForm.image" :src="eventForm.image" class="object-cover h-24" />
                                    <span v-else class="flex flex-col items-center text-gray-500">
                                        <Upload></Upload>
                                        <span class="block mt-3">Upload Your Event Logo</span>
                                    </span>
                                </span>
                            </label>
                            <div class="hidden">
                                <label class="block">
                                    <span class="sr-only">Choose event logo</span>
                                    <input type="file" id="logo" @change="fileChosen"
                                        class="block w-full text-sm file:rounded-md focus:outline-0 text-slate-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100" />
                                </label>
                            </div>
                        </div>
                        <span v-if="errors.image" class="text-red-500">{{ errors.image }}</span>
                    </div>

                    <!-- Event Name -->
                    <div class="col-span-12">
                        <label for="eventNameInput" class="form-label">Event Name</label>
                        <input type="text" id="eventNameInput" class="form-input" placeholder="Event name"
                            v-model="eventForm.eventName"
                            @input="validateField('eventName', eventForm.eventName, 'Event name is required.')"
                            :class="{ 'border-red-500': errors.eventName }" />
                        <span v-if="errors.eventName" class="text-red-500">{{ errors.eventName }}</span>
                    </div>

                    <!-- Event Date -->
                    <div class="col-span-6">
                        <label for="eventDateInput" class="form-label">Event Date</label>
                        <flat-pickr type="text" placeholder="YYYY-MM-DD" id="eventDateInput" class="form-input"
                            v-model="eventForm.eventDate"
                            @input="validateField('eventDate', eventForm.eventDate, 'Date is required.')"
                            :class="{ 'border-red-500': errors.eventDate }" ref="datePicker" />
                        <span v-if="errors.eventDate" class="text-red-500">{{ errors.eventDate }}</span>
                    </div>

                    <!-- Event Duration -->
                    <div class="col-span-6">
                        <label for="eventDurationInput" class="form-label">Event Duration</label>
                        <flat-pickr type="text" :config="timePickerConfig" placeholder="00:00" id="eventDurationInput"
                            class="form-input" v-model="eventForm.time"
                            @input="validateField('time', eventForm.time, 'Time is required.')"
                            :class="{ 'border-red-500': errors.time }" ref="timePicker" />
                        <span v-if="errors.time" class="text-red-500">{{ errors.time }}</span>
                    </div>

                    <!-- Total People -->
                    <div class="col-span-6">
                        <label for="peopleInput" class="form-label">Total People</label>
                        <input type="number" placeholder="0" id="peopleInput" class="form-input"
                            v-model="eventForm.peopleSize"
                            @input="validateField('peopleSize', eventForm.peopleSize, 'People size is required.')"
                            :class="{ 'border-red-500': errors.peopleSize }" />
                        <span v-if="errors.peopleSize" class="text-red-500">{{ errors.peopleSize }}</span>
                    </div>

                    <!-- Price -->
                    <div class="col-span-6">
                        <label for="priceInput" class="form-label">Price</label>
                        <input type="number" placeholder="$00.00" id="priceInput" class="form-input"
                            v-model="eventForm.price"
                            @input="validateField('price', eventForm.price, 'Price is required.')"
                            :class="{ 'border-red-500': errors.price }" />
                        <span v-if="errors.price" class="text-red-500">{{ errors.price }}</span>
                    </div>

                    <!-- Location -->
                    <div class="col-span-12">
                        <label for="locationInput" class="form-label">Location</label>
                        <input type="text" placeholder="Enter event location" id="locationInput" class="form-input"
                            v-model="eventForm.location"
                            @input="validateField('location', eventForm.location, 'Location is required.')"
                            :class="{ 'border-red-500': errors.location }" />
                        <span v-if="errors.location" class="text-red-500">{{ errors.location }}</span>
                    </div>

                    <!-- Event Type -->
                    <div class="col-span-6">
                        <label for="eventTypeSelect" class="form-label">Event Type</label>
                        <select class="form-select" id="eventTypeSelect" v-model="eventForm.eventType"
                            @change="validateField('eventType', eventForm.eventType)"
                            :class="{ 'border-red-500': errors.eventType }">
                            <option value="">Select event type</option>
                            <option value="Offline">Offline</option>
                            <option value="Online">Online</option>
                        </select>
                        <span v-if="errors.eventType" class="text-red-500">{{ errors.eventType }}</span>
                    </div>

                    <!-- Status -->
                    <div class="col-span-6">
                        <label for="statusSelect" class="form-label">Status</label>
                        <select class="form-select" id="statusSelect" v-model="eventForm.status"
                            @change="validateField('status', eventForm.status)"
                            :class="{ 'border-red-500': errors.status }">
                            <option value="">Select status</option>
                            <option value="Published">Published</option>
                            <option value="Expired">Expired</option>
                            <option value="Coming Soon">Coming Soon</option>
                        </select>
                        <span v-if="errors.status" class="text-red-500">{{ errors.status }}</span>
                    </div>
                </div>

                <div class="flex justify-end gap-2 mt-5">
                    <button type="button" @click="closeModal" class="btn btn-active-red">Cancel</button>
                    <button class="btn btn-primary" @click="submitForm">{{ showModule ? 'Add Event' : 'Edit Event'
                        }}</button>
                </div>
            </div>
        </div>
        <div @click="closeModal" class="backdrop-overlay backdrop-blur-xs" id="backDropDiv"></div>
    </div>
</template>