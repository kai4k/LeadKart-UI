<script setup lang="ts">
import { X } from 'lucide-vue-next';
import { ref, nextTick } from 'vue';

const props = defineProps({
    showModule: Boolean,
    setModuleValue: Function,
})
// Type definitions
type OtpValues = string[];

// Reactive state
const otpValues = ref<OtpValues>(['', '', '', '', '', '']); // Store OTP input values
// const isModalOpen = ref(true); // Modal visibility

// Reference for input fields
const otpInput = ref<(HTMLInputElement | null)[]>([]);

// Function to move focus between OTP inputs
const moveFocus = (index: number) => {
    if (otpValues.value[index].length === 1 && index < 5) {
        nextTick(() => {
            otpInput.value[index + 1]?.focus(); // Move focus to next input
        });
    } else if (otpValues.value[index].length === 0 && index > 0) {
        nextTick(() => {
            otpInput.value[index - 1]?.focus(); // Move focus to previous input
        });
    }
};

// Close the modal
const closeModal = () => {
    // isModalOpen.value = false;
    if (props.setModuleValue) props.setModuleValue(false)
    isModalVisible.value = false;

};

// Function to verify OTP and submit the form
const verifyOtp = () => {
    const otpCode = otpValues.value.join(''); // Join OTP values into one string
    if (otpCode.length === 6) {
        isModalVisible.value = true
        if (props.setModuleValue) props.setModuleValue(false)
    } else {
        alert('Please enter a valid 6-digit OTP');
    }
};

// verify opt on enter key press
// New types and variables
type VerificationCode = string[];

const isModalVisible = ref(false); // Controls modal visibility
const email = ref('sophiamia@example.com'); // The email to which the code was sent
const verificationCode = ref<VerificationCode>(['', '', '', '']); // Store the verification code input

// Refs to manage focus between inputs
const codeInput = ref<(HTMLInputElement | null)[]>([]);

// Function to move focus to the next input after a value is entered
const moveFocusToNext = (index: number) => {
    if (verificationCode.value[index].length === 1 && index < 3) {
        nextTick(() => {
            codeInput.value[index + 1]?.focus(); // Move focus to the next input
        });
    } else if (verificationCode.value[index].length === 0 && index > 0) {
        nextTick(() => {
            codeInput.value[index - 1]?.focus(); // Move focus to the previous input
        });
    }
};

// Function to handle the form submission
const handleVerifyCode = () => {
    const code = verificationCode.value.join(''); // Combine the code into a single string
    if (code.length === 4) {
        closeModal(); // Close the modal after successful submission
    } else {
        alert('Please enter a valid 4-digit code');
    }
};
</script>
<template>
    <div v-if="showModule" class="modal">
        <div class="modal-wrap modal-center">
            <div class="modal-header">
                <h6>Set up two-factor authentication</h6>
                <button @click="closeModal" class="link link-red">
                    <X class="size-5"></X>
                </button>
            </div>
            <div class="modal-content">
                <p class="mb-2 text-gray-500 dark:text-dark-500">
                    To authorize transactions, kindly scan this QR code with your Google Authenticator App and then
                    enter the verification code provided below.
                </p>
                <div class="p-4 mb-3">
                    <img src="@/assets/images/others/qr.png" alt="" class="mx-auto size-28" />
                </div>
                <form @submit.prevent="verifyOtp">
                    <div class="flex items-center justify-center gap-3">
                        <input v-for="(otp, index) in otpValues" :key="index" type="text"
                            class="text-2xl font-extrabold text-center text-gray-900 bg-gray-100 border border-transparent rounded outline-none appearance-none size-14 dark:text-dark-50 hover:border-gray-200 dark:hover:border-dark-800 dark:bg-dark-850 focus:bg-white dark:focus:bg-dark-900 focus:border-primary-400 dark:focus:border-primary-400 focus:ring-2 focus:ring-primary-500/10"
                            maxlength="1" v-model="otpValues[index]" @input="moveFocus(index)" ref="otpInput" />
                    </div>
                    <div class="mt-5">
                        <button type="submit" class="w-full btn btn-primary">Verify Account</button>
                    </div>
                </form>
            </div>
        </div>
        <div class="backdrop-overlay backdrop-blur-xs" @click="closeModal"></div>
    </div>

    <!-- Verify OTP Modal -->
    <div v-if="isModalVisible" class="modal">
        <div class="modal-wrap modal-center modal-sm">
            <div class="modal-content p-7">
                <div class="mb-5 text-center">
                    <h6 class="mb-2 text-16">Please check your email</h6>
                    <p class="mb-2 text-gray-500 dark:text-dark-500">
                        We've sent a code to <b>{{ email }}</b>
                    </p>
                </div>
                <form @submit.prevent="handleVerifyCode">
                    <div class="flex items-center justify-center gap-3">
                        <input v-for="(code, index) in verificationCode" :key="index" type="text"
                            class="text-2xl font-extrabold text-center text-gray-900 bg-gray-100 border border-transparent rounded outline-none appearance-none size-14 dark:text-dark-50 hover:border-gray-200 dark:hover:border-dark-800 dark:bg-dark-850 focus:bg-white dark:focus:bg-dark-900 focus:border-primary-400 dark:focus:border-primary-400 focus:ring-2 focus:ring-primary-500/10"
                            maxlength="1" v-model="verificationCode[index]" @input="moveFocusToNext(index)"
                            ref="codeInput" />
                    </div>
                    <div class="flex items-center gap-2 mt-5">
                        <button type="button" @click="closeModal" class="w-full btn btn-active-red">
                            Cancel
                        </button>
                        <button type="submit" class="w-full btn btn-primary">
                            Verify
                        </button>
                    </div>
                </form>
            </div>
        </div>
        <div class="backdrop-overlay backdrop-blur-xs" @click="closeModal"></div>
    </div>
</template>