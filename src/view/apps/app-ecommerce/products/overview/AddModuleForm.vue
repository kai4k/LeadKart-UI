<script setup lang="ts">
import { reactive, ref, watch } from 'vue';
import flatPickr from 'vue-flatpickr-component';
import { reviews } from './overvie-data';
import type { reviewType } from './overvie-data';
import userImg from "@/assets/images/avatar/user-1.png";
import { X } from 'lucide-vue-next';
const props = defineProps({
    showAddModule: Boolean,
    setAddModuleValue: Function,
    showEditModule: Boolean,
    setEditModuleValue: Function,
    rowData: Object,
})


// add new user feedback
const rating = ref(0);
const hovering = ref(0);
const emojis = ['😒', '🤨', '😊', '😚', '🥰'];

let reviewForm = reactive<reviewType | any>({
    reviewId: '',
    image: '',
    star: 0,
    userName: '',
    date: '',
    location: '',
    title: '',
    content: '',
});
watch(() => props.rowData, (newVal) => {
    if (props.showEditModule) {
        reviewForm = newVal as reviewType
    }
    else {
        resetForm()
    }
})
const validateForm = (): boolean => {
    errors.star = '';      // Clear previous error
    errors.userName = '';  // Clear previous error
    errors.date = '';      // Clear previous error
    errors.location = '';  // Clear previous error
    errors.title = '';     // Clear previous error
    errors.content = '';   // Clear previous error

    // Validate each field
    let isValid = true;

    if (!reviewForm.userName) {
        errors.userName = 'User name is required.';
        isValid = false;
    }

    if (!reviewForm.date) {
        errors.date = 'Date is required.';
        isValid = false;
    }

    if (!reviewForm.location) {
        errors.location = 'Location is required.';
        isValid = false;
    }

    if (!reviewForm.title) {
        errors.title = 'Title is required.';
        isValid = false;
    }

    if (!reviewForm.content) {
        errors.content = 'Content is required.';
        isValid = false;
    }

    // Check if star rating is valid
    if (reviewForm.star < 1 || reviewForm.star > 5) {
        errors.star = 'Rating must be between 1 and 5.';
        isValid = false;
    }

    return isValid;
};

let errors = reactive<any>({
    reviewId: '',
    image: '',
    star: '' as string | null,
    userName: '' as string | null,
    date: '' as string | null,
    location: '' as string | null,
    title: '' as string | null,
    content: '' as string | null,
});
const validateField = (field: string) => {
    if (!reviewForm[field]) {
        errors[field] = `${capitalizeFirstLetter(field)} is required.`;
    } else {
        errors[field] = '';
    }
};

const setRating = (value: number) => {
    rating.value = value;
    reviewForm.star = value;
};

function resetForm() {
    rating.value = 0
    reviewForm = {
        reviewId: '',
        image: '',
        star: 0,
        userName: '',
        date: '',
        location: '',
        title: '',
        content: '',
    };
}
const addReview = () => {
    // Convert star value to a string
    const reviewId = reviews.value.length + 1;
    reviews.value.unshift({
        ...reviewForm,
        image: userImg, // Assuming `userImg` is defined somewhere
        star: reviewForm.star.toString(), // Convert to string
        reviewId
    });
    resetForm();
};
const updateReview = () => {
    // Handle edit (find and update review)
    const index: number = reviews.value.findIndex(r => r.userName === reviewForm.userName);
    if (index !== -1) {
        reviews.value[index] = { ...reviewForm, image: reviews.value[index].image };
    }
    resetForm();
};
const submitForm = () => {
    if (validateForm()) {
        if (props.showAddModule) {
            addReview();  // Add the review if validation passes
        } else {
            //   updateReview();  // Update the review if validation passes
        }
        closeModal();  // Close the modal after submission
    }
};

const closeModal = () => {
    if (props.setAddModuleValue) props.setAddModuleValue(false)
    if (props.setEditModuleValue) props.setEditModuleValue(false)
};

const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};
// Handle Rating Input Change
const handleRatingInput = () => {
    const ratingValue = reviewForm.star;
    if (ratingValue < 1 || ratingValue > 5) {
        errors.star = 'Rating must be between 1 and 5.';
    } else {
        delete errors.star;
        rating.value = ratingValue;  // Sync rating with the input field
    }
};

</script>
<template>
    <div v-if="showAddModule || showEditModule" class="modal">
        <div class="modal-wrap modal-center">
            <div class="modal-header">
                <h6>{{ showAddModule ? 'Add Review' : 'Edit Review' }}</h6>
                <button @click="closeModal" class="link link-red float-end">
                    <X data-lucide="x" class="size-5"></X>
                </button>
            </div>
            <div class="modal-content">
                <form @submit.prevent="submitForm">
                    <div class="grid grid-cols-12 gap-5">
                        <div class="col-span-12">
                            <div class="flex flex-col justify-center gap-5">
                                <h6 class="text-center">Your Rating?</h6>
                                <div class="relative flex justify-center gap-3">
                                    <div v-for="i in 5" :key="i"
                                        class="flex justify-center w-10 h-2 transition-all duration-200 rounded-md cursor-pointer"
                                        :class="rating >= i ? 'bg-yellow-500' : 'bg-gray-200 dark:bg-dark-800'"
                                        @click="setRating(i)" @mouseover="hovering = i" @mouseleave="hovering = 0">
                                        <p class="mt-4 text-2xl pointer-events-none select-none"
                                            :class="rating === i || hovering === i ? '' : 'invisible'">
                                            {{ emojis[i - 1] }}
                                        </p>
                                    </div>
                                </div>
                                <!-- Rating Input (Manually) -->
                                <div class="mt-5">
                                    <label for="rating" class="form-label">Rating Input:</label>
                                    <input id="rating" type="number" class="form-input" v-model="reviewForm.star"
                                        @input="handleRatingInput" placeholder="1 to 5" />
                                    <div v-if="errors.star" class="text-sm text-red-500">{{ errors.star }}</div>
                                </div>
                            </div>
                        </div>
                        <!-- User Name Input -->
                        <div class="col-span-6">
                            <label for="userNameInput" class="form-label">User Name</label>
                            <input type="text" id="userNameInput" class="form-input" v-model="reviewForm.userName"
                                @input="validateField('userName')" placeholder="User name" />
                            <div v-if="errors.userName" class="text-sm text-red-500">{{ errors.userName }}</div>
                        </div>

                        <!-- Date Input -->
                        <div class="col-span-6">
                            <label for="createDateInput" class="form-label">Create Date</label>
                            <flat-pickr type="text" id="createDateInput" class="form-input" v-model="reviewForm.date"
                                placeholder="DD-MM-YYYY" @input="validateField('date')" />
                            <div v-if="errors.date" class="text-sm text-red-500">{{ errors.date }}</div>
                        </div>

                        <!-- Location Input -->
                        <div class="col-span-12">
                            <label for="locationInput" class="form-label">Location</label>
                            <input type="text" id="locationInput" class="form-input" v-model="reviewForm.location"
                                @input="validateField('location')" placeholder="Location" />
                            <div v-if="errors.location" class="text-sm text-red-500">{{ errors.location }}</div>
                        </div>

                        <!-- Title Input -->
                        <div class="col-span-12">
                            <label for="titleInput" class="form-label">Title</label>
                            <input type="text" id="titleInput" class="form-input" v-model="reviewForm.title"
                                @input="validateField('title')" placeholder="Review title" />
                            <div v-if="errors.title" class="text-sm text-red-500">{{ errors.title }}</div>
                        </div>

                        <!-- Content Input -->
                        <div class="col-span-12">
                            <label for="writeReviewInput" class="form-label">Write your Content</label>
                            <textarea id="writeReviewInput" class="h-auto form-input" rows="3"
                                v-model="reviewForm.content" @input="validateField('content')"
                                placeholder="Enter your description"></textarea>
                            <div v-if="errors.content" class="text-sm text-red-500">{{ errors.content }}</div>
                        </div>
                    </div>

                    <div class="flex justify-end gap-2 mt-5">
                        <button type="button" class="btn btn-active-red" @click="closeModal">Cancel</button>
                        <button type="submit" class="btn btn-primary">{{ showAddModule ? 'Add Review' :
                            'Update Review'
                            }}</button>
                    </div>
                </form>
            </div>
        </div>
        <div class="backdrop-overlay backdrop-blur-xs" id="backDropDiv" @click="closeModal"></div>
    </div>
</template>