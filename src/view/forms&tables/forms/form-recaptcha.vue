<script lang="ts" setup>
import PageHeading from '@/components/common/PageHeading.vue';
import { ref, onMounted } from 'vue';

// ReCAPTCHA site key
const siteKey = '6LeSW08qAAAAABXVMqQWldnm7_C2z2nxGmnKb06H';

// Interface for form data structure
interface FormData {
    name: string;
    email: string;
    message: string;
}

// Reactive form data
const formData = ref<FormData>({
    name: '',
    email: '',
    message: '',
});

const submitted = ref(false);
const isSubmitting = ref(false);

// Dynamically load the reCAPTCHA script
function loadRecaptchaScript() {
    return new Promise((resolve, reject) => {
        // @ts-ignore
        if (window.grecaptcha) {
            resolve(window);
            return;
        }

        const script = document.createElement('script');
        script.src = 'https://www.google.com/recaptcha/api.js';
        script.async = true;
        script.defer = true;

        script.onload = () => resolve(window);
        script.onerror = () => reject('Failed to load reCAPTCHA script');
        document.head.appendChild(script);
    });
}

// Submit form function
async function submitForm() {
    try {
        // Wait for the reCAPTCHA script to load
        await loadRecaptchaScript();
        // @ts-ignore
        const recaptchaResponse = grecaptcha?.getResponse();

        if (!recaptchaResponse) {
            alert('Please complete the reCAPTCHA verification.');
            return;
        }

        // Set submitting state to true
        isSubmitting.value = true;

        // Simulate successful form submission
        setTimeout(() => {
            submitted.value = true;
            resetForm();
        }, 2000);
    } catch (error) {
        console.error(error);
        alert('There was an error with reCAPTCHA. Please try again.');
    }
}

// Reset the form after successful submission
function resetForm() {
    formData.value.name = '';
    formData.value.email = '';
    formData.value.message = '';
    submitted.value = false;
    // @ts-ignore
    grecaptcha.reset();
}

// Ensure the script is loaded when the component is mounted
onMounted(() => {
    loadRecaptchaScript().catch(err => console.error(err));
});
</script>
<template>
    <PageHeading title="reCAPTCHA" sub-title="Forms" />
    <div class="grid grid-cols-12">
        <div class="col-span-12 card">
            <div class="card-header">
                <h6 class="card-title">reCAPTCHA</h6>
            </div>
            <div class="card-body">
                <p class="mb-4 text-gray-500 dark:text-dark-500">reCAPTCHA protects your website from fraud and abuse
                    without creating friction.</p>
                <div class="max-w-md p-6 mx-auto rounded-md shadow-md shadow-gray-200 dark:shadow-dark-800">
                    <form @submit.prevent="submitForm">
                        <div class="mb-4">
                            <label for="name" class="form-label">Name:</label>
                            <input type="text" id="name" v-model="formData.name" placeholder="Your Name"
                                class="form-input" />
                        </div>
                        <div class="mb-4">
                            <label for="email" class="form-label">Email:</label>
                            <input type="email" id="email" v-model="formData.email" placeholder="Your Email"
                                class="form-input" />
                        </div>
                        <div class="mb-4">
                            <label for="message" class="form-label">Message:</label>
                            <textarea id="message" v-model="formData.message" rows="4" placeholder="Your Message"
                                class="h-auto form-input"></textarea>
                        </div>
                        <div class="mb-4" v-if="!submitted">
                            <div class="g-recaptcha" :data-sitekey="siteKey"></div>
                        </div>
                        <div class="mb-4" v-if="submitted">
                            <p class="font-bold text-green-600">Form submitted successfully!</p>
                        </div>
                        <button type="submit" :disabled="isSubmitting" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>