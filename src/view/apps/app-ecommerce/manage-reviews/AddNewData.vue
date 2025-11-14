<script setup lang="ts">
import { X } from 'lucide-vue-next';
import { ref, computed, defineProps } from 'vue';

const props = defineProps({
    showAddReviewForm: Boolean,
    setAddReviewForm: Function,
    addRow: Function,
})
const showEditReviewForm = ref(false);

interface ReviewType {
    star: number;
    userName: string;
    date: string;
    location: string;
    title: string;
    content: string;
}
const reviewForm = ref<ReviewType>({
    star: 0,
    userName: '',
    date: '',
    location: '',
    title: '',
    content: '',
});

const errors = ref<Record<string, string>>({});

let rating = ref(0);
let hovering = ref(0);

const getEmojiForRating = (star: number): string => {
    switch (star) {
        case 1: return '😒';
        case 2: return '🤨';
        case 3: return '😊';
        case 4: return '😚';
        case 5: return '🥰';
        default: return '';
    }
};

// Set rating when user clicks on a star
const setRating = (star: number) => {
    rating.value = star;
    reviewForm.value.star = star;
};

// Validate a single field
const validateField = (fieldName: string, fieldValue: string | number | boolean, errorMessage: string) => {
    if (!fieldValue || fieldValue === '') {
        errors.value[fieldName] = errorMessage;
    } else {
        delete errors.value[fieldName];
    }
};

// Check if there are any errors in the form
const hasErrors = computed(() => Object.keys(errors.value).length > 0);

// Validate the entire form
const validateForm = () => {
    errors.value = {};  // Clear previous errors

    // Validate each field
    validateField('userName', reviewForm.value.userName, 'User name is required.');
    validateField('date', reviewForm.value.date, 'Date is required.');
    validateField('title', reviewForm.value.title, 'Title is required.');
    validateField('location', reviewForm.value.location, 'Location is required.');
    validateField('content', reviewForm.value.content, 'Content is required.');

    // Validate the rating (star)
    if (reviewForm.value.star < 1 || reviewForm.value.star > 5) {
        errors.value.star = 'Star rating must be between 1 and 5.';
    } else {
        delete errors.value.star;
    }

    return Object.keys(errors.value).length === 0;  // Returns true if no errors
};
// Submit form logic
const submitForm = () => {
    // Validate the form
    if (validateForm()) {
        // If form is valid, handle review submission based on the mode (add or edit)
        if (props.showAddReviewForm) {
            errors.value = {};  // Reset errors before adding a new review
            if (props.setAddReviewForm) props.setAddReviewForm(reviewForm.value, false);
            if (props.addRow) props.addRow()
        } else {
        }

        // Reset the form and close the modal
        resetForm();
        // closeModal();
    }
};


// Reset form fields
const resetForm = () => {
    reviewForm.value = {
        star: 0,
        userName: '',
        date: '',
        location: '',
        title: '',
        content: '',
    };
    errors.value = {};
};

// Close modal
const closeModal = () => {
    // props.showAddReviewForm = false;
    if (props.setAddReviewForm) props.setAddReviewForm(false);
    showEditReviewForm.value = false;
};
</script>
<template>
    <div id="addReviewModal" v-show="showAddReviewForm || showEditReviewForm" class="modal ">
        <div class="modal-wrap modal-center">
            <div class="modal-header">
                <h6>{{ showAddReviewForm ? 'Add review' : 'Edit review' }}</h6>
                <button type="button" @click="closeModal" class="link link-red float-end">
                    <X data-lucide="x" class="size-5"></X>
                </button>
            </div>
            <div class="modal-content">
                <form @submit.prevent="submitForm">
                    <div class="grid grid-cols-12 gap-5">
                        <!-- Rating Section -->
                        <div class="col-span-12">
                            <div class="flex flex-col justify-center gap-5">
                                <h6 class="text-center">Your Rating?</h6>
                                <div class="relative flex justify-center gap-3">
                                    <!-- Star rating buttons -->
                                    <div v-for="star in [1, 2, 3, 4, 5]" :key="star"
                                        class="flex justify-center w-10 h-2 transition-all duration-200 rounded-md cursor-pointer"
                                        :class="rating >= star ? 'bg-yellow-500' : 'bg-gray-200 dark:bg-dark-800'"
                                        @click="setRating(star)" @mouseover="hovering = star"
                                        @mouseleave="hovering = 0">
                                        <p class="mt-4 text-2xl pointer-events-none select-none"
                                            :class="(rating === star || hovering === star) ? '' : 'invisible'">
                                            {{ getEmojiForRating(star) }}
                                        </p>
                                    </div>
                                </div>
                                <div class="mt-5">
                                    <label for="rating" class="form-label">Rating Input:</label>
                                    <input id="rating" v-model="reviewForm.star" type="number" class="form-input"
                                        min="1" max="5"
                                        @input="validateField('star', reviewForm.star >= 1 && reviewForm.star <= 5, 'Star is required.')" />
                                    <span v-if="errors.star" class="text-sm text-red-500">{{ errors.star }}</span>
                                </div>
                            </div>
                        </div>

                        <!-- User Name -->
                        <div class="col-span-6">
                            <label for="userNameInput" class="form-label">User Name</label>
                            <input type="text" id="userNameInput" class="form-input" placeholder="User name"
                                v-model="reviewForm.userName"
                                @input="validateField('userName', reviewForm.userName, 'User name is required.')" />
                            <span v-if="errors.userName" class="text-sm text-red-500">{{ errors.userName }}</span>
                        </div>

                        <!-- Date -->
                        <div class="col-span-6">
                            <label for="createDateInput" class="form-label">Create Date</label>
                            <input type="text" placeholder="DD-MM-YYYY" id="createDateInput" v-model="reviewForm.date"
                                class="form-input" data-provider="flatpickr" data-date-format="d M, Y"
                                @input="validateField('date', reviewForm.date, 'Date is required.')" />
                            <span v-if="errors.date" class="text-sm text-red-500">{{ errors.date }}</span>
                        </div>

                        <!-- Location -->
                        <div class="col-span-12">
                            <label for="locationInput" class="form-label">Location</label>
                            <input type="text" id="locationInput" class="form-input" placeholder="Location"
                                v-model="reviewForm.location"
                                @input="validateField('location', reviewForm.location, 'Location is required.')" />
                            <span v-if="errors.location" class="text-sm text-red-500">{{ errors.location }}</span>
                        </div>

                        <!-- Title -->
                        <div class="col-span-12">
                            <label for="titleInput" class="form-label">Title</label>
                            <input type="text" id="titleInput" class="form-input" placeholder="Review title"
                                v-model="reviewForm.title"
                                @input="validateField('title', reviewForm.title, 'Title is required.')" />
                            <span v-if="errors.title" class="text-sm text-red-500">{{ errors.title }}</span>
                        </div>

                        <!-- Content -->
                        <div class="col-span-12">
                            <label for="writeReviewInput" class="form-label">Write your Content</label>
                            <textarea name="writeReviewInput" id="writeReviewInput" rows="3" class="h-auto form-input"
                                v-model="reviewForm.content" placeholder="Enter your description"
                                @input="validateField('content', reviewForm.content, 'Content is required.')"></textarea>
                            <span v-if="errors.content" class="text-sm text-red-500">{{ errors.content }}</span>
                        </div>
                    </div>
                </form>

                <!-- Modal Footer Buttons -->
                <div class="flex justify-end gap-2 mt-5">
                    <button type="button" class="btn btn-active-red" @click="closeModal">Cancel</button>
                    <button type="submit" class="btn btn-primary" :disabled="hasErrors" @click="submitForm">
                        {{ showAddReviewForm ? 'Add review' : 'Update review' }}
                    </button>
                </div>
            </div>
        </div>
        <div class="backdrop-overlay backdrop-blur-xs" @click="closeModal">

        </div>
    </div>
</template>