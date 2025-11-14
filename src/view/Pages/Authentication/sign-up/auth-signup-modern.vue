<script setup lang="ts">
import { ref } from 'vue';
import { validateField, validateEmailField, form, errors, validateForm, validateConfirmPasswordField } from './form-validation';
import { Eye, EyeOff, Facebook } from 'lucide-vue-next';
const showPassword = ref(false);
const showConfirmPassword = ref(false);
</script>
<template>
    <div class="relative flex items-center justify-center min-h-screen py-12 bg-center bg-cover bg-[url('../images/others/auth.jpg')]">
        <div class="absolute inset-0 bg-gray-950/50"></div>
        <div class="container relative">
            <div class="grid grid-cols-12">
                <div
                    class="col-span-12 mb-0 border-none shadow-none md:col-span-10 lg:col-span-6 xl:col-span-4 md:col-start-2 lg:col-start-4 xl:col-start-5 card bg-white/10 backdrop-blur-md">
                    <div class="md:p-10 card-body">
                        <div class="mb-5 text-center">
                            <router-link to="#!"><img src="@/assets/images/logo-white.png" alt=""
                                    class="h-8 mx-auto"></router-link>
                        </div>
                        <h4 class="mb-2 leading-relaxed text-center text-white">Create a New Account</h4>
                        <p class="mb-5 text-center text-white/75">
                            Already have an account?
                            <router-link to="auth-signin-modern" class="font-medium text-white">Sign In</router-link>
                        </p>
                        <form @submit.prevent="validateForm">
                            <div class="grid grid-cols-12 gap-4 mt-5">
                                <!-- First Name -->
                                <div class="col-span-12 md:col-span-6">
                                    <label for="firstNameInput" class="form-label text-white/75">First Name</label>
                                    <input type="text" id="firstNameInput"
                                        class="text-white border-none form-input bg-white/10 placeholder:text-white/75"
                                        placeholder="Enter your first name" v-model="form.firstName"
                                        @input="validateField('firstName', 'First name is required.')" />
                                    <p v-if="errors.firstName" class="text-sm text-red-500">{{ errors.firstName }}</p>
                                </div>

                                <!-- Last Name -->
                                <div class="col-span-12 md:col-span-6">
                                    <label for="lastNameInput" class="form-label text-white/75">Last Name</label>
                                    <input type="text" id="lastNameInput"
                                        class="text-white border-none form-input bg-white/10 placeholder:text-white/75"
                                        placeholder="Enter your last name" v-model="form.lastName"
                                        @input="validateField('lastName', 'Last name is required.')" />
                                    <p v-if="errors.lastName" class="text-sm text-red-500">{{ errors.lastName }}</p>
                                </div>

                                <!-- Username -->
                                <div class="col-span-12 md:col-span-6">
                                    <label for="userNameInput" class="form-label text-white/75">Username</label>
                                    <input type="text" id="userNameInput"
                                        class="text-white border-none form-input bg-white/10 placeholder:text-white/75"
                                        placeholder="Enter your username" v-model="form.userName"
                                        @input="validateField('userName', 'User name is required.')" />
                                    <p v-if="errors.userName" class="text-sm text-red-500">{{ errors.userName }}</p>
                                </div>

                                <!-- Email -->
                                <div class="col-span-12 md:col-span-6">
                                    <label for="emailInput" class="form-label text-white/75">Email</label>
                                    <input type="email" id="emailInput"
                                        class="text-white border-none form-input bg-white/10 placeholder:text-white/75"
                                        placeholder="Enter your email" v-model="form.email"
                                        @input="validateEmailField" />
                                    <p v-if="errors.email" class="text-sm text-red-500">{{ errors.email }}</p>
                                </div>

                                <!-- Password -->
                                <div class="col-span-12">
                                    <label for="passwordInput" class="form-label text-white/75">Password</label>
                                    <div class="relative">
                                        <input :type="showPassword ? 'text' : 'password'" id="passwordInput"
                                            class="text-white border-none ltr:pr-8 rtl:pl-8 form-input bg-white/10 placeholder:text-white/75"
                                            placeholder="Enter your password" v-model="form.password"
                                            @input="validateField('password', 'Password is required.')" />
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
                                    <label for="confirmPasswordInput" class="form-label text-white/75">Confirm
                                        Password</label>
                                    <div class="relative">
                                        <input :type="showConfirmPassword ? 'text' : 'password'"
                                            id="confirmPasswordInput"
                                            class="text-white border-none ltr:pr-8 rtl:pl-8 form-input bg-white/10 placeholder:text-white/75"
                                            placeholder="Confirm your password" v-model="form.confirmPassword"
                                            @input="validateConfirmPasswordField" />
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
                                    <div class="items-start input-check-group grow">
                                        <input id="checkboxBasic1" class="border-0 input-check bg-white/10 shrink-0"
                                            type="checkbox" v-model="form.terms"
                                            @change="validateField('terms', 'You must agree to the terms and conditions.')" />
                                        <label for="checkboxBasic1" class="input-check-label text-white/75">
                                            By creating an account, you agree to all of our terms condition & policies.
                                        </label>
                                    </div>
                                    <p v-if="errors.terms" class="text-sm text-red-500">{{ errors.terms }}</p>
                                </div>

                                <!-- Submit Button -->
                                <div class="col-span-12">
                                    <button type="submit" class="w-full btn btn-primary">Sign Up</button>
                                </div>
                            </div>
                        </form>
                        <div class="relative my-5 text-center text-white/75">
                            <p>OR</p>
                        </div>

                        <!-- Social Sign In -->
                        <div class="space-y-2">
                            <button type="button"
                                class="w-full border-white/10 text-white/75 btn hover:bg-white/10 hover:text-white">
                                <img src="@/assets/images/others/google.png" alt=""
                                    class="inline-block h-4 ltr:mr-1 rtl:ml-1">
                                Sign In Via Google
                            </button>
                            <button type="button"
                                class="w-full border-white/10 text-white/75 btn hover:bg-white/10 hover:text-white">
                                <Facebook class="inline-block ltr:mr-1 rtl:ml-1 size-4 text-primary-500"></Facebook>
                                Sign In Via Facebook
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>