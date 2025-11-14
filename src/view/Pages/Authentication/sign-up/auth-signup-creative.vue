<script setup lang="ts">
import { ref } from 'vue';
import { validateField, validateEmailField, form, errors, validateForm, validateConfirmPasswordField } from './form-validation';
import { Eye, EyeOff, Facebook } from 'lucide-vue-next';
const showPassword = ref(false);
const showConfirmPassword = ref(false);
</script>
<template>
    <div class="relative">
        <div class="grid grid-cols-12">
            <!-- Left Section -->
            <div
                class="relative col-span-12 py-8 overflow-hidden bg-gray-100 dark:bg-dark-850 lg:min-h-screen lg:col-span-6 md:p-9 xl:p-12">
                <div class="absolute bottom-0 w-32 -rotate-45 -top-64 -right-8 bg-gray-200/20 dark:bg-dark-800/20">
                </div>
                <div class="p-4">
                    <router-link to="/">
                        <img src="@/assets/images/main-logo.png" alt="Logo" class="h-8 dark:hidden">
                        <img src="@/assets/images/logo-white.png" alt="Logo" class="hidden h-8 dark:inline-block">
                    </router-link>
                    <h1
                        class="max-w-lg mt-8 text-2xl font-normal leading-tight capitalize md:leading-tight md:text-4xl">
                        The most straightforward way to manage your projects
                    </h1>
                    <img src="@/assets/images/others/auth-creative.png" alt="Creative"
                        class="mt-9 xl:mt-0 relative xl:absolute xl:scale-110 rounded-lg shadow-lg xl:top-[315px] ltr:xl:left-[115px] rtl:xl:right-[115px]">
                </div>
            </div>

            <!-- Right Section -->
            <div class="flex items-center col-span-12 lg:min-h-screen lg:col-span-6 py-9 md:py-12">
                <div class="grid w-full grid-cols-12">
                    <div class="col-span-12 mx-4 mb-0 2xl:col-span-8 2xl:col-start-3 md:mx-12 card">
                        <div class="md:p-10 card-body">
                            <h4
                                class="mb-2 font-bold leading-relaxed text-center text-transparent drop-shadow-lg ltr:bg-gradient-to-r rtl:bg-gradient-to-l from-primary-500 to-pink-500 bg-clip-text">
                                Create a New Account
                            </h4>
                            <p class="mb-5 text-center text-gray-500 dark:text-dark-500">
                                Already have an account?
                                <router-link to="auth-signin-creative" class="font-medium link link-primary">Sign
                                    In</router-link>
                            </p>
                            <form @submit.prevent="validateForm" class="space-y-4">
                                <div class="grid grid-cols-12 gap-4 mt-5">
                                    <!-- First Name -->
                                    <div class="col-span-12 md:col-span-6">
                                        <label for="firstNameInput" class="form-label">First Name</label>
                                        <input v-model="form.firstName"
                                            @input="validateField('firstName', 'First name is required.')" type="text"
                                            id="firstNameInput" class="w-full form-input"
                                            placeholder="Enter your first name" />
                                        <p v-if="errors.firstName" class="text-sm text-red-500">{{ errors.firstName }}
                                        </p>
                                    </div>

                                    <!-- Last Name -->
                                    <div class="col-span-12 md:col-span-6">
                                        <label for="lastNameInput" class="form-label">Last Name</label>
                                        <input v-model="form.lastName"
                                            @input="validateField('lastName', 'Last name is required.')" type="text"
                                            id="lastNameInput" class="w-full form-input"
                                            placeholder="Enter your last name" />
                                        <p v-if="errors.lastName" class="text-sm text-red-500">{{ errors.lastName }}</p>
                                    </div>

                                    <!-- Username -->
                                    <div class="col-span-12 md:col-span-6">
                                        <label for="userNameInput" class="form-label">Username</label>
                                        <input v-model="form.userName"
                                            @input="validateField('userName', 'Username is required.')" type="text"
                                            id="userNameInput" class="w-full form-input"
                                            placeholder="Enter your username" />
                                        <p v-if="errors.userName" class="text-sm text-red-500">{{ errors.userName }}</p>
                                    </div>

                                    <!-- Email -->
                                    <div class="col-span-12 md:col-span-6">
                                        <label for="emailInput" class="form-label">Email</label>
                                        <input v-model="form.email" @input="validateEmailField" type="email"
                                            id="emailInput" class="w-full form-input" placeholder="Enter your email" />
                                        <p v-if="errors.email" class="text-sm text-red-500">{{ errors.email }}</p>
                                    </div>

                                    <!-- Password -->
                                    <div class="col-span-12">
                                        <label for="passwordInput" class="form-label">Password</label>
                                        <div class="relative">
                                            <input v-model="form.password"
                                                @input="validateField('password', 'Password is required.')"
                                                :type="showPassword ? 'text' : 'password'" id="passwordInput"
                                                class="w-full form-input" placeholder="Enter your password" />
                                            <button type="button" @click="showPassword = !showPassword"
                                                class="absolute inset-y-0 flex items-center text-gray-500 ltr:right-3 rtl:left-3 focus:outline-none">
                                                <Eye v-if="showPassword" class="size-5"></Eye>
                                                <EyeOff v-else class="size-5"></EyeOff>
                                            </button>
                                        </div>
                                        <p v-if="errors.password" class="text-sm text-red-500">{{ errors.password }}</p>
                                    </div>

                                    <!-- Confirm Password -->
                                    <div class="col-span-12">
                                        <label for="confirmPasswordInput" class="form-label">Confirm Password</label>
                                        <div class="relative">
                                            <input v-model="form.confirmPassword" @input="validateConfirmPasswordField"
                                                :type="showConfirmPassword ? 'text' : 'password'"
                                                id="confirmPasswordInput" class="w-full form-input"
                                                placeholder="Confirm your password" />
                                            <button type="button" @click="showConfirmPassword = !showConfirmPassword"
                                                class="absolute inset-y-0 flex items-center text-gray-500 ltr:right-3 rtl:left-3 focus:outline-none">
                                                <Eye v-if="showConfirmPassword" class="size-5"></Eye>
                                                <EyeOff v-else class="size-5"></EyeOff>
                                            </button>
                                        </div>
                                        <p v-if="errors.confirmPassword" class="text-sm text-red-500">{{
                                            errors.confirmPassword }}</p>
                                    </div>

                                    <!-- Terms and Conditions -->
                                    <div class="col-span-12">
                                        <div class="flex items-start">
                                            <input v-model="form.terms"
                                                @change="validateField('terms', 'You must agree to the terms and conditions.')"
                                                id="checkboxBasic1" type="checkbox"
                                                class="input-check input-check-primary shrink-0" />
                                            <label for="checkboxBasic1" class="ml-2 text-gray-700">By creating an
                                                account, you agree to all of our terms condition & policies.</label>
                                        </div>
                                        <p v-if="errors.terms" class="text-sm text-red-500">{{ errors.terms }}</p>
                                    </div>

                                    <!-- Submit Button -->
                                    <div class="col-span-12">
                                        <button type="submit" class="w-full btn btn-primary">Sign Up</button>
                                    </div>
                                </div>
                            </form>
                            <div
                                class="relative my-5 text-center text-gray-500 before:absolute dark:text-dark-500 before:border-gray-200 dark:before:border-dark-800 before:border-dashed before:w-full ltr:before:left-0 rtl:before:right-0 before:top-2.5 before:border-b">
                                <p class="relative inline-block px-2 bg-white dark:bg-dark-900">OR</p>
                            </div>
                            <div class="space-y-2">
                                <button type="button"
                                    class="w-full border-gray-200 dark:border-dark-800 btn hover:bg-gray-50 dark:hover:bg-dark-850 hover:text-primary-500"><img
                                        src="@/assets/images/others/google.png" alt=""
                                        class="inline-block h-4 ltr:mr-1 rtl:ml-1"> SignUp Vie Google</button>
                                <button type="button"
                                    class="w-full border-gray-200 dark:border-dark-800 btn hover:bg-gray-50 dark:hover:bg-dark-850 hover:text-primary-500">
                                    <Facebook class="inline-block ltr:mr-1 rtl:ml-1 size-4 text-primary-500"></Facebook>
                                    SignUp Vie
                                    Facebook
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>