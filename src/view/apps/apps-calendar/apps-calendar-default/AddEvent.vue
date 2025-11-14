<script setup lang="ts">
import { ref, reactive, defineProps } from 'vue';
import flatPickr from 'vue-flatpickr-component';
import { CalendarCheck, Clock, X } from 'lucide-vue-next';
import { events } from './evnet-data';
const props = defineProps({
    showModal: Boolean,
    modalTitle: String,
    setModalValue: Function
});

const errors = ref<any>({
    eventName: '',
    eventDate: '',
    endEventDate: '',
    eventTime: '',
    color: '',
    location: '',
    guestEmail: ''
});

const form = reactive({
    title: '',
    start: '',
    end: '',
    eventTime: '',
    classNames: '',
    location: '',
    guestEmail: '',
    extendedProps: []
});

const validateField = (fieldName: string, value: string) => {
    if (!value) {
        errors.value[fieldName] = `${fieldName.replace(/([A-Z])/g, ' $1')} is required.`;
    } else {
        delete errors.value[fieldName];
    }
};

const addGuest = () => {
    if (form.guestEmail) {
        form.guestEmail = '';
    }
};

const removeGuest = (index: number) => {
    form.extendedProps.splice(index, 1);
};

const handleSubmit = () => {
    if (validateForm()) {
        addEventData()
        resetForm()
        closeModal()
    }
};

const validateForm = () => {
    validateField('eventName', form.title);
    validateField('eventDate', form.start);
    validateField('endEventDate', form.end);
    validateField('eventTime', form.eventTime);
    validateField('color', form.classNames);
    validateField('location', form.location);
    validateField('guestEmail', form.guestEmail);

    return Object.keys(errors.value).length === 0;
};

const addEventData = () => {
    const end = new Date(form.end);
    const start = new Date(form.start);
    events.value.push({
        ...form, end, start, classNames: [form.classNames, "hover:bg-primary-500",
            "text-primary-50",]
    })
}

const resetForm = () => {
    errors.value = {};
    form.title = '';
    form.start = '';
    form.end = '';
    form.eventTime = '';
    form.classNames = '';
    form.location = '';
    form.guestEmail = '';
    form.extendedProps = [];
};

const closeModal = () => {
    if (props.setModalValue) props.setModalValue(false);
    errors.value = {};
};
</script>

<template>
    <div id="addEventModal" v-if="showModal" class="modal">

        <div class="modal-wrap modal-center modal-lg">
            <div class="modal-header">
                <h6>Add Event</h6>
                <button data-modal-close="addEventModal" class="link link-red" @click="closeModal">
                    <X class="size-5"></X>
                </button>
            </div>
            <div class="modal-content">
                <form id="eventForm" @submit.prevent="handleSubmit">
                    <div class="grid grid-cols-12 gap-space">
                        <div class="col-span-12">
                            <label for="eventNameInput" class="form-label">Event Name</label>
                            <input type="text" id="eventNameInput" class="form-input" placeholder="Enter event name"
                                v-model="form.title" @input="validateField('eventName', form.title)">
                            <span v-if="errors.eventName" class="text-red-500">{{ errors.eventName }}</span>
                        </div>
                        <div class="col-span-4">
                            <label for="eventDateInput" class="form-label">Event Date</label>
                            <div class="relative group/form right">
                                <flat-pickr data-date-format="d M, Y" type="text" id="eventDateInput"
                                    class="ltr:pl-9 rtl:pr-9 form-input" placeholder="Select date" v-model="form.start"
                                    @input="validateField('eventDate', form.start)" />
                                <button
                                    class="absolute inset-y-0 flex items-center text-gray-500 dark:text-dark-500 ltr:left-3 rtl:right-3 focus:outline-none">
                                    <CalendarCheck class="size-4"></CalendarCheck>
                                </button>
                            </div>
                            <span v-if="errors.eventDate" class="text-red-500">{{ errors.eventDate }}</span>
                        </div>
                        <div class="col-span-4">
                            <label for="endEventDateInput" class="form-label">End Date</label>
                            <div class="relative group/form right">
                                <flat-pickr data-date-format="d M, Y" type="text" id="endEventDateInput"
                                    class="ltr:pl-9 rtl:pr-9 form-input" placeholder="Select date" v-model="form.end"
                                    @input="validateField('endEventDate', form.end)" />
                                <button
                                    class="absolute inset-y-0 flex items-center text-gray-500 dark:text-dark-500 ltr:left-3 rtl:right-3 focus:outline-none">
                                    <CalendarCheck data-lucide="calendar-check" class="size-4"></CalendarCheck>
                                </button>
                            </div>
                            <span v-if="errors.endEventDate" class="text-red-500">{{ errors.endEventDate }}</span>
                        </div>
                        <div class="col-span-4">
                            <label for="eventTimeInput" class="form-label">Event Time</label>
                            <div class="relative group/form right">
                                <input data-provider="timepickr" data-time-basic="true" type="text" id="eventTimeInput"
                                    class="ltr:pl-9 rtl:pr-9 form-input" placeholder="Select time"
                                    v-model="form.eventTime" @input="validateField('eventTime', form.eventTime)">
                                <button
                                    class="absolute inset-y-0 flex items-center text-gray-500 dark:text-dark-500 ltr:left-3 rtl:right-3 focus:outline-none">
                                    <Clock class="size-4"></Clock>
                                </button>
                            </div>
                            <span v-if="errors.eventTime" class="text-red-500">{{ errors.eventTime }}</span>
                        </div>
                        <div class="col-span-12">
                            <label for="colorInput" class="form-label">Color</label>
                            <select id="colorInput" class="form-select" v-model="form.classNames"
                                @change="validateField('color', form.classNames)">
                                <option value="" disabled>Select color</option>
                                <option value="bg-primary-500">Primary</option>
                                <option value="bg-green-500">Green</option>
                                <option value="bg-purple-500">Purple</option>
                            </select>
                            <span v-if="errors.color" class="text-red-500">{{ errors.color }}</span>
                        </div>
                        <div class="col-span-12">
                            <label for="locationInput" class="form-label">Location</label>
                            <input type="text" id="locationInput" class="form-input" placeholder="Enter location"
                                v-model="form.location" @input="validateField('location', form.location)">
                            <span v-if="errors.location" class="text-red-500">{{ errors.location }}</span>
                        </div>
                        <div class="col-span-12">
                            <label for="guestInput" class="form-label">Add Guests</label>
                            <div class="relative">
                                <input type="email" id="guestInput" class="ltr:pr-14 rtl:pl-14 form-input"
                                    placeholder="example@example.com" v-model="form.guestEmail"
                                    @input="validateField('guestEmail', form.guestEmail)">
                                <button type="button" @keydown.enter="addGuest" @click="addGuest" id="addGuestButton"
                                    class="absolute btn ltr:right-1.5 rtl:left-1.5 top-1.5 btn-sub-primary btn-sm">Add</button>
                                <span v-if="errors.guestEmail" class="text-red-500">{{ errors.guestEmail }}</span>
                            </div>
                            <div class="flex gap-2 mt-2" id="guestList">
                                <template v-if="form.extendedProps.length >= 0">
                                    <template v-for="(guest, index) in form.extendedProps" :key="index">
                                        <div class="relative rounded-full size-9">
                                            <img :src="guest" alt="Guest Avatar" class="w-8 h-8 rounded-full">
                                            <a href="#!" @click="removeGuest(index)"
                                                class="absolute flex items-center justify-center text-white bg-gray-500 border-2 border-white rounded-full dark:bg-dark-500 dark:border-dark-900 size-4 -top-1 -right-1">
                                                <i class="text-xs ri-close-line"></i>
                                            </a>
                                        </div>
                                    </template>
                                </template>
                            </div>
                        </div>
                        <div class="col-span-12">
                            <div class="flex items-center justify-end gap-2">
                                <button type="button" id="closebutton" @click="closeModal"
                                    data-modal-close="addEventModal" class="btn btn-active-red">Cancel</button>
                                <button type="submit" class="btn btn-primary">{{ showModal ? 'Add Event' :
                                    'Update Event'
                                    }}</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        <div class="backdrop-overlay backdrop-blur-xs" @click="closeModal"></div>
    </div>
</template>
