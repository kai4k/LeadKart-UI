<script setup lang="ts">
import { Camera, CircleCheckBig, Eye, EyeOff, Home, MoveLeft, MoveRight, User, UserCircle, UserRound } from 'lucide-vue-next';
import PageHeading from '../../components/common/PageHeading.vue';
import CardBody from './forms/common-components/CardComponent.vue';
import { ref, reactive } from "vue";
const form = reactive({
    firstName: "",
    email: "",
    passwords: "",
    gender: "",
    profession: "",
    imageForm: "",
});

const step = ref<any>(1);
const passwordStrengthText = ref("");
const showPassword = ref(false)
const errors = reactive<any>({
    firstName: "",
    email: "",
    passwords: "",
    gender: "",
    profession: "",
    // imageForm: "",
});

const togglePassword = () => {
    showPassword.value = !showPassword.value
};

function handleImageChange(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input?.files ? input.files[0] : null;
    if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
            form.imageForm = reader.result as string;
        };
        reader.readAsDataURL(file);
    }
}

function checkPasswordStrength() {
    const password = form.passwords;
    if (password.length < 8) {
        passwordStrengthText.value = "Too weak";
    } else if (password.length >= 8 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password) && /[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        passwordStrengthText.value = "Strong password";
    } else {
        passwordStrengthText.value = "Could be stronger";
    }
}

function clearError(field: string) {
    errors[field] = "";
}

function prevStep() {
    step.value--;
}

function nextStep() {
    step.value++;
}

function validateStep(step: number) {
    switch (step) {
        case 1:
            if (!form.firstName) errors.firstName = "First name is required";
            if (!form.email) errors.email = "Email is required";
            // if (!form.imageForm) errors.imageForm = "Profile picture is required";
            if (!errors.firstName && !errors.email && !errors.imageForm) nextStep();
            break;
        case 2:
            if (!form.passwords) errors.passwords = "Password is required";
            if (!errors.passwords) nextStep();
            break;
        case 3:
            if (!form.gender) errors.gender = "Gender is required";
            if (!form.profession) errors.profession = "Profession is required";
            if (!errors.gender && !errors.profession) submitForm();
            break;
    }
}

function submitForm() {
    showPassword.value = false;
    passwordStrengthText.value = ""
    step.value = "complete";
}

function resetForm() {
    step.value = 1;
    Object.assign(form, {
        firstName: "",
        email: "",
        passwords: "",
        gender: "",
        profession: "",
        imageForm: "",
    });
    Object.assign(errors, {
        firstName: "",
        email: "",
        passwords: "",
        gender: "",
        profession: "",
        imageForm: "",
    });
}
</script>
<template>
    <PageHeading title="Basic Wizard" sub-title="Forms Wizard" />
    <CardBody :full-width="true" title="Multi Step Form">
        <div>
            <div class="w-full lg:max-w-[600px] mx-auto">
                <div class="card">
                    <div class="card-body">
                        <div v-if="step === 'complete'">
                            <div class="flex items-center justify-between text-center">
                                <div>
                                    <CircleCheckBig data-lucide="circle-check-big" class="mx-auto my-4 text-green-500 fill-green-500/10 size-8"/>
                                    <h4 class="mb-2">Registration Success</h4>
                                    <div class="mb-8 text-gray-500 md:mx-10 dark:text-dark-500">
                                        Thank you. We have sent you an email to info@example.com. Please click the
                                        link in the message to activate your account.
                                    </div>
                                    <button @click="resetForm" class="btn btn-sub-gray">
                                        <Home data-lucide="home" class="inline-block -mt-1 ltr:mr-1 rtl:ml-1 size-4"/>
                                        Back to home
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div v-else>
                            <!-- Top Navigation -->
                            <div class="py-4 border-b border-gray-200 dark:border-dark-800">
                                <h6 class="mb-1 text-xs text-gray-500 uppercase dark:text-dark-500">{{ `Step: ${step} of
                                    3` }}</h6>
                                <div class="flex flex-col md:flex-row md:items-center md:justify-between">
                                    <div class="flex-1">
                                        <div v-if="step === 1">
                                            <h5>Your Profile</h5>
                                        </div>
                                        <div v-if="step === 2">
                                            <h5>Your Password</h5>
                                        </div>
                                        <div v-if="step === 3">
                                            <h5>Tell me about yourself</h5>
                                        </div>
                                    </div>
                                    <div class="flex items-center md:w-64">
                                        <div class="w-full bg-gray-200 rounded-full dark:bg-dark-800 rtl:ml-2 ltr:mr-2">
                                            <div class="h-2 text-xs leading-none text-center text-white bg-green-500 rounded-full" :style="{ width: `${(step / 3) * 100}%` }"></div>
                                        </div>
                                        <h6 class="w-10 text-xs text-gray-500 dark:text-dark-500">{{ Math.floor((step /
                                            3) * 100) }}%</h6>
                                    </div>
                                </div>
                            </div>
                            <!-- /Top Navigation -->

                            <!-- Step Content -->
                            <div class="pt-10 pb-5">
                                <!-- Step 1: Profile -->
                                <div v-if="step === 1">
                                    <div class="mb-5 text-center">
                                        <div class="relative w-32 h-32 mx-auto mb-4 overflow-hidden bg-gray-200 border rounded-full shadow-inset dark:border-dark-800">
                                            <img :src="form.imageForm" v-if="form.imageForm" class="object-cover w-full h-32 rounded-full" />
                                            <UserRound class="object-cover w-full h-40 rounded-full fill-gray-400" stroke-width="0" />
                                        </div>
                                        <label for="fileInput" class="inline-block px-4 py-2 font-medium text-left text-gray-500 border border-gray-200 rounded-lg cursor-pointer dark:border-dark-800 dark:text-dark-500">
                                            <Camera data-lucide="camera" class="inline-flex flex-shrink-0 -mt-1 ltr:mr-1 rtl:ml-1 size-5" />
                                            Browse Photo
                                        </label>
                                        <input type="file" id="fileInput" accept="image/*" class="hidden" @change="handleImageChange" />
                                        <div class="mt-1 text-xs text-center text-gray-500 dark:text-dark-500">Click to
                                            add profile picture</div>
                                        <p class="mt-1 text-xs text-red-500" v-if="errors.imageForm">{{ errors.imageForm
                                            }}</p>
                                    </div>

                                    <div class="mb-5">
                                        <label for="firstName" class="form-label">Firstname</label>
                                        <input type="text" id="firstName" class="form-input" v-model="form.firstName" placeholder="Enter your firstName..." @input="clearError('firstName')" />
                                        <p class="mt-1 text-xs text-red-500" v-if="errors.firstName">{{ errors.firstName
                                            }}</p>
                                    </div>

                                    <div class="mb-5">
                                        <label for="email" class="form-label">Email</label>
                                        <input type="email" id="email" class="form-input" v-model="form.email" placeholder="Enter your email address..." @input="clearError('email')" />
                                        <p class="mt-1 text-xs text-red-500" v-if="errors.email">{{ errors.email }}</p>
                                    </div>
                                </div>

                                <!-- Step 2: Password -->
                                <div v-if="step === 2">
                                    <div class="mb-5">
                                        <label for="password" class="font-bold form-label">Set up password</label>
                                        <div class="mt-2 mb-4 text-gray-500 dark:text-dark-500">
                                            Please create a secure password including the following criteria below.
                                            <ul class="mt-2 text-sm list-disc list-inside">
                                                <li>lowercase letters</li>
                                                <li>numbers</li>
                                                <li>capital letters</li>
                                                <li>special characters</li>
                                            </ul>
                                        </div>

                                        <div class="relative">
                                            <input :type="showPassword ? 'text' : 'password'" id="password" v-model="form.passwords" @input="checkPasswordStrength" class="form-input" placeholder="Your strong password..." @change="clearError('passwords')" />
                                            <p class="mt-1 text-xs text-red-500" v-if="errors.passwords">{{
                                                errors.passwords }}</p>
                                            <div class="absolute top-0 bottom-0 px-3 py-2 cursor-pointer ltr:right-0 rtl:left-0" @click="togglePassword">
                                                <component :is="showPassword ? Eye : EyeOff" class="text-gray-400">
                                                </component>
                                            </div>
                                        </div>

                                        <div class="flex items-center h-3 mt-4">
                                            <div class="flex justify-between w-2/3 h-2">
                                                <div :class="{ 'bg-red-400': passwordStrengthText === 'Too weak' || passwordStrengthText === 'Could be stronger' || passwordStrengthText === 'Strong password' }" class="w-1/3 h-2 bg-gray-300 rounded-full ltr:mr-1 rtl:ml-1 ">
                                                </div>
                                                <div :class="{ 'bg-orange-400': passwordStrengthText === 'Could be stronger' || passwordStrengthText === 'Strong password' }" class="w-1/3 h-2 bg-gray-300 rounded-full ltr:mr-1 rtl:ml-1 ">
                                                </div>
                                                <div :class="{ 'bg-green-400': passwordStrengthText === 'Strong password' }" class="w-1/3 h-2 bg-gray-300 rounded-full ltr:mr-1 rtl:ml-1 ">
                                                </div>
                                            </div>
                                            <div class="text-sm font-medium text-gray-500">{{
                                                passwordStrengthText }}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Step 3: Personal Details -->
                                <div v-if="step === 3">
                                    <div class="mb-5">
                                        <label for="gender" class="block mb-2">Gender</label>
                                        <div class="flex gap-5">
                                            <div class="input-radio-group">
                                                <input type="radio" id="genderMale" v-model="form.gender" value="Male" class="input-radio input-radio-primary" @change="clearError('gender')" />
                                                <label for="genderMale" class="input-radio-label">Male</label>
                                            </div>
                                            <div class="input-radio-group">
                                                <input type="radio" id="genderFemale" v-model="form.gender" value="Female" class="input-radio input-radio-primary" @change="clearError('gender')" />
                                                <label for="genderFemale" class="input-radio-label">Female</label>
                                            </div>
                                        </div>
                                        <p class="mt-1 text-xs text-red-500" v-if="errors.gender">{{
                                            errors.gender }}
                                        </p>
                                    </div>

                                    <div class="mb-5">
                                        <label for="profession" class="block mb-2 text-sm">Profession</label>
                                        <input type="text" id="profession" class="form-input" v-model="form.profession" placeholder="eg. Web Developer" @input="clearError('profession')" />

                                        <p class="mt-1 text-xs text-red-500" v-if="errors.profession">{{
                                            errors.profession }}</p>
                                    </div>
                                </div>
                            </div>
                            <!-- /Step Content -->
                        </div>

                        <!-- Bottom Navigation -->
                        <div v-if="step !== 'complete'">
                            <div class="max-w-3xl">
                                <div class="flex justify-between">
                                    <div class="w-1/2">
                                        <button v-if="step > 1" @click="prevStep" class="btn btn-sub-gray">
                                            <MoveLeft class="mr-1 ltr:inline-block rtl:hidden size-4">
                                            </MoveLeft>
                                            <MoveRight class="ml-1 rtl:inline-block ltr:hidden size-4">
                                            </MoveRight>
                                            Previous
                                        </button>
                                    </div>
                                    <div class="w-1/2 text-right">
                                        <button v-if="step < 3" @click="validateStep(step)" class="btn btn-primary">
                                            Next
                                            <MoveRight class="ml-1 ltr:inline-block rtl:hidden size-4">
                                            </MoveRight>
                                            <MoveLeft class="mr-1 rtl:inline-block ltr:hidden size-4">
                                            </MoveLeft>
                                        </button>
                                        <button v-if="step === 3" @click="validateStep(step)" class="btn btn-green">
                                            Complete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /Bottom Navigation -->
                    </div>
                </div>
            </div>
        </div>
    </CardBody>
</template>