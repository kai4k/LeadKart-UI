<script setup lang="ts">
import { ref } from 'vue';
import { validateField, validateEmailField, form, errors, validateForm, validateConfirmPasswordField } from './form-validation';
import { Eye, EyeOff, Facebook } from 'lucide-vue-next';
const showPassword = ref(false);
const showConfirmPassword = ref(false);
</script>
<template>
    <div
        class="relative flex items-center justify-center min-h-screen py-12 from-sky-100 dark:from-sky-500/15 ltr:bg-gradient-to-l rtl:bg-gradient-to-r via-green-50 dark:via-green-500/10 to-pink-50 dark:to-pink-500/10">
        <div class="container">
            <div class="grid grid-cols-12">
                <div
                    class="col-span-12 mb-0 md:col-span-10 lg:col-span-6 xl:col-span-4 md:col-start-2 lg:col-start-4 xl:col-start-5 card">
                    <div class="md:p-10 card-body">
                        <div class="mb-5 text-center">
                            <router-link to="/">
                                <img src="@/assets/images/main-logo.png" alt="" class="h-8 mx-auto dark:hidden" />
                                <img src="@/assets/images/logo-white.png" alt=""
                                    class="hidden h-8 mx-auto dark:inline-block" />
                            </router-link>
                        </div>
                        <h4
                            class="mb-2 font-bold leading-relaxed text-center text-transparent drop-shadow-lg ltr:bg-gradient-to-r rtl:bg-gradient-to-l from-primary-500 vie-purple-500 to-pink-500 bg-clip-text">
                            Create a New Account
                        </h4>
                        <p class="mb-5 text-center text-gray-500 dark:text-dark-500">
                            Already have an account?
                            <router-link to="auth-signin-basic" class="font-medium link link-primary">Sign
                                In</router-link>
                        </p>
                        <form @submit.prevent="validateForm">
                            <div class="grid grid-cols-12 gap-4 mt-5">
                                <div class="col-span-12 md:col-span-6">
                                    <label for="firstNameInput" class="form-label">First Name</label>
                                    <input v-model="form.firstName"
                                        @input="validateField('firstName', 'First name is required.')" type="text"
                                        id="firstNameInput" class="w-full form-input"
                                        placeholder="Enter your first name" />
                                    <p v-if="errors.firstName" class="text-sm text-red-500">{{ errors.firstName }}</p>
                                </div>
                                <div class="col-span-12 md:col-span-6">
                                    <label for="lastNameInput" class="form-label">Last Name</label>
                                    <input v-model="form.lastName"
                                        @input="validateField('lastName', 'Last name is required.')" type="text"
                                        id="lastNameInput" class="w-full form-input"
                                        placeholder="Enter your last name" />
                                    <p v-if="errors.lastName" class="text-sm text-red-500">{{ errors.lastName }}</p>
                                </div>
                                <div class="col-span-12 md:col-span-6">
                                    <label for="userNameInput" class="form-label">Username</label>
                                    <input v-model="form.userName"
                                        @input="validateField('userName', 'Username is required.')" type="text"
                                        id="userNameInput" class="w-full form-input"
                                        placeholder="Enter your username" />
                                    <p v-if="errors.userName" class="text-sm text-red-500">{{ errors.userName }}</p>
                                </div>
                                <div class="col-span-12 md:col-span-6">
                                    <label for="emailInput" class="form-label">Email</label>
                                    <input v-model="form.email" @input="validateEmailField" type="" id="emailInput"
                                        class="w-full form-input" placeholder="Enter your email" />
                                    <p v-if="errors.email" class="text-sm text-red-500">{{ errors.email }}</p>
                                </div>
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
                                <div class="col-span-12">
                                    <label for="confirmPasswordInput" class="form-label">Confirm Password</label>
                                    <div class="relative">

                                        <input v-model="form.confirmPassword" @input="validateConfirmPasswordField"
                                            :type="showConfirmPassword ? 'text' : 'password'" id="confirmPasswordInput"
                                            class="w-full form-input" placeholder="Confirm your password" />
                                        <button type="button" @click="showConfirmPassword = !showConfirmPassword"
                                            class="absolute inset-y-0 flex items-center text-gray-500 ltr:right-3 rtl:left-3 focus:outline-none">
                                            <Eye v-if="showConfirmPassword" class="size-5"></Eye>
                                            <EyeOff v-else class="size-5"></EyeOff>
                                        </button>
                                    </div>
                                    <p v-if="errors.confirmPassword" class="text-sm text-red-500">{{
                                        errors.confirmPassword }}</p>
                                </div>
                                <div class="col-span-12">
                                    <div class="items-start input-check-group grow">
                                        <input v-model="form.terms"
                                            @change="validateField('terms', 'You must agree to the terms and conditions.')"
                                            type="checkbox" id="terms" class=" input-check shrink-0" />
                                        <label for="terms" class="leading-normal input-check-label">
                                            By creating an account, you agree to all of our terms condition & policies.
                                        </label>
                                    </div>
                                    <p v-if="errors.terms" class="text-sm text-red-500">{{ errors.terms }}</p>
                                </div>
                                <div class="col-span-12">
                                    <button type="submit" class="w-full btn btn-primary">Sign Up</button>
                                </div>
                            </div>
                        </form>
                        <div
                            class="relative my-5 text-center text-gray-500 dark:text-dark-500 before:absolute before:border-gray-200 dark:before:border-dark-800 before:border-dashed before:w-full ltr:before:left-0 rtl:before:right-0 before:top-2.5 before:border-b">
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
</template>